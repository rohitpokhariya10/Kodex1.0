import React, { useContext } from 'react'
import { CartStore } from '../Context/CartContext'
import ProductsCard from '../Components/ProductsCard'

const Cart = () => {
  let {cartItem } = useContext(CartStore)

  if(cartItem.length == 0) {
    return (
      <div className='flex min-h-[calc(100vh-5.5rem)] items-center justify-center px-4 py-8 sm:px-6 sm:py-10'>
        <div className='float-in max-w-xl rounded-[28px] border border-[#14213d]/10 bg-[#fffdf8] px-6 py-10 text-center shadow-[0_24px_70px_rgba(20,33,61,0.08)] sm:rounded-[36px] sm:px-10 sm:py-12'>
          <span className='inline-flex rounded-full border border-[#e09f3e]/30 bg-[#fff4db] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.28em] text-[#c77d1f]'>Your cart</span>
          <div className='mx-auto mt-6 w-24 text-[#14213d]'>
            <svg viewBox="0 0 64 64" className='h-full w-full fill-none' xmlns="http://www.w3.org/2000/svg">
              <circle cx="22" cy="54" r="4" fill="#E09F3E"/>
              <circle cx="46" cy="54" r="4" fill="#E09F3E"/>
              <path d="M8 10h7l6 28h25l8-20H18" stroke="#14213D" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h1 className='mt-5 text-3xl font-black tracking-tight text-[#14213d] sm:text-4xl'>Cart is Empty...</h1>
          <p className='mt-3 text-sm leading-7 text-[#4f5d75] sm:text-base'>Add a few items from the catalog and they&apos;ll show up here in a cleaner, more structured shopping layout.</p>
        </div>
      </div>
    )
  }
  return (
    <div className='min-h-[calc(100vh-5.5rem)] px-3 py-6 sm:px-6 sm:py-8 lg:px-10'>
      <div className='mx-auto flex max-w-[1440px] flex-col gap-6 sm:gap-8'>
        <div className='float-in flex flex-col gap-3 rounded-[28px] border border-[#14213d]/10 bg-[#fffdf8] px-4 py-5 shadow-[0_18px_50px_rgba(20,33,61,0.06)] sm:rounded-[32px] sm:px-6 sm:py-6 lg:flex-row lg:items-end lg:justify-between'>
          <div>
            <span className='w-fit rounded-full border border-[#e09f3e]/30 bg-[#fff4db] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.28em] text-[#c77d1f]'>Saved for checkout</span>
            <h1 className='mt-4 text-3xl font-black tracking-tight text-[#14213d] sm:text-4xl'>Your shopping cart</h1>
          </div>
          <div className='rounded-[24px] border border-[#14213d]/10 bg-[#f8f3ea] px-5 py-4 text-sm font-medium text-[#4f5d75]'>
            {cartItem.length} items selected
          </div>
        </div>
        <div className='grid grid-cols-1 items-start gap-6 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
       {
        cartItem.map((product , index)=>{
          return <div key={index} className='w-full self-start'> <ProductsCard product={product}/></div>
        })
       }
        </div>
      </div>
    </div>
  )
}

export default Cart
