import React from 'react'
import { RiHome2Line, RiSearch2Line, RiDiscountPercentLine, RiHeart2Line, RiUserLine } from '@remixicon/react'
import { Link } from 'react-router-dom'

const BottomNavbar = () => {
    return (
        <div className='md:hidden p-5 w-full fixed bottom-0 z-50 bg-[#ffff] flex items-center justify-between'>
            <div className=''>
                <RiHome2Line className='text-2xl m-auto' />
                <Link to="/" className='text-sm text-gray-700'>Home</Link>
            </div>
            <div className=''>
                <RiSearch2Line className='text-2xl m-auto' />
                <Link to="/search" className='text-sm text-gray-700'>Search</Link>
            </div>
            <div className=''>
                <RiDiscountPercentLine className='text-2xl m-auto' />
                <Link to={'/deal'} className='text-sm text-gray-700'>Deals</Link>
            </div>
            <div className=''>
                <RiHeart2Line className='text-2xl m-auto' />
                <Link to="/wishlist" className='text-sm text-gray-700'>WishList</Link>
            </div>
            <div className=''>
                <RiUserLine className='text-2xl m-auto' />
                <Link to="/account" className='text-sm text-gray-700 mt-1'>Account</Link>
            </div>
        </div>
    )
}

export default BottomNavbar
