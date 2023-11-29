import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductImage from '../../assets/images/cat.jpg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const FeaturedProducts = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const elements = document.querySelectorAll('.slick-track > div');
    gsap.from(elements, {
      opacity: 0.9,
      y: 30,
      duration: 1,
      ease: 'power3.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: elements,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className='flex justify-between mx-10 items-center'>
        <h2 className='text-2xl font-bold mt-5 featured '>Featured Products</h2>
        <button className='cursor-pointer border-b-2 mt-3 border-slate-900'>
          View all
        </button>
      </div>

      <Slider {...settings} className='mx-4 my-4'>
        {[...Array(4)].map((_, index) => (
          <div key={index}>
            <img src={ProductImage} alt={`Product ${index + 1}`} className='pr-2 pr-img'/>
            <h2 className='text-xl font-bold my-2 text-center'>Item {index + 1}</h2>
            <p className='text-lg font-semibold pr-price'>Price: $14</p>
            <button className='pr-btn bg-slate-900 text-white font-semibold p-1 mt-2 w-[50%] ml-[25%]'>Buy Now</button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedProducts;
