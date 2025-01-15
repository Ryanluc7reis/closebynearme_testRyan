import TitleComponent from '@core/components/title'
import Image from 'next/image'
import React, { HTMLProps } from 'react'

interface Props {
  className?: HTMLProps<HTMLElement>['className']
  isMobile: boolean
}

interface ItemProps {
  item: { _id: string; title: string; icon: string }
  lastItem: boolean
}

const Data: ItemProps['item'][] = [
  {
    _id: 'trustedby-item-01',
    title: '100000+ Listings across US',
    icon: '/assets/icons/location.svg'
  },
  {
    _id: 'trustedby-item-02',
    title: 'Free Cancellation',
    icon: '/assets/icons/heart.svg'
  },
  {
    _id: 'trustedby-item-03',
    title: 'Collaborate With Local Businesses',
    icon: '/assets/icons/handshake.svg'
  },
  {
    _id: 'trustedby-item-04',
    title: 'Great Customer Service',
    icon: '/assets/icons/headphone.svg'
  }
]

function TrustedByItem({ item: { icon, title }, lastItem }: ItemProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center md:w-[200px] mx-1 md:mx-20 ${lastItem ? '' : 'mb-5 sm:mb-0'}`}
    >
      <Image
        width={100}
        height={100}
        draggable={false}
        src={icon}
        alt='icon how it work'
        className='select-none h-[65px] w-[65px] md:h-[100px] md:w-[100px] mb-5'
      />
      <TitleComponent
        title={title}
        weight='font-bold'
        textSize='text-base'
        className='lg:text-2xl text-center break-words'
      />
    </div>
  )
}

function TrustedBySection({ className, isMobile }: Props) {
  return (
    <div className={isMobile ? 'bg-[#F9F9F9] py-5 mb-8' : ''}>
      <div className={className}>
        {isMobile ? (
          <>
            <TitleComponent
              title='Trusted by Millions of '
              weight='font-black'
              textSize='text-xl'
              className='text-left'
            />
            <TitleComponent
              title='Customers Worldwide'
              weight='font-black'
              textSize='text-xl'
              className='mb-8 text-left'
            />
          </>
        ) : (
          <TitleComponent
            title='Trusted by Millions of Customers Worldwide'
            weight='font-black'
            textSize='text-2xl'
            className='lg:text-5xl mb-8 xl:mb-16 text-center lg:text-left'
          />
        )}
        <div className='justify-center items-center'>
          <div className='contaner mx-auto grid grid-cols-2 sm:grid-cols-4'>
            {Data.map((item, idx) => (
              <TrustedByItem key={item._id} item={item} lastItem={idx >= 2} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrustedBySection
