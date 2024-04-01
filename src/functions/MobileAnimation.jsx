import { motion } from "framer-motion";
import { lazy, Suspense } from "react";
import "../css/MobileAnimation.css";
function MobileAnimation() {
  const ArrowUpward = lazy(() => import("@mui/icons-material/ArrowUpward"));
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0 }}>
      <div className="arrow">
        <Suspense fallback={<div>X</div>}>
          <ArrowUpward
            fontSize="medium"
            sx={{ color: "burlywood" }}
            className="arrow"
          />
        </Suspense>
      </div>
    </motion.div>
  );
}

export default MobileAnimation;
