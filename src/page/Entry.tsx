import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IonContent, IonPage } from '@ionic/react'

import 'src/asset/scss/page/Entry.scss'
import EntryCard from 'src/component/organism/EntryCard'
import Header from 'src/component/template/Header'

import { State } from 'Store'
import { getUserInfoOnce } from 'src/store/userInfo'

const Entry = () => {
  const dispatch = useDispatch()
  const {
    userInfo: { groupId },
  } = useSelector((state: State) => state)
  useEffect(() => {
    if (!groupId) {
      return
    }
    dispatch(getUserInfoOnce({ groupId }))
  }, [groupId])
  return (
    <IonPage>
      <Header />

      <IonContent className="height-100" scrollY={false}>
        <div className="height-100 align-centerVH">
          <EntryCard />
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Entry
