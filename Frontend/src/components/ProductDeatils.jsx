import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import {
  RiStarFill,
  RiStarHalfFill,
  RiShoppingBasketLine,
  RiHeartLine,
} from "@remixicon/react";

import { addToCart } from "../services/cartService";
import { toast, ToastContainer } from "react-toastify";

const ProductDeatils = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    async function getProduct() {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_ENDPOINT}/admin/getProductById/${id}`
        );

        const data = await res.json();

        setProduct(data);
        setSelectedImage(data.image);

        setLoading(false);
      } catch (error) {
        toast.error("Server Error");
        setLoading(false);
      }
    }

    getProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fafafa]">
        <Navbar />

        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-gray-200 border-t-green-700" />

            <p className="text-sm text-gray-500">
              Loading product...
            </p>
          </div>
        </div>
      </div>
    );
  }

  async function handleAddtoCart(productId){
     try {
      await addToCart(productId);
     } catch (error) {
      toast.error("Server Error");
     }
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-[#fafafa]">
        <Navbar />

        <div className="flex min-h-[60vh] items-center justify-center">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-800">
              Product Not Found
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              The product you're looking for doesn't exist.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-[#fafafa]">
        <ToastContainer/>
      <Navbar />

      {/* Main */}
      <main className="mx-auto w-full max-w-[1400px] px-4 py-5 sm:px-6 sm:py-8 lg:px-10 lg:py-10">

        {/* Product Layout */}
        <div className="grid w-full grid-cols-1 gap-7 lg:grid-cols-2 lg:gap-12">

          {/* ================= IMAGE SECTION ================= */}
          <div className="w-full">

            {/* Main Image */}
            <div
              className="
                relative
                flex
                aspect-square
                w-full
                items-center
                justify-center
                overflow-hidden
                rounded-2xl
                border
                border-gray-200
                bg-white
              "
            >
              <img
                src={selectedImage || product.image}
                alt={product.title}
                className="
                  h-full
                  w-full
                  object-contain
                  p-3
                  transition-transform
                  duration-500
                  sm:p-6
                "
              />

              {/* Wishlist */}
              <button
                className="
                  absolute
                  right-3
                  top-3
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-gray-200
                  bg-white/95
                  text-gray-700
                  shadow-sm
                  transition
                  cursor-pointer
                  hover:text-red-500
                  sm:right-5
                  sm:top-5
                "
              >
                <RiHeartLine size={20} />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="mt-4 flex gap-2.5 overflow-x-auto pb-1">

              {[1, 2, 3, 4].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(product.image)}
                  className={`
                    h-16
                    w-16
                    shrink-0
                    overflow-hidden
                    rounded-lg
                    border-2
                    bg-white
                    transition
                    sm:h-20
                    sm:w-20
                    ${
                      selectedImage === product.image && index === 0
                        ? "border-green-700"
                        : "border-gray-200 hover:border-gray-400"
                    }
                  `}
                >
                  <img
                    src={product.image}
                    alt={`${product.title} ${index + 1}`}
                    className="h-full w-full object-contain p-1"
                  />
                </button>
              ))}

            </div>
          </div>

          {/* ================= PRODUCT DETAILS ================= */}
          <div className="flex w-full flex-col">

            {/* Category */}
            <p className="text-xs font-medium uppercase tracking-wider text-green-700">
              {product.category || "Product"}
            </p>

            {/* Title */}
            <h1
              className="
                mt-2
                text-2xl
                font-semibold
                leading-tight
                text-gray-900
                sm:text-3xl
                lg:text-4xl
              "
            >
              {product.title}
            </h1>

            {/* Rating */}
            <div className="mt-4 flex flex-wrap items-center gap-2">

              <div className="flex items-center">
                <RiStarFill
                  size={19}
                  className="text-yellow-400"
                />

                <RiStarFill
                  size={19}
                  className="text-yellow-400"
                />

                <RiStarFill
                  size={19}
                  className="text-yellow-400"
                />

                <RiStarFill
                  size={19}
                  className="text-yellow-400"
                />

                <RiStarHalfFill
                  size={19}
                  className="text-yellow-400"
                />
              </div>

              <span className="text-sm font-medium text-gray-700">
                4.5
              </span>

              <span className="text-sm text-gray-400">
                (128 reviews)
              </span>

            </div>

            {/* Divider */}
            <div className="my-5 h-px w-full bg-gray-200" />

            {/* Price */}
            <div className="flex items-end gap-3">

              <span className="text-3xl font-bold text-gray-900 sm:text-4xl">
                ₹{product.price}
              </span>

              {product.oldPrice && (
                <span className="mb-1 text-sm text-gray-400 line-through">
                  ₹{product.oldPrice}
                </span>
              )}

              {product.discount && (
                <span className="mb-1 rounded-md bg-green-50 px-2 py-1 text-xs font-semibold text-green-700">
                  {product.discount}% OFF
                </span>
              )}

            </div>

            {/* Description */}
            <div className="mt-5">
              <h2 className="text-sm font-semibold text-gray-900">
                Product Description
              </h2>

              <p
                className="
                  mt-2
                  max-w-2xl
                  text-sm
                  leading-6
                  text-gray-500
                  sm:text-[15px]
                  sm:leading-7
                "
              >
                {product.description}
              </p>
            </div>


            {/* Buttons */}
            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">

              <button onClick={(()=>{handleAddtoCart(product._id || product.id)})}
                className="
                  flex
                  h-12
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  bg-green-700
                  px-5
                  text-sm
                  font-semibold
                  text-white
                  shadow-sm
                  transition-all
                  hover:bg-green-800
                  hover:shadow-md
                  active:scale-[0.98]
                "
              >
                <RiShoppingBasketLine size={19} />
                Add to Cart
              </button>

              <button
                className="
                  h-12
                  w-full
                  rounded-lg
                  border
                  border-gray-300
                  bg-white
                  px-5
                  text-sm
                  font-semibold
                  text-gray-900
                  transition-all
                  hover:border-gray-400
                  hover:bg-gray-50
                  active:scale-[0.98]
                "
              >
                Buy Now
              </button>

            </div>

            {/* Extra Info */}
            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">

              <div className="rounded-lg border border-gray-200 bg-white p-3">
                <p className="text-xs font-semibold text-gray-800">
                  🚚 Fast Delivery
                </p>

                <p className="mt-1 text-[11px] text-gray-500">
                  Quick & secure delivery
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-3">
                <p className="text-xs font-semibold text-gray-800">
                  ↩ Easy Returns
                </p>

                <p className="mt-1 text-[11px] text-gray-500">
                  Hassle-free returns
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-3">
                <p className="text-xs font-semibold text-gray-800">
                  ✓ Secure Payment
                </p>

                <p className="mt-1 text-[11px] text-gray-500">
                  100% secure checkout
                </p>
              </div>

            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDeatils;