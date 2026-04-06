import React, { useState } from 'react'

const App = () => {
  console.log("App is rendering.....")
   const [count, setCount] = useState(0)
  // function buttonHandler(){
  //   // console.log("clicked")
  //   //count++
  //   console.log(count)
    
  // }
  return (
    <div className='bg-gray-700 gap-1 min-h-[100vh] flex-col justify-center flex items-center text-white '>
     <h1 className='text-[100px]'>Count is {count}</h1>
     <button className='bg-blue-800 p-3 text-3xl  rounded-sm active:scale-95'
    //  onClick={ buttonHandler}
    onClick= {()=> setCount(count+1)}
     >Increase</button>
    </div>
  )
} 

export default App