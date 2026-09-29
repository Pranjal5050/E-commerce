import React from "react";
import { RiSearch2Line } from "@remixicon/react";
import { useState } from "react";
import axios from "axios";

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
      param: {
        query: value
      }
    })
    console.log(data);
  } catch (error) {
    console.log("Error - ", error);
  }

}

  return (
    <div className="relative">
      {/* {search} */}
      <input
        type="search"
        value={search}
        onChange={(e)=>{
          handleSearch(e.target.value);
        }}
        placeholder="Search a products.."
        className="text-sm border border-gray-300 outline-none px-2 py-2 rounded-full"
      />
      <RiSearch2Line
        size={18}
        className="absolute top-2 right-2 text-gray-700"
      />
    </div>
  );
};

export default Search;
