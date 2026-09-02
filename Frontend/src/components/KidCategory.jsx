import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar';
import { RiShoppingBasketFill } from '@remixicon/react';
import { Link } from 'react-router-dom';

const KidCategory = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        async function fetchProduct() {
            try {
                const res = await axios.get("http://localhost:5000/admin/getProducts");

                const kidproducts = res.data.products.filter((prod) => {
                    return prod.category.toLowerCase() === "kids";
                });
                setProduct(kidproducts);
                console.log(res.data.products);
            } catch (error) {
                console.log("Error", error)
            }
            console.log(product)
        }
        fetchProduct()
    }, [])

    return (
        <div className='w-full'>
            <Navbar />
            <div className='w-full py-2 bg-[#ffff]'>
                <div className='p-8'>
                    <h1 className='text-3xl md:text-2xl font-semibold text-green-900'>Kid's</h1>
                    <p className='text-gray-500 mt-3'>Discover our best collection for Kids</p>
                    <div className='w-full grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4 gap-5 mt-5'>

                        {product.map((item) => (
                            <div key={item._id} className='w-full mt-5'>
                                <div className='w-52 h-90 rounded-md shadow border border-gray-200 overflow-hidden'>
                                    <Link to={`/productDetails/${item._id}`}>
                                        <div className='w-full h-[70%]'>
                                            <img className='w-full h-full object-cover object-top' src={item.image} alt="image" />
                                        </div>
                                    </Link>
                                    <div className='p-1'>

                                        <h1 className='text-md mt-2 font-light text-gray-600'>{item.title}</h1>
                                        <p className='text-ms font-semibold'>₹ {item.price}</p>
                                        <button
                                            className='rounded-sm hover:bg-green-900 hover:text-white border-1 mt-2
                                                       flex items-center justify-center text-sm cursor-pointer border-green-800 text-green-900 
                                                       px-8 py-1'>
                                            <span>
                                                <RiShoppingBasketFill />
                                            </span>
                                            Add to cart
                                        </button>

                                    </div>
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </div>
        </div>
    )
}

export default KidCategory
