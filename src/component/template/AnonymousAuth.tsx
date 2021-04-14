import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useHistory } from 'react-router'

import {
  isSignIn as isSign,
  signIn,
  useLoading,
  usePath,
  isGroupExist,
} from 'src/helper'
import AuthLoading from 'src/page/AuthLoading'

const AnonymousAuthAuth = ({ children }: any) => {
  const { t } = useTranslation()
  const history = useHistory()
  const [isSignIn, setInSignIn] = useState(isSign())
  const [groupExist, setGroupExist] = useState(false)
  const { pathname } = usePath()
  const { showLoading, hideLoading } = useLoading()

  const checkGroupExist = () => {
    const id = pathname.replace('/entry', '').replace('/draft', '')
    isGroupExist(id, {
      succeeded: () => {
        setGroupExist(true)
      },
      failed: () => {
        hideLoading()

        history.push('/')
      },
    })
  }

  useEffect(() => {
    if (!isSignIn) {
      signIn({
        succeeded: () => {
          setInSignIn(true)
          checkGroupExist()
        },
        failed: () =>
          alert(
            t('回線が混み合っています。しばらく経ってから再度お試しください。')
          ),
      })
    }
  }, [])

  useEffect(() => {
    if (isSignIn && groupExist) {
      hideLoading()
    } else {
      showLoading()
    }
  }, [isSignIn])

  return isSignIn && groupExist ? children : <AuthLoading />
}
export default AnonymousAuthAuth
