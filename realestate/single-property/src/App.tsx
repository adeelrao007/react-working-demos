import React from 'react';

import './assets/css/colors/scheme-01.css';
import './assets/css/bootstrap.min.css';
import './assets/css/plugins.css';

import './assets/css/style.css';
// ...other CSS imports

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Facilities from './components/Facilities';
import Floorplan from './components/Floorplan';
import Gallery from './components/Gallery';
import LocationHighlights from './components/LocationHighlights';
import Contact from './components/Contact';
import Marquee from './components/Marquee';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <HeroSection />
      <Features />
      <Facilities />
      <Floorplan />
      <Gallery />
      <LocationHighlights />
      <Contact />
      <Marquee />
      <Footer />
    </div>
  );
}

export default App;
