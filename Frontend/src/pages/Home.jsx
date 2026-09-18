import React from 'react'
import Navbar from '../components/Navbar'
import SliderBar from '../components/SliderBar'
import Categories from '../components/Categories'
import TrendingProducts from './TrendingProducts'
import Banner from './Banner'

const Home = () => {
  return (
    <div className='w-full h-screen bg-[#ffff]'>
      <Navbar />
      <SliderBar />
      <div className='md:w-[95%] py-2 md:mx-auto'>
        <Categories />
        <TrendingProducts />
        <Banner/>
      </div>
    </div>
  )
}

export default Home
