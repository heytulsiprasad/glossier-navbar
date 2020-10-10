import React from "react";

import styles from "./Navlist.module.scss";

function Navlist() {
  return (
    <div className={styles.NavlistContainer}>
      <ul className={styles.Navlist}>
        <li className={styles.NavlistItem}>
          <a href="#/">Shop All</a>
        </li>
        <li className={styles.NavlistItem}>
          <a href="#/">Skincare</a>
        </li>
        <li className={styles.NavlistItem}>
          <a href="#/">Makeup</a>
        </li>
        <li className={styles.NavlistItem}>
          <a href="#/">Body</a>
        </li>
        <li className={styles.NavlistItem}>
          <a href="#/">Fragrance</a>
        </li>
        <li className={styles.NavlistItem}>
          <a href="#/">Shop our Sets</a>
        </li>
        <li className={styles.NavlistItem}>
          <a href="#/">GlossiWEAR</a>
        </li>
        <li className={styles.NavlistItem}>
          <a href="#/">Take our Skincare Quiz</a>
        </li>
        <li className={styles.NavlistItem}>
          <a href="#/">Meet the Grantees</a>
        </li>
      </ul>
    </div>
  )
}

export default Navlist;