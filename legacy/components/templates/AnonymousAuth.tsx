import { useRouter } from 'next/router'
import { FC, useCallback, useEffect, useState } from 'react'
import { isGroupExist, isSignIn as isSign, signIn } from '@/helpers/firebase'
import { useInfo, useLoading } from '@/helpers/hooks'

type PropTypes = {
  groupId: string
  children: JSX.Element
}

const AnonymousAuthAuth: FC<PropTypes> = ({ children, groupId }: any) => {
  const router = useRouter()
  const [isSignIn, setInSignIn] = useState(isSign())
  const [groupExist, setGroupExist] = useState(false)
  const { addGroupId } = useInfo()

  const checkGroupExist = useCallback(() => {
    isGroupExist(groupId, {
      succeeded: () => {
        setGroupExist(true)
        addGroupId(groupId)
      },
      failed: () => {
        router.push('/')
      },
    })
  }, [groupId, router, addGroupId])

  useEffect(() => {
    if (!isSignIn) {
      signIn({
        succeeded: () => {
          setInSignIn(true)
          checkGroupExist()
        },
        failed: () =>
          alert(
            '回線が混み合っています。しばらく経ってから再度お試しください。'
          ),
      })
    }
  }, [isSignIn, setInSignIn, checkGroupExist])

  return isSignIn && groupExist ? children : <div>Now loading...</div>
}

export default AnonymousAuthAuth
