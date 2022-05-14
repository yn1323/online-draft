import { State } from 'Store'
import { chevronBackOutline } from 'ionicons/icons'
import dynamic from 'next/dynamic'
import { useRef, useState } from 'react'

import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { createUser } from '@/helpers/firebase'
import { useInfo, useToast } from '@/helpers/hooks'
import AnimalList from '@/molecules/AnimalList'

const IonButton = dynamic(
  async () => await (await import('@ionic/react')).IonButton,
  {
    ssr: false,
  }
)
const IonIcon = dynamic(
  async () => await (await import('@ionic/react')).IonIcon,
  {
    ssr: false,
  }
)
const IonInput = dynamic(
  async () => await (await import('@ionic/react')).IonInput,
  {
    ssr: false,
  }
)
const IonText = dynamic(
  async () => await (await import('@ionic/react')).IonText,
  {
    ssr: false,
  }
)

interface Props {
  goBack: () => void
}

const CreateUser = ({ goBack }: Props) => {
  const { userInfo } = useSelector((state: State) => state)
  const userName = useRef<HTMLIonInputElement>(null)
  const [clicked, setClicked] = useState(false)

  const { setToast, showToast } = useToast()
  const [avatar, setAvatar] = useState('')
  const router = useRouter()
  const { addUserId } = useInfo()

  const makeUser = async () => {
    setClicked(true)
    if (!avatar) {
      setToast({
        message: 'アバターを選択してください',
        color: 'danger',
      })
      showToast()
      setClicked(false)
      return false
    }

    const userId = await createUser({
      groupId: userInfo.groupId,
      userName: (userName.current?.value ?? '') as string,
      avatar,
    })
    addUserId(userId)
    router.push(`/draft/${userInfo.groupId}`)
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
            placeholder="ユーザー名"
            ref={userName}
            required
            maxlength={12}
          ></IonInput>
        </div>
        <div className="align-centerVH">
          <IonButton type="button" onClick={makeUser} disabled={clicked}>
            作成する
          </IonButton>
        </div>
      </form>
    </div>
  )
}
export default CreateUser
