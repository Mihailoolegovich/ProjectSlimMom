// import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';

const AppBar = () => {
  //   const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <>
      <header>
        <nav>
          <div>
            <NavLink to="/">
              <img
                src={require('../../icons/logoMobile.png')}
                alt="logo"
                style={{
                  width: '47px',
                  height: '44px',
                }}
              />
            </NavLink>
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
