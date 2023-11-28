import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='my-10'>
        <div className='flex justify-between mx-10 items-center'>
        <h2 className='text-2xl font-bold mt-5 testimonials'>Testimonials</h2>
      </div>
      <Slider {...settings} className='mx-4 my-4'>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className='px-4 bg-slate-200 test'>
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
