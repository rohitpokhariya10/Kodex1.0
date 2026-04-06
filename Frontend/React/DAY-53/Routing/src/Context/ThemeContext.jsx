import { createContext } from "react";
import { useState } from "react";
export let ThemeContext = createContext()

export let  ThemeProvider = ({children}) =>{

     const [theme, setTheme] = useState('dark')//Sate for storing  theme

      console.log("theme in Context--->", theme)
    return <ThemeContext.Provider value={{theme , setTheme}}>
        {children}
    </ThemeContext.Provider>
} 
