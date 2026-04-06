import axios from 'axios'
import { useState , useEffect } from 'react'
import UserList from '../Dashboard2/UserList'


const Dashboard2 = ({getClickedProduct}) => {
  

  const [users, setUsers] = useState([])
  console.log("All USERS In DASHBOARD2-->" , users)


  //Function which fetch All Users from API
  let fetchUsers = async ()=>{
    let res = await axios.get("https://fakestoreapiserver.reactbd.org/api/users")
    setUsers(res.data.data)//set Users data into React state
  }
  useEffect(() => {
    fetchUsers()//this function calls once only
  
  }, [])


  //delete user on click on delete button
  let deleteUser = (user_id)=>{
    console.log("deleted user id-->", user_id )
    let filterUsers = users.filter((elem)=> elem._id != user_id)
    setUsers(filterUsers)
  }
  
  return (
    <div>
      <h1 className='text-lg text-amber-300 font-bold mt-7'>Users Home</h1>
      <div className='h-[100%] flex flex-col gap-6'>
        {
          users.map((user , idx)=>{
            return <UserList key={idx} user={user}  deleteUser={deleteUser} getClickedProduct={getClickedProduct}/>
          })
        }
      </div>
    </div>
  )
}

export default Dashboard2
