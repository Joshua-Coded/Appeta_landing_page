import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import AboutAppeta from './components/AboutAppeta';
import AboutUs from './components/AboutUs';
import OrderProcess from './components/OrderProcess';
import Testimonials from './components/Testimonials';
import Vendors from './components/Vendors';
import GetStarted from './components/GetStarted';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const Home = () => (
  <>
    <HeroSection />
    <AboutAppeta />
    <OrderProcess />
    <Testimonials />
    <Vendors />
    <GetStarted />
  </>
);

export default App;
