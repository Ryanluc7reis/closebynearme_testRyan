import React, { HTMLProps } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

interface Props {
  data: any[]
  Component: (data: any) => React.ReactNode
  className?: HTMLProps<HTMLElement>['className']
}

function SwiperComponent({ Component, data, className }: Props) {
  return (
    <Swiper pagination={true} modules={[Pagination]} className={className} fadeEffect={{ crossFade: true }}>
      {data.map((item) => (
        <SwiperSlide key={item._id}>
          <Component item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
export default SwiperComponent
