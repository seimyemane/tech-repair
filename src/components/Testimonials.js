import React from "react";
import Face1 from "../images/face1.jpg";
import Face2 from "../images/face2.jpg";
import Face3 from "../images/face3.jpg";
import Face4 from "../images/face4.jpg";
const Testimonials = () => {
  return (
    <section className=" flex flex-col justify-center items-center lg:h-[100vh] md:h-[100vh] h-[100vh]  w-full ">
      <span className=" lg:w-[80%] md:w-[80%] h-fit  w-full  flex justify-around bg-slate-300 bg-opacity-25 p-4 lg:p-6 md:p-6  lg:text-6xl md:text-6xl text-4xl text-slate-800 ">
        Our Customers{" "}
      </span>
      <div className=" lg:w-[80%] md:w-[80%] w-full bg-no-repeat bg-cover  bg-[url('/src/images/testimonialBG.jpg')] flex flex-wrap justify-around p-2   items-center  lg:text-2xl md:text-2xl text-xl  h-[100vh] gap-1 ">
        {/* testimonial 1 */}
        <div className="p-4 lg:h-1/3 md:h-40  lg:w-1/3 md:w-1/3 w-fit bg-slate-600 bg-opacity-25 rounded-2xl shadow-md   flex justify-center items-start flex-col text-neutral-200 italic text-wrap h-1/5 ">
          <p>“This service was amazing and super fast!”</p>
          <span className="flex items-center">
            {" "}
            <img src={Face1} alt="" className="w-20 h-20 rounded-full p-2" />
            <p className="text-yellow-500 text-lg">★★★★</p>
          </span>
          <p>— Sarah L., Edmonton</p>
        </div>
        {/* testimonial 2 */}
        <div className=" p-4 lg:h-1/3 md:h-40   lg:w-1/3 md:w-1/3 w-fit bg-slate-800 bg-opacity-35 rounded-2xl shadow-md   flex justify-center items-start flex-col text-neutral-200 italic text-wrap">
          <p className="  ">
            “Great customer service. They explained everything clearly and were
            honest about what needed to be fixed. 10/10 experience.”
          </p>
          <span className="flex items-center">
            {" "}
            <img src={Face2} alt="" className="w-20 h-20 rounded-full p-2" />
            <p className="text-yellow-500 text-lg">★★★★★</p>
          </span>
          <p>— James M., Local Business Owner</p>
        </div>
        {/* testimonial 3 */}

        <div className=" p-4 lg:h-1/3 md:h-40   lg:w-1/3 md:w-1/3 w-fit bg-slate-800 bg-opacity-35 rounded-2xl shadow-md   flex justify-center items-start flex-col text-neutral-200 italic text-wrap">
          <p className="  ">
            “They even stayed a bit late just to get my screen fixed before my
            trip. That level of service is rare these days.”
          </p>
          <span className="flex items-center">
            {" "}
            <img src={Face3} alt="" className="w-20 h-20 rounded-full p-2" />
            <p className="text-yellow-500 text-lg">★★★★★</p>
          </span>
          <p>— Bianca C.</p>
        </div>
        {/* testimonial 4 */}

        <div className=" p-4 lg:h-1/3 md:h-40   lg:w-1/3 md:w-1/3 w-fit bg-slate-800 bg-opacity-35 rounded-2xl shadow-md   flex justify-center items-start flex-col text-neutral-200 italic text-wrap">
          <p className="  ">
            “Saved me from buying a new phone! Battery replacement was quick,
            affordable, and done right.”
          </p>
          <span className="flex items-center">
            {" "}
            <img src={Face4} alt="" className="w-20 h-20 rounded-full p-2" />
            <p className="text-yellow-500 text-lg">★★★★</p>
          </span>
          <p>— Kevin T.</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
