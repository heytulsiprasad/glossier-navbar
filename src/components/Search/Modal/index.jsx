import React, { useContext, useEffect, useRef } from "react";

import styles from "./Modal.module.scss";
import { ReactComponent as Cross } from "./../../../assets/cross.svg";
import { ReactComponent as Search } from "./../../../assets/search.svg";
import BalmDotCom from "./../../../assets/search/balmdotcom.jpg";
import BoyBrow from "./../../../assets/search/boybrow.jpg";
import CloudPaint from "./../../../assets/search/cloudpaint.jpg";
import ModalContext from "../../../context/ModalContext/ModalContext";

function Modal() {
  const { isSearchOpen, toggleSearch } = useContext(ModalContext)
  const node = useRef()

  useEffect(() => {
    if (isSearchOpen) {
      const handleOutsideClick = (e) => {
        if (node.current && !node.current.contains(e.target)) {
          toggleSearch();
        }
      }

      document.addEventListener("mousedown", handleOutsideClick);
  
      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      }
    }
  }, [isSearchOpen, toggleSearch])


  return (
    isSearchOpen && (
      <div ref={node} className={styles.ModalContainer}>
      <div className={styles.Header}>
        <div className={styles.SearchContainer}>
          <div className={styles.SearchBox}>
            <div className={styles.IconPack}>
              <button onClick={toggleSearch} aria-label="Close search panel">
                <Cross />
              </button>
              <button onClick={toggleSearch} aria-label="Start Search">
                <Search />
              </button>
            </div>
            <div className={styles.SearchBarContainer}>
              <div className={styles.SearchBar}>
                <input
                  type="text"
                  className={styles.SearchInput}
                  id="search-input"
                  placeholder="Search for products, categories, content"
                  maxLength="100"
                  minLength="0"
                  autoComplete="on"
                  aria-label="Search for products, categories, content"
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ProductCatalogue}>
        <div className={styles.ProductContainer}>
          <div className={styles.MainContainer}>
            <div className={styles.PopularSearches}>
              <h1 className={styles.PopularSearchesHeading}>Most popular searches</h1>
              <ul className={styles.PopularSearchesBox}>
                <li>
                  <p>cloud paint</p>
                </li>
                <li>
                  <p>balm</p>
                </li>
                <li>
                  <p>lip</p>
                </li>
                <li>
                  <p>boy brow</p>
                </li>
                <li>
                  <p>lip gloss</p>
                </li>
                <li>
                  <p>mascara</p>
                </li>
                <li>
                  <p>moisturizer</p>
                </li>
              </ul>
            </div>
            <div className={styles.PopularProductsContainer}>
              <div className={styles.PopularProducts}>
                <h1 className={styles.PopularProductsHeading}>
                  Most popular products
                </h1>
                <ul className={styles.PopularProductsBox}>
                  <li className={styles.Product}>
                    <div className={styles.ProductImage}>
                      <img src={BalmDotCom} alt="Product Item" />
                    </div>
                    <div className={styles.ProductInfo}>
                      <a href="#/">
                        <p className={styles.productHeading}>Balm Dotcom</p>
                        <p className={styles.productDescription}>universal skin salve</p>
                      </a>
                      <p className={styles.productAvailability}>9 falvors available</p>
                    </div>
                  </li>
                  <li className={styles.Product}>
                    <div className={styles.ProductImage}>
                      <img src={BoyBrow} alt="Product Item" />
                    </div>
                    <div className={styles.ProductInfo}>
                      <a href="#/">
                        <p className={styles.productHeading}>Boy Brow</p>
                        <p className={styles.productDescription}>grooming pomade</p>
                      </a>
                      <p className={styles.productAvailability}>5 shades available</p>
                    </div>
                  </li>
                  <li className={styles.Product}>
                    <div className={styles.ProductImage}>
                      <img src={CloudPaint} alt="Product Item" />
                    </div>
                    <div className={styles.ProductInfo}>
                      <a href="#/">
                        <p className={styles.productHeading}>Cloud Paint</p>
                        <p className={styles.productDescription}>saemless cheek color</p>
                      </a>
                      <p className={styles.productAvailability}>6 shades available</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      )
  )
}

export default Modal;