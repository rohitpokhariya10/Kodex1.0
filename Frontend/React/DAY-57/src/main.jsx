
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppRoutes from './routes/AppRoutes.jsx'
import { AuthProvider } from './Context/AuthContext.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
<AuthProvider>
 <AppRoutes/>
 <ToastContainer/>
</AuthProvider>
)
