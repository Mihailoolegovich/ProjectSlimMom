import React from 'react';
import { PacmanLoader } from 'react-spinners';
import styles from './Loader.styled.css';

const Loader = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.loaderContainer}>
        <PacmanLoader
          color="#0dec1d"
          loading="true"
          margin={2}
          size={50}
          speedMultiplier={1}
        ></PacmanLoader>
      </div>
    </div>
  );
};

export default Loader