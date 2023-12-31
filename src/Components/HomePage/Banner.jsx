import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cat from '../../assets/images/banner.jpg';
import Cat2 from '../../assets/images/cat.jpg';
import {Link} from "react-router-dom"


const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="relative mt-5 overflow-hidden">
      <Slider {...settings}>
        <div className="relative">
          <img
            src={Cat}
            alt="Cat 1"
            className="carousel-image w-[100vw] "
          />
 <Link to="/products"><button className="shop-now-btn absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Shop Now</button></Link>
        </div>
        <div className="relative">
          <img
            src={Cat2}
            alt="Cat 2"
            className="carousel-image w-[100vw] "
          />
          <Link to="/products"><button className="shop-now-btn absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Shop Now</button></Link>
        </div>
        <div className="relative">
          <img
            src={Cat}
            alt="Cat 3"
            className="carousel-image w-[100vw] "
          />
 <Link to="/products"><button className="shop-now-btn absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Shop Now</button></Link>
        </div>
      </Slider>
    </div>
  );
};

export default Banner;
