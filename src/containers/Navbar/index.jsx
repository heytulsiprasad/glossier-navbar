import React from "react"

import styles from "./Navbar.module.scss";
import Hamburger from "./../../components/Hamburger"

function Navbar () {
  return (
    <div className={styles.NavbarFrame}>
      <div className={styles.NavbarContainer}>
        <Hamburger />
      </div>
    </div>
  )
}

export default Navbar;