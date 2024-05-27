import React from 'react'
import Button from '../btns/Button'
import styles from './DashboardCard.module.scss'
const DashboardCard = ({item, sil}) => {
    
  return (
    <div className={styles.proBoxD}>
    <div className={styles.proBoxImgd}>
        <img src={item.thumbnail} alt="" />
    </div>
    <div className={styles.proBoxTextd}>
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

export default DashboardCard