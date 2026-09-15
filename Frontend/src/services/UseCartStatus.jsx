import axios from "axios";
import { useEffect, useState } from "react";

export const UseCartStatus = () => {
    const [cartItem, setCartItem] = useState({});
    useEffect(() => {
        const fetchCartStatus = async () => {
            try {
                const token = localStorage.getItem("token");
                const cartProduct = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/cart/getCartProduct`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const cartStatus = {}
                cartProduct.data.cartProduct.forEach((item) => {
                    cartStatus[item.productId._id] = true;
                });
                setCartItem(cartStatus);
            } catch (error) {
                console.log(error);
            }
        }
        fetchCartStatus();
    }, [])
    return {cartItem, setCartItem}
}