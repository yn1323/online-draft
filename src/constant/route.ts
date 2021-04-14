import Home from 'src/page/Home'
import Draft from 'src/page/Draft'
import Entry from 'src/page/Entry'

export const routes = [
  {
    path: '/',
    title: 'Home',
    component: Home,
    reqAuth: false,
  },
  {
    path: '/draft/:draftId',
    title: 'Draft',
    component: Draft,
    reqAuth: true,
  },
  {
    path: '/entry/:draftId',
    title: 'Entry',
    component: Entry,
    reqAuth: true,
  },
]
