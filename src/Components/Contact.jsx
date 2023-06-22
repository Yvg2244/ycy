import React from "react";
import ProfileImg from "../assets/mainImg.svg";
import Navbar from "./Navbar";
import NavButton from "./NavButton";
import { useState } from "react";

const Contact = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="bg-black w-full h-[100vh] sm:p-[2.5rem] p-[0.5rem]  flex flex-col justify-center items-center">
      {showNav && <Navbar onClickNav={() => setShowNav(!showNav)} />}
      <div className=" bg-primary_blue flex  justify-center font-raleway  flex-col pt-0 items-center w-full h-[100%] ">
        <div>
          {!showNav && <NavButton onClickNav={() => setShowNav(!showNav)} />}
        </div>

        <div className="w-[100%]  overflow-scroll scrollbar-hide grid gap-2 h-[100%] mt-[5rem] ">
          <div className=" bg-primary_blue text-white flex justify-center font-raleway flex-col text-center items-center sm:w-full h-full">
            <div className="w-auto text-[1rem] sm:text-[1.5rem] my-2 font-raleway">
              Feel free to use the contact details below
            </div>
            <div className="w-full  text-[1rem] sm:text-[1.5rem] my-2 font-monte">
              yvgupta24@gmail.com
            </div>

            <div className="w-full px-[10px]">
              <div className="w-full  flex flex-col sm:flex-row  gap-4 justify-between md:justify-center">
                <textarea
                  className="w-[100%] sm:w-[15rem] h-[2rem] my-[.5rem] py-[.25rem] px-[.25rem] bg-slate-900  text-white"
                  placeholder="Name"
                  type="text"
                  name=""
                  id=""
                />
                <textarea
                  className="w-[100%] sm:w-[15rem] h-[2rem] my-[.5rem] py-[.25rem] px-[.25rem] bg-slate-900  text-white"
                  placeholder="Email"
                  type="email"
                  name=""
                  id=""
                />
              </div>
              <div className="w-full flex md:justify-center">
                <textarea
                  className=" w-[100%] sm:w-[32rem]  h-[10rem] my-[1rem] py-[.25rem] px-[.25rem] bg-slate-900  text-white"
                  placeholder="Message"
                  type="text"
                  name=""
                  id=""
                />
              </div>
            </div>

            <div className="w-full text-yellow-500 text-[1.5rem] my-2 font-monte">
              SEND MESSAGE!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
