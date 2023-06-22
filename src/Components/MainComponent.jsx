import React from "react";
import Navbar from "./Navbar";
import { useState } from "react";
import NavButton from "./NavButton";
import { HiOutlineMail } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
const MainComponent = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="bg-black w-full h-[100vh] sm:p-[2.5rem] p-[0.5rem]  flex flex-col justify-center items-center">
      {showNav && <Navbar onClickNav={() => setShowNav(!showNav)} />}
      {/* NAVBAR */}
      <div className=" bg-primary_blue flex justify-center font-raleway flex-col pt-0 px-[1rem] items-center w-full h-[100%] ">
        {/* NAVBAR BUTTON */}
        {!showNav && <NavButton onClickNav={() => setShowNav(!showNav)} />}
        {/* NAME */}
        <div className="w-full mt-[3rem] sm:mt-[1rem]">
          <div className="w-full text-white flex justify-center items-center ">
            <span className="sm:text-[4.5rem] text-[3.5rem] font-poppins">
              Yash Verdhan Gupta
            </span>
          </div>
        </div>
        {/* DESCPRIPTION */}
        <div className="w-full tracking-widest mt-[5rem]">
          <div className="w-full text-white flex md:text-center justify-center items-start sm:items-center">
            <span className="text-[20px] w-full sm:text-[2rem] font-poppins">
              Full Stack Developer
            </span>
          </div>
          ``
        </div>
        {/* SOCIAL HANDLE */}
        <div className="w-full flex justify-start md:justify-center mt-[1rem] text-white">
          <a target={"_blank"} href="mailto:yvgupta24@gmail.com">
            <HiOutlineMail className="text-[30px] mr-[15px]" />
          </a>
          <a
            target={"_blank"}
            href="https://www.linkedin.com/in/yashverdhangupta"
          >
            <FaLinkedinIn className="text-[30px] mr-[15px]" />
          </a>
          <a target={"_blank"} href="https://github.com/Yvg2244">
            <AiFillGithub className="text-[30px] mr-[15px]" />
          </a>
        </div>
        {/* RESUME PROJECT */}
        <div className="w-full tracking-widest sm:px-[4rem] mt-[1rem]">
          <div className="w-full text-[20px] md:gap-[2rem] sm:text-[1.5rem] mt-[1rem] sm:mt-[2.5rem] text-yellow-500 flex  justify-between  md:justify-center items-center ">
            <span> Resume</span>
            <Link to="/work"> Projects </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainComponent;
