import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Navbar = ({ onClickNav }) => {
  return (
    <div className="w-full scroll-smooth z-10 text-black sm:text-white absolute top-0 sm:top-[1rem] py-[0rem] sm:py-[1rem] px-[0rem] sm:px-[1rem] tracking-widest flex flex-col sm:flex-row  font-poppins justify-center items-center bg-white sm:bg-black  bg-opacity-70 backdrop-blur-lg drop-shadow-sm h-[100vh] sm:h-[auto]">
      <Link to="/" className="sm:px-[4rem] py-[2rem] sm:py-[1.5rem] text-md">
        HOME
      </Link>
      <Link
        to="/about"
        className="sm:px-[4rem] py-[2rem] sm:py-[1.5rem] text-md"
      >
        ABOUT
      </Link>
      <Link
        to="/work"
        
        className="sm:px-[4rem] py-[2rem] sm:py-[1.5rem] text-md"
      >
        <motion.span>WORK</motion.span>
      </Link>
      <Link
        to="/contact"
        whilehover={{ scale: 1.2 }}
        className="sm:px-[4rem] py-[2rem] sm:py-[1.5rem] text-md"
      >
        CONTACT
      </Link>
      <div
        onClick={onClickNav}
        className="cursor-pointer absolute sm:px-[4rem] px-[1.5rem] sm:py-[1.5rem] py-[2rem] text-md top-[0rem] sm:top-[1rem] sm:right-[1rem] right-0"
      >
        X
      </div>   
    </div>
  );
};
export default Navbar;
