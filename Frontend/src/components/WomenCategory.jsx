import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar';
import { RiShoppingBasketFill } from '@remixicon/react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const WomenCategory = () => {

    const [product, setProducts] = useState([]);

    async function validateUser(productId, quantity = 1) {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                toast.error("Please login first");
                return;
            }

            const res = await axios.post("http://localhost:5000/cart", { productId, quantity }
                , {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            toast.success(res.data.message);
            window.dispatchEvent(new Event("cartUpdated"));
        } catch (error) {
            toast.error(error.response?.data);
        }
    }

    useEffect(() => {

        async function AllProducts() {
            const res = await axios.get("http://localhost:5000/admin/getProducts");

            const products = res.data.products.filter((prod) => {
                return prod.category.toLowerCase() === "women";
            });
            setProducts(products)
        }
        AllProducts();

    }, []);

    return (
        <div className='w-full bg-[#ffffff75]'>
            <Navbar />
            <div className='p-5'>
                <ToastContainer/>
                <h1 className='text-2xl md:text-2xl font-bold text-green-900'>Women</h1>
                <p className='text-gray-500 mt-3'>Discover our best collection for women</p>
                <div className='w-full grid grid-cols-2 lg:grid-cols-5 gap-3 mt-5 pb-24'>
                    {product.map((prod) => {
                        return (
                            <div key={prod._id} className='md:w-52 md:h-95 w-full min-w-0 h-94 rounded-md overflow-hidden border-1 border-gray-300'>
                                <div className='w-full h-full'>
                                    <Link to={`/productDetails/${prod._id}`}>
                                        <div className='w-full h-[70%] bg-white'>
                                            <img src={prod.image} className='w-full h-full object-cover object-top' alt="" />
                                        </div>
                                    </Link>

                                    <div className='p-1'>
                                        <h1 className='text-sm font-semibold'>{prod.title}</h1>
                                        <p className='text-sm font-bold mt-3 mb-3'>₹{prod.price}</p>
                                        <button
                                            onClick={() => { validateUser(prod._id || prod.id) }}
                                            className='rounded-sm hover:bg-green-900 hover:text-white border-1 
                                            flex items-center justify-center text-sm cursor-pointer border-green-800 text-green-900 
                                            w-full py-1'>
                                            <span>
                                                <RiShoppingBasketFill />
                                            </span>
                                            Add to cart
                                        </button>
                                    </div>

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default WomenCategory