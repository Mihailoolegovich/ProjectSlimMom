import React from "react";
import styles from "./Modal.styled.css";
import { useEffect } from "react";
import ReactDom from "react-dom";

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleEscape);
    const body = document.querySelector("body");
    body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleEscape);
      window.removeEventListener("click", handleButtonClick);
      const body = document.querySelector("body");
      body.style.overflow = "auto";
    };
  });

  const handleEscape = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleButtonClick = (e) => {
    if (e.target.tagName === "BUTTON") {
      console.log(e.target.tagName);
      onClose();
    }
  };

  return ReactDom.createPortal(
    <div
      className={styles.moduleMainContainerOverlay}
      onClick={handleBackdropClick}
    >
      <div className={styles.moduleMainContainer}>
        <button className={styles.closeModalBtn} onClick={handleButtonClick} />
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")

  );
};

export default Modal;
