import React from 'react'
import { useNavigate } from 'react-router'
const Register = () => {
  let navigate = useNavigate()
  return (
    <div>
    <h1>Regsisteration Page</h1>
    <p>Already have an Account <span onClick={()=> navigate('/auth')}>Login here</span></p>
    </div>
  )
}

export default Register
