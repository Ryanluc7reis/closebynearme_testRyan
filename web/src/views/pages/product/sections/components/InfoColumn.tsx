import TitleComponent from '@core/components/title'
import { FindProductDetailsQuery } from '@graphql'
import React, { HTMLProps } from 'react'

interface Props {
  data: FindProductDetailsQuery['findOneProductPopulate']
  className?: HTMLProps<HTMLElement>['className']
}

interface CategoryProps {
  title: string
  description: string
}

export function CategoryComponent({ description, title }: CategoryProps) {
  return (
    <div className='flex flex-col gap-2 items-start justify-start'>
      <TitleComponent
        title={title}
        weight='font-bold'
        textSize=''
        className='text-left text-[20px] leading-[24.20px] sm:text-[28px] sm:leading-[33.89px]'
      />
      <TitleComponent
        title={description}
        weight='font-light'
        textSize=''
        className='text-left text-[15px] leading-[28px] sm:text-[22px] sm:leading-[35px]'
      />
    </div>
  )
}

function InfoColumn({ data, className }: Props) {
  return (
    <div className={`flex flex-col items-start justify-center gap-10 ${className}`}>
      <CategoryComponent
        title='Space Requirements'
        description={data.spaceRequirements || data.categoryId.spaceRequirements}
      />
      <CategoryComponent title='Supervision' description={data.supervision || data.categoryId.supervision} />
      <CategoryComponent title='Safety' description={data.safety || data.categoryId.safety} />
    </div>
  )
}

export default InfoColumn
