import { Routes, Route } from 'react-router-dom';
import Header from './Header';

import {
  LoginPage,
  HomePage,
  RegistrationPage,
  DiaryPage,
  CalculatorPage,
} from 'pages';
export const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="auth/signup" element={<RegistrationPage />} />
        <Route path="diary" element={<DiaryPage />} />
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="auth/login" element={<LoginPage />} />
        {/* <Route path="registration" element={<RegistrationPage />} />
        <Route path="diary" element={<DiaryPage />} />
        <Route path="calculator" element={<CalculatorPage />} />
        <Route path="*" element={<HomePage />} /> */}
      </Routes>
    </div>
  );
};
