
import { Outlet } from 'react-router'
import Navbar from '../Components/Navbar'


const AuthLayout = () => {
  return (
    <div className='min-h-screen'>
       <Navbar/>
      <div className='relative flex min-h-[calc(100vh-4rem)] w-full items-center justify-center overflow-hidden px-4 py-10'>
        <div className='absolute left-[-8rem] top-12 h-56 w-56 rounded-full bg-[#1A67AD]/10 blur-3xl' />
        <div className='absolute bottom-10 right-[-6rem] h-64 w-64 rounded-full bg-[#C97B63]/12 blur-3xl' />
        <Outlet/>
      </div>
    </div>
  )
}

export default AuthLayout
