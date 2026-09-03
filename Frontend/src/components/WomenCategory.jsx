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

            const res = await axios.post(`${import.meta.env.VITE_API_ENDPOINT}/cart`, { productId, quantity }
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
            const res = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/admin/getProducts`);

            const products = res.data.products.filter((prod) => {
                return prod.category.toLowerCase() === "women";
            });
            setProducts(products)
        }
        AllProducts();

    }, []);

    return (
        <div className="w-full min-h-screen bg-[#ffffff75]">
    <Navbar />

    <div className="px-4 py-5 sm:px-6 md:px-8">
        <ToastContainer />

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-bold text-green-900">
            Women
        </h1>

        <p className="text-sm sm:text-base text-gray-500 mt-2 sm:mt-3">
            Discover our best collection for women
        </p>

        {/* Products */}
        <div
            className="
                w-full
                grid
                grid-cols-2
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4
                xl:grid-cols-5
                gap-3
                sm:gap-4
                md:gap-5
                mt-5
                pb-24
            "
        >
            {product.map((prod) => {
                return (
                    <div
                        key={prod._id}
                        className="
                            w-full
                            min-w-0
                            rounded-md
                            overflow-hidden
                            border
                            border-gray-300
                            bg-white
                        "
                    >
                        {/* Image */}
                        <Link to={`/productDetails/${prod._id}`}>
                            <div className="w-full aspect-[3/4] bg-white overflow-hidden">
                                <img
                                    src={prod.image}
                                    className="w-full h-full object-cover object-top"
                                    alt={prod.title}
                                />
                            </div>
                        </Link>

                        {/* Product Details */}
                        <div className="p-2 sm:p-3">

                            <h1
                                className="
                                    text-xs
                                    sm:text-sm
                                    md:text-base
                                    font-semibold
                                    line-clamp-2
                                    min-h-[32px]
                                    sm:min-h-[40px]
                                "
                            >
                                {prod.title}
                            </h1>

                            <p
                                className="
                                    text-sm
                                    sm:text-base
                                    font-bold
                                    mt-2
                                    mb-2
                                "
                            >
                                ₹{prod.price}
                            </p>

                            <button
                                onClick={() => {
                                    validateUser(prod._id || prod.id)
                                }}
                                className="
                                    rounded-sm
                                    hover:bg-green-900
                                    hover:text-white
                                    border
                                    flex
                                    items-center
                                    justify-center
                                    gap-1
                                    text-xs
                                    sm:text-sm
                                    cursor-pointer
                                    border-green-800
                                    text-green-900
                                    w-full
                                    py-2
                                    transition
                                "
                            >
                                <RiShoppingBasketFill size={16} />

                                <span>
                                    Add to cart
                                </span>
                            </button>

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