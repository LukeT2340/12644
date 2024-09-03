import { Inner, SeasonSection, Image, MotionImage } from "../../miscellaneous";
import backgroundImg from "../../../assets/images/SecFive-bg.png";
import backgroundImgMobile from "../../../assets/images/SecFive-bg-mobile.png";
import image15 from "../../../assets/images/15.jpg";
import image16 from "../../../assets/images/16.jpg";
import image17 from "../../../assets/images/secFive-dec.png";
import { motion } from "framer-motion";

const SectionFive: React.FC = () => (
  <section className="section-five bg-sky-blue 3xl:h-[2050px] 2xl:h-[1850px] xl:h-[1800px] h-[2100px] md:h-[2750px] lg:h-[1600px]">
    <Inner>
      <SeasonSection
        seasonImage={backgroundImg}
        seasonImageMobile={backgroundImgMobile}
        seasonText="Summer"
      >
        <div className="flex lg:flex-row flex-col justify-between lg:gap-[56px]">
          <div className="flex flex-col items-end">
            <motion.div
              className="lg:max-w-[428px]"
              initial={{ opacity: 0.5, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            >
              <p>
                June, July and August are hot and humid, but the good news is
                that many locals head to the coast during school holidays,
                leaving cities less crowded: a great time to hit museums, indoor
                attractions and shopping malls as you dodge rain showers.
              </p>
              <p>
                If you enjoy water sports, Taimali and Fenghuisha in southern
                Taiwan are great beaches, and the whole coast around Hualien is
                highly scenic. You might want to visit outlying islands such as
                Lambai – which has great snorkelling and diving – or Turtle
                Island, which features Taiwan’s only active volcano.
              </p>
            </motion.div>
            <div className="overflow-hidden rounded-[20px] hidden lg:block lg:w-auto w-full">
              <Image
                src={image16}
                alt="Snorkelling"
                className="rounded-[20px] lg:w-auto w-full"
                data-scroll
                data-scroll-speed="-.05"
              />
            </div>
          </div>
          <div className="flex flex-col justify-between gap-[38px] xl:gap-[69px]">
            <div className="overflow-hidden rounded-[20px] xl:w-auto w-full">
              <Image
                src={image15}
                alt="Hot air balloon"
                className="rounded-[20px] xg:w-auto w-full"
                data-scroll
                data-scroll-speed="-.05"
              />
            </div>
            <motion.div
              className="lg:max-w-[407px]"
              initial={{ opacity: 0.5, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            >
              <p>
                If you like mountains, get up to less humid higher altitudes in
                destinations such as Yushan National Park, which tops out at
                3952 metres, and where hiking trails are often bathed in sun
                above a sea of scenic clouds.
              </p>
              <p className="p-0">
                Summer is also full of festivals such as Taiwan International
                Balloon Festival, the Festival of Hungry Ghosts in July, and
                arts events in Taipei such as Fringe Festival and Taipei Arts
                Festival in August – all part of the year-round energy that
                makes Taiwan such a great place to visit.
              </p>
            </motion.div>
            <div className="overflow-hidden rounded-[20px] block lg:hidden xl:w-auto w-full">
              <Image
                src={image16}
                alt="Snorkelling"
                className="rounded-[20px] xl:w-auto w-full"
                data-scroll
                data-scroll-speed="-.05"
              />
            </div>
          </div>
        </div>
        <MotionImage
          src={image17}
          alt="bear cartoon"
          aria-label="bear"
          className="absolute 2xl:-right-[220px] 2xl:-bottom-[50px] -bottom-[40px] -right-[45px] 2xl:w-auto xl:w-[290px] lg:w-[270px] w-[230px]"
          initial={{ opacity: 0, rotate: "-30deg", scale: 1.2 }}
          whileInView={{ opacity: 1, rotate: "0deg", scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </SeasonSection>
    </Inner>
  </section>
);

export default SectionFive;
