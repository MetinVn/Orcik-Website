import DesktopAnimation from "../../functions/DesktopAnimation";
import MobileAnimation from "../../functions/MobileAnimation";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div
      id="background-image"
      className="w-full bg-[#FFE4C4] flex flex-col items-center justify-center h-full min-h-screen">
      {/*Desktop && Mobile Scroll Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0 }}
        className="flex h-full w-full justify-center text-center ">
        <span className="font-[Poppins,sans-seriff] text-6xl text text-[#c38444]">
          Elazigin en kaliteli orcigi
        </span>
      </motion.div>
      <div className="desktop-animate hidden lg:block">
        <DesktopAnimation />
      </div>
      <div className="mobile-animate block lg:hidden">
        <MobileAnimation />
      </div>
    </div>
  );
};

export default Hero;
