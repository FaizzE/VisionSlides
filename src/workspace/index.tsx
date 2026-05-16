
import React from 'react'
import { Outlet } from 'react-router-dom'

function Workspace() {
  return (
    <div>
      <h1>Workspace</h1>
      <Outlet/>
    </div>
  )
}

export default Workspace
