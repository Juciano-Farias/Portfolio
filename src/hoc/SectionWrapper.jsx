import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName, work) =>
  function HOC() {
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width: 500px)");

      setMobile(mediaQuery.matches);
      console.log(mediaQuery.matches);

      const handleMediaQueryChange = (event) => {
        setMobile(event.matches);
      };

      mediaQuery.addEventListener("change", handleMediaQueryChange);

      return () => {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
      };
    }, []);
    return (
      <motion.section
        variants={staggerContainer()}
        initial={work == true ? "visible" : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
