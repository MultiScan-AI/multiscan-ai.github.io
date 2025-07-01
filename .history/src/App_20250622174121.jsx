import React from 'react';
// Don't import App.css if we're already importing index.css
// import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Team />
      <Contact />
      <Footer />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-blue-600 mb-8">
          Welcome to My Application
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Feature One</h2>
            <p className="text-gray-700">
              This is a test to verify Tailwind styling is working properly.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mt-4">
              Learn More
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Feature Two</h2>
            <p className="text-gray-700">
              If you can see styles applied to this card, Tailwind is working!
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded mt-4">
              Explore
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Feature Three</h2>
            <p className="text-gray-700">
              These should be styled with native Tailwind classes.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded mt-4">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
