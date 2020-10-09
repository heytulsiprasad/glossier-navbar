import React from "react"

import { ReactComponent as Icon } from "./icon.svg";
import styles from "./Title.module.scss";

function Title() {
  return (
    <div className={styles.Title}>
      <button className={styles.Button} type="button" aria-label="Menu">
        <Icon />
      </button>
    </div>
  )
}

export default Title;