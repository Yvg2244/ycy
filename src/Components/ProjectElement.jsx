import React from "react";
import { motion } from "framer-motion";
import { FaGithubSquare } from 'react-icons/fa';
import { AiFillCode } from 'react-icons/ai';

const ProjectElement = ({ codeURL, codeImage, title, topic, time, descp }) => {
  const projectStyle = {
    backgroundImage: `url(${codeImage})`,
  };
  return (
    <div className="w-full flex text-[1rem] cursor-pointer p-5 font-monte items-center justify-between">
      <div className="text-center w-[25%] ">{topic}</div>
      <div
        style={projectStyle}
        className="w-[50%] text-[3rem] py-[5rem] border-2 border-yellow-300  bg-slate-900  flex flex-col text-center justify-center items-center"
      >
        {title}

        <div className="flex w-[100%] flex-between mt-5 justify-evenly">
         <AiFillCode/>
         <FaGithubSquare/>

        </div>
      </div>
      <div className="w-[25%] text-center">{time}</div>
    </div>
  );
};

export default ProjectElement;
