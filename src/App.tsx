import { FC } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'
import { Navbar } from './components/Navbar'
import { persistor, store } from './redux'
import { Global, ROUTES, theme } from './utils'
import { CoursePage, HomeView, Login, Profile, Register, Settings } from './views'

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Global />
          <Router>
            <Navbar />
            <Routes>
              <Route path={ROUTES.App.home} element={<HomeView />} />
              <Route path={ROUTES.App.course} element={<CoursePage />} />
              <Route path={ROUTES.App.login} element={<Login />} />
              <Route path={ROUTES.App.register} element={<Register />} />
              <Route path={ROUTES.App.settings} element={<Settings />} />
              <Route path={ROUTES.App.profile} element={<Profile />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
