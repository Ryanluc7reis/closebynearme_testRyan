import React, { createContext, useContext, useMemo } from 'react'
import useMedia from 'use-media'

interface Props {
  children: React.ReactNode

  initialValues: typeof defaultProvider
}

const defaultProvider = {
  isMobile: false
}

export const MediaQueryContext = createContext(defaultProvider)

const mediaQueries = {
  mobile: '(max-width: 640px)'
}

export default function MediaQueryProvider({ children, initialValues }: Props) {
  const isMobile = useMedia(mediaQueries.mobile)

  const value = useMemo(
    () => ({
      isMobile: initialValues.isMobile || isMobile
    }),
    [isMobile, initialValues]
  )

  return <MediaQueryContext.Provider value={value}>{children}</MediaQueryContext.Provider>
}

export function useMediaQueryContext() {
  return useContext(MediaQueryContext)
}
