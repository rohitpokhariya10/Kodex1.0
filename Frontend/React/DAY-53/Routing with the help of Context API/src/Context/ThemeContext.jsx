import { createContext } from "react";
import { useState } from "react";
export let ThemeContext = createContext()

export let  ThemeProvider = ({children}) =>{

     const [theme, setTheme] = useState('dark')//Sate for storing  theme
     const [renderPages, setRenderPages] = useState("home")

      console.log("theme in Context--->", theme)
    return <ThemeContext.Provider value={{theme , setTheme , renderPages ,setRenderPages }}>
        {children}
    </ThemeContext.Provider>
} 
