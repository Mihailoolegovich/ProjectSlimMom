import { Routes, Route } from 'react-router-dom';
import Header from './Header';

import {
  LoginPage,
  HomePage,
  RegistrationPage,
  DiaryPage,
  CalculatorPage,
} from 'pages';

import PublicRoute from '../components/PublicRoute'

export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="register" element={<RegistrationPage />} />
        {/* <Route
                path="login"
                element={
                  <PublicRoute restricted>
                    <LoginPage />
                  </PublicRoute>
                }
        />  */}
        <Route path="login" element={<LoginPage />} />
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
