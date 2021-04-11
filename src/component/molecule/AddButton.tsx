import React from 'react'
import { useHistory } from 'react-router-dom'
import { Box, makeStyles, IconButton } from '@material-ui/core'
import { PlaylistAdd } from '@material-ui/icons'

import { useCommonStyles } from 'src/constant'

const useStyles = makeStyles(theme => ({
  button: {
    color: '#fff',
    background: theme.palette.secondary.main,
    '&:hover': {
      background: theme.palette.secondary.dark,
    },
  },
}))

const AddButton = () => {
  const classes = useStyles()
  const commonCl = useCommonStyles()
  const history = useHistory()

  return (
    <Box className={commonCl.center}>
      <IconButton
        className={classes.button}
        size="medium"
        onClick={() => history.push('/add')}
      >
        <PlaylistAdd />
      </IconButton>
    </Box>
  )
}

export default AddButton
