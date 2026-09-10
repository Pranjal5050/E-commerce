import { RiArrowRightLine, RiUserLine, RiVerifiedBadgeFill, RiShieldCheckLine } from '@remixicon/react'
import axios from 'axios'
import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const UserRegister = () => {

  const navigate = useNavigate();

  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function onSubmitHandaler(e) {

    e.preventDefault();

    const user = {
      fullname: {
        firstname,
        lastname
      },
      email,
      password
    }

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_ENDPOINT}/user/register`, user);
      const token = res.data.token;
      localStorage.setItem("token", token);
      navigate('/');
    } catch (error) {
      toast.error(error)
    }
  }


  return (
    <div className='w-full h-screen bg-gray-100 flex'>
      <ToastContainer/>

      {/* Left */}
      <div className='w-1/3 hidden md:block h-screen bg-green-50 p-10'>
        <div className=''>
          <h1 className='text-2xl font-semibold'>Create Your</h1>
          <h1 className='text-3xl font-semibold text-green-800'>Fashion Account</h1>
          <p className='text-[12px] text-gray-500 mt-3'>Join We-mart today and get access to <br /> exclusive offers, faster checkout,</p>
          <div className='mt-5'>
            <div className='flex gap-2 items-center justify-center'>
              <div className='w-10 h-10 bg-green-700 rounded-full flex items-center justify-center'>
                <RiVerifiedBadgeFill className='text-white' />
              </div>
              <div>
                <h1 className='text-[14px] font-semibold text-gray-700'>Premium Quality Products</h1>
                <p className='text-[11px] text-gray-600'>100% genuine and premium quality</p>
              </div>
            </div>
            <div className='flex gap-2 mt-5'>
              <div className='w-10 h-10 bg-green-700 rounded-full flex items-center justify-center'>
                <RiVerifiedBadgeFill className='text-white' />
              </div>
              <div>
                <h1 className='text-md font-semibold text-gray-700'>Easy Returns</h1>
                <p className='text-[12px] text-gray-600'>Hassle-free returns within 7 days</p>
              </div>
            </div>
            <div className='flex gap-2 mt-5'>
              <div className='w-10 h-10 bg-green-700 rounded-full flex items-center justify-center'>
                <RiVerifiedBadgeFill className='text-white' />
              </div>
              <div>
                <h1 className='text-md font-semibold text-gray-700'>24*7 Customer Support</h1>
                <p className='text-[12px] text-gray-600'>We're have to help you anytime</p>
              </div>
            </div>
            <div className='flex gap-2 mt-5'>
              <div className='w-10 h-10 bg-green-700 rounded-full flex items-center justify-center'>
                <RiVerifiedBadgeFill className='text-white' />
              </div>
              <div>
                <h1 className='text-[13px] font-semibold text-gray-700'>Exclusive Member Discounts</h1>
                <p className='text-[11px] text-gray-600'>Special deals and other offers for member</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Right */}
      <div className='w-full h-screen bg-gray-100 flex items-center justify-center'>
        <div className='w-full h-full md:w-[90%] md:h-[90%] bg-white rounded shadow-md p-5'>

          <div className='text-center'>
            <div className='w-10 h-10 rounded-full bg-green-100 flex items-center justify-center m-auto'>
              <RiUserLine className='text-green-700' />
            </div>
            <h1 className='text-2xl mt-2 mb-1'>Create Account</h1>
            <p className='text-sm text-gray-500'>join We-Mart start your fashion journry with us.</p>
          </div>


          <form onSubmit={onSubmitHandaler}>
            <div className='w-full'>
              <div className='md:flex w-full gap-5'>


                <div className='md:w-1/2'>
                  <label className='hidden md:block text-md text-gray-700'>Firstname</label> <br />
                  <input type="text" value={firstname} onChange={(e) => { setFirstname(e.target.value) }} name='firstname' className='w-full py-2 p-2 text-sm rounded sm:mt-2 outline-none border border-gray-500' placeholder='Enter your firstname' />
                </div>

                <div className='md:w-1/2'>
                  <label className='hidden md:block text-md text-gray-700'>Lastname</label> <br />
                  <input type="text" value={lastname} onChange={(e) => { setLastname(e.target.value) }} name='lastname' className='w-full py-2 p-2 rounded sm:mt-2 outline-none border border-gray-500' placeholder='Enter your lastname' />
                </div>
              </div>

              <div className='md:flex w-full gap-5'>
                <div className='md:w-1/2'>
                  <label className='hidden md:block text-md text-gray-700'>Email</label> <br />
                  <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} name='email' className='w-full py-2 p-2 rounded outline-none border border-gray-500' placeholder='Enter your Email' />
                </div>

                <div className='md:w-1/2'>
                  <label className='hidden md:block text-md text-gray-700'>Password</label> <br />
                  <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} name='password' className='w-full py-2 p-2 rounded sm:mt-2 outline-none border border-gray-500' placeholder='Enter your Password' />
                </div>
              </div>
              <button className='w-full cursor-pointer hover:bg-green-800 mt-6 bg-green-700 font-semibold text-sm text-white flex items-center justify-center gap-2 py-2 rounded-sm'>Create Account <RiArrowRightLine /></button>




              <div className='w-full p-2 bg-green-50 flex items-center gap-2 rounded mt-5'>
                <RiShieldCheckLine className="text-green-600" />
                <div>
                  <h1 className='text-sm font-semibold'>Your Data is Safe with Us</h1>
                  <p className='text-gray-600 text-[10px]'>We use industry-standard enctyption to protect your personal information.</p>
                </div>
              </div>
              <p className='text-sm text-center mt-2'>Already have an account? <Link to={'/login'} className="text-green-600">Login</Link></p>
            </div>
          </form>

        </div>
      </div>
    </div >
  )
}

export default UserRegister
