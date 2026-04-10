import { useState } from "react";
import { createContext } from "react";

export let Blog = createContext()

export let BlogProvider = ({children}) =>{
    const [ blogs, setBlogs] = useState(JSON.parse(localStorage.getItem("blogs")) || [])
    const [isPublish, setIsPublish] = useState(null)

    return <Blog.Provider value={{blogs , setBlogs , isPublish , setIsPublish}}>
        {children}
    </Blog.Provider>
}