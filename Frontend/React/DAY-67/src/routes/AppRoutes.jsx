import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Shop from "../pages/Shop";
import MainLayout from "../layouts/MainLayout";

const AppRoutes = () => {
  let router = createBrowserRouter([
    {
      path: "",
      element: <MainLayout />,
      children: [
        {
            index:true,
            element: <HomePage/>
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
