import React from 'react'
import Home_Banner from '../Componrnts/Home_Banner'
import Home_Post from '../Componrnts/Home_Post'
import Home_Search from '../Componrnts/Home_Search'

const Home = () => {
  return (
       <div className='home_container'>
          <Home_Banner/>
          <Home_Search/>
          <Home_Post />

       </div>


  )
}

export default Home