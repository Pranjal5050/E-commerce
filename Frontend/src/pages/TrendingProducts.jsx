import { RiShoppingBasketFill } from '@remixicon/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { addToCart } from '../services/cartService'
import {toast, ToastContainer } from 'react-toastify'
import { UseCartStatus } from '../services/UseCartStatus'
import { useCart } from '../components/CartContext'

const TrendingProducts = () => {
  const {fetchProduct} = useCart();
  const {cartItem, setCartItem} = UseCartStatus();
  const navigate = useNavigate();

  const [products, setProduct] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/user/randomproduct`);
      setProduct(response.data.products);
    }
    getProducts();
  }, []);

  const handleCart = async (productId)=>{
    try {
      if(cartItem[productId]){
        navigate("/cart")
        return;
      }
      await addToCart(productId);

      setCartItem((prev)=>({
        ...prev, [productId] : true
      }));

      fetchProduct();

    } catch (error) {
      toast.error("Server Error");
    }
  }

  return (
    <div className='p-5'>
      <ToastContainer/>
      <div className='flex item-center justify-between'>
        <div>
          <h1 className='md:text-2xl font-semibold'>Trending Products</h1>
          <p className='text-sm'>Most loved style, just for you.</p>
        </div>
        <Link to={'/view_all'} className='text-green-800 text-sm font-semibold'>View All <hr /></Link>
      </div>

      {/* Products Grid */}
      <div
        className="
              mt-6 grid w-full
              grid-cols-2
              gap-x-3 gap-y-5

              sm:grid-cols-2
              sm:gap-x-5
              sm:gap-y-7

              md:grid-cols-3

              lg:grid-cols-4
              lg:gap-x-6

              xl:grid-cols-5

              2xl:grid-cols-6
            "
      >

        {products.map((item, index)=>{
         return <div key={index} className={index === 6 ? "md:hidden" : ""}>
         <div
          className="
                  group 
                  min-w-0
                  overflow-hidden
                  rounded-xl
                  border
                  border-gray-200
                  bg-white
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-gray-300
                  hover:shadow-lg
                "
        >

          {/* Product Image */}
          <Link to={`/productDetails/${item._id}`}>
            <div
              className="
                      relative
                      aspect-[4/3.5]
                      w-full
                      overflow-hidden
                      bg-gray-100
                    "
            >
              <img
                src={item.image}
                alt={item.title}
                className="
                        h-full
                        w-full
                        object-cover
                        object-top
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
              />

              {/* NEW Badge */}
              <span
                className="
                        absolute
                        left-2
                        top-2
                        rounded-md
                        bg-green-900
                        px-2
                        py-1
                        text-[8px]
                        font-semibold
                        uppercase
                        tracking-wide
                        text-white
                        sm:left-3
                        sm:top-3
                        sm:text-[9px]
                      "
              >
                New
              </span>

              {/* Wishlist */}
              <button
                className="
                        absolute
                        right-2
                        top-2
                        flex
                        h-7
                        w-7
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-gray-200
                        bg-white/90
                        text-gray-700
                        backdrop-blur-sm
                        transition
                        hover:text-red-500
                        sm:right-3
                        sm:top-3
                        sm:h-8
                        sm:w-8
                      "
              >
                <span className="text-base leading-none">
                  ♡
                </span>
              </button>
            </div>
          </Link>

          {/* Product Information */}
          <div className="p-2.5 sm:p-3.5">

            {/* Title */}
            <Link>
              <h2
                className="
                        line-clamp-2
                        min-h-[32px]
                        text-[11px]
                        font-medium
                        leading-4
                        text-gray-700
                        transition-colors
                        font-semibold
                        group-hover:text-green-900
                        sm:min-h-[40px]
                        sm:text-sm
                        sm:leading-5
                      "
              >
                {item.title}
              </h2>
            </Link>

            {/* Rating */}
            <div className="mt-1.5 flex items-center gap-1">
              <span className="text-[11px] text-yellow-500 sm:text-xs">
                ★
              </span>

              <span className="text-[11px] text-yellow-500 sm:text-xs">
                ★
              </span>

              <span className="text-[11px] text-yellow-500 sm:text-xs">
                ★
              </span>

              <span className="text-[11px] text-yellow-500 sm:text-xs">
                ★
              </span>

              <span className="text-[10px] font-medium text-gray-600 sm:text-xs">
                4.5
              </span>

              <span className="text-[9px] text-gray-400 sm:text-[11px]">
                (120)
              </span>
            </div>

            {/* Price */}
            <div className="mt-1.5 flex items-center gap-1.5">
              <span className="text-md font-bold text-gray-900 sm:text-base">
                ₹{item.price}
              </span>

              <span className="text-[9px] text-gray-400 line-through sm:text-xs">
                ₹299
              </span>

              <span className="text-[9px] md:text-[13px] text-green-600 font-bold sm:text-xs">
                35% OFF
              </span>

            </div>

            {/* Add To Cart */}
            <button 
            onClick={()=>{handleCart(item._id || item.id)}}
              className="
                      mt-2.5
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-1.5
                      rounded-lg
                      border
                      border-green-800
                      bg-white
                      px-2
                      py-1.5
                      text-[10px]
                      font-medium
                      text-green-900
                      transition-all
                      duration-200
                      hover:bg-green-900
                      hover:text-white
                      active:scale-[0.98]
                      sm:mt-3
                      sm:gap-2
                      sm:px-3
                      sm:py-2
                      sm:text-xs
                      cursor-pointer
                    "
            >
              <RiShoppingBasketFill
                size={14}
                className="sm:h-4 sm:w-4"
              />

              <span>{cartItem[item._id || item.id] ? "Go to Cart" : "Add to cart"}</span>
            </button>

          </div>
        </div>
</div>










        })}




















      </div>




    </div>
  )
}

export default TrendingProducts
