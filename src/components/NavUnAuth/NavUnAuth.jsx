import { NavLink } from 'react-router-dom';
import { useMemo } from 'react';

import { v4 as uuidv4 } from 'uuid';

import routes from '../../routes';
import styles from './NavUnAuth.module.scss';

export default function NavNotAuth() {
  const navLinks = useMemo(() => routes.filter(route => route.isLogBar), []);

  return (
    <div className={styles.NavNotAuthWrapper}>
      {navLinks.map(link => (
        <NavLink
          key={uuidv4()}
          to={link.path}
          exact="true"
          className={styles.enter}
          activeClassName={styles.activeEnter}
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  );
}
