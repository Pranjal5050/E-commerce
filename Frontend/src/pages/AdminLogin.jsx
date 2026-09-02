import { RiArrowRightBoxLine, RiBarcodeBoxLine, RiGroup3Line, RiMacbookLine, RiShieldUserLine } from '@remixicon/react'
import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleLogin =async (e) => {
        e.preventDefault();
        
        const res = await axios.post("http://localhost:5000/admin/login", {
            email,
            password
        });

        if(res.data){
            localStorage.setItem("adminToken", res.data.token);
            navigate("/admin");
        }
        
        console.log("Login Response:", res.data.token);
    }


    return (
        <div className='w-full h-screen flex overflow-hidden'>
            {/* {Left} */}
            <div className='w-1/2 h-full p-5 bg-gray-200 bg-gradient-to-br from-[#01150C] via-[#052B18] to-[#0B3D20]'>
                {/* {Logo} */}
                <img src="/images/admin-logo.png" className='w-40' alt="Logo" />
                <div className='text-white'>

                    <h1 className='text-3xl font-semibold'>Welcome Back,</h1>
                    <h2 className='text-3xl font-semibold text-[#188746]'>Admin!</h2>

                    <p className='text-sm text-gray-300 mt-2'>Sign in to access your dashboard and <br /> manage your store effectively.</p>

                    <div className='mt-5'>
                        <div className='flex items-center gap-2'>
                            <div className='w-10 h-10 rounded-full bg-gradient-to-br from-[#01150C] via-[#052B18] to-[#0B3D20] flex items-center justify-center'>
                                <RiMacbookLine />
                            </div>
                            <div>
                                <h1 className='text-md'>Dashboard Overview</h1>
                                <p className='text-sm text-gray-300'>Get real-time insights and analytics</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-2 mt-2'>
                            <div className='w-10 h-10 rounded-full bg-gradient-to-br from-[#01150C] via-[#052B18] to-[#0B3D20] flex items-center justify-center'>
                                <RiBarcodeBoxLine />
                            </div>
                            <div>
                                <h1 className='text-md'>Dashboard Overview</h1>
                                <p className='text-sm text-gray-300'>Get real-time insights and analytics</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-2 mt-2'>
                            <div className='w-10 h-10 rounded-full bg-gradient-to-br from-[#01150C] via-[#052B18] to-[#0B3D20] flex items-center justify-center'>
                                <RiGroup3Line />
                            </div>
                            <div>
                                <h1 className='text-md'>Dashboard Overview</h1>
                                <p className='text-sm text-gray-300'>Get real-time insights and analytics</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* {Right} */}
            <div className='w-1/2 h-full bg-[#ffff] rounded-sm flex items-center justify-center'>
                <div className='w-98 py-2 shadow-lg rounded-md p-2'>
                    <div className='w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mx-auto'>
                        <RiShieldUserLine size={34} className='text-green-800' />
                    </div>
                    <h1 className='text-2xl text-center'>Admin Login</h1>
                    <p className='text-sm text-center text-gray-500'>Enter your credentials to access the admin panel.</p>
                    <form onSubmit={handleLogin}>
                        <div className='mt-10'>

                            <div>
                                <label className='text-sm'>Email Address</label>
                                <input
                                    name='email'
                                    type="email"
                                    value={email}
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    placeholder='Enter your email'
                                    className='w-full outline-none border border-gray-300 rounded-md p-2 mt-1 mb-2'
                                />
                            </div>
                            <div>
                                <label className='text-sm'>Password</label>
                                <input
                                    name='password'
                                    type="password"
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value) }}
                                    placeholder='Enter your password'
                                    className='w-full outline-none border border-gray-300 rounded-md p-2 mt-1 mb-2'
                                />
                            </div>
                            <button className='w-full bg-[#176337] hover:bg-[#12502c] text-white p-2 rounded-md mt-5 
                        flex items-center justify-center gap-2 cursor-pointer'>
                                Login To Dashboard <RiArrowRightBoxLine />
                            </button>

                            <p className='text-sm text-center text-gray-500 mt-5'>© 2023 We-mart. All rights reserved.</p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminLogin
