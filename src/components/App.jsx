import { Route, Routes } from 'react-router-dom';
import Container from './Layout/Layout';
import { createAsyncView } from 'utils/AsyncViews/createAsyncViews';
import { useFetchCurrentUserQuery } from 'redux/authAPI';
import PrivateRoute from './Routes/PrivateRoute';
import PublicRoute from './Routes/PublicRoute';
import { useSelector } from 'react-redux';
import { getToken } from 'redux/authSlice';

const RegisterPage = createAsyncView('RegisterPage');
const LoginPage = createAsyncView('LoginPage');
const ContactPage = createAsyncView('ContactPage');

export default function App() {
  const token = useSelector(getToken);
  useFetchCurrentUserQuery(null, { skip: !token });

  return (
    <Routes>
      <Route path="/" element={<Container />}>
        <Route
          path="register"
          element={
            <PublicRoute restricted>
              <RegisterPage />
            </PublicRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute restricted>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="contacts"
          element={
            <PrivateRoute>
              <ContactPage />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}
