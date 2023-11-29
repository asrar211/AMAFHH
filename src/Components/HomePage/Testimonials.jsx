import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "The best experience I've had! Amazing service.",
      author: 'John Doe',
      position: 'CEO, Company ABC',
    },
    {
      id: 2,
      quote: 'Incredible product! Highly recommended to everyone.',
      author: 'Jane Smith',
      position: 'Designer, XYZ Studios',
    },
    {
      id: 3,
      quote: 'Absolutely loved it! Great customer support.',
      author: 'David Johnson',
      position: 'Marketing Manager, Company XYZ',
    },
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const elements = document.querySelectorAll('.testimonial-slide');
    elements.forEach((element) => {
      gsap.from(element, {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top 95%', // Adjust the start position for smaller screens
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoints as needed for your design
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='my-10'>
      <div className='flex justify-between mx-10 items-center'>
        <h2 className='text-2xl font-bold mt-5 testimonials'>Testimonials</h2>
      </div>
      <Slider {...settings} className='mx-4 my-4'>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className='px-4 bg-slate-200 test testimonial-slide'>
            <p className='text-lg font-medium'>{testimonial.quote}</p>
            <p className='text-sm font-semibold'>{testimonial.author}</p>
            <p className='text-sm text-gray-500'>{testimonial.position}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
