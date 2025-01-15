import TitleComponent from '@core/components/title'
import Image from 'next/image'
import React, { HTMLProps } from 'react'

interface Props {
  className?: HTMLProps<HTMLElement>['className']
}
interface ItemProps {
  item: { _id: string; title: string; subtitle: string; icon: string }
  lastItem: boolean
}

const Data: ItemProps['item'][] = [
  {
    _id: 'trustedby-item-01',
    title: '100000+ Listings across US',
    subtitle: 'Choose from a variety of local party, bike, and dumpster listings.',
    icon: '/assets/icons/location_black.svg'
  },
  {
    _id: 'trustedby-item-02',
    title: 'Collaborate With Local Businesses',
    subtitle: 'Partner with local businesses for the best experience.',
    icon: '/assets/icons/handshake_black.svg'
  },
  {
    _id: 'trustedby-item-03',
    title: 'Excellent Customer Service',
    subtitle: 'We ensure top-notch products for all your needs.',
    icon: '/assets/icons/headphone_black.svg'
  },
  {
    _id: 'trustedby-item-04',
    title: 'Free cancellation before Jul 16',
    subtitle: 'Full refund available if you cancel before this date.',
    icon: '/assets/icons/heart_black_v2.svg'
  }
]

function TrustedByItem({ item: { icon, title, subtitle } }: ItemProps) {
  return (
    <div className={`flex items-center justify-start gap-6 sm:gap-10`}>
      <div className='select-none h-[30px] w-[30px] md:h-[55px] md:w-[55px] '>
        <Image
          width={100}
          height={100}
          draggable={false}
          src={icon}
          alt='icon how it work'
          className='select-none h-[30px] w-[30px] md:h-[55px] md:w-[55px] '
        />
      </div>
      <div>
        <TitleComponent
          title={title}
          weight='font-semibold'
          textSize=''
          className='text-[20px] leading-[24.20px] sm:text-[22px] sm:leading-[26.63px] text-left break-words'
        />
        <TitleComponent
          title={subtitle}
          weight='font-normal'
          textSize=''
          className='text-[15px] leading-[18.15px] text-left break-words'
        />
      </div>
    </div>
  )
}

function HowItWorkVersion2({ className }: Props) {
  return (
    <div className={`flex flex-col justify-start items-start gap-4 sm:gap-10 px-4 sm:px-0 ${className}`}>
      {Data.map((item, idx) => (
        <TrustedByItem key={item._id} item={item} lastItem={idx >= 2} />
      ))}
    </div>
  )
}

export default HowItWorkVersion2
