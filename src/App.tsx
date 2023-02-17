import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    setLoading(true);
    const timer = setInterval(() => {
      setLoading(false);
    }, 2000);
    return () => clearInterval(timer);
  }, [pathname]);
  return loading ? (
    <Loader />
  ) : (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
      </Routes>
    </>
  );
}

export default App;
