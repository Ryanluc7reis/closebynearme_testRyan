import FaqComponent from '@components/FaqComponent'
import TitleComponent from '@core/components/title'
import { FindLocationBySlugQuery, useFindFaqsByLocationSlugQuery } from '@graphql'
import React, { HTMLProps } from 'react'

interface Props {
  data: {
    location: FindLocationBySlugQuery['findOneLocationBySlug']['location']
    category: FindLocationBySlugQuery['findOneLocationBySlug']['category']
  }
  className?: HTMLProps<HTMLElement>['className']
  isMobile: boolean
}

function FaqsSection({ data: _data, className, isMobile }: Props) {
  const classNameMobile = 'container mx-auto mb-4 xl:mb-16'
  const classNameDesktop = 'container mx-auto mb-8 xl:mb-16'

  const { data } = useFindFaqsByLocationSlugQuery({
    variables: {
      search: { all: true },
      slug: _data.location.slug,
      categorySlug: _data.category.slug
    }
  })

  return (
    <div className={className}>
      <div className={isMobile ? classNameMobile : classNameDesktop}>
        <TitleComponent
          textSize='text-xl'
          weight='font-black'
          title='Frequently Asked Questions'
          className='sm:text-2xl lg:text-5xl'
        />
      </div>
      <hr />

      {data?.findOneLocationBySlug.faqs.docs.map((item, idx) => (
        <div key={item._id}>
          <FaqComponent
            data={item}
            show={idx === 0}
            isMobile={isMobile}
            lastItem={idx + 1 === data.findOneLocationBySlug.faqs.docs.length}
          />
          <hr />
        </div>
      ))}
    </div>
  )
}

export default FaqsSection
