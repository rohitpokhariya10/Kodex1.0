import React, { useState } from 'react'
import Login from './Components/Login'
import Register from './Components/Register'

const App = () => {
  const [isToggle, setIsToggle] = useState(true)
  return (
    <div className=' h-[100vh] bg-gray-100 flex items-center justify-center'>
      {isToggle===true?<Register  setIsToggle={setIsToggle}/>
      :<Login  setIsToggle={setIsToggle}/>}
  

    </div>
  )
}

export default App