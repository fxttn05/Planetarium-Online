import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Home from "./pages/Home";
import FunFact from "./pages/FunFact";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import PlanetLayout from "./pages/planet/PlanetLayout";
import PlanetIndex from "./pages/planet/PlanetIndex";
import Merkurius from "./pages/planet/Merkurius";
import Venus from "./pages/planet/Venus";
import Bumi from "./pages/planet/Bumi";
import Mars from "./pages/planet/Mars";
import Jupiter from "./pages/planet/Jupiter";
import Saturnus from "./pages/planet/Saturnus";
import Uranus from "./pages/planet/Uranus";
import Neptunus from "./pages/planet/Neptunus";
import Pluto from "./pages/planet/Pluto";
import Bulan from "./pages/planet/Bulan";
import Matahari from "./pages/planet/Matahari";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="h-auto">
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planet" element={<PlanetLayout />}>
          <Route index element={<PlanetIndex />} />
          <Route path="merkurius" element={<Merkurius />} />
          <Route path="venus" element={<Venus />} />
          <Route path="bumi" element={<Bumi />} />
          <Route path="mars" element={<Mars />} />
          <Route path="jupiter" element={<Jupiter />} />
          <Route path="saturnus" element={<Saturnus />} />
          <Route path="uranus" element={<Uranus />} />
          <Route path="neptunus" element={<Neptunus />} />
          <Route path="pluto" element={<Pluto />} />
          <Route path="bulan" element={<Bulan />} />
          <Route path="matahari" element={<Matahari />} />
        </Route>
        <Route path="/funfact" element={<FunFact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
