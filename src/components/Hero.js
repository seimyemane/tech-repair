import React from "react";
import HeroPng from "../images/hero.jpg";

import AppleLogo from "../assets/apple.svg";
import GoogleLogo from "../assets/google.svg";
import SamsungLogo from "../assets/samsung.svg";
import OneplusLogo from "../assets/oneplus.svg";
import LgLogo from "../assets/lg.svg";
import HuaweiLogo from "../assets/huawei.svg";
import SonyLogo from "../assets/sony.svg";

const Hero = ({ onGetQouteClick }) => {
  return (
    <section className=" flex justify-center items-center h-[100vh]  w-full flex-col">
      <div className=" lg:w-[80%] md:w-[80%] h-full w-full  flex items-center justify-center bg-no-repeat bg-cover  bg-[url('/src/images/hero3.jpg')] ">
        <span className="h-full w-full  text-neutral-200 bg-gray-800 bg-opacity-25  flex justify-center flex-col items-center">
          <h3 className="text-6xl   p-2">Your Phone, Fixed in No Time </h3>
          <h4 className="  p-2 text-4xl">
            Broken screen? Dead battery? We've got you covered.{" "}
          </h4>
          <h4 className=" p-2 text-4xl">
            Fast, Affordable & Professional Repairs.{" "}
          </h4>
          <span className="mt-20">
            {" "}
            <button
              className="bg-green-400 p-4 rounded-md text-3xl "
              onClick={onGetQouteClick}
            >
              {" "}
              Get a Free Quote
            </button>
          </span>
        </span>
      </div>
      <span className=" lg:w-[80%] md:w-[80%]  w-full  flex justify-around bg-slate-300 bg-opacity-25 p-4 lg:p-6 md:p-6  max-h-full items-center">
        <img
          src={AppleLogo}
          alt=""
          className="lg:w-16  lg:h-16 md:w-16 md:h-16 h-12 w-12 shadow-black shadow-md rounded p-2 "
        />
        <img
          src={SamsungLogo}
          alt=""
          className="lg:w-16   lg:h-16 md:w-16 md:h-16 h-12 w-12 shadow-black shadow-md rounded p-2"
        />
        <img
          src={GoogleLogo}
          alt=""
          className="lg:w-16  lg:h-16 md:w-16 md:h-16 h-12 w-12 shadow-black shadow-md rounded p-2"
        />
        <img
          src={LgLogo}
          alt=""
          className="lg:w-16  lg:h-16 md:w-16 md:h-16 h-12 w-12 shadow-black shadow-md rounded p-2"
        />
        <img
          src={HuaweiLogo}
          alt=""
          className="lg:w-16 lg:h-16 md:w-16 md:h-16 h-12 w-12 shadow-black shadow-md rounded p-2"
        />
        <img
          src={SonyLogo}
          alt=""
          className="lg:w-16  lg:h-16 md:w-16 md:h-16 h-12 w-12 shadow-black shadow-md rounded p-2"
        />
        <img
          src={OneplusLogo}
          alt=""
          className="lg:w-16  lg:h-16 md:w-16 md:h-16 h-12 w-12 shadow-black shadow-md rounded p-2"
        />
      </span>
    </section>
  );
};

export default Hero;
