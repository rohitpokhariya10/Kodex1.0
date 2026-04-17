import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const PublicRoute = () => {

    let {isAuthenticated} = useSelector((store)=> store.auth)
    if(isAuthenticated) return <Navigate to="/main"/>

    return <Outlet/>
  
}

export default PublicRoute