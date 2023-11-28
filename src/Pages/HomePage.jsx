import React from 'react'
import SearchBar from '../Components/HomePage/SearchBar'
import Banner from '../Components/HomePage/Banner'
import Categories from '../Components/HomePage/Categories'
import Ad from '../Components/HomePage/Ad'
import FeaturedProducts from '../Components/HomePage/FeaturedProducts'

const HomePage = () => {
  return (
    <>
    <SearchBar />
    <Banner />
    <Categories />
    <Ad />
    <FeaturedProducts />
  </>
  )
}

export default HomePage