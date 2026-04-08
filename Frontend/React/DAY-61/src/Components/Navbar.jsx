
import { NavLink, useNavigate } from 'react-router'

const Navbar = () => {
   let navigate =  useNavigate()
  return (
    <div className='h-20 bg-black  border-b-2 border-amber-50 flex justify-around items-center'>
      <h1 
      onClick={()=> navigate(`/`)}
      className='text-2xl font-bold'>Logo</h1>

      <div className='flex items-center font-semibold gap-8'>
        <NavLink 
        //NavLink component hi isActive props deta hai 
        className={({isActive})=> `inline-block font-semibold text-xl ${isActive ? "border-b-2 border-pink-500 text-pink-500" : "text-white" }`}
        to="/">Home</NavLink>

       <NavLink 
        className={({isActive})=> `pb-2 inline-block font-semibold text-xl ${isActive ? "border-b-2 border-pink-500 text-pink-500" : "text-white" }`}
        to="/about">About</NavLink>

        <NavLink 
        className={({isActive})=> `pb-2 inline-block font-semibold text-xl ${isActive ? "border-b-2 border-pink-500 text-pink-500" : "text-white" }`}
        to="/products"> Products </NavLink>

        <NavLink 
        className={({isActive})=> `pb-2 inline-block font-semibold text-xl ${isActive ? "border-b-2 border-pink-500 text-pink-500" : "text-white" }`}
        to="/users"> Users </NavLink>
      </div>


      {/* Add Empty div so that NavLink center me ajaye becaus ewe gave justify-around to parent div */}
      <div></div>

    </div>
  )
}

export default Navbar
