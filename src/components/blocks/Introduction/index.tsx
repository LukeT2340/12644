import image5 from "../../../assets/images/intro-dec.png"
import gradient from "../../../assets/images/gradient-bg.png"
import { Image, Inner } from "../../../components/miscellaneous/index.tsx"

const Introduction = () => {
  return (
    <Inner>
      <div className="relative flex flex-col items-center w-[100vw]">
        <Image
          src={gradient}
          alt="gradient background"
          className="absolute z-10 h-full w-[100vw]"
        />
        <div className="relative lg:max-w-[786px] bg-bright-orange w-[100vw] text-center py-[130px] xl:py-[200px] text-white z-10">
          <Image
            src={image5}
            alt={"Wondering when the best time is to visit Taiwan?"}
            className="absolute left-1/2 -translate-x-[50%] 2xl:-top-[250px] xl:-top-[170px] -top-[150px] lg:w-[260px] lg:-top-[150px] w-[273px] xl:w-[280px] 2xl:w-auto"
          />
          <div className="lg:max-w-[593px] md:max-w-[450px] max-w-[285px] mx-auto">
            <p className="font-bold p-0">
              Wondering when the best time is to visit Taiwan?
            </p>
            <p className=" p-0">
              Take your pick: Taiwan offers unique experiences for visitors
              year-round. If you’ve been before, you’ll find variety and new
              experiences in other seasons. And if you’re a first timer, you’ll
              discover more to Taiwan than you ever imagined.
            </p>
          </div>
        </div>
      </div>
    </Inner>
  )
}

export default Introduction
