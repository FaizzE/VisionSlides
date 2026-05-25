import { Button } from '../ui/button'
import React from 'react'

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle
} from '@/components/ui/empty'
import { ArrowRight, ArrowRightIcon, Folder, FolderIcon } from 'lucide-react'

const MyProjects = () => {
  return (
    <div className='mx-32 mt-20'>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-2xl'>My Projects</h2>
        <Button>+ Create New projects</Button>
      </div>
      <div>
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant='icon'>
              <FolderIcon />
            </EmptyMedia>
            <EmptyTitle>No Projects Yet</EmptyTitle>
            <EmptyDescription>
              You haven&apos;t created any projects yet. Get started by creating
              your first project.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent className='flex-row justify-center gap-2'>
            <Button>Create Project</Button>
            {/* <Button variant='outline'>Import Project</Button> */}
          </EmptyContent>
          <Button
            variant='link'
            className='text-muted-foreground'
            size='sm'
            nativeButton={false}
            render={
              <a href='#'>
                Learn More <ArrowRight />
              </a>
            }
          />
        </Empty>
      </div>
    </div>
  )
}

export default MyProjects
