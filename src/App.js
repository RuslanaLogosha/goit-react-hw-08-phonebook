import { Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Suspense, lazy } from 'react';
import axios from 'axios';
import Container from './components/Container';
// import HomeView from './views/HomeView';
// import RegisterView from './views/RegisterView';
// import LoginView from './views/LoginView';
// import ContactsView from './views/ContactsView';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { authOperations, authSelectors } from './redux/auth';
import HeaderMUI from './components/HeaderMUI/HeaderMUI';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#011211',
    },
    secondary: {
      main: '#faa346',
    },
  },
});
axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  console.log(isFetchingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <h1>Показываем React Skeleton</h1>
      ) : (
        <ThemeProvider theme={theme}>
          <HeaderMUI />
          <Switch>
            <Suspense fallback={<p>Загружаем...</p>}>
              <PublicRoute exact path="/" component={HomeView} />
              <PublicRoute
                path="/register"
                component={RegisterView}
                restricted
              />
              <PublicRoute
                path="/login"
                component={LoginView}
                redirectTo="/contacts"
                restricted
              />
              <PrivateRoute
                path="/contacts"
                component={ContactsView}
                redirectTo="/login"
              />
            </Suspense>
          </Switch>
        </ThemeProvider>
      )}
    </Container>
  );
}
