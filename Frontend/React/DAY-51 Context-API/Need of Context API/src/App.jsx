
import Cart from './Components/Dashboard1.jsx/Cart'
import Dashboard1 from './Components/Dashboard1.jsx/Dashboard1'
import Dashboard2 from './Components/Dashboard2/Dashboard2'
import { useState } from 'react'

const App = () => {
  const [toggle, setToggle] = useState(true)//toggle between D1 and D2
  const [showCart, setShowCart] = useState(false)//cart screen toggle
  const [cartItems, setCartItems] = useState([])//Store Cart Items
  console.log("Cart Items ---->" , cartItems)

  const [getClickedProduct, setGetClickedProduct] = useState(null)//send to user click me UserList me chala jaye product
  console.log("Get Clicked Product--->" , getClickedProduct)
  
  return (
    <div className='bg-black h-[100%] w-[100%] p-5 '>
      <div className=' flex items-center h-[5rem] justify-center '>
         <h1 className='text-2xl text-blue-400 font-semibold mb-5'>Why we need of Context API just check this code.....</h1>
      </div>
      <button 
      onClick={()=> setToggle((prev)=>!prev)}//toggle between Dashboard1 and Dashboard2
      className='p-4 bg-gray-400 text-black active:scale-89 rounded-lg'>Go to {toggle?"  Users" :"Products"}</button>
      
      <button 
      onClick={()=>{
        setShowCart((prev)=>!prev)
      }} 
      className='p-4 bg-gray-400 text-black active:scale-89 rounded-lg ml-5'>Show Cart</button>
    <div>
       {
       toggle ? <div className='h-[100%] w-[100%] '> <Dashboard1  setToggle={setToggle}   setCartItems={setCartItems} setGetClickedProduct={setGetClickedProduct}/ > </div>
        : <div className='h-[100%] w-[100%] bg-amber-700 mt-7 p-3 '> <Dashboard2  setToggle={setToggle}  getClickedProduct={getClickedProduct}/> </div>
       }
    </div>

   {
    showCart &&   <div className='absolute h-[100%] w-[100%] bg-amber-900  left-0 top-0 p-6'>
      <Cart setShowCart={setShowCart}  cartItems={cartItems}/>
                </div>
   }

  </div>
  )
}

export default App
 