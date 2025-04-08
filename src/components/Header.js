import React from "react";
import { useState, useEffect } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import Logo from "../images/logo.png";
const Header = ({ onAboutClick, onServicesClick, onContactClick }) => {
  const [openMenu, setOpenMenu] = useState(false);
  // Close menu when screen size is medium or larger
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        console.log("triggered", window.innerWidth);
        setOpenMenu(() => false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className=" w-full flex justify-center items-center h-100%">
      <div className="lg:w-[80%] md:w-[80%] lg:h-20 w-full  flex flex-col lg:flex-row md:flex-row justify-start items-center ">
        <div className="flex flex-row items-center justify-between  w-full p-2 lg:justify-start md:justify-start ">
          <img src={Logo} alt="img" className="w-14 h-14" />
          <span className="lg:hidden md:hidden">
            <RiMenu4Fill
              className="scale-150"
              onClick={() => setOpenMenu((prevState) => !prevState)}
            />
          </span>
        </div>

        <div
          className={`flex flex-col lg:justify-end  md:justify-end justify-evenly items-center lg:flex-row   md:flex-row lg:h-full md:h-full  transition-transform h-[100vh] duration-500 translate-x-0 w-full   ${
            openMenu ? "block h-[100vh] w-full " : "hidden md:flex"
          }`}
        >
          <div className="flex flex-col  h-1/2 justify-evenly items-center w-[80%] lg:flex-row lg:h-full md:flex-row md:h-full ">
            <button
              onClick={onServicesClick}
              className="bg-green-300 p-4 rounded-xl 	lg:hover:scale-105 + transition"
            >
              Service
            </button>
            <button
              onClick={onContactClick}
              className="bg-green-300 p-4 rounded-xl lg:hover:scale-105 + transition"
            >
              Contact
            </button>
            <button
              onClick={onAboutClick}
              className="bg-green-300 p-4 rounded-xl lg:hover:scale-105 + transition"
            >
              About
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
