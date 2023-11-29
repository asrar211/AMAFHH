import React, { useState, useRef, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { gsap } from 'gsap';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const searchIconRef = useRef(null);

  useEffect(() => {
    gsap.from(searchIconRef.current, {
      opacity: 1,
      y: -10,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className='mt-5'>
      <div className='flex justify-center items-center'>
        <input
          className='search text-lg px-4 py-2 outline-none rounded-l-lg border-r-0'
          type='text'
          placeholder='Search Here'
          onChange={handleChange}
          value={search}
        />
        <div
          ref={searchIconRef}
          className='bg-slate-200 p-2 rounded-r-lg text-slate-900 cursor-pointer hover:bg-slate-300 transition duration-300 mt-7 ml-4'
        >
          <FaSearch />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
