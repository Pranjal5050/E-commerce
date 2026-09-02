import React, {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const [product, setProduct] = useState([]);

    const navigate = useNavigate();

    const fetchProduct = async () => {

        try {

            const token = localStorage.getItem("token");

            if (!token) {
                console.log("No token");
                console.log("Please Login First")
                return;
            }

            const res = await axios.get(
                "http://localhost:5000/cart/getCartProduct",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

                setProduct(res.data.cartProduct);

        } catch (error) {

            console.log("Cart Error:", error);

        }
    };

    useEffect(() => {
        fetchProduct();
    }, []);

    return (
        <CartContext.Provider
            value={{
                product,
                setProduct,
                fetchProduct
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);