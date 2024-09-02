import { Link, Image } from "../../miscellaneous"
import instagram from "../../../assets/images/instagram-icon.png"
import facebook from "../../../assets/images/facebook-icon.png"
import home from "../../../assets/images/home-icon.png"
import backgroundImg from "../../../assets/images/links-bg.jpg"


const Links = () => {
    return (
        <section className="relative">
            <div className="overflow-hidden absolute bg-cover" >
                <Image src={backgroundImg} alt="Taipei fireworks 2014" data-scroll data-scroll-speed="-.05" />
            </div>
            <div className="max-w-[360px] text-white ml-auto mr-[20vw] pt-[107px] pb-[375px] z-40 relative">
                <h3 className="p-0 text-[30px] leading-[45px] mb-[35.6px]">Follow Taiwan Tourism for the latest updates on traveling to Taiwan</h3>
                <ul>
                    <Link icon={instagram} href="" alt="Instagram icon" text="@Taiwan_Tourism_AUNZ" className="mb-[30px]" />
                    <Link icon={facebook} href="" alt="Facebook icon" text="@TaiwanTourismANZ" className="mb-[30px]"/>
                    <Link icon={home} href="" alt="Home icon" text="https://eng.taiwan.net.tw" />
                </ul>
            </div>
        </section>
    )
}

export default Links