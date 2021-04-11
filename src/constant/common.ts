// デバッグ用
export const END_POINT = process.env.NODE_ENV === 'production' ? '' : ''

export const isProduction = process.env.NODE_ENV === 'production'

export const lang = process.env.REACT_APP_LANG || 'ja'

export const LS_USER_ID = 'userId'

export const APP_NAME = 'reacttemplate'

export const DATE_FORMAT = {
  ja: 'YYYY年M月D日',
  en: 'M-D-YYYY',
}

export const DEV_COLLECTION = 'yn1323test'
