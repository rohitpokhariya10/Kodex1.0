import { useState } from 'react'
import NavBar from './Components/NavBar'
import UserCard from './Components/UserCard'
import AddUserForm from './Components/AddUserForm'

const App = () => {
  console.log("App rendering....")
  const [isToggle, setIsToggle] = useState(false)//toggel between <UserCard/> and <AddUserForm/>

  //Storing users
  const [users, setUsers] = useState([])
  console.log("Users-->" , users)

  const [editUser, setEditUser] = useState(null)//kis card ko update krn ahai uska pta btayega
  console.log("Edit user--->",editUser)

  const [isDisabled, setIsDisabled] = useState(false)
  console.log("isDisabled in app-->" , isDisabled)

  
  //why we create handleDelete() in App.jsx not userData?
  //--->readability , centralized data manipulation
  let handleDelete =(id)=>{
    console.log("Deleted user id ---->",id)
    let filterData = users.filter((user)=>{
     return user.id != id//sare user ki id  compare hogi != jispe click kra uski id

    })
    setUsers(filterData)
  }
  return (
    <div className='mh-[100%] bg-black flex flex-col px-[30px] py-[15px]'>
       <NavBar  setIsToggle= {setIsToggle}  setIsDisabled={setIsDisabled}  isDisabled={isDisabled}/>
      <div className='  bg-[#1E2022] h-[100%] p-[25px] rounded-sm gap-7 grid-cols-[1fr_1fr_1fr]'>
         {
          isToggle ? <div className='h-[100%]  w-full flex items-center justify-center'> <AddUserForm  setUsers={setUsers} setIsToggle={setIsToggle} editUser={editUser}  setEditUser={setEditUser} setIsDisabled={setIsDisabled} isDisabled={isDisabled}/> </div>
          
          :
          <div className='h-[100vh] w-full mt-5 bg-[#1E2022] gap-[30px] grid grid-cols-[1fr_1fr_1fr_1fr]'>
         {  users.map((elem )=> {
            return <UserCard key={elem.id} userData = {elem} handleDelete={handleDelete} setEditUser={setEditUser} setIsToggle={setIsToggle} />
            
        }) }

          </div>

       }
      </div>
    </div>
  )
}

export default App
//    {
//     name:"rohit",
//     email:"r@gmail.com",
//     mobile:"9012464329",
//     role:"developer",
//     department:"enginering",
//     id:"1"
//    },
//      {
//     name:"devsh",
//     email:"r@gmail.com",
//     mobile:"9012464329",
//     role:"developer",
//     department:"enginering"
//    }
// ,
//  {
//     name:"devsh",
//     email:"r@gmail.com",
//     mobile:"9012464329",
//     role:"developer",
//     department:"enginering"
//    }