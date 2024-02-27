import React from 'react'
import Style from './Home.module.css'
import Header from './Header'
import HomeNav from './HomeNav'
function Home() {
  return (
    <div className={Style.home}>
      <Header/>
      <HomeNav/>
    </div>
  )
}

export default Home