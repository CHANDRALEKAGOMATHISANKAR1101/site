import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import pages/components
import HeroSection from "./components/HeroSection";
import Service from "./components/Service";
import About from "./components/About";
import Facts from "./components/Facts";
import Client from "./components/Client";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Supliers from "./components/Supliers";
import CardSlider from "./components/CardSlider";
import ImageViewer from "./components/ImageViewer";
import FooterHero from "./components/FooterHero";
import TabChanges from "./components/TabChanges";
import Cursor from "./components/Cursor";
// import AnHeader from "./pages/Androidappdevelop/AnHeader"; // Adjust path if necessary

import HeaderSer from "./pages/ProfessionalITService/HeaderSer";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <div className="App">
        {/* Common Header */}
        <Header menuOpen={menuOpen} toggleMenu={toggleMenu} />

        {/* Define Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <TabChanges />
                <Service />
                <CardSlider />
                <About />
                <Facts />
                <Client />
                <Contact />
                <Supliers />
                <Testimonial />
                <ImageViewer />
                <FooterHero />
                <Footer />
              </>
            }
          />
          <Route path="/footer" element={<Footer />} />
          <Route path="/" element={<HeroSection />} />
          {/* <Route path="/android-app-development" element={<AnHeader />} /> */}

          <Route path="/professionalservice" element={<HeaderSer />} />
        </Routes>

        {/* Common Footer */}
        {/* <Cursor /> */}
      </div>
    </Router>
  );
}

export default App;
