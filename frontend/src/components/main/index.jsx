import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar2'

const Main = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    
    </>
  )
}

export default Main