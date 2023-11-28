import React from 'react'
import Cat from "../../assets/images/banner.jpg"

const Banner = () => {
  return (
    <div>
        <div className='mt-5'>
            <img src={Cat}
            className='cat h-[50vh] w-full sm:h-[90vh] opacity-70'/>
            <h2 className='cat-head font-bold text-lg'>Shop Now</h2>
        </div>
        
    </div>
  )
}

export default Banner