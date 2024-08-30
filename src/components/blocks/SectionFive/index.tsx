import { Inner, ImageWithText, CardBlock, Image } from "../../miscellaneous"
import backgroundImg from "../../../assets/images/SecFive-bg.png"
import image15 from "../../../assets/images/15.jpg"
import image16 from "../../../assets/images/16.jpg"
import image17 from "../../../assets/images/SecFive-dec.png"

const SectionFive: React.FC = () => (
    <section className="section-five bg-sky-blue">
        <Inner>
            <ImageWithText backgroundImg={backgroundImg} text1="Summer" variant='b' />
            <div className="flex justify-center w-[100vw] xl:h-[1300px] lg:-translate-y-[200px]">
                <CardBlock>
                    <div className="flex justify-between gap-[56px]">
                        <div className="flex flex-col w-1/2">
                            <p className="font-[17px] leading-[30px] font-[500] ml-[70px] mr-[20px] mb-[70px] ml-[70px] mt-[38px] mr-[23px]">
                                June, July and August are hot and humid, but the good news is that many locals head to the coast during school holidays, leaving cities less crowded: a great time to hit museums, indoor attractions and shopping malls as you dodge rain showers.
                                If you enjoy water sports, Taimali and Fenghuisha in southern Taiwan are great beaches, and the whole coast around Hualien is highly scenic. You might want to visit outlying islands such as Lambai – which has great snorkelling and diving – or Turtle Island, which features Taiwan’s only active volcano.
                            </p>
                            <Image src={image16} alt="Snorkelling" className="rounded-[20px] mt-[12px]"/>
                        </div>
                        <div className="flex flex-col w-1/2">
                            <Image src={image15} alt="Hot air balloon" className="rounded-[20px]"/>
                            <p className="font-[17px] leading-[30px] font-[500] mt-[70px] mr-[120px]">
                                If you like mountains, get up to less humid higher altitudes in destinations such as Yushan National Park, which tops out at 3952 metres, and where hiking trails are often bathed in sun above a sea of scenic clouds.
                                <br />Summer is also full of festivals such as Taiwan International Balloon Festival, the Festival of Hungry Ghosts in July, and arts events in Taipei such as Fringe Festival and Taipei Arts Festival in August – all part of the year-round energy that makes Taiwan such a great place to visit.  
                            </p>
                        </div>
                    </div>
                    <Image src={image17} alt="bear cartoon" aria-label="bear" className="absolute -right-[220px] -bottom-[50px]" />
                </CardBlock>
            </div>
        </Inner>
    </section>
  )
  
  export default SectionFive
  