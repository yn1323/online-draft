import { Button, IconButton, Input } from '@chakra-ui/react'
import { chevronBackOutline } from 'ionicons/icons'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { useState } from 'react'
import { FaStepBackward } from 'react-icons/fa'
import { createGroup, isSignIn, signIn } from '@/helpers/firebase'

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
  const [groupName, setGroupName] = useState()
  const router = useRouter()
  const handleChange = (event: any) => setGroupName(event.target.value)

  const [isLoading, setIsLoading] = useState(false)

  const createGroupInFB = async (groupName: any) => {
    const id = await createGroup(groupName)
    router.push(`/entry/${id}`)
  }

  const makeGroup = async () => {
    setIsLoading(true)
    const name = groupName
    if (!groupName) {
      alert('グループ名を入力してください。')
      setIsLoading(false)
      return
    }
    if (!isSignIn()) {
      signIn({
        succeeded: () => {
          createGroupInFB(name)
        },
        failed: () => {
          alert('認証に失敗しました。再度試してください。')
          setIsLoading(false)
        },
      })
    } else {
      createGroupInFB(name)
    }
  }
  return (
    <div className="createGroupWrapper">
      <div>
        <IconButton
          aria-label="back"
          colorScheme="green"
          onClick={goBack}
          variant="ghost"
          icon={<FaStepBackward />}
        />
      </div>
      <form>
        <div className="align-centerVH groupname">
          <Input
            placeholder="グループ名"
            value={groupName}
            onChange={handleChange}
            required
            maxLength={48}
          />
        </div>
        <div className="align-centerVH">
          <Button colorScheme="green" onClick={makeGroup} isLoading={isLoading}>
            作成する
          </Button>
        </div>
      </form>
    </div>
  )
}
export default CreateGroup
