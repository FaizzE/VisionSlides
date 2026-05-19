import React from 'react'
import logo from '../../assets/logo.png'
import { Button } from '../ui/button';
import { useUser, Show, SignInButton, SignUpButton, UserButton } from '@clerk/react';
import { Link } from 'react-router-dom';

const Header = () => {

  const {user} = useUser();

  return (
    <div className='flex items-center justify-between px-10 shadow'>
      <img src={logo} alt='logo' width={130} height={130} />
      
      {!user? 
      <SignInButton mode='modal'>
        <Button>Get Started</Button>
      </SignInButton>

      :  <div className='flex gap-5 items-center'> 
          <UserButton/> 
          <Link to='/workspace'>
              <Button>Go to Workspace</Button>
          </Link>
      </div>}


      {/* Auth Buttons */}
      {/* <div className='flex items-center gap-4'>
        <Show when='signed-out'>
          <SignInButton mode='modal'>
            <Button variant='ghost'>Sign In</Button>
          </SignInButton>

          <SignUpButton mode='modal'>
            <Button>Get Started</Button>
          </SignUpButton>
        </Show>

        <Show when='signed-in'>
          <UserButton />
        </Show>
      </div> */}
    </div>
  )
}

export default Header
