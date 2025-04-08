import React from "react";

const About = () => {
  return (
    <section className=" flex flex-col justify-center items-center lg:h-[100%] md:h-[100%] h-[100%]  w-full ">
      <span className="  lg:w-[80%] md:w-[80%] h-fit  w-full  flex justify-around bg-slate-300 bg-opacity-25 p-4 lg:p-6 md:p-6  lg:text-6xl md:text-6xl text-4xl text-slate-800 ">
        About Us
      </span>
      <div className="lg:w-[80%] md:w-[80%] w-full flex justify-center items-center  bg-no-repeat bg-cover bg-[url('/src/images/about2.jpg')]   ">
        <div className="flex justify-evenly items-center flex-col  h-full lg:w-[80%] md:w-[80%] w-full p-2 text-neutral-200  min-h-[100vh]  ">
          <span className="flex justify-center items-center flex-col  bg-slate-800 bg-opacity-45 p-2 rounded-lg">
            <p className="lg:text-2xl md:text-xl text-xl">
              At DeviceLab, we are committed to delivering fast, reliable, and
              high-quality mobile device repair services. Founded in 2019, our
              company has grown to become a trusted name in the phone repair
              industry by combining technical expertise with exceptional
              customer service. With a deep understanding of modern mobile
              technology and years of hands-on experience, we specialize in
              diagnosing and repairing a wide range of issues — from cracked
              screens and battery replacements to complex hardware and software
              problems.
            </p>
          </span>
          <span className="flex justify-center items-center flex-col  bg-slate-800 bg-opacity-45 p-2 rounded-lg">
            <h1 className="text-3xl  bg-gray-900 bg-opacity-30 p-2 rounded-lg ">
              Our Mission
            </h1>
            <p className="lg:text-2xl md:text-xl text-xl">
              To provide professional, efficient, and affordable mobile repair
              solutions while maintaining the highest standards of quality and
              integrity.
            </p>
          </span>
          <span className="flex justify-center items-center flex-col  bg-slate-800 bg-opacity-45 p-2 rounded-lg">
            <h1 className="text-3xl  bg-gray-900 bg-opacity-30 p-2 rounded-lg ">
              Our Vision
            </h1>
            <p className="lg:text-2xl md:text-xl text-xl">
              To become the leading mobile repair service provider in Edmonton,
              recognized for excellence, transparency, and customer
              satisfaction.
            </p>
          </span>
          <span className="flex justify-center items-center flex-col   bg-slate-800 bg-opacity-45 p-2 rounded-lg w-full">
            <h1 className="text-3xl  bg-gray-900 bg-opacity-30 p-2 rounded-lg">
              {" "}
              Why Choose Us?
            </h1>
            <ol className="lg:text-2xl md:text-xl text-xl">
              <li>Certified Technicians with years of experience</li>
              <li>Premium parts sourced from trusted suppliers</li>
              <li>Fast turnaround times with same-day service available</li>
              <li>90-day warranty on all repairs</li>
              <li>
                Customer-first approach with clear communication and honest
                assessments
              </li>
            </ol>
          </span>
          <span className="flex justify-center items-center flex-col  bg-slate-800 bg-opacity-45 p-2 rounded-lg">
            <p className="lg:text-2xl md:text-xl text-xl">
              We believe that mobile repair should be simple, transparent, and
              hassle-free. Whether you're dealing with a shattered screen, water
              damage, or performance issues, our team is here to help restore
              your device to optimal condition. Thank you for choosing The
              device lab. We look forward to serving you.
            </p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
