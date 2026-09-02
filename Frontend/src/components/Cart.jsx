import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { jwtDecode } from "jwt-decode";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Search,
  UserRound,
  Heart,
  ShoppingBag,
  RotateCcw,
  ShieldCheck,
  ChevronRight,
  ArrowLeft,
  Minus,
  Plus,
  Trash2,
  Truck,
  Ticket,
  LockKeyhole,
  BadgeCheck,
} from "lucide-react";
import { RiArrowLeftLine } from "@remixicon/react";



const Cart = () => {

  const [product, setProduct] = useState([]);

  const token = localStorage.getItem("token");
  useEffect(() => {

    const fetchProduct = async () => {

      if (!token) return;

      const res = await axios.get("http://localhost:5000/cart/getCartProduct", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      setProduct(res.data.cartProduct);
    }
    fetchProduct();
  }, [token])

  if (!token) {
    return (
      <div className="login-prompt w-full h-screen flex items-center justify-center">
        <div className="text-center">
          <Link to={'/'} className="absolute top-10 left-10">
            <button className="flex items-center justify-center text-md text-green-900 gap-2 border px-4 font-semibold py-1 rounded-full"><RiArrowLeftLine className="text-green-900" size={20}/>Back</button>
          </Link>
          <h1 className="text-2xl font-semibold">Please login first.</h1>
          <Link to={'/login'} className="block mt-3 px-8 py-2 text-white bg-green-900 rounded border-none">Login</Link>
        </div>
      </div>
    )
  }


  return (
    <div className="min-h-screen bg-white text-[#151515]">

      <Navbar />


      {/* MAIN */}
      <main className="px-4 sm:px-6 lg:px-9 pt-5 pb-10">

        {/* BREADCRUMB */}
        <div className="flex items-center gap-2 text-[12px] sm:text-[13px] text-gray-500 mb-5 lg:mb-7">

          <span>Home</span>

          <ChevronRight size={14} />

          <span className="text-gray-700">
            Cart
          </span>

        </div>


        {/* HEADING */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">

          <div>

            <div className="flex items-center gap-2">

              <h1 className="text-[23px] sm:text-[25px] font-bold">
                My Cart
              </h1>

              <span className="text-[16px] sm:text-[18px] text-gray-600">
                ({product.length} Items)
              </span>

            </div>

            <p className="text-[13px] sm:text-[14px] text-gray-500 mt-2">
              Review your items and proceed to checkout
            </p>

          </div>

          <Link to={'/'} className="self-start sm:self-auto border border-[#a9b8a7] text-[#1e481d] rounded-md px-4 py-2.5 text-[13px] font-semibold flex items-center gap-2 hover:bg-[#f2f7f1]">

            <ArrowLeft size={16} />

            Continue Shopping

          </Link>

        </div>


        {/* CONTENT */}
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_395px] gap-6 lg:gap-7">


          {/* LEFT */}
          <section>

            {/* TABLE HEADER - DESKTOP ONLY */}
            <div className="hidden md:grid h-[40px] bg-[#f7f8f8] rounded-lg grid-cols-[2.2fr_1fr_1.4fr_0.8fr] items-center px-5 text-[11px] font-semibold text-gray-600 uppercase">

              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span className="text-right">Total</span>

            </div>

            {/* PRODUCT 3 */}
            {product.map((item) => (
              <div key={item._id} className="border border-gray-200 rounded-lg mt-2 p-4 sm:p-5 md:h-[143px] md:p-0 md:grid md:grid-cols-[2.2fr_1fr_1.4fr_0.8fr] md:items-center md:px-5">

                <div className="flex items-center gap-4 sm:gap-5">

                  <img
                    src={item.productId.image}
                    className="w-[85px] h-[95px] sm:w-[95px] sm:h-[105px] rounded-lg object-cover object-top shrink-0"
                    alt="Premium Black T Shirt"
                  />

                  <div className="min-w-0">

                    <h3 className="font-semibold text-[13px] sm:text-[14px]">
                      {item.productId.title}
                    </h3>

                    <p className="text-[11px] sm:text-[12px] text-gray-500 mt-2">
                      Color: Black
                    </p>

                    <p className="text-[11px] sm:text-[12px] text-gray-500 mt-1">
                      Size: M
                    </p>

                    <p className="text-[11px] sm:text-[12px] text-green-700 font-medium mt-2">
                      ✓ In Stock
                    </p>

                  </div>

                </div>


                <div className="mt-4 md:mt-0">

                  <span className="md:hidden text-[11px] text-gray-400 block mb-1">
                    PRICE
                  </span>

                  <p className="font-semibold text-[14px]">
                    ₹{item.productId.price}
                  </p>

                  <p className="text-[11px] text-gray-400 line-through mt-1 md:mt-2">
                    ₹999
                  </p>

                  <span className="inline-block bg-red-100 text-red-500 text-[9px] sm:text-[10px] font-semibold px-2 py-1 rounded mt-1">
                    50% OFF
                  </span>

                </div>


                <div className="mt-4 md:mt-0">

                  <span className="md:hidden text-[11px] text-gray-400 block mb-2">
                    QUANTITY
                  </span>

                  <div className="flex items-center w-[120px] h-[38px] border border-gray-200 rounded-lg">

                    <button className="w-9 flex justify-center">
                      <Minus size={13} />
                    </button>

                    <span className="flex-1 text-center text-sm">
                      {item.quantity}
                    </span>

                    <button className="w-9 flex justify-center">
                      <Plus size={13} />
                    </button>

                  </div>

                  <div className="flex gap-4 mt-3 text-[10px] sm:text-[11px] text-gray-600">

                    <span className="flex items-center gap-1">
                      <Trash2 size={12} />
                      Remove
                    </span>

                    <span className="flex items-center gap-1">
                      <Heart size={12} />
                      Wishlist
                    </span>

                  </div>

                </div>


                <p className="font-bold text-[14px] mt-4 md:mt-0 md:text-right">
                  ₹{item.productId.price * item.quantity}
                </p>

              </div>
            ))}


            {/* COUPON */}
            <div className="mt-4 border border-gray-100 bg-[#fbfcfb] rounded-lg p-4 flex flex-col sm:flex-row sm:items-center gap-4">

              <div className="flex items-center gap-4 flex-1">

                <div className="w-10 h-10 rounded-full bg-[#eaf3e6] flex items-center justify-center shrink-0">

                  <Ticket
                    size={19}
                    className="text-[#37702f]"
                  />

                </div>

                <div>

                  <p className="text-[13px] font-medium">
                    Have a coupon code?
                  </p>

                  <p className="text-[11px] text-gray-500 mt-1">
                    Enter it here to apply discount
                  </p>

                </div>

              </div>


              <div className="h-[44px] w-full sm:w-[370px] border border-gray-200 bg-white rounded-lg flex items-center px-3">

                <span className="flex-1 text-[12px] text-gray-400">
                  Enter coupon code
                </span>

                <button className="bg-[#386d31] text-white text-[12px] font-semibold rounded px-5 py-2">
                  Apply
                </button>

              </div>

            </div>

          </section>


          {/* ORDER SUMMARY */}
          <aside>

            <div className="border border-gray-200 rounded-xl shadow-sm p-5 sm:p-6">

              <h2 className="text-[20px] font-bold">
                Order Summary
              </h2>


              <div className="flex justify-between mt-7 text-[13px] sm:text-[14px]">

                <span>
                  Subtotal ({product.length} items)
                </span>

                <span className="font-semibold">
                  ₹{product.reduce((total, item) => {
                    return total + (item.productId.price * item.quantity)
                  }, 0)}
                </span>

              </div>


              <div className="flex justify-between mt-4 text-[13px] sm:text-[14px]">

                <span className="text-green-700">
                  Discount
                </span>

                <span className="text-green-700 font-semibold">
                  -₹0
                </span>

              </div>


              <div className="flex justify-between mt-4 text-[13px] sm:text-[14px]">

                <span className="flex items-center gap-2">
                  Delivery Charges
                  <span className="border border-gray-400 rounded-full text-[9px] w-4 h-4 flex items-center justify-center">
                    i
                  </span>
                </span>

                <span className="text-green-700 font-medium">
                  FREE
                </span>

              </div>


              <div className="border-t border-gray-200 mt-6 pt-5">

                <div className="flex justify-between gap-3">

                  <div>

                    <h3 className="font-bold text-[16px]">
                      Total Amount
                    </h3>

                    <p className="text-[11px] text-gray-500 mt-1">
                      (Inclusive of all taxes)
                    </p>

                  </div>

                  <span className="text-[22px] sm:text-[25px] font-bold">
                    ₹{product.reduce((total, item) => {
                      return total + (item.productId.price * item.quantity)
                    }, 0)}
                  </span>

                </div>

              </div>


              {/* SAVINGS */}
              <div className="mt-5 min-h-[56px] rounded-lg bg-[#edf5e9] flex items-center px-4 py-2 gap-3">

                <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0">

                  <Truck
                    size={19}
                    className="text-green-700"
                  />

                </div>

                <p className="text-[12px] sm:text-[13px] font-semibold text-green-800">
                  Yay! You saved ₹752 on this order
                </p>

              </div>


              {/* CHECKOUT */}
              <button className="w-full h-[52px] hover:bg-green-900 cursor-pointer mt-5 rounded-lg bg-[#075b05] hover:bg-[#064b04] text-white font-medium text-[14px] sm:text-[15px] flex items-center justify-center gap-3">

                <LockKeyhole size={18} />

                Proceed to Checkout

              </button>


              {/* PAYMENT */}
              <div className="text-center mt-5">

                <p className="text-[12px] text-gray-500">
                  Secure checkout powered by
                </p>

                <div className="flex flex-wrap items-center justify-center gap-2 mt-3">

                  <div className="border rounded px-3 py-2 text-[9px] font-bold">
                    Razorpay
                  </div>

                  <div className="border rounded px-3 py-2 text-[9px] font-bold text-blue-700">
                    VISA
                  </div>

                  <div className="border rounded px-3 py-2 text-[9px] font-bold">
                    🔴🟡
                  </div>

                  <div className="border rounded px-3 py-2 text-[9px] font-bold">
                    UPI
                  </div>

                  <div className="border rounded px-3 py-2 text-[9px] font-bold text-blue-600">
                    RuPay
                  </div>

                </div>

              </div>


              {/* FEATURES */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 border-t border-gray-200 mt-5 pt-5">

                <div className="text-center">

                  <ShieldCheck
                    size={22}
                    className="text-[#50754c] mx-auto mb-2"
                  />

                  <p className="text-[10px] sm:text-[11px] font-semibold">
                    100% Secure
                  </p>

                  <p className="text-[8px] sm:text-[9px] text-gray-500 mt-1">
                    Payments
                  </p>

                </div>


                <div className="text-center">

                  <RotateCcw
                    size={22}
                    className="text-[#50754c] mx-auto mb-2"
                  />

                  <p className="text-[10px] sm:text-[11px] font-semibold">
                    Easy Returns
                  </p>

                  <p className="text-[8px] sm:text-[9px] text-gray-500 mt-1">
                    14 days policy
                  </p>

                </div>


                <div className="text-center">

                  <BadgeCheck
                    size={22}
                    className="text-[#50754c] mx-auto mb-2"
                  />

                  <p className="text-[10px] sm:text-[11px] font-semibold">
                    Top Quality
                  </p>

                  <p className="text-[8px] sm:text-[9px] text-gray-500 mt-1">
                    Products
                  </p>

                </div>

              </div>

            </div>

          </aside>

        </div>

      </main>

    </div>
  );
};

export default Cart;