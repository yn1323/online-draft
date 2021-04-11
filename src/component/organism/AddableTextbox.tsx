import React, { createRef, useRef, useState } from 'react'
import {
  Button,
  Grid,
  IconButton,
  TextFieldProps,
  makeStyles,
} from '@material-ui/core'
import {
  AccountBox,
  ArrowDropUp,
  Save,
  HighlightOff,
  PlaylistAdd,
} from '@material-ui/icons'
import { replaceArray, useSnackbar } from 'src/helper'

import IconTextbox from 'src/component/molecule/IconTextbox'

import { useCommonStyles } from 'src/constant'

interface Props {
  initialVals: string[]
  icon?: JSX.Element
  isOrderChangeable?: boolean
  isDeletable?: boolean
  isAddable?: boolean
  maxTextbox?: number
  dispatcher: any
}

const useStyles = makeStyles(theme => ({
  tagButton: {
    color: theme.palette.primary.contrastText,
  },
  addButton: {
    color: theme.palette.primary.contrastText,
  },
  orderIcon: {
    marginLeft: -10,
  },
  delIcon: {
    marginLeft: 10,
  },
}))

const AddableTextbox = ({
  initialVals,
  icon = <AccountBox color="primary" />,
  isOrderChangeable = true,
  isDeletable = true,
  isAddable = true,
  maxTextbox = 5,
  dispatcher,
}: Props) => {
  const classes = useStyles()
  const commonClasses = useCommonStyles()
  const textboxToAdd = { name: '', val: createRef<TextFieldProps>() }
  const { showSnackbar } = useSnackbar()
  const [textboxes, setTextbox] = useState(
    initialVals.map(textbox => ({
      name: textbox,
      val: createRef<TextFieldProps>(),
    }))
  )

  const spacing = 3

  const getCurrentVal = (): any[] =>
    textboxes.map(({ name, val }) => ({
      name: val.current?.value || '',
      val,
    }))
  const registerId = () => {
    if (textboxes.length === 1 && textboxes[0].val.current?.value === '') {
      showSnackbar({
        type: 'error',
        msg: 'テキストボックスが空のため、登録できませんでした。',
      })
      return
    }
    dispatcher(textboxes.map(textbox => textbox.val.current?.value))
  }

  const changeOrder = (index: number) => {
    setTextbox(replaceArray(getCurrentVal(), index, index - 1))
  }

  const deletetextbox = (index: number) => {
    setTextbox(textboxes.filter((_, i) => i !== index))
  }
  const addTextbox = () => {
    setTextbox([...getCurrentVal(), { ...textboxToAdd }])
  }

  const getTextboxXS = () =>
    isOrderChangeable && isDeletable
      ? 9
      : isOrderChangeable && !isDeletable
      ? 10
      : !isOrderChangeable && isDeletable
      ? 10
      : 12
  const renderChangeOrderIcon = (i: number) => (
    <Grid item xs={1}>
      {i !== 0 && (
        <IconButton
          className={classes.orderIcon}
          size="small"
          color="primary"
          onClick={() => changeOrder(i)}
        >
          <ArrowDropUp />
        </IconButton>
      )}
    </Grid>
  )

  const renderDeleteIcon = (i: number) => (
    <Grid item xs={1}>
      {textboxes.length !== 1 && (
        <IconButton
          className={classes.delIcon}
          size="small"
          color="secondary"
          onClick={() => deletetextbox(i)}
        >
          <HighlightOff />
        </IconButton>
      )}
    </Grid>
  )
  const renderAddIcon = () => (
    <Grid item xs={12} className={commonClasses.alignRight}>
      <Button
        className={classes.tagButton}
        variant="contained"
        color="primary"
        startIcon={<PlaylistAdd />}
        onClick={() => addTextbox()}
      >
        追加
      </Button>
    </Grid>
  )

  return (
    <Grid container spacing={spacing}>
      {textboxes.map((textbox, i) => (
        <React.Fragment key={Math.random()}>
          {/* Force rerender TextField */}
          <Grid item xs={getTextboxXS()}>
            <IconTextbox
              defaultValue={textbox.name}
              inputRef={textbox.val}
              icon={icon}
            ></IconTextbox>
          </Grid>

          {/* Order Icon */}
          {isOrderChangeable && renderChangeOrderIcon(i)}

          {/* Delete Icon */}
          {isDeletable && renderDeleteIcon(i)}
        </React.Fragment>
      ))}
      {/* Add Icon */}
      {textboxes.length < maxTextbox && isAddable && renderAddIcon()}
      <Grid item xs={12}>
        <Button
          className={classes.tagButton}
          variant="contained"
          color="primary"
          startIcon={<Save />}
          fullWidth
          onClick={() => registerId()}
        >
          保存する
        </Button>
      </Grid>
    </Grid>
  )
}

export default AddableTextbox
