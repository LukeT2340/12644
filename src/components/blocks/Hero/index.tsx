import { motion } from 'framer-motion'

const Hero: React.FC = () => (
  <section className="hero relative h-screen ">
    <div className="block-heading h-full w-full flex flex-col items-center justify-center text-center font-taiwan">
      <motion.span
        className="text-bright-orange block md:text-[40px] xl:text-[65px] 2xl:text-[72px] pb-[20px]"
        initial={{ opacity: 0, y: 20, letterSpacing: '10px' }}
        whileInView={{ opacity: 1, y: 0, letterSpacing: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}>
        A year-round
      </motion.span>
      <motion.h1
        className="md:text-[65px] xl:text-[98px] 2xl:text-[112px] text-white leading-none "
        initial={{ opacity: 0, y: 20, letterSpacing: '15px' }}
        whileInView={{ opacity: 1, y: 0, letterSpacing: 0 }}
        transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}>
        guide  to TAIWAN
      </motion.h1>
    </div>
  </section>
)

export default Hero
