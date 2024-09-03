import { RefObject } from 'react'

export type ImageProps = {
  src: string
  alt: string
  className?: string
  'data-scroll'?: boolean
  'data-scroll-speed'?: string
  index?: number
}

export type LocomotiveScrollProps = {
  locoScrollRef: RefObject<HTMLElement>
  children: React.ReactNode
}

export type CustomLinkProps = {
  href: string
  className: string
  children: React.ReactNode
}

export type ButtonProps = {
  href: string
  text: string
  bgColor?: string
  textColor?: string
}

export type MotionImageProps = {
  src: string
  alt: string
  'data-sccroll'?: boolean
  'data-scroll-speed'?: string
  initial?: { opacity?: number, rotate?: string, scale?: number }
  whileInView?: { opacity?: number, rotate?: string, scale?: number }
  transition?: { duration: number; delay: number; ease: string }
  className?: string
  viewport?: { once: boolean }
}
