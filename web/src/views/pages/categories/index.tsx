import Button from '@core/components/button'
import TitleComponent from '@core/components/title'
import { FindCategoriesByLocationBySlugQuery } from '@graphql'
import Link from 'next/link'
import React, { HTMLProps, useMemo, useState } from 'react'

interface Props {
  className?: HTMLProps<HTMLElement>['className']
  data: FindCategoriesByLocationBySlugQuery['findCategoriesByLocationBySlug']
}

function CategoriesComponent({ data, className }: Props) {
  const [showAll, setShowAll] = useState(data.categories.length >= 40)
  const _data = useMemo(() => {
    if (showAll) {
      return data.categories.sort((a, b) => (a.name > b.name ? 1 : -1)).slice(0, 40)
    } else {
      return data.categories.sort((a, b) => (a.name > b.name ? 1 : -1))
    }
  }, [data, showAll])

  return (
    <div className={`${className}`}>
      <TitleComponent
        title={`Close By Near Me Rentals in ${data.name}`}
        textSize=''
        className='text-[30px] leading-[36.31px] text-center sm:text-left sm:text-[45px] sm:leading-[54.46px] my-8'
        weight='font-extrabold'
      />
      <hr />

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10'>
        {_data.map((item) => (
          <Link
            href={`/city/${data.slug}/${item.slug}`}
            key={`category-page-item-${data._id}-${item.slug}`}
            className='border rounded-md border-[#CBCBCB] py-8 hover:bg-secondary hover:border-none'
          >
            <TitleComponent
              title={item.name}
              className='text-center leading-[29.04px] text-[24px]'
              weight='font-semibold'
              textSize=''
            />
          </Link>
        ))}
      </div>
      {showAll && (
        <div className='flex flex-col items-center justify-center gap-5 my-8'>
          <TitleComponent
            title={`Explore more rentals in ${data.name}`}
            textSize=''
            weight='font-medium'
            className='leading-[29.05px] text-center text-[24px]'
          />
          <Button
            onClick={() => {
              setShowAll(false)
            }}
            label='Show more'
            textSize=''
            color='bg-text'
            className='rounded-md'
            textColor='text-background'
            textClassName='text-[22px] leading-[26.63px]'
            weight='font-semibold'
          />
        </div>
      )}
    </div>
  )
}

export default CategoriesComponent
