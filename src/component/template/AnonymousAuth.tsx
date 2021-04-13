import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { isSignIn as isSign, signIn, useLoading } from 'src/helper'
import AuthLoading from 'src/page/AuthLoading'

const AnonymousAuthAuth = ({ children }: any) => {
  const { t } = useTranslation()
  const [isSignIn, setInSignIn] = useState(isSign())
  const { showLoading, hideLoading } = useLoading()

  useEffect(() => {
    if (!isSignIn) {
      signIn({
        succeeded: () => setInSignIn(true),
        failed: () =>
          alert(
            t('回線が混み合っています。しばらく経ってから再度お試しください。')
          ),
      })
    }
  }, [])

  useEffect(() => {
    if (isSignIn) {
      hideLoading()
    } else {
      showLoading()
    }
  }, [isSignIn])

  return isSignIn ? children : <AuthLoading />
}
export default AnonymousAuthAuth
