import React, { useContext } from 'react'
import { toast } from 'react-toastify';

export default AddProductCartContext = ({children}) => {
    async function validateUser(productId, quantity = 1) {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                toast.error("Please login first")
            }

            const res = await axios.post("http://localhost:5000/cart", { productId, quantity }
                , {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            toast.success(res.data.message);
        } catch (error) {
            toast.error(error.response?.data);
        }
    }
    return (
        <AddProductCartContext.Provider value={validateUser}>
          {children}
        </AddProductCartContext.Provider>
    )
}

export default AddProductCart = useContext(AddProductCartContext);
