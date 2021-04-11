import React from 'react'
import { useSelector } from 'react-redux'
import { Backdrop, CircularProgress, makeStyles } from '@material-ui/core'
import { State } from 'Store'

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}))

const BackDropComponent = () => {
  const classes = useStyles()
  const { component } = useSelector((state: State) => state)
  const { loading } = component

  return (
    <Backdrop className={classes.backdrop} open={loading}>
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}

export default BackDropComponent
