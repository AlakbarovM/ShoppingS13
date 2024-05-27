import React from 'react'
import styles from './Button.module.scss'
const Button = ({text, onclick}) => {
  return (
   <button className={styles.buton} onClick={onclick}>
    {text}
   </button>
  )
}

export default Button