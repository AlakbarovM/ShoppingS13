import React from 'react'
import Button from '../btns/Button'
import styles from './ProductCard.module.scss'
const WishlistCard = ({item, sil}) => {
  return (
    <div className={styles.proBox}>
    <div className={styles.proBoxImg}>
        <img src={item.thumbnail} alt="" />
    </div>
    <div className={styles.proBoxText}>
        <h1>{item.title}</h1>
        <p>{item.price}$</p>
        <span>{item.description}</span>
    </div>
    <div className={styles.proBoxBtn}>
        <Button text='sil' onclick={sil} />
    </div>
</div>
  )
}

export default WishlistCard