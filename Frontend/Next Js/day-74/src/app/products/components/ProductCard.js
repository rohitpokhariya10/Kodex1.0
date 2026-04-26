"use client"
import React, { use } from 'react';

const ProductCard = ({ products }) => {
    console.log("product-->" , products)

    let product = use(products)
    console.log("product--->" , product)
  return (
    <>
      {
        product.map((elem)=>(
          <div 
          key={elem.id}
          className='flex gap-2.5 flex-col border-2 border-amber-200 p-3 rounded-lg'>
            <h1 onClick={()=> console.log("hello")}>{elem.title}</h1>
                 <h1>{elem.price}</h1>
          </div>
        ))
      }
    </>
  )

}
export default ProductCard