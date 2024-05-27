import React from 'react'
import { CiHeart } from "react-icons/ci";
import styles from './Footor.module.scss'

const Footor = () => {
  return (
    <div className={styles.footor}>
        <div className={styles.container}>
                <h1>Copyright ©2024 All rights reserved | This template is made with <CiHeart size={20}/> by <span>Colorlib</span></h1>
        </div>
    </div>
  )
}

export default Footor