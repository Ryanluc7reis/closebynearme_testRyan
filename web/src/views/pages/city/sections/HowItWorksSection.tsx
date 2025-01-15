import Button from '@core/components/button'
import TitleComponent from '@core/components/title'
import Image from 'next/image'
import React, { HTMLProps } from 'react'

interface Props {
  className?: HTMLProps<HTMLElement>['className']
  isMobile: boolean
}

interface ItemProps {
  item: {
    _id: string
    title: string
    icon: string
    leftIcon?: any
  }
  lastItem: boolean
}

const Data: ItemProps['item'][] = [
  {
    _id: 'hiw-item-01',
    title: 'Explore bounce house rentals near you',
    icon: '/assets/icons/hiw_icon_1.svg'
  },
  {
    _id: 'hiw-item-02',
    title: 'Book your bounce house rental',
    icon: '/assets/icons/hiw_icon_2.svg'
  },
  {
    _id: 'hiw-item-03',
    title: 'Seamless Delivery to your location',
    icon: '/assets/icons/hiw_icon_3.svg'
  }
]

const DataMobile: ItemProps['item'][] = [
  {
    _id: 'hiw-item-01',
    title: 'Find the favorite bounce house',
    icon: '/assets/icons/hiw_1_v.svg',
    leftIcon: '/assets/icons/icon_1.svg'
  },
  {
    _id: 'hiw-item-02',
    title: 'Book your bounce house',
    icon: '/assets/icons/hiw_2_v.svg',
    leftIcon: '/assets/icons/icon_2.svg'
  },
  {
    _id: 'hiw-item-03',
    title: 'Deliver to your house',
    icon: '/assets/icons/hiw_3_v.svg',
    leftIcon: '/assets/icons/icon_3.svg'
  }
]

function HowItWorkItem({ item: { icon, title, leftIcon }, lastItem }: ItemProps) {
  return (
    <div
      className={`flex sm:flex-col flex-wrap items-center justify-between w-[100%] md:w-[250px] lg:mx-20 ${lastItem ? '' : 'mb-5 sm:mb-0'}`}
    >
      {leftIcon && (
        <Image
          width={29}
          height={29}
          draggable={false}
          src={leftIcon}
          alt='icon how it work'
          className='select-none h-[29px] w-[29px] '
        />
      )}
      <Image
        width={250}
        height={200}
        draggable={false}
        src={icon}
        alt='icon how it work'
        className='select-none h-[77px] w-[71px] sm:h-[100px] sm:w-[100px] lg:h-[200px] lg:w-[250px]'
      />
      <TitleComponent
        title={title}
        weight='font-bold'
        textSize='text-base'
        className='lg:text-3xl text-left sm:mt-4 w-[150px] sm:w-[250px]'
      />
    </div>
  )
}

function HowItWorksSection({ className, isMobile }: Props) {
  const dataRender = isMobile ? DataMobile : Data

  return (
    <div className={className}>
      <div className='container mx-auto px-10 xl:px-0'>
        <div className='flex items-center justify-center sm:justify-between mb-4 xl:mb-16'>
          <TitleComponent
            title='How It Works'
            textSize='text-xl'
            weight='font-black'
            className='text-center sm:text-2xl lg:text-5xl lg:text-left'
          />
          {!isMobile && (
            <Button
              label='Download the App'
              onClick={() => {}}
              textSize='text-base'
              weight='font-bold'
              className='px-3 py-0'
              textClassName='lg:text-xl'
              textColor='text-primary'
            />
          )}
        </div>
        <div className='flex flex-col sm:flex-row justify-center sm:justify-between items-center flex-wrap'>
          {dataRender.map((item, idx) => (
            <HowItWorkItem key={item._id} item={item} lastItem={idx + 1 === dataRender.length} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default HowItWorksSection
