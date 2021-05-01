import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { getDuplicateItemInRound } from 'src/helper'
import { SLOT_TIME } from 'src/constant'

import ResultSlot from 'src/component/organism/ResultSlot'

import 'src/asset/scss/component/ResultModal.scss'

import { State } from 'Store'

interface Props {
  targetRound: number
}

const ResultModal = ({ targetRound }: Props) => {
  const {
    draft: { selections },
    userInfo: { users },
  } = useSelector((state: State) => state)
  const { t } = useTranslation()
  const [hasErrorMsg, setHasErrorMsg] = useState(<></>)
  const { hasDuplicate } = getDuplicateItemInRound(selections, '', targetRound)

  useEffect(() => {
    if (hasDuplicate) {
      const timer = setTimeout(() => {
        setHasErrorMsg(
          <div className="conflict">
            {t('データの重複がありました。')}
            <br />
            {t(
              'ランダム抽選の結果、背景色が赤いユーザーはドラフト候補の変更が必要です。'
            )}
            <br />
            {t('背景色が点滅しているユーザーから順に候補を変更してください。')}
          </div>
        )
      }, SLOT_TIME * users.length + 1000)

      return () => clearTimeout(timer)
    }
  }, [hasDuplicate])

  return (
    <div className="resultModalWrapper">
      {hasErrorMsg}
      <section className="result">
        <ResultSlot />
      </section>
    </div>
  )
}

export default ResultModal
