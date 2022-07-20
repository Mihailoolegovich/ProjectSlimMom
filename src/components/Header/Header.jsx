import Logo from '../Logo';
import Nav from '../Nav';
import NavAuth from '../NavAuth/NavAuth';
import NavNotAuth from '../NavUnAuth/NavUnAuth';

import { ReactComponent as ArrowBack } from '../../icons/arrowBack.svg';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Header.module.scss';
import { authSelectors } from '../../redux/auth';
import PropTypes from 'prop-types';

export default function Header({ closeModal, isModalOpen }) {
  let navigate = useNavigate();
  let goBack = false;

  function handleGoBack() {
    navigate('/', { replace: true });
    goBack = false;
  }
  const isAuthenticated = useSelector(authSelectors.getLoggedOn);
  return (
    <div className={styles.HeaderWrapper}>
      <div className={styles.navWrapper}>
        <Logo isAuthorized={isAuthenticated} />

        <Nav>
          {' '}
          {isAuthenticated ? (
            <NavAuth closeModal={closeModal} isModalOpen={isModalOpen} />
          ) : (
            <NavNotAuth closeModal={closeModal} />
          )}{' '}
        </Nav>

        {goBack && (
          <button type="button" className={styles.arrowBtn}>
            <ArrowBack onClick={handleGoBack} />
          </button>
        )}
      </div>
    </div>
  );
}

Header.propTypes = {
  closeModal: PropTypes.func,
  isModalOpen: PropTypes.bool,
};
