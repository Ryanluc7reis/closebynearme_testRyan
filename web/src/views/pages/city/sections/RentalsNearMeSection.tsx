import PaginationComponent from '@components/PaginationComponent'
import Button from '@core/components/button'
import TitleComponent from '@core/components/title'
import {
  FindCompaniesByLocationSlugQueryVariables,
  FindLocationBySlugQuery,
  StatusAllowed,
  useFindCompaniesByLocationSlugQuery
} from '@graphql'
import Link from 'next/link'
import React, { HTMLProps } from 'react'
import { handleParseTitle } from 'src/utils/nameSlice'

const Colors = ['bg-[#EDF6FF]', 'bg-[#FFF2F2]', 'bg-[#E4F4E5]', 'bg-[#F8F3F8]']

interface Props {
  data: {
    location: FindLocationBySlugQuery['findOneLocationBySlug']['location']
    category: FindLocationBySlugQuery['findOneLocationBySlug']['category']
  }
  className?: HTMLProps<HTMLElement>['className']
  isMobile: boolean
}

function RentalsComponent({ data: _data, className, isMobile }: Props) {
  const variables = {
    search: {
      page: 1,
      perPage: 4,
      status: StatusAllowed.Active
    },
    slug: _data.location.slug,
    categorySlug: _data.category.slug
  } satisfies FindCompaniesByLocationSlugQueryVariables
  const { data, refetch } = useFindCompaniesByLocationSlugQuery({
    variables
  })

  const handlePagination = (page: number) => {
    refetch({
      search: {
        page,
        perPage: 4
      }
    })
  }

  return (
    <>
      <div className={className}>
        {data?.findOneLocationBySlug.companies.docs.map((item, idx) => (
          <Link
            href={`/city/${_data.location.slug}/${_data.category.slug}/${item.slug}`}
            key={item._id}
            className='flex flex-col items-center justify-center mb-4'
          >
            <div
              className={`w-[58px] h-[58px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] rounded-full text-center ${Colors[idx]} relative`}
            >
              <TitleComponent
                textSize='text-sm'
                weight='font-bold'
                className='sm:text-3xl lg:text-5xl xl:text-6xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'
                title={item.initialLetter.toUpperCase()}
              />
            </div>
            <TitleComponent
              textSize='text-xs'
              weight='font-light'
              className='mt-3 sm:text-3xl text-center sm:font-bold sm:mt-10 break-words'
              title={handleParseTitle(item.name, true, 15)}
            />
          </Link>
        ))}
      </div>
      {isMobile && (
        <>
          <Button
            onClick={() => {}}
            className='mb-3 mt-4 border border-primary rounded-md hover:border-secondary w-[100%]'
            weight='font-bold'
            color='bg-primary'
            textSize='text-xs'
            textColor='text-background'
            label={`Explore All Companies in ${_data.location.name}`}
          />
          <Button
            onClick={() => {}}
            className='border border-primary rounded-md w-[100%] hover:border-secondary'
            weight='font-bold'
            textColor='text-primary'
            textSize='text-xs'
            label={`Explore All Companies Near ${_data.location.name}`}
          />
        </>
      )}
      <PaginationComponent
        data={data?.findOneLocationBySlug.companies || {}}
        onPress={handlePagination}
        isMobile={isMobile}
      />
    </>
  )
}

function RentalsNearMeSection({ className, data, isMobile }: Props) {
  return (
    <div className={className}>
      <div className='flex items-center justify-between mb-0 sm:mb-16'>
        <TitleComponent
          title={handleParseTitle(`${data.category.name} Near Me`, isMobile)}
          textSize='text-2xl'
          weight='font-black'
          className='lg:text-5xl'
        />
        {!isMobile && (
          <Link href={`/companies/${data.location.slug}/${data.category.slug}`}>
            <Button
              label='View All Rentals'
              onClick={() => {}}
              textSize='text-base'
              weight='font-bold'
              color='bg-background'
              textClassName='lg:text-xl'
              className='px-3 py-0 hover:text-white'
              textColor='text-primary'
            />
          </Link>
        )}
      </div>
      <RentalsComponent
        data={data}
        isMobile={isMobile}
        className='mt-4 flex justify-between items-center flex-nowrap'
      />
    </div>
  )
}

export default RentalsNearMeSection
