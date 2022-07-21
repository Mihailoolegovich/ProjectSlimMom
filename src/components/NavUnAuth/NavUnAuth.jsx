import { NavLink } from 'react-router-dom';
import { useMemo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import routes from '../../routes';
import styles from './NavUnAuth.module.scss';
import { useNavigate } from 'react-router-dom';

export default function NavNotAuth({ closeModal, isModalOpen }) {
  const navLinks = useMemo(() => routes.filter(route => route.isLogBar), []);
  const dailyIntake = useSelector(state => state.calories.dailyCalorieIntake);

  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      <div className={styles.userWrapper}>
        <button
          type="button"
          className={styles.closeModal}
          onClick={() => {
            closeModal();
          }}
        >
          <svg
            width="12"
            height="7"
            viewBox="0 0 15 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 1.5V4.5H2M2 4.5L5.5 1M2 4.5L5.5 8"
              stroke="black"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>;
    };
  }, [closeModal]);

  return (
    <>
      <div className={styles.NavNotAuthWrapper}>
        {navLinks.map(link => (
          <NavLink
            key={uuidv4()}
            to={link.path}
            exact="true"
            className={({ isActive }) =>
              isActive ? styles.activeEnter : styles.enter
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      {isModalOpen && (
        <div className={styles.userWrapper}>
          <button
            type="button"
            className={styles.closeModal}
            onClick={() => {
              closeModal();
            }}
          >
            <svg
              width="12"
              height="7"
              viewBox="0 0 15 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 1.5V4.5H2M2 4.5L5.5 1M2 4.5L5.5 8"
                stroke="black"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
