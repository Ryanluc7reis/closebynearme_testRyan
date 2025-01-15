import Button from '@core/components/button'
import TitleComponent from '@core/components/title'
import React, { HTMLProps } from 'react'

interface Props {
  className?: HTMLProps<HTMLElement>['className']
}

function DownloadSection({ className }: Props) {
  return (
    <div className={className}>
      <img src='/assets/background_1.svg' alt='background asset' className='object-contain w-[100%] h-[100%]' />

      <div className='absolute left-[5%] bottom-[10%] sm:left-[10%] sm:bottom-[20%] xl:bottom-[10%]'>
        <div className='flex flex-col items-start'>
          <TitleComponent
            color='text-background'
            textSize='text-xl'
            title='Get the'
            className='sm:text-2xl md:text-3xl lg:text-6xl xl:text-8xl sm:mb-1 xl:mb-3'
          />
          <TitleComponent
            color='text-background'
            textSize='text-xl'
            weight='font-black'
            title='Close By Near Me'
            className='sm:text-2xl md:text-3xl lg:text-6xl xl:text-8xl sm:mb-1 xl:mb-3'
          />
          <TitleComponent
            color='text-background'
            textSize='text-xl'
            title='App'
            className='sm:text-xl md:text-3xl lg:text-6xl xl:text-8xl sm:mb-5 xl:mb-10'
          />
          <TitleComponent
            color='text-background'
            textSize='text-base'
            title='Find the best rental house for your party!'
            className='sm:text-lg md:text-xl lg:text-4xl xl:text-4xl sm:mb-5 xl:mt-10'
          />
          <Button
            color='bg-accent'
            label='Download'
            onClick={() => {}}
            textClassName='sm:text-lg md:text-xl lg:text-2xl xl:text-4xl'
            className='py-[10px] px-4 sm:py-[10px] sm:px-8 md:py-[20px] md:px-16 lg:py-[20px] lg:px-16 xl:py-[40px] xl:px-32 rounded-full mt-2 '
            textSize='text-base'
            type='button'
            weight='font-black'
          />
        </div>
      </div>
    </div>
  )
}

export default DownloadSection
