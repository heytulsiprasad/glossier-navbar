import React, { Fragment } from 'react'

import HamburgerModal from "../Hamburger/Modal"
import SearchModal from "../Search/Modal"
import ProfileModal from "../Profile/Modal"
import CartModal from "../Cart/Modal"

function Sidebar() {
  return (
    <Fragment>
      <HamburgerModal />
      <SearchModal />
      <ProfileModal />
      <CartModal />
    </Fragment>
  )
}

export default Sidebar
