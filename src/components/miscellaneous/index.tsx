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
  <div className='flex justify-center'>
    <div className="flex flex-col items-center lg:max-w-[98vw] 2xl:max-w-[95vw]">{children}</div>
  </div>
)

// Title of each section with image representing the season and text that sits in the center of the image
export const SeasonImage = ({ backgroundImg, text }: { backgroundImg: string, text: string }) => (
  <div className="w-[100vw] relative">
    <Image src={backgroundImg} alt={text} />
    <h1 className='font-taiwan xl:text-[70px] 2xl:text-[96px] font-light leading-[106px] text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>{text}</h1>
  </div>
)

// White block with rounded corners where content sits
export const CardBlock = ({ children }: { children: React.ReactNode }) => (
<div className='xl:w-[980px] 2xl:w-[1280px] bg-white rounded-[20px] xl:py-[55px] xl:px-[65px] 2xl:py-[71px] 2xl:px-[80px] z-10 xl:-translate-y-[150px] 2xl:-translate-y-[260px]'>{children}</div>  
)

export const SeasonSection = ({ children, seasonImage, seasonText }: { children: React.ReactNode, seasonImage: string, seasonText: string }) => (
<div className='relative flex flex-col items-center xl:-translate-y-[120px] 2xl:-translate-y-[200px] z-40'>
  <SeasonImage backgroundImg={seasonImage} text={seasonText} />
  <CardBlock>
    {children}
  </CardBlock>
</div>
)