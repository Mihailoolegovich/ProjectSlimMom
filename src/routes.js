import { lazy } from 'react';
const HomePage = lazy(() => import('./pages/CalculatorPage'));
const LoginPage = lazy(() =>
  import('./pages/LoginPage' /*webpackChunkName: "login-page" */)
);
const RegisterPage = lazy(() =>
  import('./pages/RegistrationPage' /*webpackChunkName: "registration-page" */)
);
const DiaryPage = lazy(() =>
  import('./pages/DiaryPage' /*webpackChunkName: "diary-page" */)
);

const CalculatorPage = lazy(() =>
  import('./pages/CalculatorPage' /*webpackChunkName: "calculator-page" */)
);
// const Page404 = lazy(() =>
//   import('./pages/Page404' /*webpackChunkName: "404-page" */)
// );

const routes = [
  {
    exact: true,
    path: '/',
    component: HomePage,
    isProtected: false,
    redirectTo:
      localStorage.getItem('user') !== null ? '/diary' : '/calculator',
  },
  {
    path: '/diary',
    component: DiaryPage,
    label: 'Diary',
    isProtected: true,
    isNav: true,
    redirectTo: '/auth/login',
  },
  {
    path: '/calculator',
    component: CalculatorPage,
    label: 'Calculator',
    isProtected: true,
    isNav: true,
    redirectTo: '/auth/login',
  },
  {
    exact: false,
    path: '/auth/login',
    label: 'Sign In',
    component: LoginPage,
    isProtected: false,
    isLogBar: true,
    redirectTo: '/diary',
  },
  {
    exact: false,
    path: '/auth/signup',
    label: 'Registration',
    component: RegisterPage,
    isProtected: false,
    isLogBar: true,
    redirectTo: '/diary',
  },
];
export default routes;
