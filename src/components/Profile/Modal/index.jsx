import React, { useContext, useRef, useEffect } from "react";
import { CSSTransition } from 'react-transition-group';

import styles from "./Modal.module.scss";
import { ReactComponent as Cross } from "./../../../assets/cross.svg";
import { ReactComponent as Cart } from "./../../../assets/cart.svg";
import { ReactComponent as Google } from "./../../../assets/google.svg";
import { ReactComponent as Facebook } from "./../../../assets/facebook.svg";
import ModalContext from "../../../context/ModalContext/ModalContext";

function Modal() {
  const { isProfileOpen, toggleProfile } = useContext(ModalContext)
  const node = useRef()

  useEffect(() => {
    if (isProfileOpen) {
      const handleOutsideClick = (e) => {
        if (node.current && !node.current.contains(e.target)) {
          toggleProfile();
        }
      }

      document.addEventListener("mousedown", handleOutsideClick);
  
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      }
    }
  }, [isProfileOpen, toggleProfile]);

  return (
    <CSSTransition in={isProfileOpen} timeout={480} classNames="slideLeft" unmountOnExit>
      <div ref={node} className={styles.ModalContainer}>
      <div className={styles.ModalHeader}>
        <div className={styles.IconCross}>
          <button onClick={toggleProfile} type="button" aria-label="Close Menu"><Cross /></button>
        </div>
        <div className={styles.ModalTitle}>
          <h5>Sign In</h5>
        </div>
        <div className={styles.IconCart}>
          <button onClick={toggleProfile} type="button" aria-label="Close Menu"><Cart /></button>
        </div>
      </div>
      <div className={styles.ModalBody}>
        <div className={styles.LogInWrapper}>
          <a href="#/" className="login-google" title="Login with Google">
            <Google />
            <span>Continue with Google</span>
          </a>
          <a href="#/" className="login-facebook" title="Login with Facebook">
            <Facebook />
            <span>Continue with Facebook</span>
          </a>
          <div className={styles.Divider}></div>
          <div className={styles.LogIn}>
            <div>
              <input className={styles.InputData} id="email" type="email" placeholder="jane@example.com" />
              <label className={styles.LabelData} htmlFor="email">
                <span>Email Address</span>
              </label>
            </div>
            <div>
              <input className={styles.InputData} id="password" type="password" />
              <label className={styles.LabelData} htmlFor="password">
                <span>Password</span>
              </label>
            </div>
            <div className={styles.CheckBox}>
              <label className={styles.CheckboxLabel} htmlFor="rememberMe">
                <input type="checkbox" id="rememberMe" name="rememberMe" value="rememberMe" />
                <span>Remember Me</span>
              </label>
            </div>
          </div>

        </div>
          <div className={styles.ForgotPassword}>
            <button type="button">Forgot your password?</button>
        </div>
        <div className={styles.BtnGroup}>
          <button type="button" className={styles.SignIn}>Sign In</button>
          <p className={styles.BtnInfo}>Get free Glossier credit for referring friends and save payment information for easier purchasing.</p>
          <button type="button" className={styles.CreateAccount}>Create An Account</button>
        </div>
      </div>
    </div>
    </CSSTransition>
  )
}

export default Modal; 