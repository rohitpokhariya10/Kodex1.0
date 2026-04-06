
import { Route, Routes } from 'react-router'
import Home from '../Components/Home'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Product from '../Components/Product'
import Names from '../Screens/Names'

const AppRoutes = () => {
  return (
    <div className='text-white p-7'>
        {/* Define Routes */}
     <Routes>
        <Route path="/home" element={<Home/>} />
           <Route path="/about" element={<About/>} />
              <Route path="/contact" element={<Contact/>} />
                 <Route path="/product" element={<Product/>} />
                 {/* Dynamic route */}
                 {/* hanji ek variable hai isme dynamic data ayega */}
                 {/* user.name ayega :hanji me store hojayega url me fir /name/hello ayega */}
                  <Route path="/name/:hanji" element={<Names/>} />

                  {/* Missing route */}
                  <Route path='*' element={<h1 className='text-4xl text-red-800'>Aapne wrong doubt access karlia</h1>} />
     </Routes>
    </div>
  )
}

export default AppRoutes
