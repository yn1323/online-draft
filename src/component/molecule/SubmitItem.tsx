import { useRef, useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { IonButton, IonInput } from '@ionic/react'

import 'src/asset/scss/component/SubmitItem.scss'
import {
  addLogMessage,
  findUserNameFromUserId,
  useGetCurrentItem,
  isDuplicateItem,
  useItems,
  useModal,
  useToast,
} from 'src/helper'
import { useTranslation } from 'react-i18next'
import { State } from 'Store'

interface Props {
  userId: string
  targetRound?: number
  isUpdate?: boolean
}

const SubmitItem = ({ userId, targetRound = 0, isUpdate = false }: Props) => {
  const { t } = useTranslation()
  const { userInfo, draft } = useSelector((state: State) => state)
  const item: any = useRef(null)
  const [isDuplicate, setIsDuplicate] = useState(false)
  const { hideModal } = useModal()
  const currentItem = useGetCurrentItem(userId, targetRound)

  useEffect(() => {
    item.current.value = currentItem
    checkDuplicate(currentItem)
  }, [])

  const { addItem, updateItem } = useItems()
  const { setToast, showToast } = useToast()

  const submit = () => {
    const nextItem = item.current?.value || ''
    if (!nextItem) {
      setToast({
        message: t('ドラフト候補を入力してください。'),
        color: 'danger',
        position: 'bottom',
      })
      showToast()
      return false
    }
    if (isUpdate) {
      updateItem({
        item: nextItem,
        targetUserId: userId,
        roundIndex: targetRound,
      })
      const userName = findUserNameFromUserId(userInfo.users, userId)
      const myName = findUserNameFromUserId(userInfo.users, userInfo.userId)
      const editMsg = t('編集ログ')
      const message = `[${editMsg}][No${targetRound}-${userName}] ${currentItem} → ${nextItem} By ${myName}`
      addLogMessage({ groupId: userInfo.groupId, userId: 'computer', message })
    } else {
      addItem({ item: nextItem })
    }
    hideModal()
  }

  const checkDuplicate = (currentVal: string) => {
    const localIsDuplicate = isDuplicateItem(
      draft,
      targetRound,
      userId,
      currentVal
    )
    setIsDuplicate(localIsDuplicate)
  }

  return (
    <div className="submitItemWrapper">
      <section className="body">
        {isDuplicate && (
          <div className="warn">
            {t('ドラフト候補が重複しています。')}
            <br />
            {t('別の候補を入力してください。')}
          </div>
        )}
        <IonInput
          ref={item}
          maxlength={32}
          onIonChange={e => checkDuplicate(e.detail.value || '')}
        />
        <div className="buttonArea">
          <IonButton onClick={submit} disabled={isDuplicate}>
            OK
          </IonButton>
          <IonButton fill="outline" onClick={() => hideModal()}>
            Cancel
          </IonButton>
        </div>
      </section>
    </div>
  )
}

export default SubmitItem
