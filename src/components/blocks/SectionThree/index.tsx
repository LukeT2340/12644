import { SeasonSection, Inner, Image, MotionImage } from "../../miscellaneous"
import backgroundImg from "../../../assets/images/secThree-bg.png"
import image6 from "../../../assets/images/6.jpg"
import image7 from "../../../assets/images/7.jpg"
import image8 from "../../../assets/images/8.jpg"
import image9 from "../../../assets/images/secThree-dec.png"
import { motion } from "framer-motion"
/*
  Section three images don't have rounded corners. Added rounded corners using CSS

*/

const SectionThree: React.FC = () => (
  <section className="section-three bg-purple 2xl:h-[2650px] xl:h-[2660px] relative"> { /* Manually setting the height like this seems like a poor solution. Had to do this to avoid empty space down the bottom due to translate-y */}
    <Inner>
      <SeasonSection seasonImage={backgroundImg} seasonText="Winter">
        <div className="2xl:h-[1820px] xl:h-[1840px]  ">
          <div className="flex xl:flex-row justify-end xl:items-start gap-[45px]">
            <motion.div
                  className="xl:max-w-[402px] xl:mt-[40px]"
                  initial={{ opacity: 0.5, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}>
              <p>
                Don’t rule out a December, January or February visit to Taiwan. Its climate is sub-tropical in the south, and winter is nowhere near as severe as in Japan. You’ll need some warm clothes, but days are pleasant.
              </p>
              <p>
                Sightseeing crowds dwindle and hotel prices drop, except over New Year’s Eve and Lunar (or Chinese) New Year, making this a great time to take in urban attractions such as museums and the wonderfully colourful Taiwan Lantern Festival, which will be held in Taoyuan in 2025.
              </p>
            </motion.div>
            <div className="overflow-hidden rounded-[20px]">
              <Image src={image6} alt="Lanten" data-scroll data-scroll-speed="-.05" className="rounded-[20px]" />
            </div>
          </div>
          <div className="flex flex-col xl:flex-row justify-start xl:gap-[45px] items-end xl:-translate-y-[270px]">
            <div className="overflow-hidden rounded-[20px]">
              <Image src={image7} alt="Lanten" data-scroll data-scroll-speed="-.05" className="rounded-[20px]" />
            </div>
            <motion.div
                  className="xl:max-w-[402px]"
                  initial={{ opacity: 0.5, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}>
              <p>
                In the high mountains, such as at Hehuanshan, you can enjoy the snow. Taiwan has abundant hot springs, most notably at Beitou near Taipei and Guguan near Taichung.
              </p>
              <p>
              The island’s tea and coffee plantations mean a good cuppa is always on hand. This is also a great season to take your tastebuds on tour – warming beef noodle soup is considered a national dish, but you can also tuck into fish congee, oyster omelette, slow-roasted duck, xiao long bao (soup dumplings) and much more.
              </p>
            </motion.div>
          </div>
          <div className="overflow-hidden rounded-[20px] xl:-translate-y-[270px] mt-[20px] w-full">
            <Image src={image8} alt="dumplings" data-scroll data-scroll-speed="-.05"  className="rounded-[20px]" />
          </div>
        </div>
      </SeasonSection>
    </Inner>
    <MotionImage src={image9} alt="bear cartoon" aria-label="bear" className="absolute xl:-left-[80px] 2xl:bottom-[200px] xl:bottom-[400px] z-40 2xl:w-auto w-[350px]"
                      initial={{ rotate: "30deg"}}
                      whileInView={{ rotate: "0deg" }}
                      transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
                      viewport={{ once: true }}
    />
  </section>
)

export default SectionThree
