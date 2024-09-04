import { Inner, SeasonSection, Image, MotionImage } from "../../miscellaneous"
import backgroundImg from "../../../assets/images/secFour-bg-v2.png"
import backgroundImgMobile from "../../../assets/images/secFour-bg-mobile.png"
import image10 from "../../../assets/images/10.jpg"
import image11 from "../../../assets/images/11.jpg"
import image12 from "../../../assets/images/12.jpg"
import image13 from "../../../assets/images/13.jpg"
import image14 from "../../../assets/images/14.jpg"
import image15 from "../../../assets/images/secFour-dec.png"
import { motion } from "framer-motion"

const SectionFour: React.FC = () => (
  <section className="section-four bg-grassy-green 2xl:h-[2800px] xl:h-[2600px]">
    <Inner>
      <SeasonSection
        seasonImage={backgroundImg}
        seasonImageMobile={backgroundImgMobile}
        seasonText="Spring"
      >
        <div className="flex flex-col justify-between xl:p-[40px]">
          <div className="overflow-hidden lg:py-[20px] py-[0px] rounded-[20px] w-full xl:mb-[51px] mb-[31px] ">
            <Image
              src={image10}
              alt="Taitung aboriginal dancers"
              className="rounded-[20px] w-full"
              data-scroll
              data-scroll-speed="-.05"
            />
          </div>
          <div className="flex lg:flex-row flex-col justify-between gap-[12px]">
            <div className="flex flex-col items-end justify-between lg:max-w-[492px]">
              <motion.div
                className="lg:max-w-[404px] xl:mb-[31px]"
                initial={{ opacity: 0.5, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              >
                <p>
                  {" "}
                  Cherry-blossom season starts early in Taiwan: expect the first
                  blossoms to appear in the south as early as February. By
                  springtime, though, you’ll enjoy the full pink spectacle in
                  places such as Yangmingshan National Park – where azaleas and
                  canna lilies bloom too.
                </p>
              </motion.div>
              <div className="w-full">
                <div className="overflow-hidden rounded-[20px] mb-[11px] lg:w-auto w-full">
                  <Image
                    src={image11}
                    alt="Taiwanese rocky beach"
                    className="rounded-[20px] lg:w-auto w-full"
                    data-scroll
                    data-scroll-speed="-.05"
                  />
                </div>
                <div className="overflow-hidden rounded-[20px] lg:w-auto w-full mb-[18px] md:mb-0">
                  <Image
                    src={image13}
                    alt="A serene mountain landscape featuring a clear blue lake surrounded by lush green hills under a bright sky with scattered clouds."
                    className="rounded-[20px] lg:w-auto w-full"
                    data-scroll
                    data-scroll-speed="-.05"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <motion.div
                className="lg:max-w-[434px] lg:ml-[20px]"
                initial={{ opacity: 0.5, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              >
                <p>
                  In March, April and May, temperatures are delightfully mild
                  and nature puts on a fabulous show from the central mountains
                  to the botanical gardens and temple grounds of cities. Tea
                  plantations around Alishan Mountain are at their greenest.
                  This is a fine time for walking and biking, particularly in
                  the East Coast National Scenic Area south of Hualien.
                </p>
                <p>
                  Festivals are hopping during spring. Temples celebrate the
                  Goddess of Mercy’s Birthday in March and Masu Dajia Festival
                  in April. The International Fireworks Festival kicks off in
                  Penghu in May and runs through summer. Dragon Boat Festival in
                  late May (or early June since this is a lunar occasion) is
                  another major event.
                </p>
              </motion.div>
              <div>
                <div className="overflow-hidden rounded-[20px] mb-[10px] xl:mb-[12px] lg:w-auto w-full">
                  <Image
                    src={image12}
                    alt="Grassy green planes in Taiwan"
                    className="rounded-[20px] lg:w-auto w-full"
                    data-scroll
                    data-scroll-speed="-.05"
                  />
                </div>
                <div className="overflow-hidden rounded-[20px] lg:w-auto w-full">
                  <Image
                    src={image14}
                    alt="Grassy green planes in Taiwan"
                    className="rounded-[20px] lg:w-auto w-full"
                    data-scroll
                    data-scroll-speed="-.05"
                  />
                </div>
              </div>
            </div>
          </div>
          <MotionImage
            src={image15}
            alt="bear cartoon"
            aria-label="bear"
            className="absolute -bottom-[60px] -left-[40px] 2xl:-left-[220px] xl:-bottom-[50px] xl:-left-[130px] 2xl:w-auto xl:w-[290px] lg:w-[270px] w-[150px]"
            initial={{ opacity: 0, rotate: "30deg" }}
            whileInView={{ opacity: 1, rotate: "0deg" }}
            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </div>
      </SeasonSection>
    </Inner>
  </section>
)

export default SectionFour
