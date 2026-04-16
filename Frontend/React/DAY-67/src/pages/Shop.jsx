import React, { useEffect, useState } from 'react'
import { axiosInstance } from '../config/axiosInstance'
import ProductCard from '../components/ProductCard'
import { useSelector } from 'react-redux'

const Shop = () => {
  console.log("Shop Rendering....")

// const cartIt = useSelector((state) => state.cart.cartItems)
// console.log(cartIt)

  let {cartItems} = useSelector((state)=>state.cart)

const [products, setProducts] = useState([])
console.log("ALL Products-->" , products)

 useEffect(()=>{
  //IIFE
  (async ()=>{
        try{
        let response = await axiosInstance.get('/products')
        console.log("API response" , response.data)
        setProducts(response.data)
        }
        catch(error){
          console.error("API Error" , error)
        }
  })()
 } ,[])

  return (
    <div className='grid grid-cols-4 gap-3.5 p-4'>
      {/* {Products ko UI pe render} */}
       {
        products.map((product )=> {
          let productQuant = cartItems.find((elem)=> elem.id === product.id)
          console.log("Ye product cart item pe hai" , productQuant)
          return <ProductCard product={product} key={product.id} productQuant={productQuant}/>
        })
       }
    </div>
  )
}

export default Shop