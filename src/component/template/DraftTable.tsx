import { useSelector } from 'react-redux'
import { useTable } from 'react-table'
import { useTranslation } from 'react-i18next'

import { useModal, useTableData } from 'src/helper'

import SubmitItem from 'src/component/molecule/SubmitItem'

import { State } from 'Store'

import 'src/asset/scss/component/DraftTable.scss'

const DraftTable = () => {
  const { t } = useTranslation()
  const {
    draft: { round },
  } = useSelector((state: State) => state)
  const { columns, data } = useTableData()
  const { headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  })

  const { setModalComponent, showModal } = useModal()

  const maskCell = (text: any, rowRound: number) => {
    return rowRound >= round ? '' : text
  }
  const isClickable = (rowIndex: number, rowRound: number) => {
    if (rowIndex === 0) {
      return false
    }
    if (rowRound >= round) {
      return false
    }
    return true
  }

  const showEditModal = (userId: string, rowRound: number) => {
    setModalComponent({
      component: (
        <SubmitItem userId={userId} targetRound={rowRound} isUpdate={true} />
      ),
      title: t('ドラフト候補編集'),
    })
    showModal()
  }

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
          const { original = {} as any } = row
          return (
            <tr {...row.getRowProps()} key={i}>
              {row.cells.map((cell, j) => (
                <td
                  className={isClickable(j, original.round) ? 'clickable' : ''}
                  {...cell.getCellProps()}
                  key={j}
                  onClick={() => {
                    if (isClickable(j, original.round)) {
                      showEditModal(cell.column.id, row.cells[0].value)
                    }
                  }}
                >
                  {j === 0 && cell.render('Cell')}
                  {j !== 0 && maskCell(cell.render('Cell'), original.round)}
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
