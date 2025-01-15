import Button from '@core/components/button'
import TitleComponent from '@core/components/title'
import { StatusAllowed, useFindLocationsQuery } from '@graphql'
import Image from 'next/image'
import Link from 'next/link'
import React, { HTMLProps } from 'react'

interface Props {
  className?: HTMLProps<HTMLElement>['className']
  isMobile: boolean
}

function FooterSection({ className, isMobile }: Props) {
  const { data } = useFindLocationsQuery({
    variables: {
      search: {
        page: 1,
        perPage: 20,
        status: StatusAllowed.Active
      }
    }
  })

  if (isMobile) {
    return (
      <div className='container mx-auto px-5 mt-5 bg-primary py-4 mb-28'>
        <TitleComponent weight='font-black' color='text-white' textSize='text-xl' title='View Other Cities' />

        <div className='overflow-x-scroll flex flex-row justify-start items-start mt-3'>
          {data?.findLocations.docs.map((item) => (
            <Link key={`footer-${item._id}`} href={`/city/${item.slug}`}>
              <div className='w-[124px] mr-4'>
                {item.image ? (
                  <Image
                    width={124}
                    height={107}
                    alt='location ref image'
                    src={item.image}
                    style={{ objectFit: 'fill' }}
                    className='select-none h-[107px]'
                    draggable={false}
                  />
                ) : (
                  <div className={`rounded-lg w-[124px] h-[107px]  text-center bg-[#EDF6FF] relative`}>
                    <TitleComponent
                      textSize=''
                      weight='font-bold'
                      className='text-[30px] sm:text-[40px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'
                      title={item.name[0].toUpperCase()}
                    />
                  </div>
                )}
                <TitleComponent
                  className='mt-2 text-white hover:text-black text-center'
                  weight='font-medium'
                  title={item.name}
                />
              </div>
            </Link>
          ))}
        </div>

        <div className='flex flex-col items-center justify-center gap-5 my-8'>
          <TitleComponent
            title='Explore more cities'
            textSize=''
            weight='font-medium'
            className='leading-[18.15px] text-center text-[15px]'
          />
          <Link href='/cities'>
            <Button
              onClick={() => {}}
              label='Show more'
              textSize=''
              color='bg-text'
              className='rounded-md'
              textColor='text-background'
              textClassName='text-[15px] leading-[18.15px]'
              weight='font-semibold'
            />
          </Link>
        </div>
        <TitleComponent
          color='text-black'
          className='text-[12px] leading-[14.52px] text-center mt-5 lg:mt-10'
          textSize=''
          weight='font-normal'
          title='Copyright 2024. Close By Near Me. All rights reserved.'
        />
        <Image src='/assets/images/credit-card.png' width={400} height={50} alt='credit card info' />
      </div>
    )
  }

  return (
    <div className={`bg-primary w-auto py-12 mt-36 ${className}`}>
      <div className='container mx-auto px-10 xl:px-4'>
        <TitleComponent weight='font-black' textSize='text-2xl' className='lg:text-5xl' title={`View Other Cities`} />
        <div className='grid grid-cols-5 gap-10 mt-5 md:mt-10'>
          {data?.findLocations.docs.map((item) => (
            <Link key={`footer-${item._id}`} href={`/city/${item.slug}`}>
              <TitleComponent
                className='py-8 text-left text-white hover:text-black'
                textSize='text-3xl'
                weight='font-medium'
                title={item.name}
              />
            </Link>
          ))}
        </div>

        <div className='flex flex-col items-center justify-center gap-5 my-8'>
          <TitleComponent
            title='Explore more cities'
            textSize=''
            weight='font-medium'
            className='leading-[29.05px] text-center text-[24px]'
          />
          <Link href='/cities'>
            <Button
              onClick={() => {}}
              label='Show more'
              textSize=''
              color='bg-text'
              className='rounded-md'
              textColor='text-background'
              textClassName='text-[22px] leading-[26.63px]'
              weight='font-semibold'
            />
          </Link>
        </div>
        <div className='flex items-center justify-between'>
          <TitleComponent
            color='text-black'
            textSize='text-xl'
            className='mt-5 lg:mt-10'
            weight='font-normal'
            title='Copyright 2024. Close By Near Me. All rights reserved.'
          />
          <Image src='/assets/images/credit-card.png' width={400} height={50} alt='credit card info' />
        </div>
      </div>
    </div>
  )
}

export default FooterSection
