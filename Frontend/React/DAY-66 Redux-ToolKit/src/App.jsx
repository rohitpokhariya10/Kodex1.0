import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, incrementByValue } from "./features/counterSlice"
import { useState } from "react"


const App = () => {
  const [number, setNumber] = useState(100000000)
  // let data = useSelector((state)=> state)
  // console.log(data.count.count)
  let {count} = useSelector((state)=> state.count)
  console.log(count)

  let dispatch = useDispatch()
  return (
    <div>
    <h1>  Today we learn about Redux ToolKit</h1>
    <h1>{count}</h1>

    <input 
    onChange={(e)=> setNumber(e.target.value)}
    type="number" placeholder="Enter an Amount to add in count" /> <br/>

    <button
    onClick={()=> dispatch(incrementByValue(number))}
    >Add</button><br/>

    <button
    onClick={()=> dispatch(increment())}
    >Increment</button><br/>
    
    <button
    onClick={()=>dispatch(decrement())}
    >Decrement</button>

    </div>
  )
}

export default App