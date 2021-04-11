import { lazy } from 'react'

const Top = lazy(() => import('src/page/Top'))

export const routes = [
  {
    path: '/',
    title: 'TOP',
    component: Top,
    showBtmNav: true,
  },
]
