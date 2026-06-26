import { loginUser, registerUser } from "../services/auth.api"
import {AuthContext} from "../../../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router";


const useAuth = ()=>{
  
    const navigate = useNavigate();
    const { setUser, setAccessToken } = useContext(AuthContext);
    const handleRegister = async (data)=>{
        try{
            const response = await registerUser(data);
            console.log("register user---> " , response);
            setUser(response.data.user);
            setAccessToken(response.data.accessToken);
            navigate("/dashboard");
        }
        catch(error){
            console.error(error);
        }
    };
     const handleLogin = async (data)=>{
        try{
            const response = await loginUser(data);
            console.log("loggedin user->",response);
             setUser(response.data.user);
             setAccessToken(response.data.accessToken);
             navigate("/dashboard");
        }
        catch(error){
            console.error(error);
        }
    }
    return {
        handleLogin, handleRegister
    }
}

export default useAuth;