import Button from '@core/components/button'
import TitleComponent from '@core/components/title'
import { FindOneCompanyBySlugQuery, ProductPriceType } from '@graphql'
import Image from 'next/image'
import Link from 'next/link'
import React, { HTMLProps, useMemo, useState } from 'react'

interface Props {
  data: {
    location: FindOneCompanyBySlugQuery['findOneLocationBySlug']['location']
    category: FindOneCompanyBySlugQuery['findOneLocationBySlug']['category']
    company: FindOneCompanyBySlugQuery['findOneCompanyBySlug']['company']
    products: FindOneCompanyBySlugQuery['findOneCompanyBySlug']['products']['docs']
  }
  className?: HTMLProps<HTMLElement>['className']
}

type IProduct = Props['data']['products'][0]

function Product({ name, price, slug, priceType, images }: IProduct) {
  return (
    <Link href={`/product/${slug}`} className='w-full'>
      <div className='flex flex-col items-start justify-start gap-1.5 hover:brightness-75'>
        <Image alt='image listing' src={images[0]} className='select-none' width={318} height={317} draggable={false} />
        <TitleComponent
          title={name}
          textSize=''
          weight='font-semibold'
          className='leading-[24.2px] text-[20px] sm:leading-[33.89px] sm:text-[28px]'
        />
        <div className='flex flex-row gap-1'>
          <TitleComponent
            title={`$${price}`}
            textSize=''
            weight='font-semibold'
            color='text-[#8f8f8f]'
            className='leading-[18.15px] text-[15px] sm:leading-[26.63px] sm:text-[22px]'
          />
          <TitleComponent
            title={`${priceType === ProductPriceType.Day ? 'per day' : 'per hour'}`}
            textSize=''
            weight='font-light'
            color='text-[#8f8f8f]'
            className='leading-[18.15px] text-[15px] sm:leading-[26.63px] sm:text-[22px]'
          />
        </div>
      </div>
    </Link>
  )
}

function ProductsSection({ data: { location, products }, className }: Props) {
  const [showAll, setShowAll] = useState(products.length >= 8)
  const _data = useMemo(() => {
    if (showAll) {
      return products.slice(0, 8)
    } else {
      return products
    }
  }, [products, showAll])

  return (
    <div className={`${className}`}>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-5 my-8 sm:my-20'>
        {_data.map((item, idx) => (
          <Product key={`product-company-page-${item._id}-${idx}`} {...item} />
        ))}
      </div>
      {showAll && (
        <div className='flex flex-col items-center justify-center gap-5  my-10 sm:my-16'>
          <TitleComponent
            title={`Other rentals in ${location.name}`}
            textSize=''
            weight='font-medium'
            className='leading-[18.15px] text-[15px] sm:leading-[29.05px] text-center sm:text-[24px]'
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
            textClassName='leading-[18.15px] text-[15px] sm:text-[22px] sm:leading-[26.63px]'
            weight='font-semibold'
          />
        </div>
      )}
    </div>
  )
}

export default ProductsSection
