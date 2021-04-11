import React from 'react'
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  pointer: {
    cursor: 'pointer',
    '&:hover': {
      background: '#f5f5f5 !important',
    },
  },
  header: {
    background: `${theme.palette.primary.main} !important`,
    color: `${theme.palette.primary.contrastText} !important`,
  },
}))

interface Props {
  header: string[]
  tbody: string[][]
  keys: string[]
  callback?: (data: any) => void
  sticky?: boolean
}

const DataTable = ({ header, tbody, keys, sticky = true, callback }: Props) => {
  const classes = useStyles()
  const clickHandler = (i: number) => {
    if (callback) {
      callback(keys[i])
    }
  }
  return (
    <Table stickyHeader={sticky}>
      <TableHead>
        <TableRow>
          {header.map((v, i) => (
            <TableCell align="center" key={i} className={classes.header}>
              {v}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {tbody.map((row, i) => (
          <TableRow
            key={i}
            onClick={() => clickHandler(i)}
            className={callback ? classes.pointer : ''}
          >
            {row.map((v, j) => (
              <TableCell align="center" key={j}>
                {v}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default DataTable
