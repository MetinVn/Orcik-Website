import "./css/index.css";
import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Fallback from "./components/Fallback.jsx";
function App() {
  const About = lazy(() => import("./pages/About.jsx"));
  const Home = lazy(() => import("./pages/Home.jsx"));
  const Cargo = lazy(() => import("./pages/Cargo.jsx"));
  const Order = lazy(() => import("./pages/Order.jsx"));
  const NotFound = lazy(() => import("./pages/NotFound.jsx"));
  const location = useLocation();
  return (
    <Suspense fallback={<Fallback />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route index path="/Orcik-Elazig/" Component={Home} />
          <Route path="/Orcik-Elazig/biz-kimiz" Component={About} />
          <Route path="/Orcik-Elazig/kargo" Component={Cargo} />
          <Route path="/Orcik-Elazig/siparis" Component={Order} />
          <Route path="/*" Component={NotFound} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

export default App;
