import { RiArrowRightLine } from '@remixicon/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {

  const products = [
    {
      image: "/images/men.png",
      title: "Men's",
      peragraph: "Explore Collection",
      category: "/category/men"
    },
    {
      image: "/images/cat2.png",
      title: "Women's",
      peragraph: "Explore Collection",
      category: "/category/women"
    },
    {
      image: "/images/kids.png",
      title: "Kid's",
      peragraph: "Explore Collection",
      category: "/category/kids"
    },
    {
      image: "/images/shoes.png",
      title: "Shoes",
      peragraph: "Explore Collection",
      category: "/category/shoes"
    },
    {
      image: "/images/sunglass.png",
      title: "Sunglass",
      peragraph: "Explore Collection",
      category: "/category/sunglass"
    }
  ]
  return (
    <div className='md:p-5 mt-10'>

      <div className='flex items-center justify-between px-5 '>
        <h1 className='md:text-3xl text-2xl font-bold'>Top Categories</h1>
        <Link to={'/view_all'} className='text-green-600 text-sm font-bold'>View All <hr /></Link>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 w-full p-5 mt-5 gap-5'>

        {products.map((item, index) => {
          return <div key={index} className={index === 4 ? "hidden md:block lg:block" : ""}>
            <div className='relative md:w-50 md:h-50 transition-transform duration-300 hover:-translate-y-2 hover:rotate-2 w-42 h-42 rounded-sm bg-gray-600 m-auto overflow-hidden'>
              <Link className='text-center' to={item.category}>
                <div className='absolute bottom-1 left-2 text-white text-left'>
                  <h1 className='font-semibold'>{item.title}</h1>
                  <p className='flex text-sm'>{item.peragraph} <RiArrowRightLine /></p>
                </div>
                <img className='w-full h-full object-cover' src={item.image} alt="" />
              </Link>
            </div>
          </div>
        })}
      </div>
    </div >
  )
}

export default Categories
