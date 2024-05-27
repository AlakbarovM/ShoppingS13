import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BsketProductCard from '../../cards/BsketProductCard'
import Header from '../../components/header/Header'
import Footor from '../../footor/Footor'
import styles from '../home/Home.module.scss'
import { useNavigate } from 'react-router-dom'
const Basket = () => {
    const navigate = useNavigate()
    const goHome = () => {
      navigate('/')
    }
    const goWishlist = () => {
        navigate('/wishlist')
      }
    const goDashboard = () => {
        navigate('/dashboard')
      }
    const [data, setData] = useState([])
  const getData = () => {
    axios.get('https://6649c85d4032b1331beecc94.mockapi.io/basket')
    .then((res) => {
      setData(res.data)
    })
  }
  useEffect(() => {
    getData()
  },[])
 const remove = (id) => {
    axios.delete(`https://6649c85d4032b1331beecc94.mockapi.io/basket/${id}`)
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
                  <li><a href="">SEBET</a></li> 
                  <li><a onClick={goWishlist} href>FAVORI</a></li>
                  <li><a onClick={goDashboard} href>ADMIN PANEL</a></li>
                </ul>
              </div>
            </div>
            <div className={styles.proBoxMainBottom}> 
              {data && data.map((item) => <BsketProductCard item={item} sil={() => remove(item.id)} /> )}
            </div>
          </div>
        </div>
    
        <Footor/>
    </div>
  )
}

export default Basket