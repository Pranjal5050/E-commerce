import React from "react";
import { RiSearch2Line } from "@remixicon/react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BottomNavbar from "./BottomNavbar";
import { ToastContainer, toast } from 'react-toastify';

const Search = () => {
const [search, setSearch] = useState("");
const [suggestion, setSuggestion] = useState([]);

const handleSearch = async (value)=>{
  setSearch(value);

  if(!value.trim()){
    setSuggestion([]);
    return;
  }

  try {
    const {data} = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/user/searchproduct`, {
      params: {
        query: value
      }
    })
    
    setSuggestion(data);
  } catch (error) {
    toast.error("Search Error");
  }

}

  return (
    <div className="relative">
      <ToastContainer/>
      <div className="relative p-2 md:py-0">
      {/* {search} */}
      <input
        type="search"
        value={search}
        onChange={(e)=>{
          handleSearch(e.target.value);
        }}
        placeholder="Search a products.."
        className="text-sm border border-gray-300 outline-none w-full md:w-[42vw] px-2 py-2 rounded-full"
      />
      <RiSearch2Line
        size={18}
        className="absolute top-4 right-5 md:top-3 text-gray-700"
      />
    </div>


    {suggestion.length > 0 &&(
      <div className="absolute top-10 w-full rounded-sm p-2 bg-white shadow-2xl z-99">
      
      {suggestion.map((product)=>(
         <Link to={`/category/${product.category}`}>
         <div key={product._id} className="w-full bg-white flex item-center gap-2 mt-5">
        <div className="w-15 h-15 bg-gray-200 rounded overflow-hidden">
          <img src={product.image} className="w-full h-full object-cover object-top" alt="" />
        </div>
        <div>
          <h1 className="text-md">{product.title}</h1>
          <p className="text-green-700 font-sans text-sm">{product.description?.split(" ").slice(0, 4).join(" ")}</p>
        </div>
      </div>
         </Link>
      ))}

      
    </div>
    )}
    <div className="fixed bottom-0 w-full md:hidden">
      <BottomNavbar/>
    </div>


    </div>
  );
};

export default Search;
