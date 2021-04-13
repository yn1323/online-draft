import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { IonButton, IonIcon, IonInput } from '@ionic/react'
import { chevronBackOutline } from 'ionicons/icons'

interface Props {
  goBack: () => void
}

const CreateGroup = ({ goBack }: Props) => {
  const { t } = useTranslation()
  const groupName = useRef<HTMLIonInputElement>(null)

  const createGroup = () => {
    console.log(groupName.current?.value)
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
          <IonButton type="submit" onClick={createGroup}>
            {t('作成する')}
          </IonButton>
        </div>
      </form>
    </div>
  )
}
export default CreateGroup
