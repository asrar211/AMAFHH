import React from 'react'
import Cat from "../../assets/images/cat.jpg"

const Categories = () => {
  return (
    <div className='grid grid-cols-1 gap-5 my-5 mx-5 md:grid-cols-4 md:my-10'>
        <div className='mb-5 '>
            <img src={Cat} alt="" />
            <h2 className='text-center font-bold'>Category 1</h2>
        </div>
        <div className='mb-5 '>
            <img src={Cat} alt="" />
            <h2 className='text-center font-bold'>Category 2</h2>
        </div>
        <div className='mb-5 '>
            <img src={Cat} alt="" />
            <h2 className='text-center font-bold'>Category 3</h2>
        </div>
        <div className='mb-5 '>
            <img src={Cat} alt="" />
            <h2 className='text-center font-bold'>Category 4</h2>
        </div>
        
    </div>
  )
}

export default Categories