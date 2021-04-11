import React from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Divider,
  makeStyles,
  Grid,
} from '@material-ui/core'
import DotMenu from 'src/component/molecule/DotMenu'

import { useDialog } from 'src/helper'

const useStyles = makeStyles(theme => ({
  header: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}))

const DialogTemplate = () => {
  const classes = useStyles()
  const { isDialogOpen, title, menu, component, setIsDialogOpen } = useDialog()

  return (
    <Dialog
      open={isDialogOpen}
      keepMounted
      onClose={() => setIsDialogOpen(false)}
      fullWidth
    >
      {title && (
        <DialogTitle className={classes.header}>
          <Grid container justify="space-between">
            <Grid item>{title}</Grid>
            <Grid item>{!!menu.length && <DotMenu options={menu} />}</Grid>
          </Grid>
        </DialogTitle>
      )}
      {title && <Divider />}
      <DialogContent>{component}</DialogContent>
    </Dialog>
  )
}

export default DialogTemplate
