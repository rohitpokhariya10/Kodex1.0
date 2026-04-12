import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import AuthLayout from '../layouts/AuthLayout'
import DashboardLayout from '../layouts/DashboardLayout'
import BlogForm from '../Components/BlogForm'
import BlogDetails from '@/pages/BlogDetails'

const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path:"/",
      element: <MainLayout/>,
      children: [

        {
         index:true,
         element: <Home/>
        },
        {
          path:"details/:id",
          element:<BlogDetails/>
        }
        
      ]

    },
    {
      path: "/auth",
      element: <AuthLayout/>,
      children : [
        {
          path:"login",
          element:<Login/>
        },
        {
          path:"register",
          element:<Register/>
        }
      ]
    },
    {
      path: "/authordashboard",
      element: <DashboardLayout/>,
      
      
    },
    {
      path: "/authordashboard/new",
      element: <BlogForm/>,
    },
   
  ])
  return <RouterProvider router={router}/>
}

export default AppRoutes
