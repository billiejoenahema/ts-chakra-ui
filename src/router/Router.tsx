import { VFC, memo } from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from '../components/pages/Login'
import { homeRoutes } from './HomeRoutes'

const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/" >
        <Login />
      </Route>
      <Route
        path="/home"
        render={({ match: { url } }) => (
          <Switch>
            {homeRoutes.map((route: any) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )
        } >
      </Route>
    </Switch >
  )
})

export default Router
