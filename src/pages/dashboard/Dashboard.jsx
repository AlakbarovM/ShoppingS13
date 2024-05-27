import React, { useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import styles from './Dashboard.module.scss'
import DashboardCard from '../../cards/DashboardCard'
import { useFormik } from 'formik'
const Dashboard = () => {
const [search, setSearch] = useState("")
const [data, setData] = useState([])

const filterData = data.filter((item) => item.title.toLowerCase().includes(search.toLowerCase())
    
)
const md = (e) => {
    setSearch(e.target.value)
}
    const navigate = useNavigate()

    const goHome = () => {
      navigate('/')
    }
    const goWishlist = () => {
        navigate('/wishlist')
      }

  const getData = () => {
    axios.get('https://6649c85d4032b1331beecc94.mockapi.io/basket')
    .then((res) => {
      setData(res.data)
    })
  }
  useEffect(() => {
    getData()
  },[])
 const removeItem = (id) => {
    axios.delete(`https://6649c85d4032b1331beecc94.mockapi.io/basket/${id}`)
    setTimeout(() => {
        getData()
    }, 500);
 }
 const formik = useFormik({
    initialValues: {
      thumbnail: '',
      title: '',
      price: '',
    },
    onSubmit: (values, {resetForm}) => {
        axios.post(`https://6649c85d4032b1331beecc94.mockapi.io/basket`,values)
        setTimeout(() => {
            getData()
            resetForm()
        }, 1000);
    },
  });
  return (
<div>
        <Header/>
        
        <div className={styles.proBoxMainD}>
          <div className={styles.container}>
            <div className={styles.proBoxMainTopD}>
              <div className={styles.proBoxMainTopTextD}>

                <h1>Awesome </h1> <p>Shop</p>
              </div>
              <div className={styles.proBoxMainTopForm}>
              <form onSubmit={formik.handleSubmit}>
       <input        
       placeholder='image adress'
         name="thumbnail"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.thumbnail}
       />
       <input     
       placeholder='baslıq'   
         name="title"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.title}
       />
       <input    
       placeholder='qiymət'   
         name="price"
         
         onChange={formik.handleChange}
         value={formik.values.price}
       />
       <button type="submit">Submit</button>
     </form>
              </div>
              <div className={styles.proBoxMainTopNavD}>
                <ul>
                  <li><a onClick={goHome} href>HOME</a></li>
                  <li><a href="">SEBET</a></li> 
                  <li><a onClick={goWishlist} href>FAVORI</a></li>
                  <li><a href="">ADMIN PANEL</a></li>
                </ul>
              </div>
            </div>
            <div className={styles.proBoxMainBottomD}> 
            <div className={styles.proBoxMainBottomSearch}>
                {filterData && filterData.map(item => <p>{item.title}</p> )}
                <input placeholder='axtar' type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
              {data && data.map((item) => <DashboardCard item={item} sil={() => removeItem(item.id)} /> )}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Dashboard