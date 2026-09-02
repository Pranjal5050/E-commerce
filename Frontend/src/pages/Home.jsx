import React from 'react'
import Navbar from '../components/Navbar'
import SliderBar from '../components/SliderBar'
import Categories from '../components/Categories'

const Home = () => {
  return (
    <div className='w-full h-screen bg-[#ffff]'>
      <Navbar/>
      <SliderBar/>
      <Categories/>
    </div>
  )
}

export default Home
