import { VFC, memo } from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from '../components/pages/Login'
import Page404 from '../components/pages/Page404'
import { homeRoutes } from './HomeRoutes'
import HeaderLayout from '../components/templates/HeaderLayout'
import { LoginUserProvider } from '../hooks/providers/useLoginUserProvider'

const Router: VFC = memo(() => {
  return (
    <Switch>
      <LoginUserProvider>
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
                  <HeaderLayout>{route.children}</HeaderLayout>
                </Route>
              ))}
            </Switch>
          )
          } >
        </Route>
      </LoginUserProvider>
      <Route path="*" >
        <Page404 />
      </Route>
    </Switch >
  )
})

export default Router
