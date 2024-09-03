import { Link, Image } from "../../miscellaneous"
import instagram from "../../../assets/images/instagram-icon.png"
import facebook from "../../../assets/images/facebook-icon.png"
import home from "../../../assets/images/home-icon.png"
import backgroundImg from "../../../assets/images/links-bg.jpg"
import { motion } from "framer-motion"


const Links = () => {
    return (
        <section className="relative">
            <div className="overflow-hidden absolute h-full" >
                <Image src={backgroundImg} alt="Taipei fireworks 2014" data-scroll data-scroll-speed="-.05" className="object-cover h-full"/>
            </div>
            <motion.div
                className="max-w-[360px] text-white xl:ml-auto xl:mr-[20vw] pt-[107px] pb-[375px] z-40 relative"
                initial={{ opacity: 0.5, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}>
                <h3 className="p-0 text-[30px] leading-[45px] mb-[35.6px]">Follow Taiwan Tourism for the latest updates on traveling to Taiwan</h3>
                <ul>
                    <Link icon={instagram} href="https://www.instagram.com/taiwan_tourism_aunz/" alt="Instagram icon" text="@Taiwan_Tourism_AUNZ" className="mb-[30px]" />
                    <Link icon={facebook} href="https://www.facebook.com/TaiwanTourismANZ/" alt="Facebook icon" text="@TaiwanTourismANZ" className="mb-[30px]"/>
                    <Link icon={home} href="https://eng.taiwan.net.tw" alt="Home icon" text="https://eng.taiwan.net.tw" />
                </ul>
            </motion.div>
        </section>
    )
}

export default Links