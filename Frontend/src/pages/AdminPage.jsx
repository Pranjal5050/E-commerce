import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const AdminPage = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("adminToken");

    useEffect(() => {
        if (!token) {
            navigate("/admin/login");
        }
    }, [token, navigate]);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append("title", title);
        formData.append("description", description);
        formData.append("price", price);
        formData.append("category", category);
        formData.append("image", image);

        const res = await axios.post(`${import.meta.env.VITE_API_ENDPOINT}/admin/createProduct`, formData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        if (res.data.success) {
            toast.success("Product created successfully!");
            setTitle("");
            setDescription("");
            setPrice("");
            setCategory("");
            setImage(null);
        } else {
            toast.error("Failed to create product.");
        }
    }

    return (
        <div className='w-full h-screen bg-[#ffff] p-10'>
            <ToastContainer />
            <h1 className='text-2xl font-semibold text-green-800'>Add New Product</h1>
            <form onSubmit={handleSubmit}>
                <div className='w-full mt-5 p-5 shadow-2xl md:flex gap-10 rounded-sm'>
                    <div className='md:w-1/2 w-full h-full'>
                        <div>
                            <label>Title <span className='text-red-600'>*</span></label>
                            <input name='title' value={title} onChange={(e) => setTitle(e.target.value)} type="text" className='w-full p-2 rounded-sm outline-none border border-gray-300 mb-6 mt-2' placeholder='Enter Product Title' />

                            <label>Description <span className='text-red-600'>*</span></label>
                            <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} className='w-full text-sm resize-none p-2 rounded-sm outline-none border border-gray-300 mt-2' placeholder='Enter Product Description'></textarea>

                            <label>Price <span className='text-red-600'>*</span></label>
                            <input name="price" value={price} onChange={(e) => setPrice(e.target.value)} type="number" className='w-full p-2 rounded-sm outline-none border border-gray-300 mb-6 mt-2' placeholder='Enter Product Price' />

                            <label>Category <span className='text-red-600'>*</span></label>
                            <select name="category" value={category} onChange={(e) => setCategory(e.target.value)} className='w-full p-2 rounded-sm outline-none border border-gray-300 mb-6 mt-2'>
                                <option value="women">Women</option>
                                <option value="men">Men</option>
                                <option value="kids">Kids</option>
                                <option value="shoes">Shoes</option>
                            </select>
                        </div>
                    </div>


                    <div className='md:w-1/2 w-full h-full'>
                        <h1>Product Image <span className='text-red-600'>*</span></h1>

                        <input type="file" className='mt-5' name='image' onChange={(e) => setImage(e.target.files[0])} />
                    </div>
                </div>
                <div className='flex justify-end'>
                    <button className='px-8 py-2 text-white bg-green-700 hover:bg-green-800 font-semibold mt-2 rounded-sm cursor-pointer'>Create Product</button>
                </div>

            </form>
        </div>
    )
}

export default AdminPage
