import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

const ProductCard = () => {

 let {theme , setTheme} = useContext(ThemeContext)

  return (
    <div className={`h-[61%] w-[45%] ${theme === 'dark' ? "bg-black text-white " : "bg-white text-black shadow-black"} rounded-md p-3 flex flex-col items-center gap-3 shadow-md`} >
        <div > 
            <img 
            className='h-[200px]  rounded-sm'
            src="https://i.pinimg.com/736x/c6/b8/2b/c6b82beac101c41cc4828fab5961dcf1.jpg" alt="" />
        </div>
        <div>
            <h1>Iphone</h1>
            <p>1Rs</p>
        </div>
        <div className='flex w-full justify-between'>
            <button>Update</button>
            <button>Delete</button>
        </div>
      
    </div>
  )
}

export default ProductCard
