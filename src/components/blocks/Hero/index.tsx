import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'

const Hero: React.FC = () => {
  const mobile = useMediaQuery({ maxWidth: 1023 })

  return (
    <section className="hero relative h-screen ">
      <div className="block-heading h-full w-full flex flex-col items-center justify-center text-center font-taiwan uppercase">
        <motion.span
          className="text-bright-orange block lg:text-[74px] text-[38px] pb-[20px]"
          initial={{ opacity: 0, y: 20, letterSpacing: mobile ? `0px` : `10px` }}
          whileInView={{ opacity: 1, y: 0, letterSpacing: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}>
          a year-round
        </motion.span>
        <motion.h1
          className="lg:text-[112px] text-[59px] text-white leading-none "
          initial={{ opacity: 0, y: 20, letterSpacing: mobile ? `0px` : `15px` }}
          whileInView={{ opacity: 1, y: 0, letterSpacing: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}>
          guide to taiwan
        </motion.h1>
      </div>
    </section>
  )
}

export default Hero