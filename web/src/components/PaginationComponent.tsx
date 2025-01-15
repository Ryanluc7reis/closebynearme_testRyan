import { BasePaginateResponse } from '@graphql'
import Image from 'next/image'
import React from 'react'

interface Props {
  data: Partial<BasePaginateResponse>
  onPress: (page: number) => void
  isMobile: boolean
}

function PaginationComponent({ onPress, data, isMobile }: Props) {
  if (isMobile) {
    return null
  }

  return (
    <div className='flex justify-center items-center mt-10'>
      <Image
        width={70}
        height={70}
        src='/assets/icons/arrow_left.svg'
        alt='arrow left asset'
        onClick={() => {
          if (data.hasPrevPage && data.prevPage) {
            onPress(data.prevPage)
          }
        }}
        draggable={false}
        className={`select-none mx-4 rounded-full ${data.hasPrevPage ? 'cursor-pointer hover:bg-secondary' : 'cursor-not-allowed '}`}
      />
      <Image
        width={70}
        height={70}
        src='/assets/icons/arrow_right.svg'
        alt='arrow right asset'
        onClick={() => {
          if (data.hasNextPage && data.nextPage) {
            onPress(data.nextPage)
          }
        }}
        draggable={false}
        className={`select-none mx-4 rounded-full ${data.hasNextPage ? 'cursor-pointer hover:bg-secondary' : 'cursor-not-allowed '}`}
      />
    </div>
  )
}

export default PaginationComponent
