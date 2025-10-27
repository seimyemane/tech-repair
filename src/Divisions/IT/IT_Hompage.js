import React from "react";
import IT_Header from "./components/IT_Header";
import IT_Footer from "./components/IT_Footer";
import IT_Hero from "./components/IT_Hero";
import IT_Services from "./components/IT_Services";
import WhyChooseDLN from "./components/WhyChooseDLN";
import IT_Gallery from "./components/IT_Gallery";
import IT_Book from "./components/IT_Book";
import { useRef } from "react";
import IT_Prices from "./components/IT_Prices";

const IT_Hompage = () => {
  const contactRef = useRef(null);
  const servicesRef = useRef(null);
  const homeRef = useRef(null);
  const pricesRef = useRef(null);

  return (
    <div>
      <IT_Header
        scrollToContact={() =>
          contactRef.current.scrollIntoView({ behavior: "smooth" })
        }
        scrollToHome={() =>
          homeRef.current.scrollIntoView({ behavior: "smooth" })
        }
        scrollToPlans={() =>
          pricesRef.current.scrollIntoView({ behavior: "smooth" })
        }
        scrollToServices={() =>
          servicesRef.current.scrollIntoView({ behavior: "smooth" })
        }
      />
      <div ref={homeRef}>
        <IT_Hero
          scrollToContact={() =>
            contactRef.current.scrollIntoView({ behavior: "smooth" })
          }
          scrollToServices={() =>
            servicesRef.current.scrollIntoView({ behavior: "smooth" })
          }
        />
      </div>
      <div ref={servicesRef}>
        <IT_Services
          scrollToContact={() =>
            contactRef.current.scrollIntoView({ behavior: "smooth" })
          }
        />
      </div>
      <div>
        <WhyChooseDLN
          scrollToContact={() =>
            contactRef.current.scrollIntoView({ behavior: "smooth" })
          }
        />
      </div>
      <div ref={pricesRef}>
        <IT_Prices
          scrollToContact={() =>
            contactRef.current.scrollIntoView({ behavior: "smooth" })
          }
        />
      </div>
      <IT_Gallery />
      <div ref={contactRef}>
        <IT_Book />
      </div>
      <IT_Footer />
    </div>
  );
};

export default IT_Hompage;
