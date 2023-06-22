import React from "react";
import { motion } from "framer-motion";
const NavButton = ({ onClickNav }) => {
  return (
    <motion.div
      animate={{ scale: 1.2 }}
      transition={{ delay: 0.5, yoyo: Infinity }}
      onClick={onClickNav}
      className="flex absolute top-[1.5rem] sm:top-[4rem] cursor-pointer flex-col h-auto justify-between items-center gap-[5px] "
    >
      <div className="w-[.75rem] -skew-y-[40deg]  h-[.5rem] bg-yellow-400"></div>
      <div className="w-[.75rem] -skew-y-[40deg]  h-[.5rem] bg-yellow-400"></div>
      <div className="w-[.75rem] -skew-y-[40deg]  h-[.5rem] bg-yellow-400"></div>
    </motion.div>
  );
};

export default NavButton;
