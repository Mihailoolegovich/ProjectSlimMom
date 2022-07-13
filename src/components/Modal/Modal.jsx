import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
//Import data from Form

import styles from './Modal.styled.css';

const Modal = ({ children }) => {
  const dispatch = useDispatch();

  const onClose = useCallback(() => {
    dispatch(//**Import data from Form**//.modalClose());
  }, [dispatch]);

  const handleKeyDown = useCallback(
    e => {
      if (e.key === 'Escape') {
        return onClose && onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [handleKeyDown]);

  const handleBackDrop = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const handleClickOnCloseBtn = e => {
    e.target.nodeName === 'BUTTON' && onClose();
  };

  return createPortal(
    <div className={styles.overlay} onClick={handleBackDrop}>
      <div className={styles.modal}>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={handleClickOnCloseBtn}
          ></button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};

export default Modal;