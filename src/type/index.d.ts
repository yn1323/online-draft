declare module 'Common' {}

declare module 'Store' {
  export interface State {
    component: Component
    draft: Draft
    chat: Chat
    user: User
  }
  export interface Component {
    nav: Nav
    toast: Toast
    loading: Loading
  }

  interface Nav {
    show: boolean
    title: string
    component: any
  }
  interface Toast {
    show: boolean
    message: string
    duration?: number
    position?: 'top' | 'bottom' | 'middle'
    color?:
      | 'primary'
      | 'secondary'
      | 'tertiary'
      | 'success'
      | 'warning'
      | 'danger'
      | 'light'
      | 'medium'
      | dark
  }
  interface Loading {
    show: boolean
  }
  interface Draft {
    groupId: string
    historyData: HistoryData[]
    onTable: OnTable[]
  }
  interface Chat {
    groupId: string
    context: { date: any; userId: string; text: string }[]
  }
  interface HistoryData {
    userId: string
    selected: string[]
  }
  interface OnTable {
    userId: string
    turn: number
    isDecided: boolean
    enteredName: string
  }
  interface User {
    groupId: string
    users: Users[]
  }
  interface Users {
    userId: string
    isOnlin: boolean
  }
}
