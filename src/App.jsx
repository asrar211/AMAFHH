import React from 'react'
import HomePage from './Pages/HomePage'
import Header from "./Components/Layout/Header"
import Footer from "./Components/Layout/Footer"
import Products from "./Pages/Products"
import Cart from "./Pages/Cart"
import Contact from "./Pages/Contact"
import Register from "./Pages/authPages/Register"
import Login from "./Pages/authPages/Login"
import './App.css'



import {BrowserRouter , Routes, Route} from "react-router-dom"
import Admin from './Pages/protectedPages/Admin'
import AddProducts from './Pages/protectedPages/AddProducts'
import AllProducts from './Pages/protectedPages/AllProducts'


const App = () => {
  return (
    <>
     <BrowserRouter>
     <Header />
     <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/products" element={<Products />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/add" element={<AddProducts />} />
      <Route path="/admin/all" element={<AllProducts />} />
      </Routes>
      <Footer />
     </BrowserRouter> 
    </>
  )
}

export default App