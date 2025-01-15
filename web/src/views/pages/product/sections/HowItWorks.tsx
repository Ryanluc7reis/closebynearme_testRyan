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
    title: 'Explore bounce house near you',

    // title: 'Explore bounce house rentals near you',
    icon: '/assets/icons/hiw_icon_1.svg'
  },
  {
    _id: 'hiw-item-02',
    title: 'Book your bounce house',

    // title: 'Book your bounce house rental',
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
      className={`flex sm:flex-col items-center sm:items-start justify-between sm:justify-start w-[100%] gap-5 md:w-[350px] ${lastItem ? '' : 'mb-5 sm:mb-0'}`}
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
        weight='font-semibold'
        textSize=''
        className='text-[15px] leading-[18.15px] sm:text-[30px] sm:leading-[36.31px] text-left sm:mt-4 w-[250px] sm:w-[330px]'
      />
    </div>
  )
}

function HowItWorksSection({ className, isMobile }: Props) {
  const dataRender = isMobile ? DataMobile : Data

  return (
    <div className={className}>
      <div className='container mx-auto px-10 xl:px-0'>
        <div className='mb-4 xl:mb-16'>
          <TitleComponent
            title='How It Works'
            textSize=''
            weight='font-extrabold'
            className='text-[20px] leading-[24.20px] sm:text-[45px] sm:leading-[54.46px] text-center sm:text-left'
          />
          {/* title={`Rent Local Bounce House Rentals Near you`} */}

          {!isMobile && (
            <TitleComponent
              title={`Buy Local Bounce House Near you`}
              textSize=''
              weight='font-bold'
              color='text-[#939393]'
              className='text-[25px] leading-[24.20px] sm:text-[25px] sm:leading-[30.26px] text-center sm:text-left'
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
