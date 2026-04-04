import React from 'react'
import { Routes , Route } from 'react-router'
import Home from '../Screens/Home'
import Cart from '../Screens/Cart'
import ProductDetails from '../Screens/ProductDetails'
import MoreDetails from '../Components/MoreDetails'

const AppRoutes = () => {
  return (
    <div className='min-h-[calc(100vh-5rem)] w-full'>
      <Routes>
        {/* Default page (jab app open hota hai) ---> Home */}
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        {/* :id---> param/variablejisme dynamic data store hoga*/}
        {/* <Route path='/product/:id' element={<ProductDetails/>}/> */}

        {/* Outlet --> store nested route */}
        <Route path='/product/:id' element={<ProductDetails/>}>
        {/*  Nested route me / nahi lagate ❌ */}
          <Route  path='moreDetails' element={<MoreDetails/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default AppRoutes
