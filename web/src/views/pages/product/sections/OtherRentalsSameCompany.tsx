import Button from '@core/components/button'
import TitleComponent from '@core/components/title'
import {
  FindProductDetailsQuery,
  ListProductsSameCompanyQuery,
  ProductPriceType,
  StatusAllowed,
  useListProductsSameCompanyQuery
} from '@graphql'
import Image from 'next/image'
import Link from 'next/link'
import React, { HTMLProps } from 'react'

interface Props {
  data: FindProductDetailsQuery['findOneProductPopulate']
  className?: HTMLProps<HTMLElement>['className']
}

interface IProps {
  data: ListProductsSameCompanyQuery['listProductsSameCompany']['docs'][0]
}

function ItemListing({ data }: IProps) {
  return (
    <Link href={`/product/${data.slug}`} className='w-full'>
      <div className='flex flex-col items-start justify-start gap-1.5 hover:brightness-75 w-[255px] sm:w-full'>
        <Image
          alt='image listing'
          src={data.images[0]}
          className='select-none w-[255px] h-[254px] sm:h-full sm:w-full'
          width={397}
          height={395}
          draggable={false}
        />
        <TitleComponent
          title={data.name}
          textSize=''
          weight='font-semibold'
          className='leading-[24.2px] text-[20px] sm:leading-[33.89px] sm:text-[28px]'
        />
        <div className='flex flex-row gap-1'>
          <TitleComponent
            title={`$${data.full_price}`}
            textSize=''
            weight='font-semibold'
            className='leading-[18.15px] text-[15px] sm:leading-[26.63px] sm:text-[22px]'
          />
          <TitleComponent
            title={`${data.priceType === ProductPriceType.Day ? 'per day' : 'per hour'}`}
            textSize=''
            weight='font-light'
            className='leading-[18.15px] text-[15px] sm:leading-[26.63px] sm:text-[22px]'
          />
        </div>
        <Button
          label='Book now'
          color='bg-primary'
          textSize=''
          weight='font-semibold'
          textClassName='text-[22px] leading-[26.62px]'
          onClick={() => {}}
          className='w-full rounded-md py-[8px] sm:py-4 mt-8'
          textColor='text-background'
        />
      </div>
    </Link>
  )
}

function OtherRentalsSameCompany({ className, data: { companyId, slug, categoryId } }: Props) {
  const { data, loading } = useListProductsSameCompanyQuery({
    variables: {
      search: {
        perPage: 3,
        status: StatusAllowed.Active,
        companyId: companyId._id
      },
      slug
    }
  })

  return (
    <div className={`${className}`}>
      <TitleComponent
        title={`Other listings from ${companyId.name}`}
        textSize=''
        className='text-[20px] leading-[24.20px] text-left sm:text-[30px] sm:leading-[36.31px] mb-8 sm:mb-16'
        weight='font-semibold'
      />
      <div className='overflow-x-auto '>
        <div className='flex items-center justify-between sm:grid sm:grid-cols-3 gap-10 '>
          {!loading &&
            data?.listProductsSameCompany.docs.map((item) => (
              <ItemListing key={`product-detail-page-listing-${item._id}`} data={item} />
            ))}
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-5 my-10 sm:my-16'>
        <TitleComponent
          title={`Other listing from ${companyId.name}`}
          textSize=''
          weight='font-medium'
          className='leading-[18.15px] text-[15px] sm:leading-[29.05px] text-center sm:text-[24px]'
        />
        <Link href={`/city/${companyId.locationSlug}/${categoryId.slug}/${companyId.slug}`}>
          <Button
            onClick={() => {}}
            label='Show more'
            textSize=''
            color='bg-text'
            className='rounded-md'
            textColor='text-background'
            textClassName='leading-[18.15px] text-[15px] sm:text-[22px] sm:leading-[26.63px]'
            weight='font-semibold'
          />
        </Link>
      </div>
    </div>
  )
}

export default OtherRentalsSameCompany
