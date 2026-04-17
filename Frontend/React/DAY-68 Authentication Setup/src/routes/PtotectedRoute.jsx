import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const PtotectedRoute = () => {
    let {isAuthenticated} = useSelector((store)=> store.auth)

    if(!isAuthenticated) return <Navigate to="/"/>//login page bhjo

  return <Outlet/>
}

export default PtotectedRoute