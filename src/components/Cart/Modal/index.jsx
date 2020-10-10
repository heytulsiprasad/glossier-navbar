import React from "react";

import styles from "./Modal.module.scss";
import { ReactComponent as Cross } from "./../../../assets/cross.svg";
import { ReactComponent as Abstract } from "./../../../assets/abstract.svg";

function Modal({ onClose }) {
  return (
    <div className={styles.ModalContainer}>
      <div className={styles.ModalHeader}>
        <div className={styles.CloseBar}>
          <button type="button" onClick={onClose}>
            <Cross />
          </button>
          <h2>Your Bag</h2>
        </div>
        <span className={styles.ItemsBar}>
          <p>0 items</p>
        </span>
      </div>
      <div className={styles.ModalBody}>
        <div className={styles.CartWindow}>
          <span>$30.00 away from free standard shipping</span>
          <div className={styles.CylinderBox}>
            <div className="progressbar"></div>
          </div>
        </div>
        <div className={styles.EmptyDiv}>
          <Abstract />
          <p>Your shopping bag is empty</p>
        </div>
      </div>
    </div>
  )
}

export default Modal;