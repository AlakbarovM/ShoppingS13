import React from 'react'
import Button from '../btns/Button'
import styles from './ProductCard.module.scss'
import { GiHamburgerMenu } from "react-icons/gi";

const ProductCard = ({item, addToBasket, addToWishlist}) => {
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
            <Button text='Sebete ekle' onclick={addToBasket} />
            <Button text='Favori ekle' onclick={addToWishlist} />
        </div>
    </div>
  )
}

export default ProductCard