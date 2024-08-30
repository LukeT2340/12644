import { Inner, ImageWithText, CardBlock, Image } from "../../miscellaneous"
import backgroundImg from "../../../assets/images/SecFive-bg.png"
import image15 from "../../../assets/images/15.jpg"
import image16 from "../../../assets/images/16.jpg"
import image17 from "../../../assets/images/SecFive-dec.png"

const SectionFive: React.FC = () => (
    <section className="section-five bg-sky-blue">
        <Inner>
            <ImageWithText backgroundImg={backgroundImg} text1="Summer" variant='b' />
            <div className="flex justify-center w-[100vw] xl:-translate-y-[15rem] 2xl:-translate-y-[24rem]">
                <CardBlock>
                    <div className="flex justify-between gap-[56px]">
                        <div className="flex flex-col w-1/2">
                            <p className="2xl:text-[17px] xl:text-[13px] xl:leading-[23px] 2xl:leading-[30px] font-[500] 2xl:ml-[65px] 2xl:mr-[30px] xl:ml-[40px] xl:mr-[30px] mb-[70px] ml-[100px] mt-[38px]">
                                June, July and August are hot and humid, but the good news is that many locals head to the coast during school holidays, leaving cities less crowded: a great time to hit museums, indoor attractions and shopping malls as you dodge rain showers. If you enjoy water sports, Taimali and Fenghuisha in southern Taiwan are great beaches, and the whole coast around Hualien is highly scenic. You might want to visit outlying islands such as Lambai – which has great snorkelling and diving – or Turtle Island, which features Taiwan’s only active volcano.
                            </p>
                            <Image src={image16} alt="Snorkelling" className="rounded-[20px]"/>
                        </div>
                        <div className="flex flex-col w-1/2">
                            <Image src={image15} alt="Hot air balloon" className="rounded-[20px]"/>
                            <p className="2xl:text-[17px] xl:text-[13px] xl:leading-[23px] 2xl:leading-[30px] font-[500] 2xl:mt-[70px] xl:mt-[40px] mr-[120px]">
                                If you like mountains, get up to less humid higher altitudes in destinations such as Yushan National Park, which tops out at 3952 metres, and where hiking trails are often bathed in sun above a sea of scenic clouds.
                                <br />Summer is also full of festivals such as Taiwan International Balloon Festival, the Festival of Hungry Ghosts in July, and arts events in Taipei such as Fringe Festival and Taipei Arts Festival in August – all part of the year-round energy that makes Taiwan such a great place to visit.  
                            </p>
                        </div>
                    </div>
                    <Image src={image17} alt="bear cartoon" aria-label="bear" className="absolute 2xl:-right-[220px] 2xl:-bottom-[50px] xl:-right-[130px] xl:-bottom-[30px] xl:w-[250px] 2xl:w-auto" />
                </CardBlock>
            </div>
        </Inner>
    </section>
  )
  
  export default SectionFive
  