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
    modal: Modal
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

  interface Modal {
    show: boolean
    title: string
    component: any
  }
  interface Draft {
    round: number
    selections: Selections[]
  }

  interface Selections {
    userId: string
    selection: { randomNumber: number; item: string }[]
  }
  interface Chat {
    context: Context[]
  }
  export interface Context {
    date: any
    groupId: string
    userId: string
    message: string
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
    groupName: string
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
  interface SubscribeUsersRequestPayload {
    groupId: string
  }
  interface SubscribeGroupRoundRequestPayload {
    groupId: string
  }
  interface SubscribeSelectionRequestPayload {
    userId: string
  }
  interface GetGroupNameRequestPayload {
    groupId: string
  }
  interface AddLogMessageRequestPayload {
    groupId: string
    userId: string
    message: string
  }
  interface SubscribeLogMessageRequestPayload {
    groupId: string
  }
}

declare module 'Response' {
  interface SubscribeUsersRequestResponse {
    avatar: string
    deleteFlg: boolean
    groupId: string
    id: string
    userName: string
  }
  interface SubscribeLogMessageRequestResponse {
    date: Date
    deleteFlg: boolean
    groupId: string
    userId: string
    message: string
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
