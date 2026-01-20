import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
import Home from "./pages/Home";
import FunFact from "./pages/FunFact";
import FAQ from "./pages/FAQ";
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

function App() {
  return (
    <div className=" min-h-auto">
      <Navbar />

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
        </Route>
        <Route path="/funfact" element={<FunFact />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
