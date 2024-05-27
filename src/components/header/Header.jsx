import React from 'react'
import styles from './Header.module.scss'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <div className={styles.header}>
        <div className={styles.container}>
                <div className={styles.headerLogo}>
                    <h1>Aranoz.</h1>
                    <div className={styles.hamburger}>
                    <GiHamburgerMenu size={23}/>
                    </div>
                </div>
                <div className={styles.nav}>

                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Shop</a></li>

                    <li><a href="">Pages</a></li>

                    <li><a href="">Blog</a></li>

                    <li><a href="">Contact</a></li>

                </ul>
                </div>

  
  <div className={styles.dropdown}>
  <button className={styles.dropbtn}>MENU</button>
  <div className={styles.dropdowncontent}>
  <a href="">Home</a>
  <a href="">Shop</a>
  <a href="">Pages</a>
  <a href="">Blog</a>
  <a href="">contact</a>
  </div>

</div>
                <div className={styles.headerIcons}>
                <CiSearch size={20}/>
                <CiHeart size={20}/>
                <FaCartPlus size={20}/>
                </div>
        </div>

    </div>
  )
}

export default Header