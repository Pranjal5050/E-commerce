import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar';
import { RiShoppingBasketFill } from '@remixicon/react';
import { Link } from 'react-router-dom';

const MenCategory = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {

    async function getProduct() {

      try {
        const res = await axios.get("http://localhost:5000/admin/getProducts");

        const menProducts = res.data.products.filter((product) => {
          return product.category.toLowerCase() === 'men';
        });
        setProduct(menProducts);
      } catch (error) {
        console.log("Error", error);
      }
    }
    getProduct();
  }, [])



  return (
    <div className='w-full'>
      <Navbar />
      <div className='p-8'>
        <h1 className='text-3xl font-semibold font-semiold text-green-800'>Men's</h1>

        <p className='text-md text-gray-400 mt-4'>Discover our best collection for men</p>

        {product.map((item) => (
          <div key={item._id} className='w-full mt-5'>
            <div className='w-52 h-90 rounded-md shadow border border-gray-200 overflow-hidden'>
              <Link to={`/productDetails/${item._id}`}>
                <div className='w-full h-[70%] bg-green-800'>
                  <img className='w-full h-full object-cover object-top' src={item.image} alt="" />
                </div>
              </Link>
              <div className='p-1'>

                <h1 className='text-md mt-2 font-light text-gray-600'>{item.title}</h1>
                <p className='text-ms font-semibold'>₹ {item.price}</p>
                <button
                  className='rounded-sm hover:bg-green-900 hover:text-white border-1 mt-2
                               flex items-center justify-center text-sm cursor-pointer border-green-800 text-green-900 
                              px-8 py-1'>
                  <span>
                    <RiShoppingBasketFill />
                  </span>
                  Add to cart
                </button>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MenCategory
