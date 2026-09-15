import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar';
import { RiShoppingBasketFill } from '@remixicon/react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../services/cartService';
import { UseCartStatus } from '../services/UseCartStatus';
import { useCart } from './CartContext';

const MenCategory = () => {
  const {fetchProduct} = useCart();
  const [product, setProduct] = useState([]);
  const { cartItem, setCartItem } = UseCartStatus();
  const navigate = useNavigate();

  useEffect(() => {

    async function getProduct() {

      try {
        const res = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/admin/getProducts`);

        const menProducts = res.data.products.filter((product) => {
          return product.category.toLowerCase() === 'men';
        });
        setProduct(menProducts);

      } catch (error) {
        toast.error("Error", error);
      }
    }
    getProduct();
  }, []);

  const handleAddToCart = async (productId) => {
    try {
      if (cartItem[productId]) {
        navigate("/cart");
        return
      }
      
      await addToCart(productId)

      setCartItem((prev) => ({
        ...prev, [productId]: true
      }));

      fetchProduct();


    } catch (error) {
      toast.error("Server Error")
    }
  }




  return (
    <div className="min-h-screen w-full bg-[#fafafa]">
      <ToastContainer />
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="w-full">

        {/* Category Header */}
        <div className="mx-auto w-full max-w-[1600px] px-4 py-6 sm:px-6 md:px-8 lg:px-10 lg:py-8">

          <h1 className="text-2xl font-semibold tracking-tight text-green-900 sm:text-3xl">
            Shoes
          </h1>

          <p className="mt-1.5 text-xs text-gray-500 sm:mt-2 sm:text-sm">
            Discover our best collection for Shoes
          </p>

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

            {product.map((item) => (
              <div
                key={item._id}
                className="
                  group min-w-0
                  overflow-hidden
                  rounded-xl
                  border border-gray-200
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
                      aspect-[4/4.5]
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
                      onClick={(e) => e.preventDefault()}
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
                  <Link to={`/productDetails/${item._id}`}>
                    <h2
                      className="
                        line-clamp-2
                        min-h-[32px]
                        text-[11px]
                        font-medium
                        leading-4
                        text-gray-800
                        transition-colors
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

                    <span className="text-[10px] font-medium text-gray-600 sm:text-xs">
                      4.5
                    </span>

                    <span className="text-[9px] text-gray-400 sm:text-[11px]">
                      (120)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mt-1.5 flex items-center gap-1.5">
                    <span className="text-sm font-bold text-gray-900 sm:text-base">
                      ₹{item.price}
                    </span>

                    {/* Optional old price */}
                    {item.oldPrice && (
                      <span className="text-[9px] text-gray-400 line-through sm:text-xs">
                        ₹{item.oldPrice}
                      </span>
                    )}
                  </div>

                  {/* Add To Cart */}
                  <button
                    onClick={() => handleAddToCart(item._id)}
                    className=" mt-2.5 cursor-pointer flex w-full items-center justify-center gap-1.5 rounded-lg border border-green-800 bg-white px-2 py-1.5 text-[10px] font-medium text-green-900 transition-all duration-200 hover:bg-green-900 hover:text-white active:scale-[0.98] sm:mt-3 sm:gap-2 sm:px-3 sm:py-2 sm:text-xs"
                  >
                    <RiShoppingBasketFill
                      size={14}
                      className="sm:h-4 sm:w-4"
                    />

                    <span>{cartItem[item._id || item.id] ? "Go to cart" : "Add to cart"}</span>
                  </button>

                </div>
              </div>
            ))}

          </div>
        </div>
      </main>
    </div>
  )
}

export default MenCategory
