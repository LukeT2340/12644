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
  <div className="lg:max-w-[98vw] 2xl:max-w-[95vw] lg:px-0">{children}</div>
)

export const ImageWithText = ({ backgroundImg, text1, text2, variant }: { backgroundImg: string, text1: string, text2?: string, variant: string }) => {
    return variant === 'a' ?
      <div className="flex justify-center -translate-y-[15px] relative">
        <div className='flex flex-col align-center lg:w-[786px] bg-bright-orange text-center text-[17px] leading-[30px] text-white lg:px-[96px] py-[200px] '>
          {/* <MotionImage 
            src={backgroundImg} 
            alt={text1} 
            className='absolute left-1/2 -translate-x-[50%] -top-[250px]'
            initial={{ opacity: 0, y: 20, scale: 1.2, rotate: "30deg"}}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: "0deg" }}
            transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
          /> */}
          <Image 
            src={backgroundImg} 
            alt={text1} 
            className='absolute left-1/2 -translate-x-[50%] -top-[250px]'
          />
          <p className='font-bold p-0'>{text1}</p>
          <p className='p-0 font-[500]'>{text2}</p>
        </div>
      </div>
    : 
      <div className="w-[100vw] relative">
        <Image src={backgroundImg} alt={text1} />
        <h1 className='font-taiwan text-[96px] font-[500] leading-[106px] text-white absolute top-1/2 left-1/2 -translate-x-1/2 -tanslate-y-1/2'>{text1}</h1>
      </div>
}

export const CardBlock = ({ children }: { children: React.ReactNode }) => (
  <div className={`lg:w-[1280px] bg-white rounded-[20px] px-[30px] py-[30px] lg:py-[71px] lg:px-[80px] -top-[200px] relative`}>{children}</div>  
)