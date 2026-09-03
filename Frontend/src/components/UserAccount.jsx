import React, { useEffect, useState } from 'react'
import BottomNavbar from './BottomNavbar'
import { RiArrowRightLine, RiShoppingBag2Line, RiMapPinLine, RiPencilLine, RiArrowLeftLine } from '@remixicon/react'
import { jwtDecode } from "jwt-decode";
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const UserAccount = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState("");

    const token = localStorage.getItem("token");
    const fetchUser = async () => {
        try {
            if (!token) return;

            const decoded = jwtDecode(token);
            const userId = decoded.id || decoded._id;

            const res = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/user/profile/${userId}`, {
                withCredentials: true
            });
            setUser(res.data.user);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchUser()
    }, []);
    if (!token) {
        return (
            <div className="login-prompt w-full h-screen flex items-center justify-center">
                <div className="text-center">
                    <Link to={'/'} className="absolute top-10 left-10">
                        <button className="flex items-center justify-center text-md text-green-900 
                                gap-2 border px-4 font-semibold py-1 rounded-full">
                            <RiArrowLeftLine className="text-green-900" size={20} />
                            Back
                        </button>
                    </Link>
                    <h1 className="text-2xl font-semibold">Please login first.</h1>
                    <Link to={'/login'} className="block mt-3 px-8 py-2 text-white bg-green-900 rounded border-none">Login</Link>
                </div>
            </div>
        )
    }

    return (
        <div className='w-full h-screen bg-gray-100 p-2'>
            
            <div className='p-5'>
                <h1 className='text-3xl font-sans font-bold md:text-center md:text-2xl'>My Account</h1>
            </div>
            <div className='w-full p-3 mt-5 bg-[#ffff] flex gap-8 rounded-lg items-center'>
                <div className='w-25 h-25 rounded-full bg-gray-600 flex items-center justify-center overflow-hidden'>
                    <img src="images/women.png" className='w-full h-full object-cover object-top' alt="" />
                </div>
                <div>
                    <h1 className='text-xl font-bold'>{user.fullname?.firstname} {user.fullname?.lastname}</h1>
                    <p className='text-sm mt-2 text-gray-700 font-semibold'>{user.email}</p>
                </div>
            </div>
            <div>
                <Link to={"/orders"} className='w-full bg-[#ffff] flex justify-between mt-5 rounded-lg p-5'>
                    <div className='flex items-center gap-2'>
                        <RiShoppingBag2Line size={15} className='text-green-600' />
                        <h1 className='text-md font-semibold'>My Orders</h1>
                    </div>
                    <RiArrowRightLine className='text-gray-500' />
                </Link><hr />
                <div className='w-full bg-[#ffff] flex justify-between mt-5 rounded-lg p-5'>
                    <div className='flex items-center gap-2'>
                        <RiMapPinLine size={20} className='text-green-600' />
                        <h1 className='text-md font-semibold'>Address</h1>
                    </div>
                    <RiArrowRightLine className='text-gray-500' />
                </div><hr />


                <div className='w-full bg-[#ffff] flex justify-between mt-5 rounded-lg p-5'>
                    <div className='flex items-center gap-2'>
                        <RiMapPinLine size={20} className='text-green-600' />
                        <h1 className='text-md font-semibold'>Address</h1>
                    </div>
                    <RiArrowRightLine className='text-gray-500' />
                </div><hr />
                <div className='w-full bg-[#ffff] flex justify-between mt-5 rounded-lg p-5'>
                    <div className='flex items-center gap-2'>
                        <RiMapPinLine size={20} className='text-green-600' />
                        <h1 className='text-md font-semibold'>Address</h1>
                    </div>
                    <RiArrowRightLine className='text-gray-500' />
                </div><hr />
                <div className='w-full bg-[#ffff] flex justify-between mt-5 rounded-lg p-5'>
                    <div className='flex items-center gap-2'>
                        <RiMapPinLine size={20} className='text-green-600' />
                        <h1 className='text-md font-semibold'>Address</h1>
                    </div>
                    <RiArrowRightLine className='text-gray-500' />
                </div><hr />
            </div>
            <BottomNavbar />
        </div>
    )
}

export default UserAccount
