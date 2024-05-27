import React from 'react'
import styles from './Sofa.module.scss'
const Sofa = () => {
  return (
    <div className={styles.sofa}>
    <div className={styles.container}>
    <div className={styles.sofaText}>
        <h1>Wood &  Cloth Sofa </h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto,
             inventore impedit, ducimus nobis obcaecati quos dicta sunt illum consectetur officiis perferendis similique assumenda, autem atque.</p>
             <button>BUY NOW</button>
    </div>
    <div className={styles.sofaImg}>
        <img src="https://preview.colorlib.com/theme/aranoz/img/banner_img.png" alt="logo" />
    </div>
    </div>
    </div>
  )
}

export default Sofa