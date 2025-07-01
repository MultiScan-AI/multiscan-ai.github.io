import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="app-container">
        <Hero />
        <About />
        <Features />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
