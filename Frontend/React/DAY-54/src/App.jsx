import { Routes } from "react-router"
import Navbar from "./Components/Navbar"
import AppRoutes from "./routes/AppRoutes"

const App = () => {
  return (
    <div className="h-[100%] w-[100%] bg-amber-950">
  <Navbar/>
  {/* Routes */}
  <AppRoutes/>

  <div>
   
  </div>
    </div>
  )
}

export default App
