import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { useTranslation } from 'react-i18next'
import { IonButton, IonIcon, IonInput, IonText } from '@ionic/react'
import { chevronBackOutline } from 'ionicons/icons'

import { createUser, generateFirebaseId, useInfo, useToast } from 'src/helper'

import AnimalList from 'src/component/molecule/AnimalList'
import { State } from 'Store'

interface Props {
  goBack: () => void
}

const CreateUser = ({ goBack }: Props) => {
  const { t } = useTranslation()
  const { userInfo } = useSelector((state: State) => state)
  const userName = useRef<HTMLIonInputElement>(null)

  const { setToast, showToast } = useToast()
  const [avatar, setAvatar] = useState('')
  const history = useHistory()
  const { addUserId } = useInfo()

  const makeUser = async () => {
    if (!avatar) {
      setToast({
        message: t('アバターを選択してください'),
        color: 'danger',
      })
      showToast()
      return false
    }
    const userId = generateFirebaseId()

    await createUser({
      groupId: userInfo.groupId,
      userId,
      userName: userName.current?.value as any,
      avatar,
    })
    addUserId(userId)
    history.push(`/draft/${userInfo.groupId}`)
  }
  return (
    <div className="createUserWrapper">
      <div>
        <IonButton fill="clear" onClick={goBack}>
          <IonIcon
            slot="icon-only"
            icon={chevronBackOutline}
            color="black"
          ></IonIcon>
        </IonButton>
      </div>
      <form>
        <IonText className="align-centerVH">アバター選択</IonText>
        <div className="align-centerVH selectAvatar">
          <AnimalList
            callback={(index: string) => setAvatar(index)}
            selected={avatar}
          />
        </div>
        <div className="align-centerVH userName">
          <IonInput
            placeholder={t('ユーザー名')}
            ref={userName}
            required
            maxlength={12}
          ></IonInput>
        </div>
        <div className="align-centerVH">
          <IonButton type="button" onClick={makeUser}>
            {t('作成する')}
          </IonButton>
        </div>
      </form>
    </div>
  )
}
export default CreateUser
