import { Inner, Image, SeasonSection, MotionImage } from "../../miscellaneous"

import backgroundImg from "../../../assets/images/sectTwo-bg.png"
import backgroundImgMobile from "../../../assets/images/secTwo-bg-mobile.png"

import image1 from "../../../assets/images/1.jpg"
import image2 from "../../../assets/images/2.jpg"
import image3 from "../../../assets/images/3.jpg"
import image4 from "../../../assets/images/4.jpg"
import image5 from "../../../assets/images/5.png"
import Introduction from "../../blocks/Introduction/index"

const SectionTwo: React.FC = () => {
  return (
    <section className="section-two bg-light-orange 2xl:h-[3000px] xl:h-[2300px]"> { /* Manually setting the height like this seems like a poor solution. Had to do this to avoid empty space down the bottom due to translate-y */}
      <Introduction />
      <Inner>
        <SeasonSection seasonImage={backgroundImg} seasonImageMobile={backgroundImgMobile} seasonText="Autumn">
          <div className="2xl:h-[1600px] xl:h-[1200px]">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:gap-[45px]">
              <Image src={image1} alt="sunset" className="2xl:w-auto lg:w-[55%]" />
              <p className="xl:mt-[38px] xl:mr-[40px] 2xl:mr-[103px] 2xl:text-[17px] xl:text-[13px] lg:text-[13px] 2xl:leading-[30px] xl:leading-[23px] lg:leading-[26px] font-[500]">
                September, October and November are a glorious time for nature lovers and photographers, as trees start to change colour from mid-September in northern Taiwan, with the orange wave rolling down the island over the next weeks.    Balmy temperatures and low humidity and rainfall are perfect for hiking, while further into the season you’ll find fewer tourists and shoulder-season hotel prices.
                <br />Two great ways see the autumn spectacle are by steam train on Alishan Forest Railway, or by hiking in Dasyueshan National Forest or Aowanda Forest Recreation Area, which is sumptuous with maples trees.
              </p>                  
            </div>
            <div className="flex flex-col lg:flex-row justify-between lg:items-start lg:mt-[40px] xl:mt-[35px] 2xl:mt-[50px] gap-[45px]">
              <p className="xl:ml-[60px] 2xl:text-[17px] xl:text-[13px] lg:text-[13px] 2xl:leading-[30px] xl:leading-[23px] lg:leading-[26px] font-[500]">
                Scenic spot Sun Moon Lake, crisscrossed with cycle and hiking paths, is particularly lovely in this season. November is the sweet spot for visiting hot-spring resorts before December crowds and price increases.
                <br />Meanwhile plenty of festivals provide cultural fun. Mid-Autumn Festival in September is celebrated by eating mooncakes, and Confucius’ Birthday brings liveliness to temples. October sees National Day parades, Pride Parade and Halloween events.
              </p>
              <Image src={image3} alt="tower" className="translate-y-[38px] lg:w-[49%]" />
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-end xl:mt-[55px] 2xl:mt-[28px] lg:-translate-y-[55px] xl:-translate-y-[102px]">
              <Image src={image2} alt="river" className="lg:w-[49%]" />
              <Image src={image4} alt="temples" className="lg:w-[49%]" />
            </div>
            <MotionImage src={image5} alt="bear cartoon" aria-label="bear" className="absolute xl:-right-[150px] 2xl:-right-[305px] -bottom-[40px] xl:w-[250px] 2xl:w-auto"
                    initial={{ opacity: 0, y: 20, scale: 1.2, rotate: "30deg"}}
                    whileInView={{ opacity: 1, y: 0, scale: 1, rotate: "0deg" }}
                    transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
                    viewport={{ once: true }}
              />
            </div>
        </SeasonSection>   
      </Inner>
    </section>
  )
}

export default SectionTwo
