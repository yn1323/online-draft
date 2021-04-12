import { Route, Redirect } from 'react-router-dom'
import { IonRouterOutlet } from '@ionic/react'

import { routes } from 'src/constant'
// import NotFound from 'src/page/404'

const Router = () => {
  return (
    <IonRouterOutlet>
      {routes.map(({ component, path }) => (
        <Route key={path} exact path={path} component={component} />
      ))}
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      {/* <Route component={NotFound} /> */}
    </IonRouterOutlet>
  )
}

export default Router
