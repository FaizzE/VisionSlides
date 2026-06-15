import React from 'react'
// FIX 1: Recharts wala import hata do, wo yahan zaroorat nahi hai
import { Skeleton } from '../ui/skeleton'

type Props = {
  loading: boolean
}

const OutlineSection = ({ loading }: Props) => {
  return (
    <div className='mt-7'>
      <h2 className='font-bold text-xl'>Vision Deck Blueprint</h2>
      {loading && (
        <div className='mt-3'>
          {[1, 2, 3, 5].map((item, index) => (
            <Skeleton
              key={index}
              className='h-[60px] w-full rounded-2xl mb-4'
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default OutlineSection
