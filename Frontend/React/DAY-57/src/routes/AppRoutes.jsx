import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "../screens/Home";
import About from "../screens/About";
import Contact from "../screens/Contact";
import MainLayout from "../layouts/MainLayout";

import Login from "../screens/Login";
import Register from "../screens/Register";
import AuthLayout from "../layouts/AuthLayout";

const AppRoutes = () => {
  //Khudse Routes bna rhe hain using createBrowserRouter this isData Routing
  let router = createBrowserRouter([
    {
      path: "/dashboard",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: <Home/>
        },
        {
          path: `about/:id`,
          element: <About />
        },
        {
          path: "contact",
          element: <Contact />
        }
      ]
    },
    {
      path:'/',
      element: <AuthLayout/>,
      children: [
        {
          // by default page of "/"
          path:"",
          element:<Login/>
        },
        {
          path:"register",
          element:<Register/>
        }
      ]
      
    }
  ]);
  return (
    //jo uppar routes bnaye unko as a prop bhjo RouterProvider me
    <RouterProvider router={router} />
  );
};

export default AppRoutes;
