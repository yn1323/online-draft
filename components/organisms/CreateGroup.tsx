import { chevronBackOutline } from 'ionicons/icons'
import dynamic from 'next/dynamic'
import { useRef } from 'react'
import { createGroup, isSignIn, signIn } from '@/helpers/firebase'
import { useRouter } from 'next/router'

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

interface Props {
  goBack: () => void
}

const CreateGroup = ({ goBack }: Props) => {
  const groupName = useRef<HTMLIonInputElement>(null)
  const router = useRouter()

  const createGroupInFB = async (groupName: any) => {
    const id = await createGroup(groupName)
    router.push(`/entry/${id}`)
  }

  const makeGroup = async () => {
    const name: any = groupName.current?.value
    if (!isSignIn()) {
      signIn({
        succeeded: () => {
          createGroupInFB(name)
        },
        failed: () => {
          alert('認証に失敗しました。再度試してください。')
        },
      })
    } else {
      createGroupInFB(name)
    }
  }
  return (
    <div className="createGroupWrapper">
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
        <div className="align-centerVH groupname">
          <IonInput
            placeholder="グループ名"
            ref={groupName}
            required
            maxlength={48}
          ></IonInput>
        </div>
        <div className="align-centerVH">
          <IonButton type="button" onClick={makeGroup}>
            作成する
          </IonButton>
        </div>
      </form>
    </div>
  )
}
export default CreateGroup
