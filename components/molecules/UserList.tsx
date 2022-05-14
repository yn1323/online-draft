import { Users } from 'Store'
import dynamic from 'next/dynamic'
import Image from 'next/image'

interface Props {
  title?: string
  users: Users[]
  callback: (id: string) => void
}

const IonAvatar = dynamic(
  async () => await (await import('@ionic/react')).IonAvatar,
  {
    ssr: false,
  }
)
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
const IonListHeader = dynamic(
  async () => await (await import('@ionic/react')).IonListHeader,
  {
    ssr: false,
  }
)

const UserList = ({ title = '', users, callback }: Props) => {
  return (
    <IonList>
      <IonListHeader>{title}</IonListHeader>
      {users.map(({ avatar, userName, userId }, index) => (
        <IonItem key={index} button onClick={() => callback(userId)}>
          <IonAvatar slot="start">
            <Image src={avatar} alt="img" />
          </IonAvatar>
          <IonLabel>
            <h2>{userName}</h2>
          </IonLabel>
        </IonItem>
      ))}
    </IonList>
  )
}

export default UserList
