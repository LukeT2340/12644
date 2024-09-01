import image5 from "../../../assets/images/intro-dec.png"
import gradient from "../../../assets/images/gradient-bg.png"
import { Image, Inner } from "../../../components/miscellaneous/index.tsx"

const Introduction = () => {
    return (
        <Inner>
            <div className="relative flex flex-col items-center w-[100vw] bg-white">
                <Image src={gradient} alt="gradient background" className="absolute z-10 h-full w-[100vw]" />
                <div className='relative lg:px-[100px] lg:w-[600px] 2xl:w-[786px] bg-bright-orange text-center lg:text-[13px] lg:leading-[23px] 2xl:text-[17px] 2xl:leading-[30px] text-white lg:py-[130px] 2xl:py-[200px] z-10'>
                    <Image 
                    src={image5} 
                    alt={"Wondering when the best time is to visit Taiwan?" } 
                    className='absolute left-1/2 -translate-x-[50%] 2xl:-top-[250px] xl:-top-[170px] lg:w-[260px] lg:-top-[150px] xl:w-[280px] 2xl:w-auto'
                    />
                    <p className='font-bold p-0'>{"Wondering when the best time is to visit Taiwan?" }</p>
                    <p className='font-[500] p-0'>{"Take your pick: Taiwan offers unique experiences for visitors year-round. If you’ve been before, you’ll find variety and new experiences in other seasons. And if you’re a first timer, you’ll discover more to Taiwan than you ever imagined."}</p>
                </div>
            </div>
        </Inner>
    )
}

export default Introduction