import Helmet from "../components/Helmet";
import { useState, useRef, Suspense } from "react";
import transition from "../components/Transition";
import Fallback from "../components/Fallback";
import video from "../videos/Orcik.mp4";
export function About() {
  const [sound, setSound] = useState(false);
  const [play, setPlay] = useState(true);

  const videoRef = useRef();
  const playVideo = () => {
    videoRef.current.play();
    setPlay(false);
  };
  const pauseVideo = () => {
    videoRef.current.pause();
    setPlay(true);
  };
  return (
    <>
      <Helmet metaTitle="About - Elazig Orcik" />
      <div className="flex flex-col h-screen bg-[#9c6644] justify-center items-center">
        <div className="relative flex flex-col p-2 mt-10">
          <p className="text-white text-xs font-bold">
            Orciği nasıl üretiyoruz TRT Haberde
          </p>
          <p className="text-white text-xs font-bold">
            Bu görüntüler bize aittir. Daha fazlası için
            <a
              className="text-pink-300 ml-1 hover:text-pink-500 hover:underline duration-300"
              target="blank"
              href="https://www.instagram.com/orcik_elazig23/">
              instagram
            </a>
          </p>
          <Suspense fallback={<Fallback />}>
            <video
              ref={videoRef}
              className="h-[500px] w-[500px] md:h-[600px] md:mb-5 object-cover object-center rounded-md"
              src={video}
              loop
              muted={sound}></video>
          </Suspense>
          <button
            className="absolute text-white bg-black/40 p-3 rounded-full hover:bg-black/70 top-[15%] left-[5%]"
            onClick={() => setSound(!sound)}>
            Ses
          </button>
        </div>
        <div className="flex text-white flex-row justify-center items-center gap-5 sm:gap-10">
          {play ? (
            <button
              className="hover:bg-black px-3 py-1 sm:px-10 sm:py-2 bg-black/30 rounded-md duration-300"
              onClick={playVideo}>
              Oynat
            </button>
          ) : (
            <button
              className="hover:bg-black px-3 py-1 sm:px-10 sm:py-2 bg-black/30 rounded-md duration-300"
              onClick={pauseVideo}>
              Durdur
            </button>
          )}
        </div>
      </div>
    </>
  );
}
export default transition(About);
