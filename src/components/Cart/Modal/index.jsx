import React, { useContext, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";

import styles from "./Modal.module.scss";
import { ReactComponent as Cross } from "./../../../assets/cross.svg";
import { ReactComponent as Abstract } from "./../../../assets/abstract.svg";
import ModalContext from "../../../context/ModalContext/ModalContext";

function Modal() {
  const { isCartOpen, toggleCart } = useContext(ModalContext)
  const node = useRef()

  useEffect(() => {
    if (isCartOpen) {
      const handleOutsideClick = (e) => {
        if (node.current && !node.current.contains(e.target)) {
          toggleCart();
        }
      }

      document.addEventListener("mousedown", handleOutsideClick);
  
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      }
    }
  }, [isCartOpen, toggleCart])


  return (
    <CSSTransition in={isCartOpen} timeout={480} classNames="slideLeft" unmountOnExit>
      <div ref={node} className={styles.ModalContainer}>
      <div className={styles.ModalHeader}>
        <div className={styles.CloseBar}>
          <button type="button" onClick={toggleCart}>
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
    </CSSTransition>
  )
}

export default Modal;