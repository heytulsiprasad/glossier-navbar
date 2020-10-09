import React from "react"

import { ReactComponent as Icon } from "./icon.svg";
import styles from "./Cart.module.scss";

function Cart() {
  return (
    <div className={styles.Cart}>
      <button className={styles.Button} type="button" aria-label="Menu">
        <Icon />
      </button>
    </div>
  )
}

export default Cart;