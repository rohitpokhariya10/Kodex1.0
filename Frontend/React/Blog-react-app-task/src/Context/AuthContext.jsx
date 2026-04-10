import { createContext, useState } from "react";

export  let Auth = createContext()

export let AuthProvider = ({children}) => {
    
    const [registeredUser, setRegisteredUser] = useState(JSON.parse(localStorage.getItem("reg-users")) || [])//merko baar baar register na krna bde islie
    const [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem("logined-user")) || null)

    const [accountType, setAccountType] = useState("reader")
    const [dashBoardName, setDashBoardName] = useState("")

    //For display dynamic use name jo jis name se register karega
  let user = registeredUser.find(
  (u) => u.email === loggedInUser?.email
);

    return <Auth.Provider value={{
        setLoggedInUser ,
         loggedInUser ,
         registeredUser ,
         setRegisteredUser,
         accountType ,
         setAccountType,
         dashBoardName,
         setDashBoardName,
         user


    }}>
        {children}
    </Auth.Provider>

}