import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
    const [search, setSearch] = useState("")

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

  return (
    <div>
        <div className='flex justify-center items-center mt-5 '>
        <input 
        className=' search shadow text-lg px-2 py-1  rounded-full outline-none mx-5'
        type="text"
        placeholder='Search Here'
        onChange={handleChange}
        value={search}
        /> 
        <div className='bg-slate-200 p-2 rounded-full text-slate-900 cursor-pointer'>
        <FaSearch />
        </div>
        </div>
    </div>
  )
}

export default SearchBar