import React, { useContext } from "react"

import styles from "./Navbar.module.scss";
import Hamburger from "./../../components/Hamburger"
import Search from "./../../components/Search"
import Title from "./../../components/Title"
import Profile from "./../../components/Profile"
import Cart from "./../../components/Cart"
import ModalContext from '../../context/ModalContext/ModalContext';

function Navbar () {
  const modal = useContext(ModalContext);

  return (
      <div className={styles.NavbarContainer}>
        <ul className={styles.NavIconList}>
          <li onClick={modal.toggleHamburger}><Hamburger /></li>
          <li onClick={modal.toggleSearch}><Search /></li>
        </ul>
        <ul className={styles.NavIconList}>
          <li><Title /></li>
        </ul>
        <ul className={styles.NavIconList}>
          <li onClick={modal.toggleProfile}><Profile /></li>
          <li onClick={modal.toggleCart}><Cart /></li>
        </ul>
      </div>
  )
}

export default Navbar;