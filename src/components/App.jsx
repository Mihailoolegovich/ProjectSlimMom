import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header';
import PublicRoute from './PublicRoute';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';

import {
  LoginPage,
  RegistrationPage,
  DiaryPage,
  CalculatorPage,
} from '../pages';

export const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = (value = !modalOpen) => {
    setModalOpen(value)
  }


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
      <Header closeModal={toggleModal} isModalOpen={modalOpen} />
      <section className={adaptiveClassName(pathname)}>
        <Routes>
          <Route path="/" element={<CalculatorPage onToggleModal={toggleModal} showModal={modalOpen}/>} />
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
          <Route path="diary" element={<DiaryPage toggleModal={toggleModal} isOpen={modalOpen } />} />
          <Route path="calculator" element={<CalculatorPage onToggleModal={toggleModal} showModal={modalOpen}/>} />
          <Route path="*" element={<CalculatorPage onToggleModal={toggleModal} showModal={modalOpen} />} />
        </Routes>
      </section>
    </>
  );
};
