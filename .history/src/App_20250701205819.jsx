import React from 'react';
import './App.css';
import './styles/animations.css'; // Import the animations CSS
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollAnimations from './components/ScrollAnimations'; // Import our scroll animations

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ScrollAnimations /> {/* Add the scroll animations component */}
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
