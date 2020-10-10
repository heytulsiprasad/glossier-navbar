import React from "react";
import { CSSTransition } from "react-transition-group";

import { ReactComponent as Cross } from "./../../../assets/cross.svg";
import { ReactComponent as Chevron } from "./../../../assets/chevron.svg";
import styles from "./Modal.module.scss";

function Modal({ onClose, active }) {
  return (
    <CSSTransition in={active} timeout={300} classNames="slide" unmountOnExit>
    <div className={[styles.ModalContainer, "slide"].join(" ")}>
      <div className={styles.Controls}>
        <button onClick={onClose} type="button" aria-label="Close Menu"><Cross/></button>
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
    </CSSTransition>
  )
}

export default Modal;