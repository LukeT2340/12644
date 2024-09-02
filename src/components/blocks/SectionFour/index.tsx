import { Inner, SeasonSection, Image } from "../../miscellaneous"
import backgroundImg from "../../../assets/images/SecFour-bg.png"
import image10 from "../../../assets/images/10.jpg"
import image11 from "../../../assets/images/11.jpg"
import image12 from "../../../assets/images/12.jpg"
import image13 from "../../../assets/images/13.jpg"
import image14 from "../../../assets/images/14.jpg"
import image15 from "../../../assets/images/secFour-dec.png"

const SectionFour: React.FC = () => (
    <section className="section-four bg-grassy-green 2xl:h-[2800px] xl:h-[2600px]"> { /* Manually setting the height like this seems like a poor solution. Had to do this to avoid empty space down the bottom due to translate-y */}
      <Inner>
        <SeasonSection seasonImage={backgroundImg} seasonText="Spring">
          <div className="2xl:h-[1880px] xl:h-[1900px] text-[17px] leading-[30px] ">
          <Image src={image10} alt="Taitung aboriginal dancers" className="rounded-[20px] w-full mb-[71px]" />
                <div className="flex justify-between gap-[12px]">
                    <div className="flex flex-col w-[48%]">
                        <p className="ml-[110px] mr-[20px] mb-auto p-0">Cherry-blossom season starts early in Taiwan: expect the first blossoms to appear in the south as early as February. By springtime, though, you’ll enjoy the full pink spectacle in places such as Yangmingshan National Park – where azaleas and canna lilies bloom too.</p>
                        <Image src={image11} alt="Taiwanese rocky beach" className="rounded-[20px]"/>
                        <Image src={image13} alt="A serene mountain landscape featuring a clear blue lake surrounded by lush green hills under a bright sky with scattered clouds." className="rounded-[20px] mt-[11px]"/>
                    </div>
                    <div className="flex flex-col w-[52%]">
                        <p className="pl-[30px] pr-[130px]">
                          In March, April and May, temperatures are delightfully mild and nature puts on a fabulous show from the central mountains to the botanical gardens and temple grounds of cities. Tea plantations around Alishan Mountain are at their greenest. This is a fine time for walking and biking, particularly in the East Coast National Scenic Area south of Hualien.
                        </p>
                        <p className="pl-[30px] pr-[130px] pb-0 2xl:mb-[50px] xl:mb-[60px]">
                          Festivals are hopping during spring. Temples celebrate the Goddess of Mercy’s Birthday in March and Masu Dajia Festival in April. The International Fireworks Festival kicks off in Penghu in May and runs through summer. Dragon Boat Festival in late May (or early June since this is a lunar occasion) is another major event.
                        </p>
                        <Image src={image12} alt="Grassy green planes in Taiwan" className="rounded-[20px]"/>
                        <Image src={image14} alt="Grassy green planes in Taiwan" className="rounded-[20px] mt-[12px]"/>
                    </div>
                </div>
                <Image src={image15} alt="bear cartoon" aria-label="bear" className="absolute 2xl:-left-[220px] xl:-bottom-[50px] xl:-left-[130px] xl:w-[250px] 2xl:w-auto" />
          </div>
        </SeasonSection>
      </Inner>
    </section>
  )
  
  export default SectionFour
  