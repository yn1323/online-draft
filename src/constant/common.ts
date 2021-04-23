import img1 from 'src/asset/img/1.png'
import img2 from 'src/asset/img/2.png'
import img3 from 'src/asset/img/3.png'
import img4 from 'src/asset/img/4.png'
import img5 from 'src/asset/img/5.png'
import img6 from 'src/asset/img/6.png'
import img7 from 'src/asset/img/7.png'
import img8 from 'src/asset/img/8.png'
import img9 from 'src/asset/img/9.png'
import img10 from 'src/asset/img/10.png'
import img11 from 'src/asset/img/11.png'
import img12 from 'src/asset/img/12.png'
import img13 from 'src/asset/img/13.png'
import img14 from 'src/asset/img/14.png'
import img15 from 'src/asset/img/15.png'
import img16 from 'src/asset/img/16.png'
import img17 from 'src/asset/img/17.png'
import img18 from 'src/asset/img/18.png'

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
  { index: '1', path: img1 },
  { index: '2', path: img2 },
  { index: '3', path: img3 },
  { index: '4', path: img4 },
  { index: '5', path: img5 },
  { index: '6', path: img6 },
  { index: '7', path: img7 },
  { index: '8', path: img8 },
  { index: '9', path: img9 },
  { index: '10', path: img10 },
  { index: '11', path: img11 },
  { index: '12', path: img12 },
  { index: '13', path: img13 },
  { index: '14', path: img14 },
  { index: '15', path: img15 },
  { index: '16', path: img16 },
  { index: '17', path: img17 },
  { index: '18', path: img18 },
]
