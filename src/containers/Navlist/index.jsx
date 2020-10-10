import React, { Fragment, useState } from "react";

import styles from "./Navlist.module.scss";
import FeaturedItems from './../../components/FeaturedItems/index';

const defaultItems = [
  {
    icon: "https://i.imgur.com/Jk7PQdt.jpg",
    name: "Body Hero Daily Oil Wash",
    lead: "daily oil wash"
  },
  {
    icon: "https://i.imgur.com/FTqblXh.jpeg",
    name: "Body Hero Daily Perfecting Cream",
    lead: "daily perfecting cream"
  },
  {
    icon: "https://i.imgur.com/Pw40Uu8.jpeg",
    name: "Body Hero Duo",
    lead: "oil wash + perfecting cream"
  },
  {
    icon: "https://i.imgur.com/GJmH6jm.jpg",
    name: "Hand Cream",
    lead: "Creme pour les mains"
  }
]

function Navlist() {
  const [hover, isHover] = useState(false);
  const [items, setItems] = useState([...defaultItems]);

  const hoverAreaEnter = () => {
    isHover(true);
  }

  const hoverAreaExit = () => {
    isHover(false);
  }

  const updateItems = () => {
    setItems([...defaultItems])
  }

  return (
      <div className={[styles.NavlistContainer, hover ? styles.onHover : undefined].join(" ")} onMouseEnter={hoverAreaEnter} onMouseLeave={hoverAreaExit}>
        <ul className={styles.Navlist}>
          <li className={styles.NavlistItem} onMouseEnter={updateItems}>
            <a href="#/">Shop All</a>
          </li>
          <li className={styles.NavlistItem} onMouseEnter={updateItems}>
            <a href="#/">Skincare</a>
          </li>
          <li className={styles.NavlistItem} onMouseEnter={updateItems}>
            <a href="#/">Makeup</a>
          </li>
          <li className={styles.NavlistItem} onMouseEnter={updateItems}>
            <a href="#/">Body</a>
          </li>
          <li className={styles.NavlistItem} onMouseEnter={updateItems}>
            <a href="#/">Fragrance</a>
          </li>
          <li className={styles.NavlistItem} onMouseEnter={updateItems}>
            <a href="#/">Shop our Sets</a>
          </li>
          <li className={styles.NavlistItem} onMouseEnter={updateItems}>
            <a href="#/">GlossiWEAR</a>
          </li>
          <li className={styles.NavlistItem} onMouseEnter={updateItems}>
            <a href="#/">Take our Skincare Quiz</a>
          </li>
          <li className={styles.NavlistItem} onMouseEnter={updateItems}>
            <a href="#/">Meet the Grantees</a>
          </li>
        </ul>
        {hover && <FeaturedItems items={items} />}
      </div>
  )
}

export default Navlist;