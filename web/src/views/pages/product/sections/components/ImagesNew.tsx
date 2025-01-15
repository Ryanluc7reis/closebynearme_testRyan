import React, { HTMLProps } from 'react'
import 'photoswipe/dist/photoswipe.css'
import { Gallery } from 'react-photoswipe-gallery'
import { FindProductDetailsQuery } from '@graphql'
import ImagesComponent from './Images'

interface Props {
  data: FindProductDetailsQuery['findOneProductPopulate']
  className?: HTMLProps<HTMLElement>['className']
}

function GalleryImages({ data }: Props) {
  return (
    <Gallery id='product-gallery'>
      <ImagesComponent data={data} />
    </Gallery>
  )
}

export default GalleryImages
