import React from "react"

import { ReactComponent as Icon } from "./icon.svg";
import styles from "./Search.module.scss";

function Search() {
  return (
    <div className={styles.Search}>
      <button className={styles.Button} type="button" aria-label="Menu">
        <Icon />
      </button>
    </div>
  )
}

export default Search;