import React, { Suspense } from 'react'
import Route from 'src/route'

import { Box } from '@material-ui/core'

import Spinner from 'src/component/molecule/CenterSpinner'
import NavigationTop from 'src/component/template/NavigationTop'
import NavigationBottom from 'src/component/template/NavigationBottom'
import DialogTemplate from 'src/component/template/Dialog'
import LoadingOverlay from 'src/component/organism/Backdrop'
import Snackbar from 'src/component/organism/Snackbar'

// export default () => JSX では、fast refreshが効かないことがある

export const Index = () => {
  // buildすると、なぜかRoute内にpyが付与されるので、分岐を追加
  // アプリケーションに応じて要調整
  const padding = 7

  return (
    <>
      <NavigationTop />
      <Box m={1} py={padding}>
        <Suspense fallback={<Spinner />}>
          <Route />
        </Suspense>
      </Box>
      <NavigationBottom />
      <DialogTemplate />
      <LoadingOverlay />
      <Snackbar />
    </>
  )
}

export default Index
