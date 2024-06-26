import transition from "../components/Transition";
import Helmet from "../components/Helmet";
export function NotFound() {
  return (
    <>
      <Helmet metaTitle="Page not found 404" />
      <div className="flex flex-col gap-3 text-red-600 bg-black h-screen justify-center items-center">
        <h1 className="border rounded-lg p-1 border-red-500">
          Aradığınız sayfa bulunamadı 404
        </h1>
        <a
          href="/Orcik-Website"
          className="text-white border rounded-lg p-1 hover:bg-white hover:text-black duration-300">
          Geri dön
        </a>
      </div>
    </>
  );
}
export default transition(NotFound);
