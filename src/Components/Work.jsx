import React from "react";
import ProfileImg from "../assets/mainImg.svg";
import Navbar from "./Navbar";
import NavButton from "./NavButton";
import { useState } from "react";

const Work = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="bg-black scroll-smooth w-full h-[100vh] sm:p-[2.5rem] p-[0.5rem]  flex flex-col justify-center items-center">
      {showNav && <Navbar onClickNav={() => setShowNav(!showNav)} />}
      <div className=" bg-primary_blue flex  justify-center font-raleway  flex-col pt-0 items-center w-full h-[100%] ">
        <div>
          {!showNav && <NavButton onClickNav={() => setShowNav(!showNav)} />}
        </div>
        <div className="w-[100%] py-[5rem] px-[1rem] font-bold tracking-widest bg-white bg-opacity-70 backdrop-blur-lg drop-shadow-sm flex items-center text-black  flex-col gap-[10px] ">
          <span className="text-[2rem] font-extrabold font-raleway">Project 1</span>

          <span className="text-[2rem] font-monte">CakesByNandini</span>
          <span className="font-raleway text-[20px] sm:text-[25px]">
            React Redux JS Tailwind Motion Firebase
          </span>
          
          <span className="font-raleway text-[20px] sm:text-[25px]">
            React based fully responsive bakery website with integrated payment
            system.
          </span>
          <div className="text-yellow-800 font-monte text-[1rem] sm:text-[25px] cursor-pointer flex gap-[1rem]">
            <a>GitHub</a>
            <a>Live</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
