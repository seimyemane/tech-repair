import React from "react";

const Footer = () => {
  const dateNow = new Date();
  const year = dateNow.getFullYear();
  return (
    <section className=" flex justify-center items-center lg:h-[20vh] md:h-[20vh] h-fit  w-full ">
      <div className="  lg:w-[80%] md:w-[80%]  w-full h-full flex justify-evenly flex-col  text-xl bg-slate-900 text-neutral-300 p-2">
        <p> Need a fix? Book a repair now! </p>
        <p>Free Pickups and Delivery Mon–Sun: 5PM–7PM</p>
        <p>Email: thedevicelab8@gmail.com</p>
        <p>{`© ${year} The Device Lab.  All rights reserved`}</p>
      </div>
    </section>
  );
};

export default Footer;
