import { motion } from "framer-motion";
import "../css/DesktopAnimation.css";
function DesktopAnimation() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 1 }}
      className="mouse">
      <div className="wheel"></div>
    </motion.div>
  );
}

export default DesktopAnimation;
