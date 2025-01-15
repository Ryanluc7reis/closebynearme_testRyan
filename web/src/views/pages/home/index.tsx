import Button from '@core/components/button'
import TitleComponent from '@core/components/title'
import Image from 'next/image'
import Link from 'next/link'
import React, { HTMLProps } from 'react'

interface Props {
  isMobile: boolean
  className?: HTMLProps<HTMLElement>['className']
}

function HomePage({ className, isMobile }: Props) {
  return (
    <div className={`flex items-start justify-center md:gap-36 mt-16 px-4 md:px-0 ${className}`}>
      <div>
        {isMobile ? (
          <div className='flex flex-col justify-center items-center w-full mb-20'>
            <div className='mb-14'>
              <TitleComponent
                title='Join Us In Close By Near Me!'
                weight='font-black'
                textSize=''
                className='text-[20px] leading-[24.2px]'
              />
              <TitleComponent
                title='Best place for you to vend & rent!'
                weight='font-normal'
                textSize=''
                className='text-[14px] leading-[16.94px] mt-7'
              />
            </div>
            <Image
              src='/assets/images/home_asset.png'
              alt='image asset'
              width={231}
              height={216}
              draggable={false}
              className='select-none'
            />
            <Button
              label='LIST AS VENDOR'
              onClick={() => {}}
              textSize=''
              color='bg-primary'
              weight='font-black'
              className='rounded-lg py-3 w-full mt-10'
              textClassName='text-[15px] leading-[18.15px]'
            />
            <Link href='/cities'>
              <Button
                label='EXPLORE AS RENTER'
                textSize=''
                onClick={() => {}}
                color='bg-primary'
                weight='font-black'
                className='rounded-lg py-3 w-full mt-4'
                textClassName='text-[15px] leading-[18.15px]'
              />
            </Link>
          </div>
        ) : (
          <div className='flex flex-col justify-start items-start w-full'>
            <div className='max-w-[541px]'>
              <TitleComponent
                title='Find Party Rentals'
                weight='font-normal'
                textSize=''
                className='text-left leading-[54.46px] text-[45px]'
              />
              <TitleComponent
                title='Close By Near Me!'
                weight='font-black'
                textSize=''
                className='text-left leading-[54.46px] text-[45px]'
              />
              <TitleComponent
                title='Best place for you to vend & rent!'
                weight='font-normal'
                textSize='text-2xl'
                color='text-primary'
                className='text-left leading-[36.31px] mt-4'
              />
              <Button
                label='LIST AS VENDOR'
                textSize=''
                onClick={() => {}}
                color='bg-primary'
                weight='font-black'
                className='py-5 w-full mt-10'
                textClassName='text-[30px] leading-[36.31px]'
              />
              <Link href='/cities'>
                <Button
                  label='EXPLORE AS RENTER'
                  onClick={() => {}}
                  color='bg-primary'
                  textSize=''
                  weight='font-black'
                  className='py-5 w-full mt-12'
                  textClassName='text-[30px] leading-[36.31px]'
                />
              </Link>
            </div>
            {!isMobile && (
              <p className='font-inter text-[25px] leading-[30.26px] font-normal w-full max-w-[668px] mt-16'>
                Close By Near Me is your ticket to turning any gathering into an unforgettable fiesta. With a few taps,
                you can rent everything from bounce houses to photo booths to tents, making party planning a breeze. Say
                goodbye to stress and hello to the ultimate celebration experience!
              </p>
            )}
          </div>
        )}
      </div>
      {!isMobile && (
        <div className='hidden md:block p-16'>
          <Image
            src='/assets/images/home_asset.png'
            alt='image asset'
            width={537}
            height={501}
            draggable={false}
            className='select-none'
          />
        </div>
      )}
    </div>
  )
}

export default HomePage
