import Button from '@core/components/button'
import Image from 'next/image'
import React, { HTMLProps } from 'react'

interface Props {
  className?: HTMLProps<HTMLElement>['className']
}

function ActivateFloatButton({ className }: Props) {
  return (
    <div className={className}>
      <Button
        onClick={() => {}}
        className='text-text py-[6px] border border-primary rounded-md hover:border-secondary'
        weight='font-extrabold'
        color='bg-primary'
        textSize='text-lg'
        textColor='text-primary'
        label='Activate'
        iconLeft={
          <Image
            src='/assets/icons/heart_black.svg'
            alt='icon heart black'
            height={17}
            width={20}
            className='select-none mx-2'
            draggable={false}
          />
        }
      />
    </div>
  )
}

export default ActivateFloatButton
