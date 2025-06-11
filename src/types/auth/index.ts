/**
 * 認証関連型定義
 */

import type { BaseEntity, ID, Timestamp } from '../common/base';

// 認証状態
export type AuthStatus =
  | 'loading'
  | 'authenticated'
  | 'unauthenticated'
  | 'error';

// ユーザー
export interface AuthUser {
  uid: ID;
  displayName?: string;
  email?: string;
  photoURL?: string;
  isAnonymous: boolean;
  emailVerified?: boolean;
  lastLoginAt?: Timestamp;
}

// セッション
export interface UserSession {
  user: AuthUser;
  accessToken?: string;
  refreshToken?: string;
  expiresAt?: Timestamp;
}

// SessionStorage管理用のDraftUser（Legacy互換）
export interface SessionUser {
  id: ID;                 // DraftUserのFirestore ID
  groupId: ID;           // 所属グループID
  name: string;          // ユーザー名
  avatar: string;        // アバター画像パス（1.png〜18.png）
  createdAt: Timestamp;  // 作成日時
}

// プロフィール
export interface UserProfile {
  userId: ID;
  userName: string;
  avatar: string;
  bio?: string;
  preferences: UserPreferences;
  stats: UserStats;
}

export interface UserPreferences {
  theme: 'light' | 'dark' | 'system';
  language: 'ja' | 'en';
  notifications: {
    roundStart: boolean;
    roundEnd: boolean;
    messages: boolean;
    email: boolean;
    push: boolean;
  };
  privacy: {
    showOnlineStatus: boolean;
    allowDirectMessages: boolean;
  };
}

export interface UserStats {
  totalGames: number;
  totalWins: number;
  winRate: number;
  totalSelections: number;
  averageRoundTime: number;
  favoriteCategories: string[];
  lastPlayedAt?: Timestamp;
}

// 認証フォーム
export interface LoginFormData {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
  userName: string;
  avatar: string;
  acceptTerms: boolean;
}

export interface PasswordResetFormData {
  email: string;
}

export interface ProfileUpdateFormData {
  userName?: string;
  avatar?: string;
  bio?: string;
  preferences?: Partial<UserPreferences>;
}

// 認証エラー
export interface AuthError {
  code:
    | 'auth/user-not-found'
    | 'auth/wrong-password'
    | 'auth/email-already-in-use'
    | 'auth/weak-password'
    | 'auth/too-many-requests'
    | 'auth/network-request-failed'
    | 'auth/invalid-email'
    | string;
  message: string;
  field?: string;
}

// 認証イベント
export interface AuthEvent {
  type: 'login' | 'logout' | 'register' | 'profile_update' | 'session_expired';
  userId?: ID;
  timestamp: Timestamp;
  metadata?: {
    provider?: 'email' | 'anonymous' | 'google';
    device?: string;
    ip?: string;
  };
}

// 認証コンテキスト
export interface AuthContextValue {
  user: AuthUser | null;
  profile: UserProfile | null;
  status: AuthStatus;
  error: AuthError | null;

  // アクション
  login: (credentials: LoginFormData) => Promise<void>;
  loginAnonymously: () => Promise<void>;
  register: (data: RegisterFormData) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateProfile: (data: ProfileUpdateFormData) => Promise<void>;
  refreshSession: () => Promise<void>;
}

// 認証ガード
export interface AuthGuardConfig {
  requireAuth?: boolean;
  requireVerification?: boolean;
  allowAnonymous?: boolean;
  redirectTo?: string;
  fallback?: React.ComponentType;
}

// API Request/Response
export interface LoginRequest {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface LoginResponse {
  user: AuthUser;
  session: UserSession;
  profile: UserProfile;
}

export interface RegisterRequest {
  email: string;
  password: string;
  userName: string;
  avatar: string;
}

export interface RegisterResponse {
  user: AuthUser;
  profile: UserProfile;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}

export interface RefreshTokenResponse {
  accessToken: string;
  expiresAt: Timestamp;
}
