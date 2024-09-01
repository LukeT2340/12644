import { Image } from "../../miscellaneous"
import backgroundImg from "../../../assets/images/links-bg.png"

const Links = () => {
    return (
        <div className="links relative">
            <Image src={backgroundImg} alt="2014 Taipei fireworks" />
            <div className="flex flex-col absolute top-0">
                <h3 className="p-0 text-[30px]">Follow Taiwan Tourism for the latest updates on traveling to Taiwan</h3>
            </div>
        </div>
    )
}

export default Links