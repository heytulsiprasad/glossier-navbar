import React, { useState } from "react";

import styles from "./Navlist.module.scss";
import FeaturedItems from './../../components/FeaturedItems/index';
import HandCream from "./../../assets/featured/HandCream.png";
import BodyheroCream from "./../../assets/featured/BodyheroCream.png";
import BodyheroDuo from "./../../assets/featured/BodyheroDuo.png";
import BodyHero from "./../../assets/featured/BodyHero.png";
import BalmDotCom from "./../../assets/featured/balmdotcom.png";
import BoybrowSilo from "./../../assets/featured/boybrow-silo.png";
import FutureDew from "./../../assets/featured/futuredew.png";
import LashSlick from "./../../assets/featured/lashslick.png";
import ShopGrid from "./../../assets/featured/ShopGrid.png";
import SuperPure from "./../../assets/featured/SuperPure.png";

const listOfItems = [
  {
    icon: HandCream,
    name: "Hand Cream",
    lead: "crème pour les mains"
  },
  {
    icon: BodyHero,
    name: "Body Hero Daily Oil Wash",
    lead: "daily oil wash"
  },
  {
    icon: BodyheroCream,
    name: "Body Hero Daily Perfecting Cream",
    lead: "daily perfecting cream"
  },
  {
    icon: BodyheroDuo,
    name: "Body Hero Duo",
    lead: "oil wash + perfecting cream"
  },
  {
    icon: BalmDotCom,
    name: "Balm Dotcom",
    lead: "universal skin salve"
  },
  {
    icon: BoybrowSilo,
    name: "Boy Brow",
    lead: "grooming pomade"
  },
  {
    icon: FutureDew,
    name: "Futuredew",
    lead: "oil serum hybrid"
  },
  {
    icon: LashSlick,
    name: "Lash Slick",
    lead: "film form mascara"
  },
  {
    icon: ShopGrid,
    name: "Priming Moisturizer Balance",
    lead: "oil-control gel cream"
  },
  {
    icon: SuperPure,
    name: "Super Pure",
    lead: "niacinamide + zinc serum"
  },
]

const getRandomArr = (len = 4, max = 9) => {
  let randArr = []
  
  for (let i = 0; i < len; i++) {
    let num = Math.floor(Math.random() * Math.floor(max))
    randArr.push(listOfItems[num])
  }

  return randArr;
}

function Navlist() {
  const [hover, isHover] = useState(false);
  const [items, setItems] = useState(getRandomArr());

  const hoverAreaEnter = () => {
    isHover(true);
  }

  const hoverAreaExit = () => {
    isHover(false);
  }

  const updateItems = () => {
    setItems(getRandomArr())
  }

  return (
      <div className={[styles.NavlistContainer, hover ? styles.onHover : undefined].join(" ")} onMouseLeave={hoverAreaExit}>
        <ul className={styles.Navlist} onMouseEnter={hoverAreaEnter}>
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
        {hover ? <FeaturedItems items={items} /> : null}
      </div>
  )
}

export default Navlist;