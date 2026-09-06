import React from 'react'
import { RiDiscountPercentLine, RiHeart2Line, RiHome2Line, RiMapPinLine, RiSearch2Line, RiShoppingBag2Line, RiUserLine } from '@remixicon/react'
import { Link } from 'react-router-dom'
import BottomNavbar from './BottomNavbar'
import { useCart } from './CartContext.jsx';

const Navbar = () => {
    const { product } = useCart();
    return (
        <nav className='w-full'>
            <div className='w-full bg-[#fbfaf9bc] flex items-center justify-between md:justify-between px-5'>
                <div className='flex items-center'>
                    {/* Logo */}
                    <div>
                        <img className='md:w-35 w-35 object-cover' src="/images/logo.png" alt="" />
                    </div>

                    {/* {Menu} */}

                    <div className='gap-6 md:flex tems-center justify-center ml-10 hidden'>
                        <Link to={'/'} className='hover:text-green-700 '>Home</Link>
                        <Link to={'/category/men'} className='hover:text-green-700 '>Men</Link>
                        <Link to={'/cat/womens'} className='hover:text-green-700 '>Women</Link>
                        <Link to={'/category/kids'} className='hover:text-green-700 '>Kids</Link>
                        <Link className='hover:text-green-700 '>New Arrivals</Link>
                    </div>
                </div>

                <div className='md:flex gap-5 items-center hidden'>
                    <div className='relative'>
                        {/* {search} */}
                        <input type="search" placeholder='Search a products..' className='text-sm border border-gray-300 outline-none px-2 py-2 rounded-full' />
                        <RiSearch2Line size={18} className='absolute top-2 right-2 text-gray-700' />
                    </div>
                    <Link to={'/account'}><RiUserLine size={21} /></Link>
                    <RiHeart2Line size={21} />
                    <div>
                        <Link to={'/cart'}><RiShoppingBag2Line size={21} /></Link>
                        <span className='absolute top-3 right-4 bg-green-800 text-white w-5 h-5 text-sm rounded-full flex items-center justify-center'>
                            {product.length}
                        </span>
                    </div>
                </div>



                {/* Mobile View */}
                <div className='md:hidden flex items-center gap-5'>
                    <div className='flex gap-5'>
                        <Link to={'/cart'}>
                            <RiSearch2Line className='text-2xl' size={20} />
                        </Link>

                        <Link to={'/cart'}>
                            <RiHeart2Line className='text-2xl' size={20} />
                        </Link>

                        <Link to={'/cart'} className='relative'>
                            <RiShoppingBag2Line className='text-2xl' size={20} />
                            <span className='absolute -top-2 -right-2 text-sm flex items-center justify-center rounded-full w-4 h-4 bg-green-900 text-white'>{product.length}</span>
                        </Link>

                    </div>
                </div>
            </div>
            {/* Bottom Navbar */}
            <BottomNavbar />
        </nav>
    )
}

export default Navbar
