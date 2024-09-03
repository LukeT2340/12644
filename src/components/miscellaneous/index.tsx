import { motion } from "framer-motion";
import {
  ImageProps,
  CustomLinkProps,
  ButtonProps,
  MotionImageProps,
} from "../../types";

export const Image: React.FC<ImageProps> = (props) => {
  return <img {...props} />;
};

export const CustomLink = ({
  href,
  className = "",
  children,
}: CustomLinkProps) => {
  return (
    <>
      {" "}
      <a
        href={href}
        className={className}
        target="_blank"
        rel="sponsored noopener noreferrer"
      >
        {children}
      </a>{" "}
    </>
  );
};

export const MotionImage: React.FC<MotionImageProps> = (props) => (
  <motion.img {...props} />
);

export const Button: React.FC<ButtonProps> = ({
  href,
  text,
  bgColor = "black",
  textColor = "white",
}) => {
  return (
    <a
      href={href}
      className={`mb:w-[240px] max-w-[200px] py-4 px-4 ${bgColor} hover:opacity-90 ${textColor} z-10 font-bold text-center block sm:ml-0 mx-auto`}
      target="_blank"
      rel="sponsored noopener noreferrer"
    >
      <p className="inline sm:text-24 uppercase">{text}</p>
    </a>
  );
};

export const Inner = ({ children }: { children: React.ReactNode }) => (
  <div className="flex justify-center">
    <div className="flex flex-col items-center lg:max-w-[98vw] 2lg:max-w-[95vw]">
      {children}
    </div>
  </div>
);

// Title of each section with image representing the season and text that sits in the center of the image
export const SeasonImage = ({
  backgroundImg,
  text,
}: {
  backgroundImg: string;
  text: string;
}) => {
  const heading = text.split("");

  return (
    <div
      className={`${text === "Winter" ? "w-[101vw]" : "w-[100vw]"} relative`}
    >
      <Image
        src={backgroundImg}
        alt={text}
        className={`${text === "Winter" ? "w-[101vw]" : "w-[100vw]"}`}
        data-scroll
        data-scroll-speed="-.05"
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden w-[100%] text-center ">
        {heading.map((char, index) => (
          <motion.span
            className="font-taiwan lg:text-[96px] md:text-[62px] text-[48px] leading-[106px] text-white inline-block"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index / 20,
              ease: "easeOut",
            }}
            key={index}
          >
            {char}{" "}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

// White block with rounded corners where content sits
export const CardBlock = ({ children }: { children: React.ReactNode }) => (
  <div className="w-full lg:w-[1020px] xl:w-[1280px] bg-white rounded-[20px] lg:px-[60px] px-[30px] py-[35px] md:py-[70px] xl:py-[71px] xl:px-[80px] z-10 -translate-y-[100px] xl:-translate-y-[150px] 2xl:-translate-y-[260px]">
    <div className="lg:max-w-full max-w-auto md:max-w-[65vw] md:mx-auto lg:mx-0">
      {children}
    </div>
  </div>
);

export const SeasonSection = ({
  children,
  seasonImage,
  seasonImageMobile,
  seasonText,
}: {
  children: React.ReactNode;
  seasonImage: string;
  seasonImageMobile: string;
  seasonText: string;
}) => (
  <div className="relative flex flex-col items-center -translate-y-[130px] lg:-translate-y-[105px] xl:-translate-y-[120px] 2xl:-translate-y-[170px]  z-50">
    <div className="md:block hidden">
      <SeasonImage backgroundImg={seasonImage} text={seasonText} />
    </div>
    <div className="md:hidden block">
      <SeasonImage backgroundImg={seasonImageMobile} text={seasonText} />
    </div>
    <CardBlock>{children}</CardBlock>
  </div>
);

export const Link = ({
  icon,
  alt,
  text,
  href,
  className,
}: {
  icon: string;
  alt: string;
  text: string;
  href: string;
  className?: string;
}) => (
  <li
    className={`hover:cursor-pointer hover:opacity-80 flex  font-bold items-center justify-start ${
      className ? className : ""
    }`}
  >
    <Image
      src={icon}
      alt={alt}
      className={`${
        alt === "Facebook icon"
          ? "w-[17px] ml-[6.5px] mr-[22.5px]"
          : "w-[30px] mr-[16px]"
      } object-contain`}
    />
    <a href={href} target="_blank" rel="sponsored noopener noreferrer">
      {text}
    </a>
  </li>
);
