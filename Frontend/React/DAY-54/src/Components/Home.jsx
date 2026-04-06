import React from 'react'
import { useNavigate } from 'react-router'


const Home = () => {
  let users =[
    {name:"Rohit"},
    {name:"Saksham"},
    {name:"Shivam"}
  ]

  let navigate = useNavigate()
  return (
    <div className='flex gap-10'>
      {
        users.map((user,index)=>{
          return <h1 
          // /name/user.name ---> path
          onClick={()=>navigate(`/name/${user.name}`)}
          key={index}>{user.name}</h1>
        })
      }
    
    </div>
  )
}

export default Home
