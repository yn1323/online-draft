import { Button, HStack } from '@chakra-ui/react'
import { State } from 'Store'
import { CSVLink } from 'react-csv'

import { FaExchangeAlt, FaFileDownload, FaThumbsUp } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { getDuplicateItemInRound, isEveryOneEntered } from '@/helpers/common'
import { goToNextRound } from '@/helpers/firebase'
import { useCSV, useToast } from '@/helpers/hooks'
import { changeTableMode } from '@/stores/component'

const MenuCard = () => {
  const {
    userInfo: { groupId, groupName, users },
    draft: { round, selections, finishedRound },
    component: { tableMode },
  } = useSelector((state: State) => state)

  const dispatch = useDispatch()
  const { showToast } = useToast()
  const csvData = useCSV()

  const showResult = () => {
    const { hasDuplicate } = getDuplicateItemInRound(selections, '', round - 1)
    if (hasDuplicate) {
      showToast({
        title: '重複しているデータあります。データを修正してください。',
      })
      return false
    }
    const everyOneEntered = isEveryOneEntered(selections, users, round)
    if (!everyOneEntered) {
      showToast({
        title:
          '入力が完了していないユーザーがいます。入力が完了するまでしばらくお待ち下さい。',
      })
      return false
    }

    goToNextRound({ groupId, nextRound: round + 1 })
  }
  const switchTable = () => {
    dispatch(changeTableMode({ tableMode: tableMode === 0 ? 1 : 0 }))
  }

  return (
    <HStack w="100%" justifyContent="space-around">
      <Button
        onClick={switchTable}
        colorScheme="green"
        variant={'outline'}
        leftIcon={<FaExchangeAlt />}
      >
        表示切替
      </Button>

      <CSVLink data={csvData} target="_blank" filename={`${groupName}.csv`}>
        <Button
          colorScheme="green"
          variant={'outline'}
          leftIcon={<FaFileDownload />}
        >
          CSV出力
        </Button>
      </CSVLink>

      <Button
        onClick={showResult}
        colorScheme="green"
        leftIcon={<FaThumbsUp />}
      >
        結果発表
      </Button>
    </HStack>
  )
}

export default MenuCard
