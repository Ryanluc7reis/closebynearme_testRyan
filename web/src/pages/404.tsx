import TitleComponent from '@core/components/title'
import { HeaderType } from '@styles/interfaces'
import React from 'react'

function Page404() {
  return (
    <div className='container mx-auto my-80'>
      <TitleComponent title='Not Found' textSize='text-5xl' className='text-center' weight='font-semibold' />
    </div>
  )
}
Page404.guestGuard = true
Page404.headerType = 'ProductHeader' as HeaderType

export default Page404
