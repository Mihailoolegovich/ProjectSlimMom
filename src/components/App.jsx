import { Routes, Route, useLocation } from 'react-router-dom';
import React, { useEffect, useState, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from '../redux/auth';
import PropTypes from 'prop-types';
import Header from './Header';
import PublicRoute from './PublicRoute';
// import AppLoader from './Loader/Loader';
import {
  LoginPage,
  RegistrationPage,
  DiaryPage,
  CalculatorPage,
} from '../pages';

export const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = (value = !modalOpen) => {
    setModalOpen(value);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  const isLoggedIn = useSelector(authSelectors.getLoggedOn);
  const { pathname } = useLocation();

  function adaptiveClassName(loc) {
    const findClassName = {
      '/': 'mainContainer',
      '/auth/login': 'mainContainer localIdent',
      '/auth/signup': 'mainContainer localIdent',
    };
    return isLoggedIn ? 'mainContainer localRest' : findClassName[loc];
    // return className[loc] ?? 'mainContainer';
  }

  return (
    <>
      {/* <Suspense fallback={<AppLoader />}> */}
      <Header closeModal={toggleModal} isModalOpen={modalOpen} />
      <section className={adaptiveClassName(pathname)}>
        <Routes>
          <Route
            path="/"
            element={
              <CalculatorPage
                onToggleModal={toggleModal}
                showModal={modalOpen}
              />
            }
          />
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
          <Route
            path="diary"
            element={<DiaryPage toggleModal={toggleModal} isOpen={modalOpen} />}
          />
          <Route
            path="calculator"
            element={
              <CalculatorPage
                onToggleModal={toggleModal}
                showModal={modalOpen}
              />
            }
          />
          <Route
            path="*"
            element={
              <CalculatorPage
                onToggleModal={toggleModal}
                showModal={modalOpen}
              />
            }
          />
        </Routes>
      </section>
      {/* </Suspense> */}
    </>
  );
};
