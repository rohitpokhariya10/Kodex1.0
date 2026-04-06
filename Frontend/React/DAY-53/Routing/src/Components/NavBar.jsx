import { NavLink } from "react-router"
import { ThemeContext } from "../Context/ThemeContext"
import { useContext } from "react"


const NavBar = () => {
    let {theme , setTheme} = useContext(ThemeContext)//
  return (
    <div className={`${theme === 'dark' ? "bg-black text-white" : "bg-white text-black  shadow-black"}           h-[10%]  flex items-center justify-between  px-[30px] py-[17px] shadow-xl`}>
       <h1  className="text-3xl font-bold">Logo</h1>
       <div className="flex gap-10 items-center">
        
     <NavLink to="/home">Home</NavLink>
     <NavLink to="/about">About</NavLink>


       </div>

       <button 
       onClick={()=> setTheme((prev) => prev ==='light' ? 'dark' : 'light')}
       className={`${theme === 'dark' ? "bg-black text-amber-50": "bg-white text-black"}       px-[10px] py-[12px] rounded-md active:scale-97 border-2 border-amber-50 cursor-pointer`}>{theme==='dark' ?' Dark' : 'Light'}</button>
    </div>
  )
}

export default NavBar
