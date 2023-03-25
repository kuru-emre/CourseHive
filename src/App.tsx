import { FC } from 'react'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'
import { AppLayout } from './components'
import { persistor, store } from './redux'
import { Global, ROUTES, theme } from './utils'
import { CourseView, HomeView, Login, Profile, Register, Settings } from './views'

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Global />
          <Router>
            <Switch>
              <Route path={ROUTES.App.login} component={Login} />
              <Route path={ROUTES.App.register} component={Register} />
              <AppLayout>
                <Switch>
                  <Route path={ROUTES.App.home} component={HomeView} exact />
                  <Route path={ROUTES.App.course} component={CourseView} />
                  <Route path={ROUTES.App.settings} component={Settings} />
                  <Route path={ROUTES.App.profile} component={Profile} />
                </Switch>
              </AppLayout>
            </Switch>
          </Router>
          <Toaster position="bottom-center" />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
