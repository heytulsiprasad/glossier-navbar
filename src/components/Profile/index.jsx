import React from "react"

import { ReactComponent as Icon } from "./icon.svg";
import styles from "./Profile.module.scss";

function Profile() {
  return (
    <div className={styles.Profile}>
      <button className={styles.Button} type="button" aria-label="Menu">
        <Icon />
      </button>
    </div>
  )
}

export default Profile;