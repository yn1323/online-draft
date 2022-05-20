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

export const assetImages = [
  { index: '1', path: '/img/1.png' },
  { index: '2', path: '/img/2.png' },
  { index: '3', path: '/img/3.png' },
  { index: '4', path: '/img/4.png' },
  { index: '5', path: '/img/5.png' },
  { index: '6', path: '/img/6.png' },
  { index: '7', path: '/img/7.png' },
  { index: '8', path: '/img/8.png' },
  { index: '9', path: '/img/9.png' },
  { index: '10', path: '/img/10.png' },
  { index: '11', path: '/img/11.png' },
  { index: '12', path: '/img/12.png' },
  { index: '13', path: '/img/13.png' },
  { index: '14', path: '/img/14.png' },
  { index: '15', path: '/img/15.png' },
  { index: '16', path: '/img/16.png' },
  { index: '17', path: '/img/17.png' },
  { index: '18', path: '/img/18.png' },
  { index: '99', path: '/img/99.png' },
] as const

export const SAMPLE_HORSES = [
  'アイリスクォーツ',
  'トゥースパークル',
  'サブルドール',
  'ルーレットスピナー',
  'アーズローヴァー',
  'ベレヌス',
  'フォアランナー',
  'グランディア',
  'レベランス',
  'フルヴォート',
  'ヴァルキュリア',
  'ヴェラアズール',
  'オーソクレース',
  'クラヴェル',
  'パラレルヴィジョン',
  'キングサーガ',
  'ブッシュフェルト',
  'コントラチェック',
]

export const SLOT_TIME = !isProduction ? 100 : 3000
export const DOKIDOKI_TIME = !isProduction ? 100 : 7000
