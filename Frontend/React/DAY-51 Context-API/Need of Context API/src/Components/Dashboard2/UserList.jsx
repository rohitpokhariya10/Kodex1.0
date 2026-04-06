//user name ui me dihata hai
const UserList = ({user , deleteUser , getClickedProduct}) => {
  console.log("Clicked product is", getClickedProduct)
  return (
    <div className="flex items-center gap-6">
      <h1 className='text-blue-200 font-semibold text-xl'>{user.name}</h1>
      <h1>Clicked product is {getClickedProduct.title} </h1>

       <button 
       onClick={()=>{
        deleteUser(user._id)
       }}
       className="px-2 py-2 rounded-md bg-red-700 text-amber-50">Delete User</button>
    </div>
  )
}

export default UserList
