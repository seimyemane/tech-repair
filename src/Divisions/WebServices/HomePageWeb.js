import React, { use } from "react";
import WebHeader from "./components/WebHeader";
import WebHero from "./components/WebHero";
import WebTeirs from "./components/WebTeirs";
import WhyChooseDLW from "./components/WhyChooseDLW";
import WebLiveTemplates from "./components/WebLiveTemplates";
import WebContact from "./components/WebContact";
import WebFooter from "./components/WebFooter";
import { useRef } from "react";
import SubscribtionExplain from "./components/SubscribtionExplain";
import FAQ from "./components/FAQ";
const HomePageWeb = () => {
  const contactRef = useRef(null);

  const plansRef = useRef(null);
  const homeRef = useRef(null);
  const portfolioRef = useRef(null);

  return (
    <div className="homepageweb">
      <WebHeader
        scrollToPortfolio={() => {
          portfolioRef.current.scrollIntoView({ behavior: "smooth" });
        }}
        scrollToContact={() => {
          contactRef.current.scrollIntoView({ behavior: "smooth" });
        }}
        scrollToPlans={() => {
          plansRef.current.scrollIntoView({ behavior: "smooth" });
        }}
        scrollToHome={() => {
          homeRef.current.scrollIntoView({ behavior: "smooth" });
        }}
      />
      <div ref={homeRef}>
        <WebHero />
      </div>
      <div>
        <WhyChooseDLW />
      </div>
      {/* <div ref={portfolioRef}>
        <WebLiveTemplates />
      </div> */}
      <div>
        <SubscribtionExplain
          scrollToContact={() => {
            contactRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        />
      </div>

      <div ref={plansRef}>
        <WebTeirs />
      </div>

      <div>
        <FAQ />
      </div>
      <div ref={contactRef}>
        <WebContact />
      </div>
      <WebFooter />
    </div>
  );
};

export default HomePageWeb;
