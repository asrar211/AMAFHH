import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Cat1 from '../../assets/images/banner.jpg';
import Cat from '../../assets/images/cat.jpg';


const Categories = () => {
  const categoriesRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(categoriesRef.current, {
      opacity: 0.9,
      y: 50,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: categoriesRef.current,
        start: 'top 80%',
      },
    });
  }, []);

  return (
    <>
    <div>
      <h2 className='text-3xl font-bold text-center mt-10'>Collections</h2>
    </div>
    <div className="grid grid-cols-1 gap-8 mb-16 mx-12 md:grid-cols-4 md:my-10">
      <CategoryItem image={Cat} title="Category 1" ref={(el) => (categoriesRef.current[0] = el)} />
      <CategoryItem image={Cat1} title="Category 2" ref={(el) => (categoriesRef.current[1] = el)} />
      <CategoryItem image={Cat} title="Category 3" ref={(el) => (categoriesRef.current[2] = el)} />
      <CategoryItem image={Cat1} title="Category 4" ref={(el) => (categoriesRef.current[3] = el)} />
    </div>
    </>
  );
};

const CategoryItem = React.forwardRef(({ image, title }, ref) => {
  return (
    <div className="mb-20 cursor-pointer " ref={ref}>
      <img src={image} alt={title} className="w-full h-auto rounded-lg shadow-md" />
      <h2 className="text-center font-bold mt-5 text-xl">{title}</h2>
    </div>
  );
});

export default Categories;
