import React from 'react'
import styles from './Subscribe.module.scss'
const Subscribe = () => {
  return (
    <div className={styles.sub}>
        <div className={styles.container}>
            <p>JOIN OUR NEWSLETTER</p>
            <h1>Subscribe to get Updated with new offers</h1>
                <div className={styles.subInp}>
                    <input type="text" placeholder='Enter Email Address' />
                    <button>SUBSCRIBE NOW</button>
                </div>
        </div>
    </div>
  )
}

export default Subscribe