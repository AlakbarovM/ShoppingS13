import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/header/Header'
import WishlistCard from '../../cards/WishlistCard'
import styles from '../home/Home.module.scss'
import Footor from '../../footor/Footor'
const Wishlist = () => {
    const navigate = useNavigate()
    const goHome = () => {
      navigate('/')
    }
    const goDashboard = () => {
      navigate('/dashboard')
    }
      const goBasket = () => {
        navigate('/basket')
      }
    const [data, setData] = useState([])
  const getData = () => {
    axios.get('https://6649c85d4032b1331beecc94.mockapi.io/wishlist')
    .then((res) => {
      setData(res.data)
    })
  }
  useEffect(() => {
    getData()
  },[])
 const remove = (id) => {
    axios.delete(`https://6649c85d4032b1331beecc94.mockapi.io/wishlist/${id}`)
    setTimeout(() => {
        getData()
    }, 500);
 }
  return (
    <div>
    <Header/>
    
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
              <li><a href="">FAVORI</a></li>
              <li><a onClick={goDashboard} href>ADMIN PANEL</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.proBoxMainBottom}> 
          {data && data.map((item) => <WishlistCard item={item} sil={() => remove(item.id)} /> )}
        </div>
      </div>
    </div>

    <Footor/>
</div>
  )
}

export default Wishlist