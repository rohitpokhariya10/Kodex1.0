import ProductCard from '@/components/ProductCard'
import React from 'react'


//app ke andar  sabhi server components hote hain --> ye server ke components hote hai thats why hum inpe async use kr skte h
//app folderke bar normal React Components hote hain
const About = async () => {
    console.log("About rendering........")
    let res = await fetch("https://fakestoreapi.com/products")
    let products = await res.json()
    console.log(products)//server de rha hai ye
  return (
    <div className='h-screen  p-6'>
        {/* <h1>This is About Page</h1> */}
        {
            <div className='grid grid-cols-5 gap-3'>
                {
                    products.map((product)=>{
                return <ProductCard product={product} key={product.id}/>
            })
                }
            </div>    
        }
    </div>
  )
}

export default About