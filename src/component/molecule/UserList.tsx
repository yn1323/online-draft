import {
  IonAvatar,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
} from '@ionic/react'
import { Users } from 'Store'

interface Props {
  title?: string
  users: Users[]
  callback: (id: string) => void
}

const UserList = ({ title = '', users, callback }: Props) => {
  console.log(users)
  return (
    <IonList>
      <IonListHeader>{title}</IonListHeader>
      {users.map(({ avatar, userName, userId }, index) => (
        <IonItem key={index} button onClick={() => callback(userId)}>
          <IonAvatar slot="start">
            <img src={avatar} />
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
