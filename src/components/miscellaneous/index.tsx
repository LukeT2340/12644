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
  <div className={`${text === "Winter" ? "w-[101vw]": "w-[100vw]"} relative`}>
    <Image src={backgroundImg} alt={text} className={`${text === "Winter" ? "w-[101vw]": "w-[100vw]"}`}/>
    <h1 className='font-taiwan lg:text-[96px] text-[48px] leading-[106px] text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>{text}</h1>
  </div>
)

// White block with rounded corners where content sits
export const CardBlock = ({ children }: { children: React.ReactNode }) => (
<div className='lg:w-[980px] xl:w-[1280px] bg-white rounded-[20px] 2xl:py-[71px] xl:py-[55px] md:py-[45px] 2xl:px-[80px] xl:px-[65px] md:px-[55px] z-10 lg:-translate-y-[100px] xl:-translate-y-[150px] 2xl:-translate-y-[260px]'>{children}</div>  
)

export const SeasonSection = ({ children, seasonImage, seasonImageMobile , seasonText }: { children: React.ReactNode, seasonImage: string, seasonImageMobile: string, seasonText: string }) => (
<div className='relative flex flex-col items-center lg:-translate-y-[105px] xl:-translate-y-[120px] 2xl:-translate-y-[200px] z-40'>
  <div className='md:block hidden'>
    <SeasonImage backgroundImg={seasonImage} text={seasonText} />
  </div>
  <div className='md:hidden block'>
    <SeasonImage backgroundImg={seasonImageMobile} text={seasonText} />
  </div>
  <CardBlock>
    {children}
  </CardBlock>
</div>
)

export const Link = ({ icon, alt ,text, href, className }: { icon: string, alt: string , text: string, href: string, className?: string }) => (
  <li className={`hover:cursor-pointer hover:opacity-80 flex text-[17px] font-bold items-center justify-start ${className ? className : ''}`}>
    <Image src={icon} alt={alt} className={`${alt === "Facebook icon" ? 'w-[17px] ml-[6.5px] mr-[22.5px]' : 'w-[30px] mr-[16px]' } object-contain`}/>
    <a href={href} >{text}</a>
  </li>
)