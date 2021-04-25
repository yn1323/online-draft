import { useSelector } from 'react-redux'

import { State } from 'Store'
import CardBackground from '../template/ CardBackground'

const TableCard = () => {
  const {
    userInfo: { users },
  } = useSelector((state: State) => state)
  return (
    <CardBackground customClass="tableCard">
      <div>hoge</div>
    </CardBackground>
  )
}

export default TableCard
