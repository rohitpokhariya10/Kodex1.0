import axios from 'axios'
import { useEffect, useState } from 'react'
import ProductList from "../Dashboard1.jsx/ProductList"


const Dashboard1 = ({setCartItems , setGetClickedProduct}) => {

    const [allProducts, setAllProducts] = useState([])//State which store products data which comes from API
    console.log("allProducts in Dashboard1:",allProducts)


    let fetchAllProducts = async ()=>{
    let response = await axios.get("https://fakestoreapiserver.reactbd.org/api/products")
    console.log("API RESPONSE--->",response)
    setAllProducts(response.data.data)//State me API data save
  }

   useEffect(()=>{
    //API call only one time
   fetchAllProducts()
   },[])


   //delete product
   let deleteProduct =(product_id)=>{
    console.log("product id",  product_id)//ye product id api me phele se hi given thi
    let filterProduct = allProducts.filter((product)=> {
      console.log("product-->", product._id)
      console.log("delete product id-->", product_id)
      return product._id != product_id
    })

    setAllProducts(filterProduct)

   }
  return (
    <div className='h-[100%] bg-blue-900  w-[100%] rounded-md'>
     
      <h1 className='text-lg text-green-300 font-bold mt-7 p-5'>Product Home</h1>
      <div className='p-6  flex flex-col gap-7'>
        {
          allProducts.map((product , idx)=>{
            return <ProductList key={idx} product={product} deleteProduct={deleteProduct} setCartItems={setCartItems} setGetClickedProduct={setGetClickedProduct}/>//render product data which comes from the  API
          })
        }
        
      </div>
    </div>
  )
}

export default Dashboard1
