import { FindProductDetailsQuery } from '@graphql'
import React, { HTMLProps } from 'react'
import { CategoryComponent } from './components/InfoColumn'

interface Props {
  data: FindProductDetailsQuery['findOneProductPopulate']
  className?: HTMLProps<HTMLElement>['className']
}

function ProductInfo2({ className, data }: Props) {
  return (
    <div className={`flex flex-col items-start justify-center gap-10  ${className}`}>
      <CategoryComponent
        title='Cancellation/Returns/Refunds'
        description={data.insurancePlan || data.categoryId.insurancePlan}
      />
      <CategoryComponent
        title='Additional information'
        description={data.notification || data.categoryId.notification}
      />
    </div>
  )
}

export default ProductInfo2
