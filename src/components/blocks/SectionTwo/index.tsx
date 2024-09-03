import { Inner, Image, SeasonSection, MotionImage } from "../../miscellaneous";

import backgroundImg from "../../../assets/images/sectTwo-bg.png";
import backgroundImgMobile from "../../../assets/images/secTwo-bg-mobile.png";

import image1 from "../../../assets/images/1.jpg";
import image2 from "../../../assets/images/2.jpg";
import image3 from "../../../assets/images/3.jpg";
import image4 from "../../../assets/images/4.jpg";
import image5 from "../../../assets/images/5.png";
import Introduction from "../../blocks/Introduction/index";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const SectionTwo: React.FC = () => {
  const mobile = useMediaQuery({ maxWidth: 1023 });

  if (mobile) {
    return (
      <section className="section-two">
        <Introduction />
        <div className="bg-light-orange">
          <Inner>
            <SeasonSection
              seasonImage={backgroundImg}
              seasonImageMobile={backgroundImgMobile}
              seasonText="Autumn"
            >
              <div className="overflow-hidden rounded-[20px] mb-[38px]">
                <Image
                  src={image1}
                  alt="sunset"
                  data-scroll
                  data-scroll-speed="-.05"
                  className="rounded-[20px] w-full"
                />
              </div>
              <motion.div
                initial={{ opacity: 0.5, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              >
                <p>
                  September, October and November are a glorious time for nature
                  lovers and photographers, as trees start to change colour from
                  mid-September in northern Taiwan, with the orange wave rolling
                  down the island over the next weeks.
                </p>
                <p>
                  Balmy temperatures and low humidity and rainfall are perfect
                  for hiking, while further into the season you’ll find fewer
                  tourists and shoulder-season hotel prices.
                </p>
                <p>
                  Two great ways see the autumn spectacle are by steam train on
                  Alishan Forest Railway, or by hiking in Dasyueshan National
                  Forest or Aowanda Forest Recreation Area, which is sumptuous
                  with maples trees.
                </p>
              </motion.div>
              <div className="overflow-hidden rounded-[20px] mb-[38px]">
                <Image
                  src={image2}
                  alt="river"
                  data-scroll
                  data-scroll-speed="-.05"
                  className="rounded-[20px] w-full"
                />
              </div>
              <motion.div
                initial={{ opacity: 0.5, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              >
                <p>
                  Scenic spot Sun Moon Lake, crisscrossed with cycle and hiking
                  paths, is particularly lovely in this season. November is the
                  sweet spot for visiting hot-spring resorts before December
                  crowds and price increases.
                </p>
                <p>
                  Meanwhile plenty of festivals provide cultural fun. Mid-Autumn
                  Festival in September is celebrated by eating mooncakes, and
                  Confucius’ Birthday brings liveliness to temples. October sees
                  National Day parades, Pride Parade and Halloween events.
                </p>
              </motion.div>
              <div className="overflow-hidden rounded-[20px] mb-[10px]">
                <Image
                  src={image3}
                  alt="tower"
                  data-scroll
                  data-scroll-speed="-.05"
                  className="w-full"
                />
              </div>
              <div className="overflow-hidden rounded-[20px]">
                <Image
                  src={image4}
                  alt="temples"
                  data-scroll
                  data-scroll-speed="-.05"
                  className="w-full"
                />
              </div>
              <MotionImage
                src={image5}
                alt="bear cartoon"
                aria-label="bear"
                className="absolute -right-[45px] -bottom-[45px] w-[230px]"
                initial={{ opacity: 0, y: 20, scale: 1.2, rotate: "30deg" }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotate: "0deg" }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </SeasonSection>
          </Inner>
        </div>
      </section>
    );
  }

  return (
    <section className="section-two 2xl:h-[3000px] xl:h-[2900px]">
      {" "}
      {/* Manually setting the height like this seems like a poor solution. Had to do this to avoid empty space down the bottom due to translate-y */}
      <Introduction />
      <div className="bg-light-orange">
        <Inner>
          <SeasonSection
            seasonImage={backgroundImg}
            seasonImageMobile={backgroundImgMobile}
            seasonText="Autumn"
          >
            <div className="lg:h-[1330px] xl:h-[1600px]">
              <div className="flex flex-col lg:flex-row items-start xl:gap-[45px] lg:gap-[38px]">
                <div className="overflow-hidden rounded-[20px] xl:mb-0 mb-[38px]">
                  <Image
                    src={image1}
                    alt="sunset"
                    data-scroll
                    data-scroll-speed="-.05"
                    className="rounded-[20px]"
                  />
                </div>
                <motion.div
                  className="xl:max-w-[356px] lg:max-w-[380px] xl:mt-[40px]"
                  initial={{ opacity: 0.5, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                >
                  <p>
                    September, October and November are a glorious time for
                    nature lovers and photographers, as trees start to change
                    colour from mid-September in northern Taiwan, with the
                    orange wave rolling down the island over the next weeks.
                  </p>
                  <p>
                    Balmy temperatures and low humidity and rainfall are perfect
                    for hiking, while further into the season you’ll find fewer
                    tourists and shoulder-season hotel prices.
                  </p>
                  <p>
                    Two great ways see the autumn spectacle are by steam train
                    on Alishan Forest Railway, or by hiking in Dasyueshan
                    National Forest or Aowanda Forest Recreation Area, which is
                    sumptuous with maples trees.
                  </p>
                </motion.div>
              </div>
              <div className="flex flex-col lg:flex-row justify-end lg:items-start gap-[45px] lg:-translate-y-[100px] xl:-translate-y-[50px]">
                <motion.div
                  className="lg:mt-[40px] lg:max-w-[391px]"
                  initial={{ opacity: 0.5, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                >
                  <p>
                    Scenic spot Sun Moon Lake, crisscrossed with cycle and
                    hiking paths, is particularly lovely in this season.
                    November is the sweet spot for visiting hot-spring resorts
                    before December crowds and price increases.
                  </p>
                  <p>
                    Meanwhile plenty of festivals provide cultural fun.
                    Mid-Autumn Festival in September is celebrated by eating
                    mooncakes, and Confucius’ Birthday brings liveliness to
                    temples. October sees National Day parades, Pride Parade and
                    Halloween events.
                  </p>
                </motion.div>
                <div className="overflow-hidden rounded-[20px] lg:translate-y-[100px] xl:translate-y-[55px] lg:ml-[15px] xl:ml-0">
                  <Image
                    src={image3}
                    alt="tower"
                    data-scroll
                    data-scroll-speed="-.05"
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row justify-between items-end lg:-translate-y-[120px] xl:-translate-y-[60px] gap-[35px]">
                <div className="overflow-hidden rounded-[20px]">
                  <Image
                    src={image2}
                    alt="river"
                    data-scroll
                    data-scroll-speed="-.05"
                  />
                </div>
                <div className="overflow-hidden rounded-[20px]">
                  <Image
                    src={image4}
                    alt="temples"
                    data-scroll
                    data-scroll-speed="-.05"
                  />
                </div>
              </div>
              <MotionImage
                src={image5}
                alt="bear cartoon"
                aria-label="bear"
                className="absolute 2xl:-right-[305px] lg:-right-0 lg:bottom-0 2xl:-bottom-[40px] 2xl:w-auto xl:w-[290px] lg:w-[270px] w-[230px]"
                initial={{ opacity: 0, y: 20, scale: 1.2, rotate: "30deg" }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotate: "0deg" }}
                transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </div>
          </SeasonSection>
        </Inner>
      </div>
    </section>
  );
};

export default SectionTwo;
