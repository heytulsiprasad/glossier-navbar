import React, { useContext } from "react";

import ModalContext from '../../context/ModalContext/ModalContext';

function Sidebar() {
  const context = useContext(ModalContext);

  return (
    <div>
      <h6>I'm the Sidebar</h6>
    </div>
  )
}

export default Sidebar;