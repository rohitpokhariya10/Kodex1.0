import { createContext, useState } from "react";

export  let Auth = createContext()

export let AuthProvider = ({children}) => {
    
    const [registeredUser, setRegisteredUser] = useState(JSON.parse(localStorage.getItem("reg-users")) || [])//merko baar baar register na krna bde islie
    const [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem("logined-user")) || null)

    const [accountType, setAccountType] = useState("author")
   

 

    return <Auth.Provider value={{
        setLoggedInUser ,
         loggedInUser ,
         registeredUser ,
         setRegisteredUser,
         accountType ,
         setAccountType,
      
       


    }}>
        {children}
    </Auth.Provider>

}