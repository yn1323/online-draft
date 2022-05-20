import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { sessionStorageInfo } from '@/helpers/common'
import { isUserExistInGroup } from '@/helpers/firebase'
import { setUserId } from '@/stores/userInfo'

type PropTypes = {
  children: JSX.Element
  setChecked: (checked: boolean) => void
  groupId: string
}

const UserExistanceCheck: FC<PropTypes> = ({
  children,
  setChecked,
  groupId,
}) => {
  const dispatch = useDispatch()
  const { getUserIdToSessionStorage } = sessionStorageInfo()
  const [isChecked, setIsChecked] = useState(false)
  const [dispatched, setDispatched] = useState(false)
  const router = useRouter()
  const userId = getUserIdToSessionStorage()

  useEffect(() => {
    if (!userId) {
      router.push(`/entry/${groupId}`)
      return
    }
    isUserExistInGroup(groupId, userId, {
      succeeded: () => {
        setIsChecked(true)
      },
      failed: () => {
        router.push(`/entry/${groupId}`)
      },
    })
  }, [groupId, setChecked, router, userId])

  useEffect(() => {
    if (isChecked && !dispatched) {
      dispatch(setUserId({ userId }))
      setChecked(true)
      setDispatched(true)
    }
  }, [isChecked, dispatch, setChecked, dispatched, userId])

  if (!isChecked) {
    return <div>Now loading...</div>
  }

  return children
}

export default UserExistanceCheck
