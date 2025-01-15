import React from 'react'
import { HeaderType } from '../styles/interfaces'
import TitleComponent from '../@core/components/title'

function ErrorPage() {
  return (
    <div className='container mx-auto my-80'>
      <TitleComponent title='Error' textSize='text-5xl' className='text-center' weight='font-semibold' />
    </div>
  )
}

ErrorPage.guestGuard = true
ErrorPage.headerType = 'ProductHeader' as HeaderType
ErrorPage.hideFooter = false

export default ErrorPage
