import React from 'react'
import { Outlet } from 'react-router'
import Navbar from './Navbar'

function HomePage() {
  return (
    <div>
      <Navbar />
      <Outlet />


    </div>
  )
}

export default HomePage