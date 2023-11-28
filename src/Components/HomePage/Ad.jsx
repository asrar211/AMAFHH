import React from 'react'

const Ad = () => {
  return (
    <div>
        <div className='ad flex items-center'>
            <div className='ad-inner bg-white w-[80%] ml-[10%] h-[50%] p-5'>
                <h2 className='text-2xl font-bold tracking-wide'>AMAFHH Products Here</h2>
                <p className='text-xl font-semibold mt-3 ml-2'>Check Out Our Products!</p>
                <button className='ml-2 mt-5 p-2 bg-red-900 text-white font-semibold'>Go To Shop</button>
            </div>
        </div>
    </div>
  )
}

export default Ad