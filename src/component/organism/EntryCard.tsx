import { useState } from 'react'
import {
  IonAvatar,
  IonButton,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonText,
} from '@ionic/react'
import { useTranslation } from 'react-i18next'

import CardBackground from 'src/component/template/ CardBackground'
import CreateUser from 'src/component/organism/CreateUser'
import UserList from '../molecule/UserList'
import { assetImages } from 'src/constant'

const EntryCard = () => {
  const { t } = useTranslation()
  const [cardIndex, setCardIndex] = useState(1)
  const img = assetImages
  const users = [{ name: 'test', avatar: img[0].path }]

  return (
    <CardBackground customClass="login" index={cardIndex}>
      <div className="draftselectionWrapper height-100">
        <UserList users={users} title={t('登録ユーザー')} />
        <hr />

        <div className="align-centerVH">
          <IonButton onClick={() => setCardIndex(1)}>
            {t('新規ユーザー登録')}
          </IonButton>
        </div>
      </div>
      <CreateUser goBack={() => setCardIndex(0)} />
    </CardBackground>
  )
}

export default EntryCard
