// デバッグ用
export const END_POINT = process.env.NODE_ENV === 'production' ? '' : ''

export const isProduction = process.env.NODE_ENV === 'production'

export const lang = process.env.REACT_APP_LANG || 'ja'

export const LS_USER_ID = 'userId'

export const APP_NAME = 'onlinedraft'

export const DATE_FORMAT: { [key: string]: string } = {
  ja: 'YYYY年M月D日',
  en: 'D-M-YYYY',
}
export const DATE_FORMAT_SHORT: { [key: string]: string } = {
  ja: 'M/D',
  en: 'D/M',
}
