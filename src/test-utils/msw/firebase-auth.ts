/**
 * Firebase Auth関連のMSWハンドラー
 */

import { http, HttpResponse } from 'msw';

export const firebaseAuthHandlers = [
  // 匿名認証のモック
  http.post('*/v1/accounts:signInAnonymously', () => {
    return HttpResponse.json({
      kind: 'identitytoolkit#SignInAnonymouslyResponse',
      localId: 'mock-anonymous-user-id',
      email: '',
      displayName: '',
      idToken: 'mock-id-token',
      refreshToken: 'mock-refresh-token',
      expiresIn: '3600',
      isNewUser: true,
      providerUserInfo: [],
    });
  }),

  // サインアップのモック（匿名認証で使用）
  http.post('*/accounts:signUp', () => {
    return HttpResponse.json({
      kind: 'identitytoolkit#SignupNewUserResponse',
      localId: 'mock-anonymous-user-id',
      email: '',
      displayName: '',
      idToken: 'mock-id-token',
      refreshToken: 'mock-refresh-token',
      expiresIn: '3600',
      isNewUser: true,
      providerUserInfo: [],
    });
  }),

  // ユーザー情報取得のモック
  http.post('*/accounts:lookup', () => {
    return HttpResponse.json({
      kind: 'identitytoolkit#GetAccountInfoResponse',
      users: [
        {
          localId: 'mock-anonymous-user-id',
          email: '',
          emailVerified: false,
          displayName: '',
          providerUserInfo: [],
          photoUrl: '',
          disabled: false,
          validSince: '1640995200',
          lastLoginAt: '1640995200000',
          createdAt: '1640995200000',
          lastRefreshAt: new Date().toISOString(),
        },
      ],
    });
  }),

  // トークン更新のモック
  http.post('*/v1/token', () => {
    return HttpResponse.json({
      access_token: 'mock-access-token',
      expires_in: '3600',
      token_type: 'Bearer',
      refresh_token: 'mock-refresh-token',
      id_token: 'mock-id-token',
      user_id: 'mock-anonymous-user-id',
      project_id: 'test-project',
    });
  }),
];
