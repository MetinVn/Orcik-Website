import { lazy, Suspense, useRef, useState } from "react";
import BarLoader from "react-spinners/BarLoader";
import emailjs from "@emailjs/browser";
import transition from "../components/Transition";
import Helmet from "../components/Helmet";
export function Order() {
  const Email = lazy(() => import("@mui/icons-material/Email"));
  const ContactPhone = lazy(() => import("@mui/icons-material/ContactPhone"));
  const Error = lazy(() => import("@mui/icons-material/Error"));
  const Check = lazy(() => import("@mui/icons-material/Check"));
  const Person = lazy(() => import("@mui/icons-material/Person"));
  const Header = lazy(() => import("../components/Header/Header"));

  const form = useRef();
  const [initiate, setInitiate] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zc4b97k",
        "template_iptxqib",
        form.current,
        "rCrT1n53c0ETmjuhV"
      )
      .then(
        () => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            setSuccess(true);
          }, 2000);
        },
        () => {
          setLoading(true);
          setTimeout(() => {
            setLoading(false);
            setSuccess(false);
          }, 2000);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <Helmet metaTitle="Order - Elazig Orcik" />
      <Suspense fallback={<p>Loading Header</p>}>
        <Header />
      </Suspense>
      <div className="min-h-screen flex px-5 sm:px-0 justify-center items-center bg-[#7f5539]">
        <div className="text-center">
          <p className="pb-5 text-[#FFE4C4] font-['Arial'] text-2xl">
            Sipariş etmek için formu doldurunuz
          </p>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="border border-[#FFE4C4] text-[#FFE4C4] rounded-lg m-auto max-w-[400px] p-5 grid gap-1">
            <label htmlFor="name" className="flex items-center">
              <Suspense fallback={<div>X</div>}>
                <Person fontSize="small" sx={{ color: "bisque" }} />
              </Suspense>
              İsim
            </label>
            <input
              className="shadow-sm text-xs h-5 py-3 shadow-black hover:shadow-lg focus:shadow-lg pl-2 outline-none w-full bg-[#FFE4C4] text-black rounded-sm"
              type="text"
              id="name"
              name="user_name"
              autoComplete="false"
              required
            />
            <label htmlFor="email" className="flex items-center">
              <Suspense fallback={<div>X</div>}>
                <Email fontSize="small" sx={{ color: "bisque" }} />
              </Suspense>
              Email*
            </label>
            <input
              type="email"
              name="user_email"
              className="text-xs h-5 py-3 shadow-sm shadow-black hover:shadow-lg focus:shadow-lg pl-2 outline-none w-full bg-[#FFE4C4] text-black rounded-sm"
              id="email"
              autoComplete="false"
              required
            />
            <label htmlFor="user_number" className="flex items-center">
              <Suspense fallback={<div>X</div>}>
                <ContactPhone fontSize="small" sx={{ color: "bisque" }} />
              </Suspense>
              İletişim numarası*
            </label>
            <input
              type="text"
              className="text-xs h-5 py-3 shadow-sm shadow-black pl-2 hover:shadow-lg focus:shadow-lg outline-none w-full bg-[#FFE4C4] text-black rounded-sm"
              name="user_number"
              id="user_number"
              autoComplete="false"
              required
            />
            <button
              onClick={() => setInitiate(true)}
              type="submit"
              className="block w-full text-center bg-[#9c6644] hover:bg-[#FFE4C4] duration-300 active:scale-95 mt-3 hover:text-black rounded-sm">
              Sipariş et
            </button>

            <div className="m-auto mt-3">
              {initiate ? (
                loading ? (
                  <BarLoader color="black" />
                ) : success ? (
                  <span className="px-2 py-1 text-xs flex justify-center items-center bg-green-600 rounded-sm text-white">
                    <Suspense fallback={<div>X</div>}>
                      <Check fontSize="small" sx={{ color: "bisque" }} />
                    </Suspense>
                    Mesaj gönderildi
                  </span>
                ) : (
                  <span className="px-2 py-1 text-xs flex justify-center items-center bg-red-600 rounded-sm text-white">
                    <Suspense fallback={<div>X</div>}>
                      <Error fontSize="small" sx={{ color: "bisque" }} />
                    </Suspense>
                    Mesaj gönderilemedi!
                  </span>
                )
              ) : (
                ""
              )}
            </div>
          </form>
          <p className="text-[13px] sm:text-sm ml-1 text-[#FFE4C4] pt-1 font-['Arial']">
            *İletişim numaranızı sipariş ve kargo bilgileri için arayacağız
          </p>
          <p className="text-[13px] sm:text-sm ml-1 text-[#FFE4C4] pt-1 font-['Arial']">
            *Mail adresinize kargo takip numarasını göndereceğiz
          </p>
        </div>
      </div>
    </>
  );
}
export default transition(Order);
