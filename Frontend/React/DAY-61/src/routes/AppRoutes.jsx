import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import About from '../pages/About'
import Users from '../pages/Users'
import Products from '../pages/Products'

const AppRoutes = () => {
    let router = createBrowserRouter([
        {
            path:"/",
           element: <MainLayout/>,
           children: [
            {
                index:true,
                element:<Home/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"users",
                element:<Users/>
            },
            {
                path:"products",
                element:<Products/>
            }
           ]
        }
    ])
    // THis line u forgot
  return(
    <div className='h-[100%] w-[100%] bg-[#181A1B] '>
         <RouterProvider router={router}/>
    </div>
  )
}

export default AppRoutes
