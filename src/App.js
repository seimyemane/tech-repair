import Header from "./components/Header";
import Hero from "./components/Hero";
import Service from "./components/Service";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import About from "./components/About";
import React, { useRef } from "react";
import FAQ from "./components/FAQ";

import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Chatbot from "./components/Chatbot";

function App() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);
  const FAQRef = useRef(null);
  const shopLocatorRef = useRef(null);
  const chatbotRef = useRef(null);
  return (
    <div className="App">
      <div>
        <Header
          onAboutClick={() =>
            aboutRef.current.scrollIntoView({ behavior: "smooth" })
          }
          onServicesClick={() =>
            servicesRef.current.scrollIntoView({ behavior: "smooth" })
          }
          onContactClick={() =>
            contactRef.current.scrollIntoView({ behavior: "smooth" })
          }
          onShopLocatorClick={() =>
            shopLocatorRef.current.scrollIntoView({ behavior: "smooth" })
          }
          onChatBotClick={() =>
            chatbotRef.current.scrollIntoView({ behavior: "smooth" })
          }
        />
      </div>
      <div>
        <Hero
          onGetQouteClick={() =>
            contactRef.current.scrollIntoView({ behavior: "smooth" })
          }
        />
      </div>

      <div ref={servicesRef}>
        <Service />
      </div>
      <div>
        <WhyChooseUs />
      </div>
      {/* <div>
        <Testimonials />
      </div> */}

      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={FAQRef}>
        <FAQ />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
