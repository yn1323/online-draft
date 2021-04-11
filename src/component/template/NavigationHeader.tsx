import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, IconButton } from '@material-ui/core'
import { useLocation } from 'react-router-dom'

import { Menu as MenuIcon, Edit, DeleteForever } from '@material-ui/icons'
import { useDialog, useDrawer } from 'src/helper'

const useStyles = makeStyles(theme =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    sectionIcon: {
      display: 'flex',
    },
  })
)

const NavigationHeader = () => {
  const { pathname } = useLocation()
  const classes = useStyles()
  const history = useHistory()
  const { setIsDrawerOpen } = useDrawer()

  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={() => setIsDrawerOpen()}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.grow} />
        <div className={classes.sectionIcon}>
          <IconButton color="inherit">
            <Edit />
          </IconButton>

          <IconButton color="inherit">
            <DeleteForever />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default NavigationHeader
