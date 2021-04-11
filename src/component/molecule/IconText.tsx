import React from 'react'
import { Box, Grid, makeStyles, Typography } from '@material-ui/core'
import { useCommonStyles } from 'src/constant'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  textFieldGrid: {
    flexGrow: 1,
    overflow: 'hidden',
  },
  textField: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
})

interface Props {
  text: string
  icon: any
  variant?:
    | 'inherit'
    | 'button'
    | 'overline'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'srOnly'
}
const IconText = ({ text = '', icon, variant = 'inherit' }: Props) => {
  const classes = useStyles()
  const commonClasses = useCommonStyles()
  return (
    <Grid
      container
      spacing={1}
      alignItems="flex-end"
      className={classes.root}
      justify="space-between"
    >
      <Grid item xs={2} className={commonClasses.centerV}>
        {icon}
      </Grid>
      <Grid item xs={10} className={classes.textFieldGrid}>
        <Box className={classes.textField}>
          <Typography noWrap variant={variant}>
            {text}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  )
}

export default IconText
