import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
//mport TestComponent from './components/TestComponent';

// Import other components when they're ready
import About from './components/About';
import Features from './components/Features';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark">
      <Navbar />
      <Hero />
      
      
   
      
       <About />
      <Features />
      <Team />
      <Contact />
      <Footer /> 
      
      
    </div>
  );
}

export default App;
