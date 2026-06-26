import {createBrowserRouter} from "react-router";
import Home from "../features/home/pages/Home";
import Register from "../features/auth/pages/Register";
import Login from "../features/auth/pages/Login";
import Dashboard from "../features/dashboard/pages/Dashboard";

const router = createBrowserRouter([
{
    path:"/",
    element:<Home/>
},
{
     path:"/about",
    element:<h1>About</h1>
},
{
    path:"/dashboard",
    element:<Dashboard/>
    
},
{
    path:"/register",
    element : <Register/>
},
{
    path:"/login",
    element : <Login/>
}
]);

export default router;