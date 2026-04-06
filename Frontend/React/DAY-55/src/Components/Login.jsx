
import { useNavigate } from 'react-router'

const Login = () => {
  let navigate  = useNavigate()//register page me chle jayenge
 
  return (
    <div>
      <h1>Login</h1>
      <p>Dont have account <span onClick={()=> navigate('/auth/register')}>Register here</span></p>
    </div>
  )
}

export default Login
