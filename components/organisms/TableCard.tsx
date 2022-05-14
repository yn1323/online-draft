import { State } from 'Store'
import { useSelector } from 'react-redux'
import CardBackground from '@/templates/CardBackground'
import DraftTable from '@/templates/DraftTable'

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
