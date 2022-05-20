import { Button, IconButton, Input, Text } from '@chakra-ui/react'
import { State } from 'Store'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { FaStepBackward } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { createUser } from '@/helpers/firebase'
import { useInfo, useToast } from '@/helpers/hooks'
import AnimalList from '@/molecules/AnimalList'

interface Props {
  goBack: () => void
}

const CreateUser = ({ goBack }: Props) => {
  const { userInfo } = useSelector((state: State) => state)
  console.log(userInfo)
  const [userName, setUserName] = useState('')
  const handleChange = (event: any) => setUserName(event.target.value)

  const [clicked, setClicked] = useState(false)

  const { showToast } = useToast()
  const [avatar, setAvatar] = useState('')
  const router = useRouter()
  const { addUserId } = useInfo()

  const makeUser = async () => {
    setClicked(true)
    if (!avatar) {
      showToast({
        title: 'アバターを選択してください',
      })
      setClicked(false)
      return
    }
    if (!userName) {
      showToast({
        title: 'ユーザー名を入力してください',
      })
      setClicked(false)
      return
    }

    const userId = await createUser({
      groupId: userInfo.groupId,
      userName: userName,
      avatar,
    })
    console.log(userId)
    addUserId(userId)
    router.push(`/draft/${userInfo.groupId}`)
  }

  return (
    <div className="createUserWrapper">
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
        <Text>アバター選択</Text>
        <div className="align-centerVH selectAvatar">
          <AnimalList
            callback={(index: string) => setAvatar(index)}
            selected={avatar}
          />
        </div>
        <div className="align-centerVH userName">
          <Input
            placeholder="ユーザー名"
            required
            maxLength={12}
            onChange={handleChange}
          />
        </div>
        <div className="align-centerVH">
          <Button colorScheme="green" onClick={makeUser} isLoading={clicked}>
            作成する
          </Button>
        </div>
      </form>
    </div>
  )
}
export default CreateUser
