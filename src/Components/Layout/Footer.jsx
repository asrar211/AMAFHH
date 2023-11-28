import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-slate-200">
      <div className="mx-5 pt-10">
        <h2 className="text-2xl font-bold footer">AMAFHH eStore</h2>
        <p className="mt-4 text-xl font-semibold opacity-80 footer">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic doloremquam.</p>
        <div className="flex justify-center items-center gap-4 mt-5">
        <FaFacebook size={30} />
        <FaInstagram size={30}/>
        <FaWhatsapp size={30}/>
        </div>
      </div>
      <div className="text-center text-gray-600 text-sm py-4">
  <p>&copy; 2023 KDevelopers. All Rights Reserved.</p>
</div>

    </div>
  );
};

export default Footer;