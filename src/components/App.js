import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import { authOperations, authSelectors } from '../redux/auth';
import AppBar from './AppBar/AppBar';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';

const HomeView = lazy(() => import('../views/HomeView'));
const RegisterView = lazy(() => import('../views/RegisterView'));
const ContactsView = lazy(() => import('../views/ContactsView'));
const LoginView = lazy(() => import('../views/LoginView'));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser,
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      {!isFetchingCurrentUser && (
        <>
          <AppBar />
          <Switch>
            <Suspense fallback={<span>Loading</span>}>
              <PublicRoute path="/" exact restricted redirectTo="/contacts">
                <HomeView />
              </PublicRoute>
              <PublicRoute path="/login" exact restricted redirectTo="/">
                <LoginView />
              </PublicRoute>
              <PublicRoute path="/register" exact restricted redirectTo="/">
                <RegisterView />
              </PublicRoute>
              <PrivateRoute path="/contacts" exact>
                <ContactsView />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </>
      )}
    </div>
  );
}
