import { loginUser, registerUser } from "../services/auth.api"

const useAuth = ()=>{
    const handleRegister = async (data)=>{
        try{
            const response = await registerUser(data);
            console.log(response);
        }
        catch(error){
            console.error(error);
        }
    };
     const handleLogin = async (data)=>{
        try{
            const response = await loginUser(data);
            console.log(response);
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