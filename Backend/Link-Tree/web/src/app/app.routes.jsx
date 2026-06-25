import {createBrowserRouter} from "react-router";
import Home from "../features/home/pages/Home";
import Register from "../features/auth/pages/Register";
import Login from "../features/auth/pages/Login";

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
    path:"/:username",
    
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