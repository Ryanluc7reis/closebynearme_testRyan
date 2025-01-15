import CardComponent from '@core/components/card'
import TitleComponent from '@core/components/title'
import { FindOneCompanyBySlugQuery } from '@graphql'
import Image from 'next/image'
import React, { HTMLProps } from 'react'

interface Props {
  data: {
    location: FindOneCompanyBySlugQuery['findOneLocationBySlug']['location']
    category: FindOneCompanyBySlugQuery['findOneLocationBySlug']['category']
    company: FindOneCompanyBySlugQuery['findOneCompanyBySlug']['company']
  }
  className?: HTMLProps<HTMLElement>['className']
}

interface Item {
  _id: string
  title: string
  icon: string
  description: string
  color: string
  background: string
}

interface IProps {
  item: Item
}

export const OnboardingItems: Item[] = [
  {
    _id: 'onboarding-item-01',
    title: 'Better Inventory Choices',
    icon: '/assets/images/onboardin_assets/check.svg',
    description: `<span class="font-semibold">Close By Near Me</span> app analyzes past rental data to suggest popular bounce house themes, sizes, and designs, ensuring the inventory is stocked with what customers want.`,
    color: 'text-[#0085FF]',
    background: '/assets/vectors/blue.svg'
  },
  {
    _id: 'onboarding-item-02',
    title: 'Seasonal Demand Prediction',
    icon: '/assets/images/onboardin_assets/prediction.svg',
    description:
      '<span class="font-semibold">Close By Near Me</span> predicts when demand for bounce houses will spike based on factors like birthdays and holidays, helping the business adjust inventory to meet demand.',
    color: 'text-[#FF6060]',
    background: '/assets/vectors/red.svg'
  },
  {
    _id: 'onboarding-item-03',
    title: 'Optimized Pricing',
    icon: '/assets/images/onboardin_assets/tag_pricing.svg',
    description:
      'By studying market conditions and competitor pricing, <span class="font-semibold">Close By Near Me</span>  app recommends the best rental rates, maximizing profits while staying competitive.',
    color: 'text-[#008D9F]',
    background: '/assets/vectors/blue-light.svg'
  },
  {
    _id: 'onboarding-item-04',
    title: 'Resource Efficiency',
    icon: '/assets/images/onboardin_assets/layers.svg',
    description:
      '<span class="font-semibold">Close By Near Me</span>  identifies opportunities to reuse or share bounce house inventory based on demand patterns, ensuring resources are used effectively.',
    color: 'text-[#759177]',
    background: '/assets/vectors/green.svg'
  },
  {
    _id: 'onboarding-item-05',
    title: 'Maintenance Planning',
    icon: '/assets/images/onboardin_assets/calender.svg',
    description:
      '<span class="font-semibold">Close By Near Me</span>  app forecasts maintenance needs for bounce houses, minimizing downtime and keeping equipment in top condition.',
    color: 'text-[#856086]',
    background: '/assets/vectors/purple.svg'
  },
  {
    _id: 'onboarding-item-06',
    title: 'Real-time Inventory Management',
    icon: '/assets/images/onboardin_assets/web_settings.svg',
    description:
      '<span class="font-semibold">Close By Near Me</span>  provides instant visibility into inventory levels and availability, streamlining customer inquiries and bookings.',
    color: 'text-[#FFB800]',
    background: '/assets/vectors/yellow.svg'
  }
]

function OnboardingItemComponent({ item }: IProps) {
  return (
    <div className='flex flex-col justify-center items-center mt-5 xl:mt-10'>
      <Image src={item.icon} draggable={false} className='select-none' width={55} height={55} alt='icon onboarding' />
      <TitleComponent
        title={item.title}
        textSize='text-xl'
        weight='font-black'
        color={item.color}
        className={`md:text-base lg:text-2xl mt-5 text-center`}
      />

      <div
        className='text-text font-inter font-light w-[250px] text-base lg:text-xl mt-5 text-justify md:w-[300px]'
        dangerouslySetInnerHTML={{ __html: item.description }}
      />
    </div>
  )
}

function CompanyOnboardingInfoSection({ data, className }: Props) {
  return (
    <CardComponent className={className}>
      <TitleComponent
        textSize='text-xl'
        weight='font-black'
        title={`Why List your ${data.category.name} on Close By Near Me`}
        className='xl:text-3xl text-center'
      />
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-8 xl:mt-16'>
        {OnboardingItems.map((item) => (
          <OnboardingItemComponent key={item._id} item={item} />
        ))}
      </div>
    </CardComponent>
  )
}

export default CompanyOnboardingInfoSection
