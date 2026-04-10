import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './routes/AppRoutes.jsx'
import { AuthProvider } from './Context/AuthContext.jsx'
import { BlogProvider } from './Context/BlogContext.jsx'

createRoot(document.getElementById('root')).render(
<BlogProvider>
    <AuthProvider>
    <AppRoutes/>
</AuthProvider>
</BlogProvider>
)
