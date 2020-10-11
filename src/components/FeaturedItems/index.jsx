import React from 'react'

import styles from "./FeaturedItems.module.scss";

function FeaturedItems({ items }) {
  console.log(items);

  return (
    <div className={styles.FeaturedItems}>
      <h5 className={styles.Heading}>Featured</h5>
      <div className={styles.ProductCards}>
        {items && items.map((item, idx) => (
          <div key={idx} className={styles.ProductCard}>
            <a href="#/" className={styles.ProductImageLink}>
              <div className={styles.ProductImage}>
                <img src={item.icon} alt={item.name} />
              </div>
            </a>
            <a href="#/" className={styles.ProductName}>
              <p>{item.name}</p>
            </a>
            <p className={styles.ProductLead}>{item.lead}</p>
          </div>
        ))}       
      </div>
      <div className={styles.Footer}>
          <a href="#/">View All Items</a>
      </div>
    </div>
  )
}

export default FeaturedItems
