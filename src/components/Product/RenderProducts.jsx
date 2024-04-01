import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Products from "./Products.jsx";
function RenderProducts() {
  const images = {
    img: "https://cdn.pixabay.com/photo/2013/04/07/10/31/walnuts-101425_1280.jpg",
    img1: "https://cdn.pixabay.com/photo/2014/08/26/21/28/nuts-428544_1280.jpg",
    img2: "https://cdn.pixabay.com/photo/2023/04/23/21/14/hazelnuts-7946766_1280.jpg",
    img3: "https://images.unsplash.com/photo-1508061235804-9436954f042f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    img4: "https://images.unsplash.com/photo-1502825751399-28baa9b81efe?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };
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
    <div className="min-h-auto h-fit bg-[#1d0209] pt-4 mt-3">
      <h1 className="text-center font-['Poppins',sans-seriff] font-light py-5 text-2xl md:text-4xl text-[#9c6644]">
        Ürünlerimiz
      </h1>
      <div className="mt-5 md:mb-10 flex flex-col gap-3 sm:gap-4 lg:gap-10">
        <motion.div
          initial="initial"
          whileInView="animate"
          variants={fadeInAnimate}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}>
          <Products
            img={images.img}
            type={"Siyah Üzüm Köpük Orcik"}
            price={"200"}
            stock={"Tükendi"}
            order={"lg:order-last"}
          />
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          variants={fadeInAnimate}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}>
          <Products
            img={images.img1}
            type={"Siyah Üzüm Orcik"}
            price={"230"}
            stock={"Tükendi"}
            order={""}
          />
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          variants={fadeInAnimate}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}>
          <Products
            img={images.img2}
            type={"Siyah Üzüm Köpük Orcik"}
            price={"260"}
            stock={"Tükendi"}
            order={"lg:order-last"}
          />
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          variants={fadeInAnimate}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}>
          <Products
            img={images.img3}
            type={"Siyah Üzüm Orcik"}
            price={"180"}
            stock={"Tükendi"}
            order={""}
          />
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          variants={fadeInAnimate}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}>
          <Products
            img={images.img4}
            type={"Beyaz Üzüm Köpük Orcik"}
            price={"160"}
            stock={"Tükendi"}
            order={"lg:order-last"}
          />
        </motion.div>
        <div className="flex pt-5 mb-5 md:mb-0 justify-center items-center m-auto">
          <Link
            className="bg-[#1A1F1F] font-['Poppins',sans-seriff] font-light rounded-md text-sm md:text-lg py-1 px-5 md:py-2 md:px-10 text-[#FFE4C4] hover:bg-slate-800 duration-100"
            to="/Orcik-Elazig/siparis">
            Sipariş et
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RenderProducts;
