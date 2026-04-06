import  { useState } from 'react'
import Login from './Components/ReactHookForm'
import Register from './Components/Register'
import Audioplayer from './Components/Audio'

const App = () => {
  const [isToggle, setIsToggle] = useState(true)
  return (
    <div className=' h-[100vh] bg-gray-100 flex items-center justify-center flex-col gap-3'>
      {isToggle===true?<Register  setIsToggle={setIsToggle}/>
      :<Login  setIsToggle={setIsToggle}/>}
    <Audioplayer/>

    </div>
   
  )
}

export default App