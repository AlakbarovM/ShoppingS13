import React from 'react'
import styles from './Seller.module.scss'
const Seller = () => {
  return (
    <div className={styles.seller}>
        <div className={styles.container}>
            <div className={styles.sellertop}>
                <h1>Best Sellers </h1>
                <p>Shop</p>
            </div>
            <div className={styles.sellerBottom}>
                <div className={styles.sellerCardOne}>
                    <img src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_1.png" alt="logo" />
                    <h1>Quartz Belt Watch</h1>
                    <p>$150.00</p>
                </div>
                <div className={styles.sellerCardOne}>
                    <img src="https://preview.colorlib.com/theme/aranoz/img/feature/feature_2.png" alt="logo" />
                    <h1>Quartz Belt Watch</h1>
                    <p>$150.00</p>
                </div>
                <div className={styles.sellerCardOne}>
                    <img src="https://preview.colorlib.com/theme/aranoz/img/product/product_4.png" alt="logo" />
                    <h1>Quartz Belt Watch</h1>
                    <p>$150.00</p>
                </div>
                <div className={styles.sellerCardOne}>
                    <img src="https://preview.colorlib.com/theme/aranoz/img/product/product_7.png" alt="logo" />
                    <h1>Quartz Belt Watch</h1>
                    <p>$150.00</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Seller