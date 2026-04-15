import React, { useEffect } from 'react'
import { axiosInstance } from '../config/axiosInstance'

const Shop = () => {
  useEffect(()=>{
      (async ()=> {
        try{
          let response = await axiosInstance.get('/products')
          console.log("API response" , response)
        }
        catch(error){
            console.error("Error in API" , error)
        }
    })()
  } , [])
  
  return (


    <div>
        <h1>This is Shop Page</h1>
    </div>
  )
}

export default Shop