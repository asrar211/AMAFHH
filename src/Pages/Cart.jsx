import React from 'react'

const Cart = () => {
  return (
        <div className='my-10 mx-4'>
          <h1 className='text-2xl text-red-900 text-center  font-bold '>Your Cart ()</h1>
          <div>
            <div >
              <ul className='flex justify-between mt-4'>
                <li>Item</li>
                <li>Price</li>
                <li>Quantity</li>
                <li>Total</li>
              </ul>
            </div>
            <div className='flex justify-between items-center'>
              <div className=''>
              <h4 className='text-lg font-semibold text-red-900'>Suite 1 </h4>
              <p className='text-sm opacity-80'>description</p>
              </div>
                <div className='text-red-900 font-semibold'>$455.99</div>
                <div className='text-red-900 font-semibold'>hjasgda</div>
                <div className='text-red-900 font-semibold'><b>$455.99</b></div>
            </div>
            <hr />
          </div>
          <div>


            <div className='w-[50%] mt-5 '>
            <div className='flex justify-between items-center my-2'>
              <h3 className='text-xl font-semibold text-red-900'>Subtotal:</h3>
              <p className='font-bold text-red-900'>$455.99</p>
            </div>
            <hr />
            <div className='flex justify-between items-center my-2'>
              <h3 className='text-xl font-semibold text-red-900'>Sales Tax:</h3>
              <p className='font-bold text-red-900'>$10</p>
            </div>
            <hr />
            <div className='flex justify-between items-center my-2'>
              <h3 className='text-xl font-semibold text-red-900'>Grand Total:</h3>
              <p className='font-bold text-red-900'>$465.99</p>
            </div>
            <hr />
            </div>
             <div>
             <button className='bg-red-900 text-xl font-semibold text-white px-4 py-2 mt-4 rounded-full ' type="Submit">Checkout</button>
             </div>
          </div>
        </div>
    )
}

export default Cart