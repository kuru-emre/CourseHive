import 'tippy.js/dist/tippy.css'
import { FC } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { Global, ROUTES, theme } from './utils'
import { persistor, store } from './redux'
import { Placeholder } from './components'
import { CoursePageView } from './views'

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Global />
          <Router>
            <Switch>
              <Route path={ROUTES.auth.login} component={Placeholder} exact />
              <Route path={ROUTES.auth.register} component={Placeholder} exact />
              <Route path={ROUTES.courses.admin} component={Placeholder} exact />
              <Route path={ROUTES.courses.course} component={CoursePageView} exact />
              <Route path={ROUTES.courses.courses} component={Placeholder} exact />
              <Route path={ROUTES.users.user} component={Placeholder} exact />
            </Switch>
          </Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
