import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../layouts/AuthLayout'
import LoginPage from '../../features/adminauth/pages/LoginPage'
import Register from '../../features/adminauth/pages/Register'
import DashboardLayout from '../layouts/DashboardLayout'
import HomePage from '../../features/dashboard/pages/HomePage'

const AppRoutes = () => {
    let router = createBrowserRouter([
        {
            path:"",
            element: <AuthLayout/>,
            children:[
                {
                   path:"",
                   element:<LoginPage/> 
                },
                {
                    path:"register",
                    element:<Register/>
                }
            ]
        },{
            path:"/dashboard",
            element: <DashboardLayout/>,
            children:[
                {
                    path:"",
                    elemnt:<HomePage/>
                }
            ]
        }
    ])
  return (
    <div> 
        <RouterProvider router={router}/>
    </div>
  )
}

export default AppRoutes