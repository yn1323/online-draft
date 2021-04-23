import { useRef } from 'react'
import { useHistory } from 'react-router'
import { useTranslation } from 'react-i18next'
import { IonButton, IonIcon, IonInput } from '@ionic/react'
import { chevronBackOutline } from 'ionicons/icons'
import { createGroup, isSignIn, signIn } from 'src/helper'

interface Props {
  goBack: () => void
}

const CreateGroup = ({ goBack }: Props) => {
  const { t } = useTranslation()
  const groupName = useRef<HTMLIonInputElement>(null)
  const history = useHistory()

  const createGroupInFB = async (groupName: any) => {
    const id = await createGroup(groupName)
    history.push(`/entry/${id}`)
  }

  const makeGroup = async () => {
    const name: any = groupName.current?.value
    if (!isSignIn()) {
      signIn({
        succeeded: () => {
          createGroupInFB(name)
        },
        failed: () => {
          alert(t('認証に失敗しました。再度試してください。'))
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
            placeholder={t('グループ名')}
            ref={groupName}
            required
            maxlength={48}
          ></IonInput>
        </div>
        <div className="align-centerVH">
          <IonButton type="button" onClick={makeGroup}>
            {t('作成する')}
          </IonButton>
        </div>
      </form>
    </div>
  )
}
export default CreateGroup
