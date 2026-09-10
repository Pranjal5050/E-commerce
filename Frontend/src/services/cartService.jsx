import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

export const addToCart = async (productId, quantity = 1) => {

    try {
        const token = localStorage.getItem("token");
        if (!token) {
            toast.error("Please login first");
            return;
        }
        const response = await axios.post(`${import.meta.env.VITE_API_ENDPOINT}/cart`, { productId, quantity },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        if (response.status === 200) {
            toast.success("Product addedd successfully");
        }
    } catch (err) {
        toast.error("Error", err.message);
    }

}