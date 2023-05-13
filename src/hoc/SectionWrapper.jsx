import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const StarWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        {(window.innerWidth>768)?<span className="hash-span" id={idName} >
          &nbsp;
        </span>:<span className="hash-span" id={idName} style={{padding:"0px 0px 10px"}}></span>
        }
        

        <Component />
      </motion.section>
    );
  };

export default StarWrapper;
