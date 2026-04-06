import { ThemeContext } from "../Context/ThemeContext"
import { useContext } from "react"


const NavBar = () => {
    let {theme , setTheme , renderPages , setRenderPages} = useContext(ThemeContext)//
    console.log(renderPages)
    
  return (
    <div className={`${theme === 'dark' ? "bg-black text-white" : "bg-white text-black  shadow-black"}           h-[10%]  flex items-center justify-between  px-[30px] py-[17px] shadow-xl`}>
       <h1  className="text-3xl font-bold">Logo</h1>
       <div className="flex gap-10 items-center">
        
        <p 
        onClick={()=> setRenderPages('home')}
       className={`cursor-pointer ${renderPages === 'home' && "text-red-500"}`}
        >Home</p>

        <p
        onClick={()=> setRenderPages('about')}
        className={`cursor-pointer ${renderPages === 'about' && "text-red-500"}`}
        >About</p>
        
        <p
        onClick={()=> setRenderPages('contact')}
       className={`cursor-pointer ${renderPages === 'contact' && "text-red-500"}`}
        >Contact</p>


       </div>

       <button 
       onClick={()=> setTheme((prev) => prev ==='light' ? 'dark' : 'light')}
       className={`${theme === 'dark' ? "bg-black text-amber-50": "bg-white text-black"}       px-[10px] py-[12px] rounded-md active:scale-97 border-2 border-amber-50 cursor-pointer`}>{theme==='dark' ?' Dark' : 'Light'}</button>
    </div>
  )
}

export default NavBar
