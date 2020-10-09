import React from "react"

import styles from "./Navbar.module.scss";
import Hamburger from "./../../components/Hamburger"
import Search from "./../../components/Search"
import Title from "./../../components/Title"
import Profile from "./../../components/Profile"
import Cart from "./../../components/Cart"

function Navbar () {
  return (
    <div className={styles.NavbarFrame}>
      <div className={styles.NavbarContainer}>
        <ul className={styles.NavIconList}>
          <li><Hamburger /></li>
          <li><Search /></li>
        </ul>
        <ul className={styles.NavIconList}>
          <li><Title /></li>
        </ul>
        <ul className={styles.NavIconList}>
          <li><Profile /></li>
          <li><Cart /></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;