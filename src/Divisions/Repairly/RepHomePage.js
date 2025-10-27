import React from "react";
import RepHeader from "./components/RepHeader";
import RepFooter from "./components/RepFooter";
import RepHero from "./components/RepHero";
import RepPricing from "./components/RepPricing";
import RepGallery from "./components/RepGallery";
import WhyChooseDLR from "./components/WhyChooseDLR";
import BookRep from "./components/BookRep";
import { useRef } from "react";

const RepHomePage = () => {
  const contactRef = useRef(null);
  const homeRef = useRef(null);
  const pricingRef = useRef(null);
  const galleryRef = useRef(null);
  const serviceRef = useRef(null);

  return (
    <div>
      <RepHeader
        scrollToContact={() =>
          contactRef.current.scrollIntoView({ behavior: "smooth" })
        }
        scrollTohome={() =>
          homeRef.current.scrollIntoView({ behavior: "smooth" })
        }
        scrollToPrice={() =>
          pricingRef.current.scrollIntoView({ behavior: "smooth" })
        }
        scrollToGallery={() =>
          galleryRef.current.scrollIntoView({ behavior: "smooth" })
        }
        scrollToService={() =>
          serviceRef.current.scrollIntoView({ behavior: "smooth" })
        }
      />
      <div ref={homeRef}>
        <RepHero
          scrollToContact={() =>
            contactRef.current.scrollIntoView({ behavior: "smooth" })
          }
        />
      </div>
      <WhyChooseDLR
        scrollToContact={() =>
          contactRef.current.scrollIntoView({ behavior: "smooth" })
        }
      />
      <div ref={pricingRef}>
        <RepPricing />
      </div>
      <div ref={galleryRef}>
        <RepGallery />
      </div>
      <div ref={contactRef}>
        <BookRep />
      </div>

      <RepFooter />
    </div>
  );
};

export default RepHomePage;
