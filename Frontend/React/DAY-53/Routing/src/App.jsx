
import Home from './Components/Home'

import NavBar from './Components/NavBar'
import { useContext} from 'react'
import { ThemeContext } from './Context/ThemeContext'
import About from './Components/About'
import { Routes , Route} from 'react-router'

const App = () => {
 
  console.log("App rendering....")
  let {theme} = useContext(ThemeContext)

  return (
    
    <div className={`h-screen w-full ${theme === 'dark' ? "bg-gray-800" : "bg-white" }`}>
      <NavBar  />
     <div className='h-[90%]  px-[30px] py-5'>

      <Routes>
         <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
      </Routes> 
     </div>
    </div>
  )
}

export default App
