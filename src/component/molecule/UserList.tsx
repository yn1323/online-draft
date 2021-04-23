import {
  IonAvatar,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
} from '@ionic/react'

interface Props {
  title?: string
  users: {
    avatar: any
    name: string
  }[]
  // callback?: () => void
}

const UserList = ({ title = '', users }: Props) => {
  return (
    <IonList>
      <IonListHeader>{title}</IonListHeader>
      {users.map(({ avatar, name }, index) => (
        <IonItem key={index} button>
          <IonAvatar slot="start">
            <img src={avatar} />
          </IonAvatar>
          <IonLabel>
            <h2>{name}</h2>
          </IonLabel>
        </IonItem>
      ))}
    </IonList>
  )
}

export default UserList
