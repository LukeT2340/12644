import { motion } from 'framer-motion'

const Hero: React.FC = () => (
  <section className="hero relative h-screen bg-blue-500">
    <div className="block-heading h-full w-full flex items-center justify-center">
      <motion.h1
        className="text-[2rem] lg:text-[5.4rem] text-white leading-normal text-center font-taiwan uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: 'linear' }}>
        a year round guide to taiwan
      </motion.h1>
    </div>
  </section>
)

export default Hero
