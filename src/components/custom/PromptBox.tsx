import React from 'react'

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea
} from '@/components/ui/input-group'
import { ArrowUp, PlusIcon } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

const PromptBox = () => {
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
          />
          <InputGroupAddon align={'block-end'}>
            {/* <InputGroupButton>
              <PlusIcon />
            </InputGroupButton> */}

            <Select>
              <SelectTrigger className='w-[180px]'>
                <SelectValue placeholder='Select slide count' />
              </SelectTrigger>
              <SelectContent>
                ;
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
            >
              <ArrowUp />
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  )
}

export default PromptBox
