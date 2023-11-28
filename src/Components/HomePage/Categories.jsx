import React from 'react'
import Cat from "../../assets/images/cat.jpg"

const Categories = () => {
  return (
    <div className='grid grid-cols-1 gap-5 my-16 mx-12 md:grid-cols-4 md:my-10 '>
        <div className='mb-5 cursor-pointer'>
            <img src={Cat} alt="" />
            <h2 className='text-center font-bold mt-5 text-xl '>Category 1</h2>
        </div>
        <div className='mb-5 cursor-pointer'>
            <img src={Cat} alt="" />
            <h2 className='text-center font-bold mt-5 text-xl '>Category 2</h2>
        </div>
        <div className='mb-5 cursor-pointer'>
            <img src={Cat} alt="" />
            <h2 className='text-center font-bold mt-5 text-xl '>Category 3</h2>
        </div>
        <div className='mb-5 cursor-pointer'>
            <img src={Cat} alt="" />
            <h2 className='text-center font-bold mt-5 text-xl '>Category 4</h2>
        </div>
        
        
    </div>
  )
}

export default Categories