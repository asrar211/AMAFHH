import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductImage from '../../assets/images/cat.jpg';

const FeaturedProducts = () => {
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
        <div>
          <img src={ProductImage} alt='Product 1' className='pr-2 pr-img'/>
          <h2 className='text-xl font-bold my-2 text-center'>Item 1</h2>
          <p className='text-lg font-semibold pr-price'>Price: $14</p>
          <button className='pr-btn bg-slate-900 text-white font-semibold p-1 mt-2 w-[50%] ml-[25%]'>Buy Now</button>
        </div>
        <div>
          <img src={ProductImage} alt='Product 1' className='pr-2 pr-img'/>
          <h2 className='text-xl font-bold my-2 text-center'>Item 1</h2>
          <p className='text-lg font-semibold pr-price'>Price: $14</p>
          <button className='pr-btn bg-slate-900 text-white font-semibold p-1 mt-2 w-[50%] ml-[25%]'>Buy Now</button>
        </div>
        <div>
          <img src={ProductImage} alt='Product 1' className='pr-2 pr-img'/>
          <h2 className='text-xl font-bold my-2 text-center'>Item 1</h2>
          <p className='text-lg font-semibold pr-price'>Price: $14</p>
          <button className='pr-btn bg-slate-900 text-white font-semibold p-1 mt-2 w-[50%] ml-[25%]'>Buy Now</button>
        </div>
        <div>
          <img src={ProductImage} alt='Product 1' className='pr-2 pr-img'/>
          <h2 className='text-xl font-bold my-2 text-center'>Item 1</h2>
          <p className='text-lg font-semibold pr-price'>Price: $14</p>
          <button className='pr-btn bg-slate-900 text-white font-semibold p-1 mt-2 w-[50%] ml-[25%]'>Buy Now</button>
        </div>
    
        
        
      </Slider>
    </div>
  );
};

export default FeaturedProducts;
