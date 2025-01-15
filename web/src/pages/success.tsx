import React from 'react'
import TitleComponent from '../@core/components/title'
import { HeaderType } from '../styles/interfaces'

function SuccessPage() {
  return (
    <div className='container mx-auto my-80'>
      <TitleComponent
        title='Thank you, we will be in touch soon'
        textSize='text-5xl'
        className='text-center'
        weight='font-semibold'
      />
    </div>
  )
}

SuccessPage.guestGuard = true
SuccessPage.headerType = 'ProductHeader' as HeaderType
SuccessPage.hideFooter = false

export default SuccessPage
