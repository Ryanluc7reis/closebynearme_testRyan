import { FindProductDetailsQuery } from '@graphql'
import Image from 'next/image'
import React, { HTMLProps, useMemo } from 'react'
import { Item } from 'react-photoswipe-gallery'

interface Props {
  data: FindProductDetailsQuery['findOneProductPopulate']
  className?: HTMLProps<HTMLElement>['className']
}
const sizes = [
  {
    rounded: 'rounded-tl-3xl rounded-bl-3xl w-full h-full',
    width: 617,
    height: 450
  },
  {
    rounded: 'h-[81px] rounded-tr-3xl  sm:rounded-tr-none sm:w-full sm:h-full',
    width: 320,
    height: 220
  },
  {
    rounded: 'h-[81px] rounded-br-3xl sm:rounded-br-none sm:rounded-tr-3xl sm:w-full sm:h-full',
    width: 320,
    height: 220
  },
  {
    rounded: 'w-full h-full',
    width: 320,
    height: 220
  },
  {
    rounded: 'w-full h-full rounded-br-3xl',
    width: 320,
    height: 220
  }
]

interface IProps {
  src: string
  idx: number
}

const ImageRender = ({ src, idx }: IProps) => {
  const styles = sizes[idx]

  return (
    <Item original={src} thumbnail={src} width='1024' height='768'>
      {({ ref, open }) => (
        <Image
          ref={ref}
          onClick={open}
          src={src}
          alt='image'
          width={styles.width}
          height={styles.height}
          draggable={false}
          style={{
            objectFit: 'fill',
            objectPosition: 'center'
          }}
          className={`select-none ${styles.rounded}`}
        />
      )}
    </Item>
  )
}

function ImagesComponent({ data, className = '' }: Props) {
  const images = useMemo(() => {
    if (data.images.length >= 5) {
      return data.images.slice(0, 5)
    } else {
      return data.images
    }
  }, [data.images])

  if (images.length === 0) {
    return null
  }

  return (
    <div className={`grid grid-cols-2 gap-2 ${className}`}>
      <div className='row-span-1 col-span-1 h-[166px] sm:h-[547px]'>
        <div className='h-full '>{images.length > 0 && <ImageRender src={images[0]} idx={0} />}</div>
      </div>
      <div className='row-span-1 col-span-1'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
          <div className='h-full row-span-0 sm:row-span-6'>
            {images.length > 1 && <ImageRender src={images[1]} idx={1} />}
          </div>
          <div className='h-full sm:row-span-6'>{images.length > 2 && <ImageRender src={images[2]} idx={2} />}</div>
          <div className='hidden sm:block h-full sm:row-span-6'>
            {images.length > 3 && <ImageRender src={images[3]} idx={3} />}
          </div>
          <div className='hidden sm:block h-full sm:row-span-6'>
            {images.length > 4 && <ImageRender src={images[4]} idx={4} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImagesComponent
