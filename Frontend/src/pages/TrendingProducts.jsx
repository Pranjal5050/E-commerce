import { RiShoppingBasketFill } from '@remixicon/react'
import React from 'react'
import { Link } from 'react-router-dom'

const TrendingProducts = () => {
  return (
    <div className='p-5'>
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
                <Link>
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
                      src="../images/men.png"
                      alt="Image"
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
                      T-shirt Men fashion trends with fashion
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
                      ₹499
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

                    <span>Add to Cart</span>
                  </button>

                </div>
              </div>

               



















          </div>




    </div>
  )
}

export default TrendingProducts
