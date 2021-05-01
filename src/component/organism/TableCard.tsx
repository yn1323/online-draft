import { useSelector } from 'react-redux'

import { State } from 'Store'
import CardBackground from 'src/component/template/CardBackground'
import DraftTable from 'src/component/template/DraftTable'

const TableCard = () => {
  const {
    userInfo: { users },
  } = useSelector((state: State) => state)
  return (
    <CardBackground customClass="tableCard">
      <DraftTable />
    </CardBackground>
  )
}

export default TableCard
