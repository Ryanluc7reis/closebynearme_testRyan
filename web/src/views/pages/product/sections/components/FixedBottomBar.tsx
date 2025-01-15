import React, { HTMLProps } from 'react'
import { TopBarBuy } from './SidebarFloatBuy'
import { FindProductDetailsQuery } from '@graphql'

interface Props {
  className?: HTMLProps<HTMLElement>['className']
  data: FindProductDetailsQuery['findOneProductPopulate']
}

function FixedBottomBar({ className, data }: Props) {
  return (
    <div className={className}>
      <TopBarBuy data={data} className='rounded-none' />
    </div>
  )
}

export default FixedBottomBar
