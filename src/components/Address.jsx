import { motion } from "framer-motion";
function Address() {
  const fadeInAnimate = {
    initial: {
      opacity: 0,
      translateY: -20,
    },
    animate: {
      opacity: 1,
      translateY: 0,
    },
    transition: {
      delay: 1,
    },
  };
  return (
    <>
      <div className="w-full font-['Poppins',sans-seriff] font-light py-3 md:py-5 m-auto min-h-full lg:h-[240px] flex flex-col gap-5 lg:gap-0 lg:justify-evenly lg:items-center lg:flex-row text-white bg-[#1A1F1F] duration-300">
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={fadeInAnimate}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="flex flex-col text-center lg:items-start">
          <h1 className="text-sm md:text-lg mb-1 md:mb-3 text-center lg:text-start">
            Üretim
          </h1>
          <a
            className="text-sm md:text-lg md:px-1 underline md:no-underline md:hover:underline"
            target="blank"
            href="https://www.youtube.com/watch?v=LgIsk44pMx8&ab_channel=Kanal23">
            Youtube Elazigda orciği nasıl üretiyoruz
          </a>
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={fadeInAnimate}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="flex flex-col text-center lg:items-start">
          <h1 className="text-sm md:text-lg mb-1 md:mb-3 text-center lg:text-start">
            Adresimiz
          </h1>
          <p className="text-sm md:text-lg md:px-1 underline md:no-underline hover:underline">
            Turkiye, Elazığ, Borat sokağı, Rızaiye mahallesi 9A
          </p>
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={fadeInAnimate}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.9 }}
          className="flex flex-col text-center lg:items-start">
          <h1 className="text-sm md:text-lg mb-1 md:mb-3 text-center lg:text-start">
            Sosyal medya
          </h1>
          <a
            className="text-sm md:text-lg md:px-1 underline md:no-underline md:hover:underline"
            target="blank"
            href="https://www.instagram.com/orcik_elazig23/">
            Instagram
          </a>
        </motion.div>
      </div>
    </>
  );
}
export default Address;
