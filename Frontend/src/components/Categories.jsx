import { RiArrowRightLine } from '@remixicon/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {

  const products = [
    {
      image: "/images/category1.avif",
      title: "Men's"
    },
    {
      image: "/images/category2.avif",
      title: "Women's"
    },
    {
      image: "/images/category3.avif",
      title: "Kid's"
    },
    {
      image: "/images/category4.avif",
      title: "Shoes"
    },
    {
      image: "/images/category5.avif",
      title: "Bag's"
    }
  ]


  return (
    <div className='md:p-5 mt-10'>

      <div className='flex items-center justify-between px-5 '>
        <h1 className='md:text-3xl text-2xl font-bold'>Top Categories</h1>
        <Link to={'/view_all'} className='text-green-600 text-sm font-bold'>View All <hr /></Link>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-full p-5 mt-5 gap-5'>

        <div className='relative md:w-50 md:h-50 w-42 h-42 rounded-sm bg-gray-600 m-auto overflow-hidden'>
          <Link className='text-center' to={"/category/men"}>
            <div className='absolute bottom-1 left-2 text-white text-left'>
              <h1 className='font-semibold'>Men's</h1>
              <p className='flex text-sm'>Explore Collection <RiArrowRightLine /></p>
            </div>
            <img className='w-full h-full object-cover' src="/images/men.png" alt="" />
          </Link>
        </div>


        <div className='relative md:w-50 md:h-50 w-42 h-42 rounded-sm bg-gray-600 m-auto overflow-hidden'>
          <Link className='text-center' to={"/cat/womens"}>
            <div className='absolute bottom-1 left-2 text-white text-left'>
              <h1 className='font-semibold'>Women's</h1>
              <p className='flex text-sm'>Explore Collection <RiArrowRightLine /></p>
            </div>
            <img className='w-full h-full object-cover' src="/images/cat2.png" alt="" />
          </Link>
        </div>

        <div className='relative md:w-50 md:h-50 w-42 h-42 rounded-sm bg-gray-600 m-auto overflow-hidden'>
          <Link className='text-center' to={"/category/kids"}>
          <div className='absolute bottom-1 left-2 text-white text-left'>
              <h1 className='font-semibold'>Kid's</h1>
              <p className='flex text-sm'>Explore Collection <RiArrowRightLine /></p>
            </div>
            <img className='w-full h-full object-cover' src="/images/kids.png" alt="" />
          </Link>
        </div>


        <div className='relative md:w-50 md:h-50 w-42 h-42 rounded-sm bg-gray-600 m-auto overflow-hidden'>
          <Link className='text-center' to={"/cat/kids"}>
          <div className='absolute bottom-1 left-2 text-white text-left'>
              <h1 className='font-semibold'>Shoes</h1>
              <p className='flex text-sm'>Explore Collection <RiArrowRightLine /></p>
            </div>
            <img className='w-full h-full object-cover' src="/images/shoes.png" alt="" />
          </Link>
        </div>

      </div>
    </div >
  )
}

export default Categories
