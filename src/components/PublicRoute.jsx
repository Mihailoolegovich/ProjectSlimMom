import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from '../redux/auth/auth-selectors';
import PropTypes from 'prop-types';

export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
}) {
  const isLoggedIn = useSelector(authSelectors.getLoggedOn);
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
}

PublicRoute.propTypes = {
  restricted: PropTypes.bool,
  redirectTo: PropTypes.string,
};
