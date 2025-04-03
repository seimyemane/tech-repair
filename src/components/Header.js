import React from "react";
import { useState, useEffect } from "react";
import { RiMenu4Fill } from "react-icons/ri";

const Header = () => {
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
        <div className="flex flex-row items-center justify-around  w-full p-2 lg:justify-start md:justify-start">
          logo{" "}
          <span className="lg:hidden md:hidden">
            <RiMenu4Fill
              className="scale-150"
              onClick={() => setOpenMenu((prevState) => !prevState)}
            />
          </span>
        </div>

        <div
          className={`flex flex-col justify-around w-fulllg:flex-row md:flex-row lg:h-full md:h-full  transition-transform h-[100vh] duration-500 translate-x-0 w-full ${
            openMenu ? "block h-[100vh] w-full" : "hidden md:flex"
          }`}
        >
          <button>Service</button>
          <button>Contact</button>
          <button>About</button>
        </div>
      </div>
    </section>
  );
};

export default Header;
