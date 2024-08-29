import { motion } from 'framer-motion'
import { ImageProps, CustomLinkProps, ButtonProps, MotionImageProps } from '../../types'

export const Image: React.FC<ImageProps> = (props) => {
  return <img {...props} />
}

export const CustomLink = ({ href, className = '', children }: CustomLinkProps) => {
  return (
    <>
      {' '}
      <a href={href} className={className} target="_blank" rel="sponsored noopener noreferrer">
        {children}
      </a>{' '}
    </>
  )
}

export const MotionImage: React.FC<MotionImageProps> = (props) => <motion.img {...props} />

export const Button: React.FC<ButtonProps> = ({
  href,
  text,
  bgColor = 'black',
  textColor = 'white',
}) => {
  return (
    <a
      href={href}
      className={`mb:w-[240px] max-w-[200px] py-4 px-4 ${bgColor} hover:opacity-90 ${textColor} z-10 font-bold text-center block sm:ml-0 mx-auto`}
      target="_blank"
      rel="sponsored noopener noreferrer">
      <p className="inline sm:text-24 uppercase">{text}</p>
    </a>
  )
}

export const Inner = ({ children }: { children: React.ReactNode }) => (
  <div className="lg:max-w-[98vw] 2xl:max-w-[95vw] px-[20px] lg:px-0">{children}</div>
)

export const ImageWithText = ({ backgroundImg, text }: { backgroundImg: string, text: string }) => {
  return (
    <div className="w-[100vw] relative">
      <Image src={backgroundImg} alt={text} />
      <h1 className='font-taiwan text-[96px] font-[500] leading-[106px] text-white absolute top-1/2 left-1/2 -translate-x-1/2 -tanslate-y-1/2'>{text}</h1>
    </div>
  )
}

export const CardBlock = ({ children }: { children: React.ReactNode }) => (
  <div className="lg:w-[1280px] bg-white rounded-[20px] py-[71px] px-[80px] -translate-y-[220px] relative">{children}</div>
)