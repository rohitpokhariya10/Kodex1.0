import React from 'react'
import { Routes , Route } from 'react-router'
import Home from '../Screens/Home'
import Cart from '../Screens/Cart'
import ProductDetails from '../Screens/ProductDetails'
import MoreDetails from '../Components/MoreDetails'
import Auth from '../Screens/Auth'
import Login from '../Components/Login'
import Register from '../Components/Register'

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
        {/* This is MNested Route */}
        <Route path='/product/:id' element={<ProductDetails/>}>
        {/*  Nested route me / nahi lagate ❌ */}
          <Route  path='moreDetails' element={<MoreDetails/>}/>
        </Route>

        {/* This is Nested Route */}
        <Route  path="/auth" element={<Auth/>}>
        <Route index path='' element={<Login/>}/>
        <Route  path='register' element={<Register/>}/>
        </Route>

      </Routes>
    </div>
  )
}

export default AppRoutes
