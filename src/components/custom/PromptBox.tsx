import React from 'react'

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea
} from '@/components/ui/input-group'
import { ArrowUp, Loader2Icon, PlusIcon } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { doc, setDoc } from 'firebase/firestore'
import { firebaseDb } from './../../../config/FirebaseConfig'
import { useUser } from '@clerk/react'
import { useNavigate } from 'react-router-dom'

const PromptBox = () => {
  const [userInput, setUserInput] = useState<string>()
  const [noOfSlider, setNoOfSlider] = useState<string>('4 to 6')
  const { user } = useUser()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const CreateAndSaveProject = async () => {
    // Save Project to Database
    const projectId = uuidv4()
    setLoading(true)

    await setDoc(doc(firebaseDb, 'projects', projectId), {
      projectId: projectId,
      userInputPrompt: userInput,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      createdAt: Date.now(),
      noOfSlider: noOfSlider
    })
    setLoading(false)
    navigate('/workspace/project/' + projectId + '/outline')
  }

  return (
    <div className='w-full flex items-center justify-center mt-28'>
      <div className='flex flex-col items-center justify-center space-y-4'>
        <h2 className='font-bold text-4xl'>
          Transform your raw ideas into{' '}
          <span className='text-primary'>stunning slides.</span>
        </h2>
        <p className='text-xl text-gray-500'>
          Every generation creates a fresh canvas in your workspace.
        </p>

        <InputGroup>
          <InputGroupTextarea
            placeholder='Describe your presentation topic or paste an outline...'
            className='min-h-28'
            onChange={event => setUserInput(event.target.value)}
          />
          <InputGroupAddon align={'block-end'}>
            {/* <InputGroupButton>
              <PlusIcon />
            </InputGroupButton> */}

            <Select onValueChange={value => setNoOfSlider(value)}>
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Select slide count' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value='4 to 6'>4 - 6 Pages</SelectItem>
                  <SelectItem value='6 to 8'>6 - 8 Pages</SelectItem>
                  <SelectItem value='8 to 12'>8 - 12 Pages</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <InputGroupButton
              variant={'default'}
              className='rounded-full ml-auto'
              size={'icon-sm'}
              onClick={() => CreateAndSaveProject()}
              disabled={!userInput}
            >
              {loading ? <Loader2Icon className='animate-spin' /> : <ArrowUp />}
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  )
}

export default PromptBox
