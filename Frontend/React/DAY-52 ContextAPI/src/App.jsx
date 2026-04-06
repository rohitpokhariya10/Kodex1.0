import React, { useContext } from 'react'
import Home from './Components/Home'
import About from './Components/About'
import { MyStore } from './Context/MyContext'

const App = () => {
  console.log("App rendering ....")
  //destructure data which come from MyContext.jsx
  let {count , setCount} = useContext(MyStore)//Subscripe to consumer to access data of consumer
  //console.log("data acess in App-->", count)
  return (
    <div>
      <h1>This is App which count is  <span>{count}</span></h1>
      <button
      onClick={()=> setCount(count+1)}
      > Increment</button>


    <Home/>
    <About/>
    </div>
  )
}

export default App
