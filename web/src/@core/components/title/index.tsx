import { TextColorsType, FontSize, FontWeight, FontFamily } from '@styles/interfaces'
import React, { HTMLProps } from 'react'

interface Props {
  title: string
  weight?: FontWeight
  className?: HTMLProps<HTMLElement>['className']
  color?: string | TextColorsType
  fontFamily?: FontFamily
  textSize?: FontSize
}

function TitleComponent({
  title = 'Default Text',
  className = '',
  color = 'text-text',
  textSize = 'text-base',
  weight = 'font-normal',
  fontFamily = 'font-inter'
}: Props) {
  return <h1 className={`${color} ${textSize} ${weight} ${fontFamily} ${className}`}>{title}</h1>
}

export default TitleComponent
