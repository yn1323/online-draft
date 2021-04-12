declare module 'Common' {}

declare module 'Store' {
  export interface State {
    component: Component
  }
  export interface Component {
    nav: Nav
    toast: Toast
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
}
