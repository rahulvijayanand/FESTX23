import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Speakers from "./pages/Speakers";
import Sponsors from "./pages/Sponsors";
import Contact from "./pages/Contact";

import Hackaholic from "./pages/Hackaholic";
import LightsOn from "./pages/Lightson";
import ParagonQuest from "./pages/Paragonquest";
import BloodyBuggers from "./pages/Bloodybuggers";
import Bizbazzar from "./pages/Bizbazzar";
import Techtale from "./pages/Techtale";
import Pitchup from "./pages/Pitchup";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hackaholic" element={<Hackaholic />} />
          <Route path="/biz-bazaar" element={<Bizbazzar />} />
          <Route path="/bloody-buggers" element={<BloodyBuggers />} />
          <Route path="/lights-on" element={<LightsOn />} />
          <Route path="/paragon-quest" element={<ParagonQuest />} />
          <Route path="/pitch-up" element={<Pitchup />} />
          <Route path="/tech-tale" element={<Techtale />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
