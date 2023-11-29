import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {Link} from "react-router-dom"
const Ad = () => {
  const adRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(adRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: adRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  return (
    <div className='ad flex items-center justify-center h-screen'>
      <div ref={adRef} className='ad-inner bg-white w-4/5 md:w-3/5 lg:w-2/5 xl:w-1/3 p-5 rounded-lg shadow-lg'>
        <h2 className='text-2xl font-bold tracking-wide'>AMAFHH Products Here</h2>
        <p className='text-xl font-semibold mt-3'>Check Out Our Products!</p>
       <Link to="/products"><button className='mt-5 p-2 bg-red-900 text-white font-semibold hover:bg-red-700 transition duration-300 ease-in-out'>
          Go To Shop
        </button></Link> 
      </div>
    </div>
  );
};

export default Ad;
