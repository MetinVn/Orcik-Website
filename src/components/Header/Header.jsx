import { useReducer } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../../css/Header.css";
export function Header() {
  const reducer = (reduce, action) => {
    switch (action.type) {
      case "OpenMenu":
        return { animate: !reduce.animate };
      default:
        return reduce;
    }
  };
  const [reduce, dispatch] = useReducer(reducer, {
    animate: false,
  });
  return (
    <>
      {/*Navigation Desktop View*/}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-[#eaeaea] font-['Open Sans',sans-seriff] md:flex bg-black fixed top-0 w-full hidden flex-row justify-between py-3 px-10 z-10">
        <Link
          className="animate_header relative font-['Open_Sans'] italic lg:hover:text-blue-300 "
          to="/Orcik-Website/">
          Elazığ Orcik Ağası (Yöresel ürünler)
        </Link>
        <div className="mx-3 flex gap-5">
          <Link
            className="animate_header relative lg:hover:text-blue-300"
            to="/Orcik-Website/biz-kimiz">
            Hakkımızda
          </Link>
          <Link
            className="animate_header relative lg:hover:text-blue-300"
            to="/Orcik-Website/kargo">
            Kargo Takip
          </Link>
        </div>
      </motion.nav>
      {/*Navigation Mobile View */}
      <div
        onClick={() => dispatch({ type: "OpenMenu" })}
        className="container md:hidden">
        <div className={reduce.animate ? "menu openmenu" : "menu"} id="menu">
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
        </div>
      </div>
      {reduce.animate ? (
        <div className="md:hidden burgerMenu text-[#e6ccb2] flex flex-col text-center justify-center gap-3">
          <Link to="/Orcik-Website/">Elazığ Orcik Ağası</Link>
          <Link to="/Orcik-Website/siparis">Sipariş</Link>
          <Link to="/Orcik-Website/biz-kimiz">Hakkımızda</Link>
          <Link to="/Orcik-Website/kargo">Kargo Takip</Link>
        </div>
      ) : (
        <div className="md:hidden burgerMenu burgerMenu-close"></div>
      )}
    </>
  );
}
export default Header;
