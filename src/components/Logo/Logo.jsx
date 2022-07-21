import React from 'react';
import { ReactComponent as LogoImage } from '../../icons/logo-pic.svg';
import { ReactComponent as LogoText } from '../../icons/logo-text.svg';
import styles from './Logo.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Logo({ isAuthorized = false }) {
  return (
    <Link className={styles.logowrapper} to="/">
      <LogoImage width={46} height={44} className={styles.logoImage} />

      <LogoText
        width={107}
        height={16}
        className={isAuthorized ? styles.logoTextAuth : styles.logoTextNotAuth}
      />
    </Link>
  );
}

Logo.propTypes = {
  isAuthorized: PropTypes.bool,
};
