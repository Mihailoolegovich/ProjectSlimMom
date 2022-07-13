import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header';
// import styles from './App.module.scss';
import {
  LoginPage,
  HomePage,
  RegistrationPage,
  DiaryPage,
  CalculatorPage,
} from 'pages';

export const App = () => {
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
    <section className={adaptiveClassName(pathname)}>
      <Header />
      <Routes>
        <Route path="auth/login" element={<LoginPage />} />
        <Route path="auth/signup" element={<RegistrationPage />} />
        <Route path="diary" element={<DiaryPage />} />
        {/* <Route path="/" element={<HomePage />} />
        <Route path="registration" element={<RegistrationPage />} />
        <Route path="diary" element={<DiaryPage />} />
        <Route path="calculator" element={<CalculatorPage />} />
        <Route path="*" element={<HomePage />} /> */}
      </Routes>
    </section>
  );
};
