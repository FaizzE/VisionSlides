import { Button } from '../ui/button'
import React from 'react'
import { Play, Video } from 'lucide-react'
import { Link } from 'react-router-dom'
import { HeroVideoDialog } from '@/components/ui/hero-video-dialog'
import { useUser, SignInButton, SignUpButton } from '@clerk/react'



const Hero = () => {
  const { user } = useUser()

  return (
    <div className='flex flex-col items-center justify-center mt-28 space-y-4 text-center'>
      <h2 className='font-bold text-5xl'>
        From Idea to <span className='text-primary'>presentation</span> in One
        Click ⚡
      </h2>
      <p className='text-xl text-gray-500 max-w-2xl text-center'>
        Generate sleek, editable PPT decks in minutes. AI handles slide design,
        formatting, and visual content so you can focus on your message, impress
        your audience, and work smarter, not harder.
      </p>
      <div className='flex gap-5 mt-10'>
        <Button className='cursor-pointer' variant={'outline'} size={'lg'}>
          {' '}
          Watch Video <Play />
        </Button>

        {!user ? (
          <SignInButton mode='modal'>
            <Button size={'lg'}>Get Started</Button>
          </SignInButton>
        ) : (
          <Link to='/workspace'>
            <Button size={'lg'}>Go to Workspace</Button>
          </Link>
        )}

        {/* <SignUpButton mode='modal'>
        <Button className='cursor-pointer' size={'lg'}>
          Get Started <Video />{' '}
        </Button>
        </SignUpButton> */}
      </div>
      <div className='relative max-w-3xl mt-14'>
        <h2 className='text-center my-4'>Watch how to Create AI PPT</h2>
        <HeroVideoDialog
          className='block dark:hidden'
          animationStyle='top-in-bottom-out'
          videoSrc='https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb'
          thumbnailSrc='https://startup-template-sage.vercel.app/hero-light.png'
          thumbnailAlt='Hero Video'
        />
        <HeroVideoDialog
          className='hidden dark:block'
          animationStyle='top-in-bottom-out'
          videoSrc='https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb'
          thumbnailSrc='https://startup-template-sage.vercel.app/hero-dark.png'
          thumbnailAlt='Hero Video'
        />
      </div>
    </div>
  )
}

export default Hero
