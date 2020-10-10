import React, { useContext, useEffect, useRef } from "react";

import ModalContext from '../../context/ModalContext/ModalContext';
import HamburgerModal from "../../components/Hamburger/Modal";
import SearchModal from "../../components/Search/Modal";
import CartModal from "../../components/Cart/Modal";
import ProfileModal from "../../components/Profile/Modal";

function Sidebar() {
  const node = useRef();

  const context = useContext(ModalContext);
  const { 
    isHamburgerOpen, 
    isSearchOpen, 
    isProfileOpen, 
    isCartOpen, 
    toggleCart, 
    toggleHamburger, 
    toggleProfile, 
    toggleSearch 
  } = context;

  let sidebar;
  let exitModal;

  if (isHamburgerOpen) {
    exitModal = toggleHamburger
    sidebar = <HamburgerModal active={isHamburgerOpen} onClose={exitModal} />
  } else if (isSearchOpen) {
    exitModal = toggleSearch
    sidebar = <SearchModal active={isSearchOpen} onClose={exitModal} />
  } else if (isProfileOpen) {
    exitModal = toggleProfile
    sidebar = <ProfileModal active={isProfileOpen} onClose={exitModal} />
  } else if (isCartOpen) {
    exitModal = toggleCart
    sidebar = <CartModal active={isCartOpen} onClose={exitModal} />
  } else {
    exitModal = null;
    sidebar = null;
  }

  const handleClick = (e) => {
    if (node.current.contains(e.target)) {
      // Inside click
      return;
    }

    // Outside click
    if (exitModal) exitModal();
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    }
  
    // eslint-disable-next-line
  }, [exitModal])

  return (
    <div ref={node}>
      {sidebar}
    </div>
  )
}

export default Sidebar;