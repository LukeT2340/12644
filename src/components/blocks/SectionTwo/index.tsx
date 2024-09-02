import { Inner, Image, SeasonSection, MotionImage } from "../../miscellaneous"

import backgroundImg from "../../../assets/images/sectTwo-bg.png"
import backgroundImgMobile from "../../../assets/images/secTwo-bg-mobile.jpg"

import image1 from "../../../assets/images/1.jpg"
import image2 from "../../../assets/images/2.jpg"
import image3 from "../../../assets/images/3.jpg"
import image4 from "../../../assets/images/4.jpg"
import image5 from "../../../assets/images/5.png"
import Introduction from "../../blocks/Introduction/index"

const SectionTwo: React.FC = () => {
  return (
    <section className="section-two 2xl:h-[3000px] xl:h-[2700px]"> { /* Manually setting the height like this seems like a poor solution. Had to do this to avoid empty space down the bottom due to translate-y */}
      <Introduction />
      <div className="bg-light-orange">
        <Inner>
          <SeasonSection seasonImage={backgroundImg} seasonImageMobile={backgroundImgMobile} seasonText="Autumn">
            <div className="xl:h-[1580px] text-[17px] leading-[30px]">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:gap-[45px]">
                <Image src={image1} alt="sunset" />
                <div className="xl:mr-[110px]">
                  <p>
                    September, October and November are a glorious time for nature lovers and photographers, as trees start to change colour from mid-September in northern Taiwan, with the orange wave rolling down the island over the next weeks.
                  </p>
                  <p>
                    Balmy temperatures and low humidity and rainfall are perfect for hiking, while further into the season you’ll find fewer tourists and shoulder-season hotel prices.
                  </p>
                  <p>
                    Two great ways see the autumn spectacle are by steam train on Alishan Forest Railway, or by hiking in Dasyueshan National Forest or Aowanda Forest Recreation Area, which is sumptuous with maples trees.
                  </p>     
                </div>             
              </div>
              <div className="flex flex-col lg:flex-row justify-between lg:items-start gap-[45px]">
                <div className="xl:ml-[125px] xl:mb-[100px]">
                  <p>
                    Scenic spot Sun Moon Lake, crisscrossed with cycle and hiking paths, is particularly lovely in this season. November is the sweet spot for visiting hot-spring resorts before December crowds and price increases.
                  </p>  
                  <p>
                    Meanwhile plenty of festivals provide cultural fun. Mid-Autumn Festival in September is celebrated by eating mooncakes, and Confucius’ Birthday brings liveliness to temples. October sees National Day parades, Pride Parade and Halloween events.
                  </p>
                </div>
                <Image src={image3} alt="tower" className="translate-y-[55px] lg:w-[49%]" />
              </div>
              <div className="flex flex-col lg:flex-row justify-between items-end xl:mt-[55px] lg:-translate-y-[55px] xl:-translate-y-[145px]">
                <Image src={image2} alt="river" className="lg:w-[49%]" />
                <Image src={image4} alt="temples" className="lg:w-[49%]" />
              </div>
              <MotionImage src={image5} alt="bear cartoon" aria-label="bear" className="absolute 2xl:-right-[305px] lg:-right-0 lg:bottom-0 2xl:-bottom-[40px] 2xl:w-auto xl:w-[250px] lg:w-[220px]"
                      initial={{ opacity: 0, y: 20, scale: 1.2, rotate: "30deg"}}
                      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: "0deg" }}
                      transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
                      viewport={{ once: true }}
                />
              </div>
          </SeasonSection>   
        </Inner>
      </div>
    </section>
  )
}

export default SectionTwo
