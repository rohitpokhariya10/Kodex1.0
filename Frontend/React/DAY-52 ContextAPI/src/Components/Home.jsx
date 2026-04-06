import React, { useContext } from 'react'
import { MyStore } from '../Context/MyContext'

const Home = () => {
console.log("Home Rendering...")
//Without destructure
let data = useContext(MyStore)
//console.log("data access in Home -->" , data)
  return (
    <div>
      <h1>This is Home Page which count is <span>{data.count}</span></h1>
      <button
      onClick={()=>data.setCount(data.count-1)}
      >Decrement</button>
    </div>
  )
}

export default Home
