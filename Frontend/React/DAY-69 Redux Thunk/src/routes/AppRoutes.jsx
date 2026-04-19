import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import PublicRoute from "./PublicRoute";
import ProtectedcRoute from "./PtotectedRoute";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../features/authSlice";

const AppRoutes = () => {
  let token = localStorage.getItem("accessToken"); //localStorage se  accessToken get kar rhe hain

let dispatch = useDispatch()

  if(!token){
    dispatch(removeUser())
  }
  
  

  useEffect(() => {
    (async () => {
      try {
        //Get current auth user---> kaunsa user login hai uska data degi /me api
        //ye IIFE har reload pe chalega user login hoga tuh dashboard dikhega else login page
        let response = await axios.get("https://dummyjson.com/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      
        console.log(response.data)
        dispatch(addUser(response.data))
      } catch (error) {
        console.error("Error in me API", error);
      }
    })();
  }, []);

  let router = createBrowserRouter([
    {
      path: "",
      element: <PublicRoute />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
        },
      ],
    },
    {
      path: "/main",
      element: <ProtectedcRoute />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default AppRoutes;
