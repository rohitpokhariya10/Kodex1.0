import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'

const CartPage = () => {

   let {cartItems} =  useSelector((state) => state.cart)
   console.log("Cart Data-->" , cartItems)
   
   if(cartItems.length == 0){
   return (
   <div className='flex items-center justify-center h-screen'>
         <h1 className='text-xl text-blue-950'>Cart is Emprty</h1>
   </div>)
  
   }
  return (
    <div className='p-5 grid grid-cols-4 gap-4'>
        {
            cartItems.map((product , index)=>{
                let productQuant = cartItems.find((elem)=> elem.id === product.id)
                return <ProductCard product={product} key={index}  productQuant={productQuant}/>
            })
        }

    </div>
  )
}

export default CartPage