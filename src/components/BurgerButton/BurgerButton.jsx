import styles from './BurgerButton.module.scss';
import PropTypes from 'prop-types';

const BurgerBtn = ({ active, setActive }) => {
  return (
    <div className={styles.burgerBtnWrapper} onClick={() => setActive(!active)}>
      <div
        className={
          active ? `${styles.burgerBtn} ${styles.cross}` : `${styles.burgerBtn}`
        }
      >
        <span className={styles.burgerBtn__line} />
      </div>
    </div>
  );
};

export default BurgerBtn;

BurgerBtn.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func,
};
