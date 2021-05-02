import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import {
  getDuplicateItemInRound,
  useModal,
  setFinishedRounds,
} from 'src/helper'
import { DOKIDOKI_TIME, SLOT_TIME } from 'src/constant'

import ResultSlot from 'src/component/organism/ResultSlot'
import ConflictSlot from 'src/component/organism/ConflictSlot'

import 'src/asset/scss/component/ResultModal.scss'

import { State } from 'Store'
import { IonButton, IonIcon } from '@ionic/react'
import { pawOutline } from 'ionicons/icons'

interface Props {
  targetRound: number
}

const ResultModal = ({ targetRound }: Props) => {
  const {
    draft: { selections, finishedRound },
    userInfo: { groupId, users },
  } = useSelector((state: State) => state)
  const { t } = useTranslation()
  const { hideModal } = useModal()
  const [submit, setSubmit] = useState(0)
  const [hasFinishedSlot, setHasFinishedSlot] = useState(false)
  const [hasFinishedConflict, setHasFinishedConflict] = useState(false)
  const [hasConflict, setHasConflict] = useState(false)
  const isConflictLayout = hasConflict && !hasFinishedConflict

  useEffect(() => {
    const timer = setTimeout(() => {
      setSubmit(1)
    }, SLOT_TIME + 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    console.log(submit)
    if (submit === 1) {
      duplicateCheck()
    } else if (submit === 2) {
      // startShowConflictData()
    } else if (submit === 3) {
      finishThisRound()
    }
  }, [submit])

  const duplicateCheck = () => {
    const { hasDuplicate } = getDuplicateItemInRound(
      selections,
      '',
      targetRound
    )
    if (hasDuplicate) {
      setHasConflict(true)
      setSubmit(2)
    } else {
      setSubmit(4)
    }
  }

  useEffect(() => {
    if (finishedRound.includes(targetRound)) {
      setHasFinishedConflict(true)
    }
  }, [finishedRound])

  const finishThisRound = () => {
    setFinishedRounds({
      groupId,
      currentFinishedRounds: finishedRound,
      finishedRound: targetRound,
    })
  }
  const startShowConflictData = () => {
    setSubmit(3)
    const timer = setTimeout(() => {
      setSubmit(4)
      clearTimeout(timer)
    }, DOKIDOKI_TIME + 1000)
  }

  return (
    <div className="resultModalWrapper">
      {submit === 4 && hasConflict && (
        <div className="conflict">
          {t('データの重複がありました。')}
          <br />
          {t(
            'ランダム抽選の結果、背景色が赤いユーザーはドラフト候補の変更が必要です。'
          )}
          <br />
          <span className="caution">
            {t(
              'CLOSEボタン押下後、背景色が点滅しているユーザーから順に候補を変更してください。'
            )}
          </span>
        </div>
      )}
      <section className="result">
        {submit < 3 && <ResultSlot />}
        {submit >= 3 && <ConflictSlot hasConflict={hasConflict} />}
      </section>
      {submit === 2 && (
        <>
          <hr />
          <div className="closeBtn align-centerVH">
            <IonButton
              fill="solid"
              color="danger"
              onClick={() => startShowConflictData()}
            >
              <IonIcon slot="start" icon={pawOutline} />
              {t('抽選開始！')}
            </IonButton>
          </div>
        </>
      )}
      {submit === 4 && (
        <>
          <hr />
          <div className="closeBtn align-centerVH">
            <IonButton fill="outline" onClick={hideModal}>
              Close
            </IonButton>
          </div>
        </>
      )}
    </div>
  )
}

export default ResultModal
