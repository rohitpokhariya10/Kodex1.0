
import Home from './Components/Home'

import NavBar from './Components/NavBar'
import { useContext} from 'react'
import { ThemeContext } from './Context/ThemeContext'
import Contact from './Components/Contact'
import About from './Components/About'

const App = () => {
 
  console.log("App rendering....")
  let {theme , renderPages} = useContext(ThemeContext)

  return (
    
    <div className={`h-screen w-full ${theme === 'dark' ? "bg-gray-800" : "bg-white" } text-amber-50`}>
      <NavBar  />
     <div className='  px-[30px] py-5'>
      {/* Logic ---> && apne donu side true mangta hai */}
      {renderPages==='home' &&  <Home/>}
    {renderPages === 'about' && <About/>}
      {renderPages === 'contact' && <Contact/>}
     </div>
     
    </div>
  )
}

export default App
