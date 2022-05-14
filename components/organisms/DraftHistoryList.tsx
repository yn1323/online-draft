import dynamic from 'next/dynamic'
import { getDraftPageFromLS } from '@/helpers/common'

const IonItem = dynamic(
  async () => await (await import('@ionic/react')).IonItem,
  {
    ssr: false,
  }
)
const IonLabel = dynamic(
  async () => await (await import('@ionic/react')).IonLabel,
  {
    ssr: false,
  }
)
const IonList = dynamic(
  async () => await (await import('@ionic/react')).IonList,
  {
    ssr: false,
  }
)

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
