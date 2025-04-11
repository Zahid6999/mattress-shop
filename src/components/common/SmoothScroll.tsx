'use client'
import { ReactLenis } from 'lenis/react'
import { ReactNode } from 'react'

interface SmoothScrollingProps {
  children: ReactNode
}

const SmoothScrollProvider = ({ children }: Readonly<SmoothScrollingProps>) => {
  return (
    <ReactLenis root options={{ duration: 1.3 }}>
      {children}
    </ReactLenis>
  )
}

export default SmoothScrollProvider
