import { useRef, useEffect } from "react";
import classes from "./Reveal.module.css";
import { motion, useInView, useAnimation } from "framer-motion";

const Reveal = (props) => {
  const width = props.width || "fit-content";

  const ref = useRef(undefined);
  const isInView = useInView(ref);
  const mainControl = useAnimation();
  const slideControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControl.start("visible");
      slideControl.start("visible");
    }
  }, [isInView, mainControl, slideControl]);

  return (
    <div className={classes.reveal} style={{ width }} ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -75 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.5, delay: 0.25 }}
        initial="hidden"
        animate={mainControl}
      >
        {props.children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControl}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className={classes.reveal__slide}
      ></motion.div>
    </div>
  );
};

export default Reveal;
