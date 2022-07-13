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
  let location = useLocation();
  let mainClassName = '';

  switch (location.pathname) {
    case '/login':
      mainClassName = 'mainContainer localIdent';
      break;
    case '/register':
      mainClassName = 'mainContainer localIdent';
      break;
    case '/diary':
      mainClassName = 'mainContainer localRest';
      break;
    case '/calculator':
      mainClassName = 'mainContainer localRest';
      break;
    default:
      mainClassName = 'mainContainer';
  }
  return (
    <div className={mainClassName}>
      <Header />
      <Routes>
        <Route path="register" element={<RegistrationPage />} />
        <Route path="diary" element={<DiaryPage />} />
        {/* <Route path="/" element={<HomePage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="registration" element={<RegistrationPage />} />
        <Route path="diary" element={<DiaryPage />} />
        <Route path="calculator" element={<CalculatorPage />} />
        <Route path="*" element={<HomePage />} /> */}
      </Routes>
    </div>
  );
};
