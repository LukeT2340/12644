import { SeasonSection, Inner, Image } from "../../miscellaneous"
import backgroundImg from "../../../assets/images/secThree-bg.png"
import image6 from "../../../assets/images/6.jpg"
import image7 from "../../../assets/images/7.jpg"
import image8 from "../../../assets/images/8.jpg"
import image9 from "../../../assets/images/secThree-dec.png"
/*
  Section three images don't have rounded corners. Added rounded corners using CSS

*/

const SectionThree: React.FC = () => (
  <section className="section-three bg-purple 2xl:h-[2650px] xl:h-[2660px] relative"> { /* Manually setting the height like this seems like a poor solution. Had to do this to avoid empty space down the bottom due to translate-y */}
    <Inner>
      <SeasonSection seasonImage={backgroundImg} seasonText="Winter">
        <div className="2xl:h-[1820px] xl:h-[1840px] text-[17px] leading-[30px]">
          <div className="flex xl:flex-row justify-between xl:items-start gap-[45px]">
            <p className=" 2xl:ml-[70px] xl:ml-[40px] xl:mt-[38px]">
              Don’t rule out a December, January or February visit to Taiwan. Its climate is sub-tropical in the south, and winter is nowhere near as severe as in Japan. You’ll need some warm clothes, but days are pleasant.
              Sightseeing crowds dwindle and hotel prices drop, except over New Year’s Eve and Lunar (or Chinese) New Year, making this a great time to take in urban attractions such as museums and the wonderfully colourful Taiwan Lantern Festival, which will be held in Taoyuan in 2025.
            </p>
            <Image src={image6} alt="Lanten" className="rounded-[20px]" />
          </div>
          <div className="flex flex-col xl:flex-row justify-between xl:items-end xl:gap-[63px] xl:gap-[45px] items-end xl:-translate-y-[200px] xl:-translate-y-[270px]">
            <Image src={image7} alt="Lanten" className="rounded-[20px]" />
            <p className="2xl:mr-[69px] xl:mr-[65px] 2xl:mb-[74px] xl:mb-[30px] p-0">
              In the high mountains, such as at Hehuanshan, you can enjoy the snow. Taiwan has abundant hot springs, most notably at Beitou near Taipei and Guguan near Taichung. <br />The island’s tea and coffee plantations mean a good cuppa is always on hand. This is also a great season to take your tastebuds on tour – warming beef noodle soup is considered a national dish, but you can also tuck into fish congee, oyster omelette, slow-roasted duck, xiao long bao (soup dumplings) and much more.
            </p>
          </div>
          <Image src={image8} alt="dumplings" className="rounded-[20px] xl:-translate-y-[200px] xl:-translate-y-[270px] mt-[20px] w-full" />
        </div>
      </SeasonSection>
    </Inner>
    <Image src={image9} alt="bear cartoon" aria-label="bear" className="absolute xl:-left-[80px] 2xl:bottom-[200px] xl:bottom-[400px] z-40 2xl:w-auto w-[350px]" />
  </section>
)

export default SectionThree
