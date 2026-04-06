import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AuthProtectors from '../protectors/AuthProtectors';
import MainProtect from '../protectors/MainProtect';
import Home from '../pages/Home';
import Redirect from '../pages/Redirect';
import About from '../pages/About';
import Shop from '../pages/Shop';
import Product from '../pages/Product';

const AppRouter = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            children: [
                {
                    element: <MainProtect />,
                    children: [
                        {
                            path: "",
                            element: <MainLayout />,
                            children: [
                                {
                                    path: "",
                                    element: <Redirect />
                                },
                                {
                                    path: "home",
                                    element: <Home />
                                },
                                {
                                    path: "about",
                                    element: <About />
                                },
                                {
                                    path: "products",
                                    element: <Shop />
                                },
                                {
                                    path: "product/:id",
                                    element: <Product />
                                }
                            ]
                        }
                    ]
                },
                {
                    element: <AuthProtectors />,
                    children: [
                        {
                            path: "",
                            element: <AuthLayout />,
                            children: [
                                {
                                    path: "login",
                                    element: <Login />
                                },
                                {
                                    path: "register",
                                    element: <Register />
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]);

    return <RouterProvider router={router} />
}

export default AppRouter
