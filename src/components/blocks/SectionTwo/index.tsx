import { Inner, ImageWithText, Image, CardBlock } from "../../miscellaneous"

import backgroundImg from "../../../assets/images/sectTwo-bg.png"
import image1 from "../../../assets/images/1.jpg"
import image2 from "../../../assets/images/2.jpg"
import image3 from "../../../assets/images/3.jpg"
import image4 from "../../../assets/images/4.jpg"
import image5 from "../../../assets/images/5.png"

const SectionTwo: React.FC = () => {
  return (
    <section className="section-two bg-light-orange">
      {/* Big hero image block here */}
      <Inner>
        <ImageWithText backgroundImg={backgroundImg} text="Autumn" />
        <div className="flex justify-center">
          <CardBlock>
            <div className="flex justify-between items-start gap-[45px]">
              <Image src={image1} alt="sunset"/>
              <div className="translate-y-[38px] lg:mr-[115px] font-[17px] leading-[30px]">
                <p>September, October and November are a glorious time for nature lovers and photographers, as trees start to change colour from mid-September in northern Taiwan, with the orange wave rolling down the island over the next weeks.</p>
                <p> Balmy temperatures and low humidity and rainfall are perfect for hiking, while further into the season you’ll find fewer tourists and shoulder-season hotel prices.</p>
                <p>Two great ways see the autumn spectacle are by steam train on Alishan Forest Railway, or by hiking in Dasyueshan National Forest or Aowanda Forest Recreation Area, which is sumptuous with maples trees.</p>                  
              </div>
            </div>
            <div className="flex justify-between items-start mt-[50px] gap-[45px]">
              <div className="lg:ml-[115px] font-[17px] leading-[30px]">
                <p>Scenic spot Sun Moon Lake, crisscrossed with cycle and hiking paths, is particularly lovely in this season. November is the sweet spot for visiting hot-spring resorts before December crowds and price increases. </p>
                <p>Meanwhile plenty of festivals provide cultural fun. Mid-Autumn Festival in September is celebrated by eating mooncakes, and Confucius’ Birthday brings liveliness to temples. October sees National Day parades, Pride Parade and Halloween events.</p>
              </div>
              <Image src={image3} alt="tower" className="translate-y-[38px]" />
            </div>
            <div className="flex justify-between items-end mt-[80px] -translate-y-[102px]">
              <Image src={image2} alt="river" />
              <Image src={image4} alt="temples" />
            </div>
            <Image src={image5} alt="bear cartoon" aria-label="bear" className="absolute -right-[305px] bottom-0" />
          </CardBlock>   
        </div>  
      </Inner>
    </section>
  )
}

export default SectionTwo
