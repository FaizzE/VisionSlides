import React, { useContext, useEffect } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { useUser } from '@clerk/react'
import { Button } from '@/components/ui/button'

import Header from '@/components/custom/Header'

import { firebaseDb } from './../../config/FirebaseConfig'

import { doc, getDoc, setDoc } from 'firebase/firestore'
import { UserDetailContext } from '../../context/UserDetailContext'
import PromptBox from '@/components/custom/PromptBox'
import MyProjects from '@/components/custom/MyProjects'

function Workspace () {
  const { user, isLoaded } = useUser()

  const { userDetail, setUserDetail } = useContext(UserDetailContext)
  const location = useLocation()

  const CreateNewUser = async () => {
    if (!user) return

    const userEmail = user?.primaryEmailAddress?.emailAddress ?? ''

    const docRef = doc(firebaseDb, 'users', userEmail)

    const docSnap = await getDoc(docRef)

    // USER ALREADY EXISTS
    if (docSnap.exists()) {
      console.log('User already exists')
      console.log('Document data:', docSnap.data())

      setUserDetail(docSnap.data())

      return
    } else {
      const data = {
        fullName: user?.fullName,
        email: userEmail,
        createdAt: new Date(),
        credits: 2
      }

      // CREATE NEW USER
      await setDoc(doc(firebaseDb, 'users', userEmail), data)

      setUserDetail(data)

      console.log('New user created')
    }
  }

  useEffect(() => {
    if (user) {
      CreateNewUser()
    }
  }, [user])

  if (!isLoaded) {
    return <div>Loading...</div>
  }

  if (!user) {
    return (
      <div>
        Please sign in to access workspace
        <Link to='/'>
          <Button>Sign In</Button>
        </Link>
      </div>
    )
  }

  return (
    <div>
      <Header />

      {location.pathname === '/workspace' && (
        <div>
          <PromptBox />
          <MyProjects/>
        </div>
      )}

      <Outlet />
    </div>
  )
}

export default Workspace
