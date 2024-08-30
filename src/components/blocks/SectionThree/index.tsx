import { CardBlock, ImageWithText, Inner, Image, MotionImage } from "../../miscellaneous"
import backgroundImg from "../../../assets/images/secThree-bg.png"
import image6 from "../../../assets/images/6.jpg"
import image7 from "../../../assets/images/7.jpg"
import image8 from "../../../assets/images/8.jpg"
import image9 from "../../../assets/images/secThree-dec.png"
/*
  Section three images don't have rounded corners. Added rounded corners using CSS

*/

const SectionThree: React.FC = () => (
  <section className="section-three bg-purple">
    <Inner>
      <div className="-translate-y-[200px]">
          <ImageWithText backgroundImg={backgroundImg} text1="Winter" variant='b' />
          <div className="flex justify-center xl:h-[1950px]">
            <CardBlock>
              <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-[45px]">
                <p className="font-[17px] leading-[30px] lg:ml-[75px] lg:mt-[38px] font-[500]">
                  Don’t rule out a December, January or February visit to Taiwan. Its climate is sub-tropical in the south, and winter is nowhere near as severe as in Japan. You’ll need some warm clothes, but days are pleasant.
                  Sightseeing crowds dwindle and hotel prices drop, except over New Year’s Eve and Lunar (or Chinese) New Year, making this a great time to take in urban attractions such as museums and the wonderfully colourful Taiwan Lantern Festival, which will be held in Taoyuan in 2025.
                </p>
                <Image src={image6} alt="Lanten" className="rounded-[20px]" />
              </div>
              <div className="flex flex-col lg:flex-row justify-between lg:items-end gap-[63px] items-end lg:-translate-y-[270px]">
                <Image src={image7} alt="Lanten" className="rounded-[20px]" />
                <p className="font-[17px] leading-[30px] font-[500] mr-[65px]">
                  In the high mountains, such as at Hehuanshan, you can enjoy the snow. Taiwan has abundant hot springs, most notably at Beitou near Taipei and Guguan near Taichung. <br />The island’s tea and coffee plantations mean a good cuppa is always on hand. This is also a great season to take your tastebuds on tour – warming beef noodle soup is considered a national dish, but you can also tuck into fish congee, oyster omelette, slow-roasted duck, xiao long bao (soup dumplings) and much more.
                </p>
              </div>
              <Image src={image8} alt="dumplings" className="rounded-[20px] lg:-translate-y-[270px] mt-[20px] w-full" />
              <Image src={image9} alt="bear cartoon" aria-label="bear" className="absolute -left-[305px] bottom-[150px]" />
            </CardBlock>   
          </div>  
        </div>
    </Inner>
  </section>
)

export default SectionThree
