import Button from '@core/components/button'
import React, { HTMLProps } from 'react'
import { OnboardingItems } from './CompanyOnboardingInfoSection'
import TitleComponent from '@core/components/title'
import Image from 'next/image'
import SwiperComponent from '@core/components/swiper'

interface Props {
  handlePress: () => void
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

function OnboardingItemComponent({ item }: IProps) {
  return (
    <div className='flex flex-col justify-center items-center relative h-[500px]'>
      <Image
        src={item.background}
        alt='vector decorative background'
        className='select-none -z-10 absolute'
        draggable={false}
        width={500}
        style={{
          objectFit: 'cover'
        }}
        height={500}
      />
      <Image src={item.icon} draggable={false} className='select-none' width={79} height={75} alt='icon onboarding' />
      <TitleComponent
        title={item.title}
        textSize='text-xl'
        weight='font-bold'
        className={`md:text-base lg:text-2xl mt-5 text-center`}
      />
      <div
        className='text-text font-inter text-center font-light text-sm mt-5 w-[250px]'
        dangerouslySetInnerHTML={{ __html: item.description }}
      />
    </div>
  )
}

function OnboardinStepsMobile({ handlePress, className }: Props) {
  return (
    <div className={className}>
      <div className='px-5'>
        <TitleComponent
          title='Why List your Bounce House Rentals on Close By Near Me'
          className='text-center'
          weight='font-black'
          textSize='text-xl'
        />
      </div>

      <SwiperComponent className='mb-8' data={OnboardingItems} Component={OnboardingItemComponent} />
      <div className='px-10'>
        <Button
          onClick={handlePress}
          className='text-text py-[6px] w-[100%] border border-primary rounded-md hover:border-secondary'
          weight='font-extrabold'
          color='bg-primary'
          textSize='text-lg'
          textColor='text-primary'
          label='Get Started'
        />
      </div>
    </div>
  )
}

export default OnboardinStepsMobile
