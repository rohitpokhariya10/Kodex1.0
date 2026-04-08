
import { useState } from 'react'
import About from './Components/About'

const App = () => {
  console.log("App Rendering...")
  const [count, setCount] = useState(0)
  return (
    <div className='h-screen w-full bg-black flex items-center justify-center  flex-col gap-5'>
     <div className='border-2 bg-amber-800 p-8 text-2xl font-semibold rounded-[50%]'>
       <h1 >{count}</h1>
     </div>

      <button  
       className='px-5 py-2.5 bg-amber-600 rounded-sm text-lg font-semibold cursor-pointer'
       onClick={()=> setCount(count+1)}>Click</button>

     


      <About/>
      
    </div>
  )
}

export default App
