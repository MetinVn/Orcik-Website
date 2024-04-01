import { lazy, Suspense, useReducer } from "react";
import { motion } from "framer-motion";
import "../css/InfoButton.css";
const InfoButton = () => {
  const Close = lazy(() => import("@mui/icons-material/Close"));
  const VerifiedUserRounded = lazy(() =>
    import("@mui/icons-material/VerifiedUserRounded")
  );
  const InfoOutlined = lazy(() => import("@mui/icons-material/InfoOutlined"));
  const WhatsApp = lazy(() => import("@mui/icons-material/WhatsApp"));
  const Email = lazy(() => import("@mui/icons-material/Email"));
  const reducer = (reduce, action) => {
    switch (action.type) {
      case "infoOpen":
        return { info: (reduce.info = true) };
      case "infoClose":
        return { info: (reduce.info = false) };
      default:
        return reduce;
    }
  };
  const [reduce, dispatch] = useReducer(reducer, {
    info: false,
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`fixed flex flex-col justify-center cursor-pointer items-center bottom-2 right-0 md:bottom-10 md:right-10 text-white shadow-xl shadow-black/40 overflow-hidden bg-slate-600 duration-300 ${
        reduce.info ? "animate scale" : "animate"
      }`}>
      {reduce.info ? (
        <div>
          <span className="absolute font-['Open Sans',sans-seriff] sm:tracking-normal sm:text-sm top-1 left-2 text-[#FFE4C4] ">
            Hemen sipariş ver!
          </span>
          <span className="absolute text-sm top-0 right-1">
            <Suspense fallback={<div>X</div>}>
              <Close
                fontSize="small"
                sx={{ color: "bisque" }}
                onClick={() => dispatch({ type: "infoClose" })}
              />
            </Suspense>
          </span>
          <span className="absolute left-0 top-6 right-0 w-full bg-[#FFE4C4] h-[1px] "></span>
          <div className="flex flex-col pt-3">
            <p className=" text-white text-center text-xs">Servis</p>
            <span className="flex flex-row gap-1 mt-2 items-center w-full text-[13px] text-white">
              <Suspense fallback={<div>X</div>}>
                <VerifiedUserRounded
                  fontSize="small"
                  sx={{ color: "bisque" }}
                  onClick={() => dispatch({ type: "infoClose" })}
                />
              </Suspense>
              Şikayet ve önerilerinizi doğrudan bize iletin
            </span>
            <span className="flex flex-row gap-1 items-center w-full text-[13px] text-white">
              <Suspense fallback={<div>X</div>}>
                <VerifiedUserRounded
                  fontSize="small"
                  sx={{ color: "bisque" }}
                  onClick={() => dispatch({ type: "infoClose" })}
                />
              </Suspense>
              7/24 müşteri hizmeti
            </span>
            <span className="flex flex-row gap-1 items-center w-full text-[13px] text-white">
              <Suspense fallback={<div>X</div>}>
                <VerifiedUserRounded
                  fontSize="small"
                  sx={{ color: "bisque" }}
                  onClick={() => dispatch({ type: "infoClose" })}
                />
              </Suspense>
              Türkiyenin her yerine karşı ödemeli kargo
            </span>
            <span className="flex flex-row gap-1 items-center w-full text-[13px] text-white">
              <Suspense fallback={<div>X</div>}>
                <VerifiedUserRounded
                  fontSize="small"
                  sx={{ color: "bisque" }}
                  onClick={() => dispatch({ type: "infoClose" })}
                />
              </Suspense>
              Ürünlerin hepsi 100% doğal olarak üretilmiştir
            </span>
          </div>
          <div className="flex flex-col pt-3">
            <p className="text-white text-center text-xs">İletişim bilgileri</p>
            <span className="flex flex-row mt-2 items-center text-[15px] text-white gap-1">
              <Suspense fallback={<div>X</div>}>
                <WhatsApp
                  fontSize="small"
                  sx={{ color: "bisque" }}
                  onClick={() => dispatch({ type: "infoClose" })}
                />
              </Suspense>
              +90 538 014 04 09
            </span>
            <span className="flex flex-row items-center text-[15px] text-white gap-1">
              <Suspense fallback={<div>X</div>}>
                <WhatsApp
                  fontSize="small"
                  sx={{ color: "bisque" }}
                  onClick={() => dispatch({ type: "infoClose" })}
                />
              </Suspense>
              +90 537 767 12 74
            </span>
            <span className="flex flex-row items-center text-[15px] text-white gap-1">
              <Suspense fallback={<div>X</div>}>
                <Email
                  fontSize="small"
                  sx={{ color: "bisque" }}
                  onClick={() => dispatch({ type: "infoClose" })}
                />
              </Suspense>
              orcikelazig@gmail.com
            </span>
          </div>
        </div>
      ) : (
        <span
          className="flex h-full items-center justify-center"
          onClick={() => dispatch({ type: "infoOpen" })}>
          <Suspense fallback={<div>X</div>}>
            <InfoOutlined
              fontSize="small"
              sx={{ color: "bisque" }}
              onClick={() => dispatch({ type: "infoClose" })}
            />
          </Suspense>
        </span>
      )}
    </motion.div>
  );
};
export default InfoButton;
