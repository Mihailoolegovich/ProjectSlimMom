import { Routes, Route } from 'react-router-dom';
import AppBar from './AppBar/AppBar';
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
      
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />

          {/* {isLoggedIn ? ( */}
          <>
            <Route path="login" element={<LoginPage />} />
            <Route path="registration" element={<RegistrationPage />} />
          </>
          {/* ) : ( */}


          <>
            <Route path="diary" element={<DiaryPage />} />
            <Route path="calculator" element={<CalculatorPage />} />
          </>
          {/* )} */}
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
};
