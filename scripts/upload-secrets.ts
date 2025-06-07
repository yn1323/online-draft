import { Octokit } from '@octokit/rest';
import dotenv from 'dotenv';

// .envファイルを読み込み
dotenv.config();

interface ClaudeCredentials {
  accessToken: string;
  refreshToken: string;
  expiresAt: number;
}

interface ClaudeCredentialsWrapper {
  claudeAiOauth: ClaudeCredentials;
}

interface SecretMapping {
  [key: string]: string;
}

const SECRET_MAPPINGS: SecretMapping = {
  accessToken: 'CLAUDE_ACCESS_TOKEN',
  refreshToken: 'CLAUDE_REFRESH_TOKEN',
  expiresAt: 'CLAUDE_EXPIRES_AT',
};

async function uploadSecrets() {
  try {
    // 1. .envからCLAUDE_CREDENTIALSを取得
    const claudeCredentialsJson = process.env.CLAUDE_CREDENTIALS;
    if (!claudeCredentialsJson) {
      throw new Error('CLAUDE_CREDENTIALS環境変数が設定されていません');
    }

    // 2. JSONパース
    const credentialsWrapper: ClaudeCredentialsWrapper = JSON.parse(
      claudeCredentialsJson,
    );
    const credentials = credentialsWrapper.claudeAiOauth;

    // 3. 有効期限の表示
    if (credentials.expiresAt) {
      const expiresAt = new Date(credentials.expiresAt);
      const now = new Date();
      const isExpired = expiresAt < now;
      const timeRemaining = expiresAt.getTime() - now.getTime();
      const hoursRemaining = Math.floor(timeRemaining / (1000 * 60 * 60));
      const daysRemaining = Math.floor(hoursRemaining / 24);

      console.log(
        `📅 Claude認証情報の有効期限: ${expiresAt.toLocaleString('ja-JP')}`,
      );
      if (isExpired) {
        console.warn('⚠️  認証情報が期限切れです！');
      } else if (daysRemaining > 0) {
        console.log(
          `⏰ 残り時間: 約${daysRemaining}日${hoursRemaining % 24}時間`,
        );
      } else {
        console.log(`⏰ 残り時間: 約${hoursRemaining}時間`);
      }
    } else {
      console.warn('⚠️  expiresAt が見つかりません');
    }

    // 3. GitHub APIの初期化
    const githubToken = process.env.GITHUB_TOKEN;
    if (!githubToken) {
      throw new Error('GITHUB_TOKEN環境変数が設定されていません');
    }

    const octokit = new Octokit({
      auth: githubToken,
    });

    // 4. リポジトリ情報の取得
    const owner = process.env.GITHUB_REPOSITORY_OWNER || 'yn1323';
    const repo = process.env.GITHUB_REPOSITORY_NAME || 'OnlineDraft';

    console.log(`🚀 GitHub Secrets アップロード開始: ${owner}/${repo}`);

    // 5. 各シークレットをアップロード
    for (const [credKey, secretName] of Object.entries(SECRET_MAPPINGS)) {
      const value = credentials[credKey as keyof ClaudeCredentials];
      if (!value) {
        console.warn(`⚠️  ${credKey} が見つかりません、スキップします`);
        continue;
      }

      // 値を文字列に変換
      const stringValue = typeof value === 'string' ? value : String(value);

      try {
        // GitHub公開キーを取得してシークレットをアップロード
        const { data: publicKey } = await octokit.rest.actions.getRepoPublicKey(
          {
            owner,
            repo,
          },
        );

        await octokit.rest.actions.createOrUpdateRepoSecret({
          owner,
          repo,
          secret_name: secretName,
          encrypted_value: await encryptSecret(stringValue, publicKey.key),
          key_id: publicKey.key_id,
        });

        console.log(`✅ ${secretName} をアップロードしました`);
      } catch (error) {
        console.error(`❌ ${secretName} のアップロードに失敗:`, error);
      }
    }

    console.log('🎉 GitHub Secrets アップロード完了！');
  } catch (error) {
    console.error('❌ エラーが発生しました:', error);
    process.exit(1);
  }
}

async function encryptSecret(
  value: string,
  publicKey: string,
): Promise<string> {
  // tweetnacl-sealedbox-jsを使って暗号化
  const sealedbox = await import('tweetnacl-sealedbox-js');
  const encoder = new TextEncoder();
  const messageBytes = encoder.encode(value);
  const keyBytes = Buffer.from(publicKey, 'base64');

  const encryptedBytes = sealedbox.seal(messageBytes, keyBytes);
  return Buffer.from(encryptedBytes).toString('base64');
}

// スクリプト実行
if (require.main === module) {
  uploadSecrets();
}
