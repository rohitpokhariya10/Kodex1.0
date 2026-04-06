import { AuthProvider } from './context/AuthContext'
import AppRouter from './Router/AppRouter';
import ToastHost from './Components/ToastHost.jsx'
import { ProductsProvider } from './context/ProductContext.jsx';

function App() {
  return (
    <AuthProvider>
      <ProductsProvider>
        <AppRouter />
        <ToastHost />
      </ProductsProvider>
    </AuthProvider>
  )
}

export default App
