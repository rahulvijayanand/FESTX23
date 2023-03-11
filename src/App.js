import React from "react"
import { Routes,Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Events from "./pages/Events";
import Speakers from "./pages/Speakers";
import Sponsors from "./pages/Sponsors";
import Contact from "./pages/Contact";

import EventDetails from "./components/EventDetails";
import { bloodyBuggers, LightsOn, paragonQuest, bizBazaar, hackaholic, techtale, pitchup} from "./components/EventDetailsContent";

function App() {
  return (
    <>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/speakers" element={<Speakers/>}/>
          <Route path="/sponsors" element={<Sponsors/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/hackaholic" element={<EventDetails event={hackaholic}/>}/>
          <Route path="/biz-bazaar" element={<EventDetails event={bizBazaar}/>}/>
          <Route path="/bloody-buggers" element={<EventDetails event={bloodyBuggers}/>}/>
          <Route path="/lights-on" element={<EventDetails event={LightsOn}/>}/>
          <Route path="/paragon-quest" element={<EventDetails event={paragonQuest}/>}/>
          <Route path="/pitch-up" element={<EventDetails event={pitchup}/>}/>
          <Route path="/tech-tale" element={<EventDetails event={techtale}/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App;