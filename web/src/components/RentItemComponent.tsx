import Button from '@core/components/button'
import TitleComponent from '@core/components/title'
import Image from 'next/image'
import React, { HTMLProps } from 'react'

export interface IRentItem {
  _id: string
  name: string
  price: string
  delivery_time: string
  mainImage: string
  images: string[]
}

interface Props {
  item: IRentItem
  className?: HTMLProps<HTMLElement>['className']
  isMobile: boolean
}

function RentItemComponent({ item, className, isMobile }: Props) {
  const RenderImage = ({ lastItem, src }: { src: string; lastItem: boolean }) => {
    return (
      <Image
        className={`select-none w-[95px] h-[65px] sm:w-[115px] sm:h-[85px] mb-3 ${lastItem ? 'mb-0' : 'mr-3'} lg:my-0 lg:mx-1`}
        src={src}
        alt='item rent reference'
        width={115}
        height={85}
        draggable={false}
      />
    )
  }

  return (
    <div className={className}>
      <div className={'flex flex-col items-start justify-center'}>
        <div className='flex items-start justify-center mb-3 sm:mb-0'>
          <Image
            src={item.mainImage}
            width={85}
            height={85}
            alt='customer review avatar'
            draggable={false}
            style={{
              objectPosition: 'center'
            }}
            className='select-none w-[100px] h-[74px] sm:w-[85px] sm:h-[85px]'
          />
          <div className={`flex flex-col justify-start items-start ${isMobile ? 'ml-4' : 'ml-8'}`}>
            <TitleComponent textSize='text-xl' weight='font-black' className='text-center' title={item.name} />
            <TitleComponent
              textSize='text-xl'
              className='text-center'
              weight='font-light'
              title={`${item.price} / ${item.delivery_time}`}
            />
          </div>
        </div>
        <div className={`flex lg:justify-between items-center flex-wrap ${isMobile ? 'my-2' : 'my-4'}`}>
          {item.images.map((_item, idx) => (
            <RenderImage key={`${item._id}_image_${idx}`} src={_item} lastItem={idx + 1 === item.images.length} />
          ))}
        </div>
        <Button
          className={`py-[8px] ${isMobile ? 'py-[5px]' : 'mt-2 border border-primary'} rounded-md w-[100%] hover:border-secondary`}
          weight='font-extrabold'
          textColor='text-primary'
          onClick={() => {}}
          label='Book Now'
        />
      </div>
    </div>
  )
}

export default RentItemComponent
