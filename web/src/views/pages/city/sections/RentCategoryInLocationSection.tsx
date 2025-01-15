import TitleComponent from '@core/components/title'
import {
  FindCompaniesByLocationSlugQuery,
  FindLocationBySlugQuery,
  useFindCompaniesByLocationSlugQuery
} from '@graphql'
import Link from 'next/link'
import React, { HTMLProps, useState } from 'react'
import { AlphabeticLetters } from 'src/utils/alphabetic'

type CompanyItem = FindCompaniesByLocationSlugQuery['findOneLocationBySlug']['companies']['docs'][0]

interface Props {
  data: {
    location: FindLocationBySlugQuery['findOneLocationBySlug']['location']
    category: FindLocationBySlugQuery['findOneLocationBySlug']['category']
  }
  className?: HTMLProps<HTMLElement>['className']
}

function RentCategoryInLocationSection({ className, data }: Props) {
  const [companiesGroup, setCompaniesGroup] = useState<Record<string, CompanyItem[]>>({})

  useFindCompaniesByLocationSlugQuery({
    variables: {
      search: { all: true },
      slug: data.location.slug,
      categorySlug: data.category.slug
    },
    onCompleted: ({ findOneLocationBySlug }) => {
      const _data: Record<string, CompanyItem[]> = {}
      AlphabeticLetters.forEach((item) => (_data[item] = []))

      findOneLocationBySlug.companies.docs.forEach((item) => {
        const exist = _data[item.initialLetter]

        exist.push(item)
      })

      setCompaniesGroup(_data)
    }
  })

  return (
    <div className={className}>
      <TitleComponent
        textSize='text-xl'
        weight='font-black'
        className='sm:text-2xl lg:text-[45px] mb-4 sm:mb-10'
        title={`Rent Your ${data.category.name} In ${data.location.name}`}
      />
      {Object.keys(companiesGroup).map((letter, idx) => {
        if (companiesGroup[letter].length) {
          return (
            <div key={`letter_${letter}_${idx}`} className='my-0 sm:my-6'>
              <TitleComponent
                textSize='text-xl'
                weight='font-bold'
                title={letter.toUpperCase()}
                className='sm:text-[45px] italic underline mb-2 sm:mb-8'
              />

              <div className='flex flex-wrap justify-start items-center'>
                {companiesGroup[letter].map((item) => (
                  <Link
                    key={`list_companies_order_${item._id}`}
                    href={`/city/${data.location.slug}/${data.category.slug}/${item.slug}`}
                  >
                    <TitleComponent
                      className='sm:text-3xl underline decoration-3 underline-offset-8 decoration-secondary mr-4 mb-3 sm:mr-6 sm:mb-6 hover:text-secondary'
                      textSize='text-xs'
                      weight='font-bold'
                      title={item.name}
                    />
                  </Link>
                ))}
              </div>
            </div>
          )
        }
      })}
    </div>
  )
}

export default RentCategoryInLocationSection
