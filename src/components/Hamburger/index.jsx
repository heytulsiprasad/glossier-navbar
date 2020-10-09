import React from "react"

import { ReactComponent as Icon } from "./icon.svg";
import styles from "./Hamburger.module.scss";

function Hamburger() {
  return (
    <div className={styles.Hamburger}>
      <button className={styles.Button} type="button" aria-label="Menu">
        <Icon />
      </button>
    </div>
  )
}

export default Hamburger;