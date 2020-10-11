import React, { useContext, useRef, useEffect } from "react";

import ModalContext from './../../../context/ModalContext/ModalContext';
import { ReactComponent as Cross } from "./../../../assets/cross.svg";
import { ReactComponent as Chevron } from "./../../../assets/chevron.svg";
import styles from "./Modal.module.scss";

function Modal() {
  const { isHamburgerOpen, toggleHamburger } = useContext(ModalContext);
  const node = useRef();

  useEffect(() => {
    if (isHamburgerOpen) {
      const handleOutsideClick = (e) => {
        if (node.current && !node.current.contains(e.target)) {
          toggleHamburger();
        }
      }

      document.addEventListener("mousedown", handleOutsideClick);
  
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      }
    }
  }, [isHamburgerOpen, toggleHamburger])


  return (
    isHamburgerOpen && (
        <div ref={node} className={styles.ModalContainer}>
          <div className={styles.Controls}>
            <button onClick={toggleHamburger} type="button" aria-label="Close Menu"><Cross/></button>
          </div>
          <div className={styles.ModalBodyMain}>
            <ul className={styles.ModalItems}>
              <li>Skincare</li>
              <li>Makeup</li>
              <li>Body</li>
              <li>Fragrance</li>
              <li>Shop our Sets</li>
            </ul>
            <ul className={styles.ModalItems}>
              <li>Looks IRL</li>
              <li>Into The Gloss</li>
              <li>About Glossier</li>
            </ul>
          </div>
          <div className={styles.ModalFooter}>
            <div className={styles.ModalDropdownContainer}>
            <select name="places" id="places">
              <option value="us">United States</option>
              <option value="canada-en">Canada (EN)</option>
              <option value="canada-fr">Canada (FR)</option>
              <option value="uk">United Kingdom</option>
              <option value="ireland">Ireland</option>
              <option value="sweden">Sweden</option>
              <option value="denmark">Denmark</option>
              <option value="france">France</option>
            </select>
            <label className={styles.DropdownLabel} htmlFor="places">
              <span className={styles.TextFieldSpan}>Shipping to:</span>
              <div className={styles.IconWrapper}><Chevron /></div>
            </label>
            </div>
          </div>
        </div>
    )
  )
}

export default Modal;