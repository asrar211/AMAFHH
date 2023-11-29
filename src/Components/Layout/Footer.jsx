import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { gsap } from "gsap";

const Footer = () => {
  const socialIconsRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.from([socialIconsRef.current.children, textRef.current], {
      opacity: 0.9,
      y: 20,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
      delay: 0.5,
    });
  }, []);

  return (
    <div className="bg-slate-200 py-10">
      <div className="mx-5 pt-10">
        <h2 className="text-2xl font-bold footer">AMAFHH eStore</h2>
        <p ref={textRef} className="mt-4 text-xl font-semibold opacity-80 footer">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic doloremquam.
        </p>
        <div ref={socialIconsRef} className="flex justify-center items-center gap-4 mt-5">
          <FaFacebook size={30} />
          <FaInstagram size={30} />
          <FaWhatsapp size={30} />
        </div>
      </div>
      <div className="text-center text-gray-600 text-sm py-4 mt-5">
        <p>&copy; 2023 KDevelopers. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
