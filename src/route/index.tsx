import { Route, Redirect } from 'react-router-dom'
import { IonRouterOutlet } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'

import { routes } from 'src/constant'
import NotFound from 'src/page/404'
import AnonymousAuth from 'src/component/template/AnonymousAuth'

const Router = () => {
  return (
    <IonReactRouter>
      <IonRouterOutlet>
        {routes
          .filter(({ reqAuth }) => !reqAuth)
          .map(({ component, path }) => (
            <Route key={path} exact path={path} component={component} />
          ))}
        <Route component={NotFound} />

        <AnonymousAuth>
          {routes
            .filter(({ reqAuth }) => reqAuth)
            .map(({ component, path }) => (
              <Route key={path} exact path={path} component={component} />
            ))}
        </AnonymousAuth>
      </IonRouterOutlet>
    </IonReactRouter>
  )
}

export default Router
