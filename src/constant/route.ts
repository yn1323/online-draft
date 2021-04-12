import Home from 'src/page/Home'
import New from 'src/page/New'
import Draft from 'src/page/Draft'
import Entry from 'src/page/Entry'

export const routes = [
  {
    path: '/',
    title: 'Home',
    component: Home,
  },
  {
    path: '/new',
    title: 'New',
    component: New,
  },
  {
    path: '/draft/:draftId',
    title: 'Draft',
    component: Draft,
  },
  {
    path: '/entry/:draftId',
    title: 'Entry',
    component: Entry,
  },
]
