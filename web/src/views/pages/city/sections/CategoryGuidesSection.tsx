import { MarkdownRenderComponent } from '@components/MarkdownRenderComponent'
import PaginationComponent from '@components/PaginationComponent'
import Button from '@core/components/button'
import TitleComponent from '@core/components/title'
import {
  ArticlesTypeAllowed,
  FindArticlesByLocationSlugQueryVariables,
  FindLocationBySlugQuery,
  StatusAllowed,
  useFindArticlesByLocationSlugQuery
} from '@graphql'
import Image from 'next/image'
import React, { HTMLProps } from 'react'
import { dateFormat } from 'src/utils/dateFormat'

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
      perPage: 2,
      status: StatusAllowed.Active,
      type: ArticlesTypeAllowed.Guide
    },
    slug: _data.location.slug,
    categorySlug: _data.category.slug
  } satisfies FindArticlesByLocationSlugQueryVariables
  const { data, refetch } = useFindArticlesByLocationSlugQuery({
    variables
  })

  const handlePagination = (page: number) => {
    refetch({
      search: {
        ...variables.search,
        page
      }
    })
  }

  return (
    <>
      <div className={className}>
        {data?.findOneLocationBySlug.articles.docs.map((item) => (
          <div key={item._id} className={`flex flex-col items-start justify-center`}>
            {item.image ? (
              <Image
                src={item.image}
                width={625}
                draggable={false}
                height={400}
                style={{ objectFit: 'cover' }}
                alt='guide ref image'
                className='select-none mb-2 w-[159px] h-[228px] sm:h-[100%] sm:w-[625px]'
              />
            ) : (
              <div className='select-none mb-2 w-[159px] h-[228px] sm:h-[100%] sm:w-[625px] bg-gray-200' />
            )}
            {!isMobile && (
              <TitleComponent
                textSize='text-base'
                className='lg:text-2xl lg:my-2 italic'
                weight='font-thin'
                title={dateFormat(item.createdAt)}
              />
            )}
            <TitleComponent
              textSize='text-base'
              weight='font-bold'
              title={item.title}
              className='w-[159px] sm:w-[100%] sm:max-w-[625px] sm:text-lg lg:text-2xl mb-1 break-words'
            />
            {!isMobile && (
              <MarkdownRenderComponent
                text={item.description}
                className='text-text font-light text-lg font-inter lg:text-2xl break-words text-justify w-[100%] xl:w-[625px]'
              />
            )}
          </div>
        ))}
      </div>
      <PaginationComponent
        isMobile={isMobile}
        data={data?.findOneLocationBySlug.articles || {}}
        onPress={handlePagination}
      />
    </>
  )
}

function CategoryGuidesSection({ className, data, isMobile }: Props) {
  const title = isMobile ? 'Your Renting Guides' : `${data.category.name} Guides`

  return (
    <div className={className}>
      <TitleComponent title={title} textSize='text-2xl' weight='font-black' className='lg:text-5xl my-8 xl:my-16' />

      <RentalsComponent data={data} isMobile={isMobile} className='flex justify-between items-start flex-wrap' />
      {isMobile && (
        <Button
          label='Read More'
          onClick={() => {}}
          textSize='text-base'
          weight='font-bold'
          color='bg-background'
          className='container mx-auto mt-3 px-3 py-[5px]'
          textClassName='lg:text-xl'
          textColor='text-primary'
          iconRight={
            <Image
              src='/assets/icons/arrow_right_empty.svg'
              alt='icon arrow right'
              height={11}
              draggable={false}
              width={11}
              className='select-none mx-2'
            />
          }
        />
      )}
    </div>
  )
}

export default CategoryGuidesSection
