import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Global, ROUTES, theme } from "./utils";
import { CoursePage, Login, Register, Settings } from "./views";
import { persistor, store } from "./redux";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { Navbar } from "./components/Navbar";

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Global />
          <Navbar />
          <Router>
            <Routes>
              <Route path={ROUTES.App.home} element={<CoursePage />} />
              <Route path={ROUTES.App.login} element={<Login />} />
              <Route path={ROUTES.App.register} element={<Register />} />
              <Route path={ROUTES.App.settings} element={<Settings />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
