import { IonItem, IonLabel, IonList } from '@ionic/react'
import { getDraftPageFromLS } from 'src/helper'

const DraftHistoryList = () => {
  const list: any = getDraftPageFromLS()

  return (
    <IonList className="width-100">
      {list.map(({ groupName, url }: any, i: number) => (
        <IonItem button key={i} href={url}>
          <IonLabel>{groupName}</IonLabel>
        </IonItem>
      ))}
    </IonList>
  )
}

export default DraftHistoryList
