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
        const res = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/admin/getProducts`);

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
<div className="w-full min-h-screen">
  <Navbar />

  <div className="px-4 py-6 sm:px-6 md:px-8 lg:px-10">
    
    {/* Heading */}
    <h1 className="text-2xl sm:text-3xl font-semibold text-green-800">
      Men's
    </h1>

    <p className="text-sm sm:text-md text-gray-400 mt-2 sm:mt-3">
      Discover our best collection for men
    </p>

    {/* Products */}
    <div className="
      grid
      grid-cols-2
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      xl:grid-cols-5
      gap-4
      sm:gap-5
      md:gap-6
      mt-6
    ">

      {product.map((item) => (
        <div
          key={item._id}
          className="
            w-full
            min-w-0
            rounded-md
            shadow
            border
            border-gray-200
            overflow-hidden
            bg-white
          "
        >

          {/* Product Image */}
          <Link to={`/productDetails/${item._id}`}>
            <div className="w-full aspect-[3/4] overflow-hidden bg-gray-100">
              <img
                className="w-full h-full object-cover object-top"
                src={item.image}
                alt={item.title}
              />
            </div>
          </Link>

          {/* Product Details */}
          <div className="p-2 sm:p-3">

            <h2 className="
              text-xs
              sm:text-sm
              md:text-base
              font-light
              text-gray-600
              line-clamp-2
              min-h-[32px]
              sm:min-h-[40px]
            ">
              {item.title}
            </h2>

            <p className="
              text-sm
              sm:text-base
              font-semibold
              mt-1
            ">
              ₹ {item.price}
            </p>

            <button
              className="
                w-full
                rounded-sm
                hover:bg-green-900
                hover:text-white
                border
                mt-2
                flex
                items-center
                justify-center
                gap-1
                text-xs
                sm:text-sm
                cursor-pointer
                border-green-800
                text-green-900
                px-2
                py-2
                transition
              "
            >
              <RiShoppingBasketFill size={16} />
              <span>Add to cart</span>
            </button>

          </div>

        </div>
      ))}

    </div>
  </div>
</div>
  )
}

export default MenCategory
