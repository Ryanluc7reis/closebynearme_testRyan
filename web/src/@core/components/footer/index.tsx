import React from 'react'
import TitleComponent from '../title'

interface Props {
  skeleton?: boolean
  isMobile: boolean
}

function Footer({ isMobile }: Props) {
  if (isMobile) {
    return null
  }

  return (
    <div className='container mx-auto mb-10 px-10 xl:px-0'>
      <TitleComponent
        title='Copyright 2024. Close By Near Me. All rights reserved.'
        weight='font-normal'
        textSize='text-lg'
      />
    </div>
  )
}

export default Footer
