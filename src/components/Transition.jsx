import { motion } from "framer-motion";
import BeatLoader from "react-spinners/ScaleLoader";
import "../css/Transition.css";
const transition = (OgComponent) => {
  return () => (
    <>
      <OgComponent />
      <motion.div
        className="text-center"
        id="slidein"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
        <BeatLoader loading={true} speedMultiplier={1} color="#7f5539" />
      </motion.div>
      <motion.div
        id="slideout"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}></motion.div>
    </>
  );
};

export default transition;
