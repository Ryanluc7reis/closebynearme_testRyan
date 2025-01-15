import React, { HTMLProps } from 'react'

interface Props {
  className?: HTMLProps<HTMLElement>['className']
}

const CardComponent = ({ children, className }: React.PropsWithChildren<Props>) => {
  return <div className={`border py-6 sm:py-8 rounded-xl px-8 sm:px-16 shadow-lg ${className}`}>{children}</div>
}

export default CardComponent
