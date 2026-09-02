import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Navbar from './Navbar';
import { RiStarFill, RiStarHalfFill } from '@remixicon/react';

const ProductDeatils = () => {

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    fetch(`http://localhost:5000/admin/getProductById/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => { console.log(err) });
  }, [id]);

  if (loading) return <h1>Loading Products....</h1>
  if (!product) return <h2>Product Not Found!</h2>

  return (
    <div className='w-full h-screen p-2 bg-[#ffff]'>
      <Navbar />
      <div className='w-full h-[80%] md:flex gap-5 mt-5'>
        <div className='md:w-2/6 md:h-full h-[60vh] w-full rounded-md overflow-hidden'>
          <img src={product.image} className='w-full h-full object-cover object-top' alt="" />
        </div>
        <div className='h-full p-2'>
          <h1 className='text-2xl font-semibold'>{product.title}</h1>
          <p className='text-lg text-gray-500 mt-2'>{product.description}</p>
          <div className='flex mt-5'>
            <RiStarFill size={20} className='text-yellow-400' />
            <RiStarFill size={20} className='text-yellow-400' />
            <RiStarFill size={20} className='text-yellow-400' />
            <RiStarFill size={20} className='text-yellow-400' />
            <RiStarHalfFill size={20} className='text-yellow-400'/>
            <p className='md:text-lg text-sm text-gray-500 ml-2'>4.5 (128 reviews)</p>
          </div>
          <h1 className='md:text-3xl text-2xl font-semibold mt-6 text-gray-800'>₹ {product.price}</h1>
          <div className='flex gap-2 mt-5'>
            <div className='md:w-20 md:h-20 w-18 h-18 rounded-sm border-1 border-gray-300 overflow-hidden'>
              <img src={product.image} className='w-full h-full object-cover object-top' alt="" />
            </div>
            <div className='md:w-20 md:h-20 w-18 h-18 rounded-sm border-1 border-gray-300'>
              <img src={product.image} className='w-full h-full object-cover object-top' alt="" />
            </div>
            <div className='md:w-20 md:h-20 w-18 h-18 rounded-sm border-1 border-gray-300'>
              <img src={product.image} className='w-full h-full object-cover object-top' alt="" />
            </div>
            <div className='md:w-20 md:h-20 w-18 h-18 rounded-sm border-1 border-gray-300'>
              <img src={product.image} className='w-full h-full object-cover object-top' alt="" />
            </div>
          </div>
          <button className='py-2 mt-8 w-full bg-green-700 block text-white cursor-pointer hover:bg-green-800 rounded-sm'>Add to Cart</button>
          <button className='py-2 mt-2 w-full border-1 border-gray-300 cursor-pointer rounded-sm'>Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDeatils
