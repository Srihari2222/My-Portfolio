import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { BallCanvas } from "../components/canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";

const Mobiletech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <h3 className={`${styles.sectionHeadText} ${window.innerWidth>762?"":"mt-10"}`}>Languages and Technologies.</h3>
    </motion.div>
    <div className='mt-5 h-full customscroll sm:px-50 px-5 py-10 flex space-x-6 overflow-x-scroll overflow-y-hidden scrollbar-thumb-gray-500 scrollbar-track-gray-300 scrollbar-bold' style={{width:"100%"}}> 
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Mobiletech, "");
