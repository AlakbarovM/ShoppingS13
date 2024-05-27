import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Sofa from '../../components/sofa/Sofa'
import Seller from '../../components/sellers/Seller'
import Subscribe from '../../components/subscribe/Subscribe'
import Creative from '../../creative/Creative'
import Footor from '../../footor/Footor'
import styles from './Home.module.scss'
import axios from 'axios'
import ProductCard from '../../cards/ProductCard'
import { useNavigate } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";

const Home = () => {
  const navigate = useNavigate()
  const goHome = () => {
    navigate('/')
  }
  const goBasket = () => {
    navigate('/basket')
  }
  const goWishlist = () => {
    navigate('/wishlist')
  }
  const goDashboard = () => {
    navigate('/dashboard')
  }
  const [data, setData] = useState([])
  const getData = () => {
    axios.get('https://dummyjson.com/products')
    .then((res) => {
      setData(res.data.products)
    })
  }
  useEffect(() => {
    getData()
  },[])
  const addToBasket = (data) => {
    axios.post('https://6649c85d4032b1331beecc94.mockapi.io/basket',data)

  }
  const addToWishlist = (data) => {
    axios.post('https://6649c85d4032b1331beecc94.mockapi.io/wishlist',data)
  }
  return (
    <div>
        <Header/>
        <Sofa/>
        <div className={styles.proBoxMain}>
          <div className={styles.container}>
            <div className={styles.proBoxMainTop}>
              <div className={styles.proBoxMainTopText}>

                <h1>Awesome </h1> <p>Shop</p>
              </div>
              <div className={styles.proBoxMainTopNav}>
                <ul>
                  <li><a onClick={goHome} href>HOME</a></li>
                  <li><a onClick={goBasket} href>SEBET</a></li> 
                  <li><a onClick={goWishlist} href>FAVORI</a></li>
                  <li><a onClick={goDashboard} href>ADMIN PANEL</a></li>
                </ul>
                <div className={styles.proBoxMainTopNavHamburger}>
                <GiHamburgerMenu size={20}/>
                </div>
              </div>
            </div>
            <div className={styles.proBoxMainBottom}> 
              {data && data.map((item) => <ProductCard item={item} addToBasket={() => addToBasket(item)} addToWishlist={() => addToWishlist(item)} /> )}
            </div>
          </div>
        </div>
        <Seller/>
        <Subscribe/>
        <Creative/>
        <Footor/>
    </div>
  )
}

export default Home