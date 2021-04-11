import React from 'react'
import { useSelector } from 'react-redux'
import { Snackbar, makeStyles, Fade } from '@material-ui/core'
import { Alert } from '@material-ui/lab'

import { State } from 'Store'
import { useSnackbar } from 'src/helper'

const SnackbarComponent = () => {
  const { component } = useSelector((state: State) => state)
  const { snackbar } = component
  const { hideSnackbar } = useSnackbar()

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={snackbar.isOpen}
      TransitionComponent={Fade}
      autoHideDuration={2000}
      onClose={hideSnackbar}
    >
      <Alert severity={snackbar.type}>{snackbar.msg}</Alert>
    </Snackbar>
  )
}

export default SnackbarComponent
