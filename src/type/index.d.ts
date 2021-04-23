declare module 'Common' {}

declare module 'Store' {
  export interface State {
    component: Component
    draft: Draft
    chat: Chat
    userInfo: UserInfo
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
    historyData: HistoryData[]
    onTable: OnTable[]
  }
  interface Chat {
    // groupId: string
    // userId: string
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
  interface UserInfo extends ApiLoading {
    groupId: string
    userId: string
    users: Users[]
  }
  export interface Users {
    userId: string
    // isOnline?: boolean
    userName: string
    avatar: string
  }

  interface ApiLoading {
    isLoading: boolean
    isSucceeded: boolean
  }
}

declare module 'RequestPayload' {
  interface CrateUserRequestPayload {
    groupId: string
    userId: string
    userName: string
    avatar: string
  }

  interface GetUsersRequestPayload {
    groupId: string
  }
}

declare module 'ResponsePayload' {
  interface GetUsersResponsePayload {
    payload: {
      userId: string
      userName: string
      avatar: string
    }[]
  }
}
