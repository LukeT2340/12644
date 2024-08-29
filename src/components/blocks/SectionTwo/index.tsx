import { Inner, ImageWithText, Image, CardBlock, MotionImage } from "../../miscellaneous"

import backgroundImg from "../../../assets/images/sectTwo-bg.png"
import image1 from "../../../assets/images/1.jpg"
import image2 from "../../../assets/images/2.jpg"
import image3 from "../../../assets/images/3.jpg"
import image4 from "../../../assets/images/4.jpg"
import image5 from "../../../assets/images/5.png"
import image6 from "../../../assets/images/secTwo-dec.png"

const SectionTwo: React.FC = () => {
  return (
    <section className="section-two bg-light-orange">
      <Inner>
        <ImageWithText 
          backgroundImg={image6} 
          text1="Wondering when the best time is to visit Taiwan?" 
          text2="Take your pick: Taiwan offers unique experiences for visitors year-round. If you’ve been before, you’ll find variety and new experiences in other seasons. And if you’re a first timer, you’ll discover more to Taiwan than you ever imagined."
          variant="a"
        />
        <div className="-translate-y-[200px]">
          <ImageWithText backgroundImg={backgroundImg} text1="Autumn" variant='b' />
          <div className="flex justify-center xl:h-[1820px]">
            <CardBlock height="1820px">
              <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-[45px]">
                <Image src={image1} alt="sunset"/>
                <div className="translate-y-[38px] lg:mr-[115px] font-[17px] leading-[30px] font-[500]">
                  <p>September, October and November are a glorious time for nature lovers and photographers, as trees start to change colour from mid-September in northern Taiwan, with the orange wave rolling down the island over the next weeks.</p>
                  <p> Balmy temperatures and low humidity and rainfall are perfect for hiking, while further into the season you’ll find fewer tourists and shoulder-season hotel prices.</p>
                  <p>Two great ways see the autumn spectacle are by steam train on Alishan Forest Railway, or by hiking in Dasyueshan National Forest or Aowanda Forest Recreation Area, which is sumptuous with maples trees.</p>                  
                </div>
              </div>
              <div className="flex flex-col lg:flex-row justify-between lg:items-start mt-[50px] gap-[45px]">
                <div className="lg:ml-[115px] font-[17px] leading-[30px] font-[500]">
                  <p>Scenic spot Sun Moon Lake, crisscrossed with cycle and hiking paths, is particularly lovely in this season. November is the sweet spot for visiting hot-spring resorts before December crowds and price increases. </p>
                  <p>Meanwhile plenty of festivals provide cultural fun. Mid-Autumn Festival in September is celebrated by eating mooncakes, and Confucius’ Birthday brings liveliness to temples. October sees National Day parades, Pride Parade and Halloween events.</p>
                </div>
                <Image src={image3} alt="tower" className="translate-y-[38px]" />
              </div>
              <div className="flex flex-col lg:flex-row justify-between lg:items-end mt-[80px] -translate-y-[102px]">
                <Image src={image2} alt="river" />
                <Image src={image4} alt="temples" />
              </div>
              <MotionImage src={image5} alt="bear cartoon" aria-label="bear" className="absolute -right-[305px] -bottom-[40px]"
                      initial={{ opacity: 0, y: 20, scale: 1.2, rotate: "30deg"}}
                      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: "0deg" }}
                      transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
                      viewport={{ once: true }}
                />
            </CardBlock>   
          </div>  
        </div>
      </Inner>
    </section>
  )
}

export default SectionTwo
