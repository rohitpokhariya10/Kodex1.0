
import NavBar from './Components/NavBar'

import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
    <div className='min-h-screen bg-transparent text-slate-900'>
      <NavBar/>

      <div className='relative w-full overflow-hidden'>
      <div className='pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#14213d]/15 to-transparent' />
      <div className='pointer-events-none absolute left-[-8rem] top-24 h-64 w-64 rounded-full border border-[#e09f3e]/15' />
      <div className='pointer-events-none absolute bottom-16 right-[-5rem] h-52 w-52 rounded-full border border-[#14213d]/10' />

      <AppRoutes/>
      
      </div>
    </div>
  )
}

export default App
