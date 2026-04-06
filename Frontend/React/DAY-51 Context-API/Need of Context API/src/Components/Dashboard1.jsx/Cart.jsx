import React from 'react'
import ProductList from './ProductList'

const Cart = ({setShowCart ,  cartItems} ) => {
  console.log("Cart Items in Cart--->" , cartItems)
  return (
   <div className='h-[100%]  w-[100%]  flex flex-col gap-[40px]'>
     <div className=' w-2xl flex justify-between it'>
      <h1 className='text-white text-4xl font-bold'>Cart Screen</h1>
     
      <button 
      onClick={()=>{
        setShowCart((prev)=>!prev)
      }}
      className="px-3 py-2 rounded-md bg-red-700 text-amber-50 h-fit active:scale-98 ">Close</button>
    </div>

    <div className='h-[100%] flex flex flex-col gap-5'>
      {
    cartItems.map((item)=>{
      return <h1 className='text-xl text-amber-200 font-semibold'>{item.title}</h1>
    })
      }
    </div>
   </div>
  )
}

export default Cart
