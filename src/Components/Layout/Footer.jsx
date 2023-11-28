import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-slate-200 mt-20 p-10 text-slate-900">
      <h1 className="text-center">All Right Reserved &copy; KDevelopers</h1>
      <p className="text-center mt-3">
    <Link to="/contact">Contact</Link> | <Link to="/products">Products</Link> | <Link to="/cart">Cart</Link>
      </p>
    </div>
  );
};

export default Footer;