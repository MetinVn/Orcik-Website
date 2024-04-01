import { lazy, Suspense } from "react";
import Fallback from "../components/Fallback.jsx";
import transition from "../components/Transition.jsx";
import Helmet from "../components/Helmet.jsx";
export function Home() {
  const Hero = lazy(() => import("../components/Hero/Hero.jsx"));
  const Header = lazy(() => import("../components/Header/Header.jsx"));
  const RenderProducts = lazy(() =>
    import("../components/Product/RenderProducts.jsx")
  );
  const Address = lazy(() => import("../components/Address.jsx"));
  const MiddleSec = lazy(() => import("../components/MiddleSec.jsx"));
  const InfoButton = lazy(() => import("../components/InfoButton.jsx"));

  return (
    <>
      <Helmet metaTitle="Home - Elazig Orcik" />
      <Suspense fallback={<Fallback />}>
        <div>
          <Header />
        </div>
        <div className="bg-[#390312]  min-h-full h-auto">
          <Hero />
          <div className="max-w-[1550px] min-h-screen w-full mt-5 mx-auto flex flex-col">
            <MiddleSec />
            <RenderProducts />
          </div>
          <Address />
        </div>
        <InfoButton />
      </Suspense>
    </>
  );
}
export default transition(Home);
