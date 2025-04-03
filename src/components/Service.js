import React from "react";
import { PiPlugChargingFill } from "react-icons/pi";
import { FaBatteryHalf, FaCamera } from "react-icons/fa";
import { SlScreenSmartphone } from "react-icons/sl";
import { IoIosWater } from "react-icons/io";
import { IoGameController } from "react-icons/io5";

const Service = () => {
  return (
    <section className=" flex justify-center items-center h-[100vh]  w-full ">
      <div className="  lg:w-[80%] md:w-[80%] h-full w-full bg-no-repeat bg-cover  bg-[url('/src/images/services.jpg')] h-full flex justify-evenly flex-col items-center text-2xl">
        <span className="lg:text-6xl md:text-6xl text-5xl text-neutral-100 flex justify-center items-center ">
          {" "}
          Our Repair Services
        </span>
        <div className="flex flex-row justify-evenly w-full flex-wrap">
          <span className="flex justify-center items-center flex-col">
            <PiPlugChargingFill className="lg:w-32  lg:h-32 md:w-32 md:h-32 h-24 w-24 shadow-black shadow-md rounded p-2 bg-slate-500 bg-opacity-35  " />
            <p className="bg-slate-600 bg-opacity-35 text-neutral-200 p-2 rounded-md w-full flex items-center justify-center m-2">
              Charger Replacement
            </p>
          </span>

          <span className="flex justify-center items-center flex-col">
            <FaBatteryHalf className="lg:w-32  lg:h-32 md:w-32 md:h-32 h-24 w-24 shadow-black shadow-md rounded p-2  bg-slate-500 bg-opacity-35 " />
            <p className="text-neutral-200 p-2 rounded-md w-full flex items-center justify-center m-2 bg-slate-600 bg-opacity-35 ">
              Battery Replacement
            </p>
          </span>
          <span className="flex justify-center items-center flex-col">
            <SlScreenSmartphone className="lg:w-32  lg:h-32 md:w-32 md:h-32 h-24 w-24 shadow-black shadow-md rounded p-2  bg-slate-500 bg-opacity-35 " />
            <p className="text-neutral-200 p-2 rounded-md w-full flex items-center justify-center m-2 bg-slate-600 bg-opacity-35 ">
              Screen Replacement
            </p>
          </span>
          <span className="flex justify-center items-center flex-col">
            <IoIosWater className="lg:w-32  lg:h-32 md:w-32 md:h-32 h-24 w-24 shadow-black shadow-md rounded p-2 bg-slate-500 bg-opacity-35  " />
            <p className="text-neutral-200 p-2 rounded-md w-full flex items-center justify-center m-2 bg-slate-600 bg-opacity-35 ">
              Water Damage
            </p>
          </span>
          <span className="flex justify-center items-center flex-col">
            <FaCamera className="lg:w-32  lg:h-32 md:w-32 md:h-32 h-24 w-24 shadow-black shadow-md rounded p-2 bg-slate-500 bg-opacity-35  " />
            <p className=" text-neutral-200 p-2 rounded-md w-full flex items-center justify-center m-2 bg-slate-600 bg-opacity-35 ">
              Cameras
            </p>
          </span>
          <span className="flex justify-center items-center flex-col">
            <IoGameController className="lg:w-32  lg:h-32 md:w-32 md:h-32 h-24 w-24 shadow-black shadow-md rounded p-2  " />
            <p className=" text-neutral-200 p-2 rounded-md w-full flex items-center justify-center m-2 bg-slate-600 bg-opacity-35 ">
              Game Controllers
            </p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Service;
