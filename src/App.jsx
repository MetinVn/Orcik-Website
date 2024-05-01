import "./css/index.css";
import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Fallback from "./components/Fallback.jsx";
import Header from "./components/Header/Header.jsx";
function App() {
  const About = lazy(() => import("./pages/About.jsx"));
  const Home = lazy(() => import("./pages/Home.jsx"));
  const Cargo = lazy(() => import("./pages/Cargo.jsx"));
  const Order = lazy(() => import("./pages/Order.jsx"));
  const NotFound = lazy(() => import("./pages/NotFound.jsx"));
  const location = useLocation();
  return (
    <Suspense fallback={<Fallback />}>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route exact index path="/Orcik-Website/" Component={Home} />
          <Route exact path="/Orcik-Website/biz-kimiz" Component={About} />
          <Route exact path="/Orcik-Website/kargo" Component={Cargo} />
          <Route exact path="/Orcik-Website/siparis" Component={Order} />
          <Route exact path="/*" Component={NotFound} />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
}

export default App;
