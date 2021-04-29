import { useTable } from 'react-table'
import { useTableData } from 'src/helper'

import 'src/asset/scss/component/DraftTable.scss'

const DraftTable = () => {
  const { columns, data } = useTableData()

  const { headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  })
  return (
    <table className="draftTable">
      <thead>
        {headerGroups.map((headerGroup, i) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={i}>
            {headerGroup.headers.map((column, j) => (
              <th {...column.getHeaderProps()} key={j}>
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()} key={i}>
              {row.cells.map((cell, j) => (
                <td {...cell.getCellProps()} key={j}>
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default DraftTable
