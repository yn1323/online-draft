import { IonButton, IonIcon } from '@ionic/react'
import { State } from 'Store'
import { pawOutline } from 'ionicons/icons'
import { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'

import { DOKIDOKI_TIME, SLOT_TIME } from '@/constants/common'
import { getDuplicateItemInRound } from '@/helpers/common'
import { setFinishedRounds } from '@/helpers/firebase'
import { useModal } from '@/helpers/hooks'
import ConflictSlot from '@/organisms/ConflictSlot'
import ResultSlot from '@/organisms/ResultSlot'

interface Props {
  targetRound: number
}

const ResultModal = ({ targetRound }: Props) => {
  const {
    draft: { selections, finishedRound },
    userInfo: { groupId, users },
  } = useSelector((state: State) => state)

  const { hideModal } = useModal()
  const [submit, setSubmit] = useState(0)
  const [hasFinishedSlot, setHasFinishedSlot] = useState(false)
  const [hasFinishedConflict, setHasFinishedConflict] = useState(false)
  const [hasConflict, setHasConflict] = useState(false)
  const [hasClicked, setHasClicked] = useState(false)
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
      // finishThisRound()
    } else if (submit === 4) {
      //
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
      finishThisRound()
      setSubmit(4)
    }
  }

  useEffect(() => {
    if (submit === 2 && hasConflict && finishedRound.includes(targetRound)) {
      setSubmit(3)
      goToEnd()
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
    setHasClicked(true)
    finishThisRound()
  }
  const goToEnd = () => {
    setTimeout(() => {
      setSubmit(4)
    }, DOKIDOKI_TIME)
  }
  return (
    <div className="resultModalWrapper">
      {submit === 4 && hasConflict && (
        <div className="conflict">
          データの重複がありました。
          <br />
          ランダム抽選の結果、背景色が赤いユーザーはドラフト候補の変更が必要です。
          <br />
          <span className="caution">
            CLOSEボタン押下後、背景色が点滅しているユーザーから順に候補を変更してください。
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
              disabled={hasClicked}
            >
              <IonIcon slot="start" icon={pawOutline} />
              抽選開始！
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
