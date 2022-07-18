import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header';
import PublicRoute from './PublicRoute';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

import {
  LoginPage,
  RegistrationPage,
  DiaryPage,
  CalculatorPage,
} from '../pages';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  const { pathname } = useLocation();

  function adaptiveClassName(loc) {
    const className = {
      '/auth/login': 'mainContainer localIdent',
      '/auth/signup': 'mainContainer localIdent',
      '/diary': 'mainContainer localRest',
      '/calculator': 'mainContainer localRest',
    };
    return className[loc] ?? 'mainContainer';
  }

  return (
    <>
      <Header />
      <section className={adaptiveClassName(pathname)}>
        <Routes>
          <Route path="/" element={<CalculatorPage />} />
          <Route
            path="auth/login"
            element={
              <PublicRoute path="/auth/login" restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="auth/signup"
            element={
              <PublicRoute path="/auth/signup" restricted>
                <RegistrationPage />
              </PublicRoute>
            }
          />
          <Route path="diary" element={<DiaryPage />} />
          <Route path="calculator" element={<CalculatorPage />} />
          <Route path="*" element={<CalculatorPage />} />
        </Routes>
      </section>
    </>
  );
};
