import React from "react";
import ProfileImg from "../assets/mainImg.svg";
import Navbar from "./Navbar";
import NavButton from "./NavButton";
import { useState } from "react";

const About = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="bg-black w-full h-[100vh] sm:p-[2.5rem] p-[0.5rem]  flex flex-col justify-center items-center">
      {showNav && <Navbar onClickNav={() => setShowNav(!showNav)} />}
      <div className=" bg-primary_blue flex  justify-center font-raleway  flex-col pt-0 items-center w-full h-[100%] ">
        <div>
          {!showNav && <NavButton onClickNav={() => setShowNav(!showNav)} />}
        </div>
        <div className="w-[100%] overflow-scroll scrollbar-hide flex-col sm:grid grid-cols-1 sm:grid-cols-2 gap-2 h-[100%] mt-[5rem] ">
          {/* Image */}
          <div
            style={{
              backgroundImage: `url(${ProfileImg})`,
              backgroundRepeat: "no-repeat",
            }}
            className="w-full mt-[2rem] aspect-square sm:h-[75vh] "
          ></div>
          {/* Text */}
          <div className="w-[100%] h-[25vh] sm:h-[75vh]  flex  flex-col items-center sm:items-end justify-center">
            <div className=" font-monte text-[50px] lg:text-[90px] md:text-[60px] text-white opacity-10 ">
              BRINGING UI
            </div>
            <div className="flex gap-5">
              <div className=" font-monte text-[50px] lg:text-[90px] md:text-[60px] text-white opacity-10 w-100 h-100">
                TO
              </div>
              <div className=" font-monte text-[50px] lg:text-[90px] md:text-[60px] text-white opacity-10 w-100 h-100">
                LIFE
              </div>
            </div>
          </div>

          {/*SKILLS*/}
          <div className="w-[100%] h-[auto] sm:h-[75vh] text-center sm:text-left sm:p-[1rem] flex flex-col mt-[1rem] tracking-[4px] ">
            <div>
              <div className="w-full my-[3rem] text-white flex flex-col justify-start  ">
                <span className="text-[3rem] font-monte">Skills</span>
              </div>
              <div className="w-full text-white gap-2 sm:gap-3 flex flex-col justify-start  ">
                <span className="font-light text-yellow-500 text-[1.25rem]">Front-End:</span>{" "}
                <span className="text-[20px] sm:text-[1.75rem] font-bold font-raleway">
                  React JavaScript Redux HTML CSS
                </span>
                <span className="font-light text-yellow-500 text-[1.25rem]">UI/UX: </span>
                <span className="text-[20px] sm:text-[1.75rem] font-bold font-raleway">
                  Illustrator Figma Canava
                </span>
                <span className="font-light text-yellow-500 text-[1.25rem]">Back-End:</span>{" "}
                <span className="text-[20px] sm:text-[1.75rem] font-bold font-raleway">
                  MongoDB Express
                </span>
              </div>
            </div>
            
          </div>
          
          {/* ABOUT  */}
          <div className="w-[100%] h-[auto] sm:h-[75vh] text-center sm:text-right sm:p-[1rem]  flex flex-col mt-[1rem] tracking-[4px] ">
            <div>
              <div className="w-full sm:items-end my-[3rem] text-white flex flex-col   ">
                <span className="text-[3rem] font-monte">About Me</span>
              </div>
              <div className="w-full text-white flex flex-col items-end  ">
                <span className="font-light text-[1.25rem]">
                  Adaptable and social person with great communication skills
                </span>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default About;
