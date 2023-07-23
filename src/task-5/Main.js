import React from 'react'
import { Check } from './componets/Dashboard'
import { RouterProvider } from 'react-router'


function Main() {
  return (
    <div>
        <RouterProvider router={Check}/>
    </div>
  )
}

export default Main