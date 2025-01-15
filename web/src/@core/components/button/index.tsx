import { BGColorsType, FontFamily, FontSize, FontWeight, TextColorsType } from '@styles/interfaces'
import React, { HTMLProps } from 'react'

interface Props {
  disabled?: boolean
  color?: BGColorsType
  textColor?: TextColorsType
  className?: HTMLProps<HTMLElement>['className']
  textClassName?: HTMLProps<HTMLElement>['className']
  label: string
  onClick: () => void
  weight?: FontWeight
  fontFamily?: FontFamily
  textSize?: FontSize
  type?: 'submit' | 'reset' | 'button' | undefined
  iconLeft?: React.ReactNode | null
  iconRight?: React.ReactNode | null
}

function Button({
  className = '',
  textClassName = '',
  color,
  weight = 'font-normal',
  textSize = 'text-base',
  disabled,
  type,
  label,
  textColor,
  onClick,
  iconLeft,
  iconRight,
  fontFamily = 'font-inter'
}: Props) {
  return (
    <button
      className={`py-3 px-16 text-center rounded-2xl ${weight} ${color || ''} ${textColor || ''} hover:text-white hover:bg-secondary ${className}`}
      type={type || 'button'}
      disabled={disabled}
      onClick={onClick}
    >
      <div className={`flex justify-center items-center  ${textSize} ${fontFamily} ${textClassName} `}>
        {iconLeft ?? iconLeft}
        {label}
        {iconRight ?? iconRight}
      </div>
    </button>
  )
}

export default Button
