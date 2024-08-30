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
  <div className="lg:max-w-[98vw] 2xl:max-w-[95vw] lg:px-0 xl:-translate-y-[130px] 2xl:-translate-y-[220px]">{children}</div>
)

export const ImageWithText = ({ backgroundImg, text1, text2, variant }: { backgroundImg: string, text1: string, text2?: string, variant: string }) => {
    return variant === 'a' ?
      <div className="flex justify-center -translate-y-[15px] relative">
        <div className='flex flex-col align-center xl:w-[600px] 2xl:w-[800px] bg-bright-orange text-center xl:text-[13px] xl:leading-[23px] 2xl:text-[17px] 2xl:leading-[30px] text-white xl:py-[130px] 2xl:py-[200px] '>
          <Image 
            src={backgroundImg} 
            alt={text1} 
            className='absolute left-1/2 -translate-x-[50%] 2xl:-top-[250px] xl:-top-[170px] xl:w-[300px] 2xl:w-auto'
          />
          <p className='font-bold px-[60px] p-0'>{text1}</p>
          <p className='2xl:px-[100px] xl:px-[50px] font-[500] p-0'>{text2}</p>
        </div>
      </div>
    : 
      <div className="w-[100vw] relative">
        <Image src={backgroundImg} alt={text1} className='w-[100vw]'/>
        <h1 className='font-taiwan xl:text-[80px] 2xl:text-[96px] font-light leading-[106px] text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>{text1}</h1>
      </div>
}

// White block with rounded corners where content sits
export const CardBlock = ({ children }: { children: React.ReactNode }) => (
  <div className={`xl:w-[980px] 2xl:w-[1280px] bg-white rounded-[20px] px-[30px] py-[30px] xl:py-[60px] xl:px-[65px] 2xl:py-[71px] 2xl:px-[80px] relative`}>{children}</div>  
)
