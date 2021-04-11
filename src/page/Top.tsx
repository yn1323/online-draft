import React, { useRef } from 'react'
import { TextFieldProps } from '@material-ui/core'
import EditTextarea from 'src/component/molecule/EditTextarea'
import { useTranslation } from 'react-i18next'

export const Top = () => {
  const { t } = useTranslation()
  const title: any = useRef<TextFieldProps>(null)
  return (
    <div>
      TOPPPP
      <span>{t('テスト')}</span>
      <EditTextarea title="手順あああ" inputRef={title} />
    </div>
  )
}

export default Top
