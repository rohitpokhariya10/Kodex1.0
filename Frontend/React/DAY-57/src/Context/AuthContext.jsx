import { createContext, useState } from "react";

export let Auth = createContext()

export let AuthProvider = ({children}) => {
    const [registeredUser, setRegisteredUser] = useState(JSON.parse(localStorage.getItem("reg-users")) || [])
    const [loggedInUser, setLoggedInUser] = useState(null)

    console.log("Registered Users are-->" , registeredUser)

    return <Auth.Provider
    value={{registeredUser , setRegisteredUser , loggedInUser , setLoggedInUser}}
    >
        {children}
    </Auth.Provider>
}