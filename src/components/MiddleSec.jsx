import { motion } from "framer-motion";
import grape from "../images/üzüm.avif";
import nuts from "../images/component-ceviz.avif";
const MiddleSec = () => {
  const fadeInAnimate = {
    initial: {
      opacity: 0,
      translateY: -50,
    },
    animate: {
      opacity: 1,
      translateY: 0,
    },
    transition: {
      duration: 1,
    },
  };
  return (
    <div className="flex flex-col justify-center mb-5 text-center gap-[20px]">
      <motion.h1
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-lg font-['Poppins',sans-seriff] md:text-2xl lg:text-5xl lg:my-10 text-[#9c6644] tracking-wide md:tracking-normal">
        En kaliteli cevizleri ve üzümleri toplayarak sizler için ürettik
      </motion.h1>
      <div className="flex flex-col justify-center gap-[20px] mx-auto items-center w-full max-w-[1400px]">
        <div className="grid grid-cols-1 align-middle lg:flex lg:flex-row lg:items-center lg:gap-10 lg:justify-center">
          <motion.img
            variants={fadeInAnimate}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            src={grape}
            className="max-w-[600px] order-last lg:order-none px-1 sm:px-0 rounded-md m-auto w-full h-fit md:h-[300px] lg:h-[350px] object-cover object-center"
            alt="grape"
          />
          <motion.p
            variants={fadeInAnimate}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-[#e6ccb2] font-['Poppins',sans-seriff] font-light px-1 sm:px-0 text-lg lg:text-2xl leading-tight lg:leading-loose tracking-tight my-5">
            Orciklerin en iyi kıvama gelmesi için kendi yetişdirdiğimiz üzümleri
            kullanıyoruz.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 align-middle lg:flex lg:flex-row lg:items-center lg:gap-10 lg:justify-center">
          <motion.p
            variants={fadeInAnimate}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 1.3 }}
            className="text-[#e6ccb2] font-['Poppins',sans-seriff] font-light px-1 sm:px-0 text-lg lg:text-2xl leading-tight lg:leading-loose tracking-tight my-5">
            Cevizlerin yüksek kalitede olması, orciklerin mükemmel bir tat
            vermesinin sırrıdır.
          </motion.p>
          <motion.img
            variants={fadeInAnimate}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: 1 }}
            src={nuts}
            className="max-w-[600px] px-1 sm:px-0 rounded-md m-auto w-full h-fit md:h-[300px] lg:h-[350px] object-cover object-center"
            alt="nuts"
          />
        </div>
      </div>
    </div>
  );
};

export default MiddleSec;
