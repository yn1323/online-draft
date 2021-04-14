import { useEffect } from 'react'
import { IonContent, IonGrid, IonPage, IonRow } from '@ionic/react'

import 'src/asset/scss/page/Entry.scss'
import EntryCard from 'src/component/organism/EntryCard'
import Header from 'src/component/template/Header'

import { isGroupExist, useLoading } from 'src/helper'
import { useParams } from 'react-router'

const Entry = () => {
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
