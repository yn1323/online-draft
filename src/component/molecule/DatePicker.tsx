import React, { useState } from 'react'
import MomentUtils from '@date-io/moment'
import moment, { Moment } from 'moment-timezone'
import { Grid } from '@material-ui/core'
import { ArrowDropDown } from '@material-ui/icons'
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers'

import { DATE_FORMAT } from 'src/constant'

interface Props {
  setter: (v: any) => any
  defaultDate: any
}

const DatePicker = ({ setter, defaultDate }: Props) => {
  const [selectedDate, setDate] = useState(defaultDate)
  const [isOpen, setIsOpen] = useState(false)

  const onDateChange = (date: any | Moment) => {
    setter(date)
    setDate(date)
  }

  return (
    <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>
      <Grid container>
        <Grid item xs={12}>
          <KeyboardDatePicker
            keyboardIcon={<ArrowDropDown />}
            fullWidth
            open={isOpen}
            onClick={() => setIsOpen(true)}
            onOpen={() => setIsOpen(true)}
            onClose={() => setIsOpen(false)}
            margin="dense"
            label="日付"
            format={DATE_FORMAT.ja}
            value={selectedDate}
            onChange={onDateChange}
            autoOk
          />
        </Grid>
      </Grid>
    </MuiPickersUtilsProvider>
  )
}

export default DatePicker
