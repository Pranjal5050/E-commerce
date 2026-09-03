// import React, { useContext } from "react";
// import { toast } from "react-toastify";
// import axios from "axios";

// const AddProductCartContext = React.createContext();

// export const AddProductCartProvider = ({ children }) => {

//     async function validateUser(productId, quantity = 1) {
//         try {

//             const token = localStorage.getItem("token");

//             if (!token) {
//                 toast.error("Please login first");
//                 return;
//             }

//             const res = await axios.post(
//                 `${import.meta.env.VITE_API_ENDPOINT}/cart`,
//                 {
//                     productId,
//                     quantity
//                 },
//                 {
//                     headers: {
//                         Authorization: `Bearer ${token}`
//                     }
//                 }
//             );

//             toast.success(res.data.message);

//         } catch (error) {

//             toast.error(
//                 error.response?.data?.message ||
//                 error.response?.data ||
//                 "Something went wrong"
//             );

//         }
//     }

//     return (
//         <AddProductCartContext.Provider value={validateUser}>
//             {children}
//         </AddProductCartContext.Provider>
//     );
// };

// export const useAddProductCart = () => {
//     return useContext(AddProductCartContext);
// };