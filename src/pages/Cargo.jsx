import { useState } from "react";
import transition from "../components/Transition";
import Helmet from "../components/Helmet.jsx";
function Cargo() {
  const [seek, setSeek] = useState(false);
  return (
    <>
      <Helmet metaTitle="Cargo - Elazig Orcik" />
      <div className="flex flex-col justify-center text-center px-1 sm:px-0 items-center min-h-screen bg-[#7f5539]">
        <p className="text-xl md:text-3xl text-[#FFE4C4]">
          {seek ? "Kargo bilgileriniz" : " Kargonuzu takip edin"}
        </p>
        {seek ? (
          <div
            onClick={() => setSeek(false)}
            className="bg-[#FFE4C4] text-black p-5 rounded-lg mt-5 cursor-pointer">
            <p>kargo bilgileri</p>
          </div>
        ) : (
          <div className="flex flex-col w-full max-w-[300px] bg-[#9c6644] p-5 rounded-lg mt-5 gap-3">
            <input
              className="pl-2 md:py-1 text-black bg-[#FFE4C4] rounded-full outline-none"
              id="kargo"
              type="text"
              placeholder="Kargo takip numaraniz"
            />
            <button
              onClick={() => setSeek(true)}
              className="p-1 bg-[#FFE4C4] rounded-md text-[#9c6644] hover:scale-[98%] active:scale-90 duration-300">
              Takip et!
            </button>
          </div>
        )}
      </div>
    </>
  );
}
export default transition(Cargo);
