declare module 'Common' {}

declare module 'Store' {
  export interface State {
    sample: Sample
    component: Component
  }
  export interface Sample {
    id: string
  }
  export interface Component {
    isDrawerOpen: boolean
    isDialogOpen: boolean
    dialog: Dialog
    loading: boolean
    snackbar: Snackbar
  }
  interface Dialog {
    title: string
    component: any
    menu: DialogMenu[]
  }
  export interface DialogMenu {
    text: string
    callback: (k: any) => any
  }
  interface Snackbar {
    isOpen: boolean
    type: 'success' | 'error' | 'warning' | 'info'
    msg: string
  }
}
