import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { makeStyles } from '@material-ui/core'
import { callbackify } from 'util'

const ITEM_HEIGHT = 48

const useStyles = makeStyles(theme => ({
  icon: {
    color: theme.palette.primary.contrastText,
  },
}))

interface Props {
  options: {
    text: string
    callback: (k: any) => any
  }[]
}

const DotMenu = ({ options }: Props) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const clickOption = (callback: any) => {
    handleClose()
    callback()
  }

  return (
    <div>
      <IconButton
        aria-haspopup="true"
        onClick={handleClick}
        size="small"
        className={classes.icon}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map(({ text, callback }, i) => (
          <MenuItem key={i} onClick={() => clickOption(callback)}>
            {text}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

export default DotMenu
