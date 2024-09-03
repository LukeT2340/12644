import { useRef } from "react";
import Hero from "./components/blocks/Hero";
import SectionTwo from "./components/blocks/SectionTwo/index.tsx";
import SectionThree from "./components/blocks/SectionThree/index.tsx";
import SectionFour from "./components/blocks/SectionFour/index.tsx";
import SectionFive from "./components/blocks/SectionFive/index.tsx";
import Links from "./components/blocks/Links/index.tsx";
import LocomotiveParallax from "./js/parallax/index.tsx";
import Header from "./components/blocks/Header/Header.tsx";
import Footer from "./components/blocks/Footer/Footer.tsx";

const App = () => {
  const locoScrollRef = useRef<HTMLElement>(null);

  return (
    <>
      <div className="lg:bg-fixedBg bg-fixedBg-mobile bg-no-repeat bg-fixed bg-cover">
        <main>
          <Header />
          <article>
            <LocomotiveParallax locoScrollRef={locoScrollRef}>
              <Hero />
              <SectionTwo />
              <SectionThree />
              <SectionFour />
              <SectionFive />
              <Links />
            </LocomotiveParallax>
          </article>
          <Footer />
        </main>
      </div>
    </>
  );
};

export default App;
