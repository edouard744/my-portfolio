'use client'
import { useEffect } from 'react'
import { animate, stagger } from 'framer-motion'  // API imperative

export function AnimatedHero({ children }: React.PropsWithChildren) {
  useEffect(() => {
    animate(
      '.fade-up',                     
      { opacity: [0, 1], y: [20, 0] },     
      { duration: 0.6, delay: stagger(0.1) } 
    )
    animate('.fade-left', { opacity: [0, 1], x: [-20, 0] }, { duration: 0.6, delay: stagger(0.1) })
  }, [])

  return <>{children}</>
}