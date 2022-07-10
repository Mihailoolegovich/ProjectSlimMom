// import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import Logo from '../Logo';
const AppBar = () => {
  //   const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <>
      <header>
        <Logo />
        <nav>
          <div>
            {/* {isLoggedIn ? */}
            <>
              <NavLink to="/login">Sign in</NavLink>
              <NavLink to="/registration">Registration</NavLink>
            </>
            {/* : */}
            <>
              <NavLink to="/diary"> Diary</NavLink>
              <NavLink to="/calculator">Calculator</NavLink>
            </>

            {/* } */}
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default AppBar;
