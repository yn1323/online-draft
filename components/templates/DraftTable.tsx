import { State } from 'Store'

import { useSelector } from 'react-redux'
import { useTable } from 'react-table'

import { getDuplicateItemInRound } from '@/helpers/common'
import { useModal, useTableData } from '@/helpers/hooks'
import SubmitItem from '@/molecules/SubmitItem'

const DraftTable = () => {
  const {
    userInfo: { users },
    draft: { round, selections },
    component: {
      modal: { showingResult },
      tableMode,
    },
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
  const tdClass = (tableRowIndex: number, rowRound: number, userId: string) => {
    const classNames: string[] = []
    if (isClickable(tableRowIndex, rowRound)) {
      classNames.push('clickable')
    }
    // 処理が重いため、限定的に検査
    if (
      rowRound === round - 1 &&
      tableRowIndex !== 0 &&
      selections.length === users.length
    ) {
      const { duplicateDataUserIdsExcludeWinner } = getDuplicateItemInRound(
        selections,
        userId,
        rowRound
      )
      if (duplicateDataUserIdsExcludeWinner.includes(userId)) {
        classNames.push('duplicate')
      }
      if (
        duplicateDataUserIdsExcludeWinner &&
        duplicateDataUserIdsExcludeWinner[0] === userId
      ) {
        classNames.push('duplicate-change')
      }
    }
    return classNames.join(' ')
  }

  const showEditModal = (userId: string, rowRound: number) => {
    setModalComponent({
      component: (
        <SubmitItem
          userId={userId.replace('-comment', '')}
          targetRound={rowRound}
          isUpdate={true}
        />
      ),
      title: 'ドラフト候補編集',
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
      <tbody
        style={{
          height: `calc(100% - 28px)`,
        }}
      >
        {rows.map((row, i) => {
          prepareRow(row)
          const { original = {} as any } = row
          return (
            <tr {...row.getRowProps()} key={i}>
              {row.cells.map((cell, j) =>
                showingResult && original.round === round - 1 && j !== 0 ? (
                  <td key={j}>-</td>
                ) : (
                  <td
                    className={tdClass(j, original.round, cell.column.id)}
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
                )
              )}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default DraftTable
