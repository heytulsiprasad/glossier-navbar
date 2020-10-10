import React, { useContext } from "react"

import styles from "./Layout.module.scss";
import ModalContext from './../../context/ModalContext/ModalContext';

function Layout({ children }) {
  const context = useContext(ModalContext)
  console.log(context)

  const isOpen = context.isCartOpen 
                  || context.isHamburgerOpen 
                  || context.isProfileOpen 
                  || context.isSearchOpen

  return (
    <div className={isOpen ? styles.modalIsOpen : undefined}>
      <div className={styles.Layout} style={{ backgroundColor: !isOpen && `#fff` }}>
        {children}
      </div>
    </div>
  )
}

export default Layout;