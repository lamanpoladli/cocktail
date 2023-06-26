import React from 'react'
import Navbar from '../../components/Admin/Navbar'
import { Outlet } from 'react-router-dom'
import { useUserContext } from '../../context/userContext'
import AdminLogin from "./AdminLogin"

const AdminRoot = () => {
  const [user] = useUserContext()
  return (
<>
<>
   {
   user?.isAdmin ? (
    <>
    <Navbar/>
    <Outlet/>
    </>
   ) : (
    <AdminLogin/>
   )
  }
   </>
</>
  )
}

export default AdminRoot