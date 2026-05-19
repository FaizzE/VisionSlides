import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import { useUser } from '@clerk/react'
import { Button } from '@/components/ui/button';
import {SignInButton} from '@clerk/react'


function Workspace () {
  const { user } = useUser();

  if (!user) {
    return (
      <div>
        Please sign in to access the workspace.
        <Link to={'/'}>
          <SignInButton mode='modal'>
          <Button>Sign In</Button>
          </SignInButton>
        </Link>
      </div>
    )
  }

  return (
    <div>
      <h1>Workspace</h1>
      <Outlet />
    </div>
  )
}

export default Workspace
