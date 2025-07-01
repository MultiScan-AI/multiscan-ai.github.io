import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

// Import other components when they're ready
// import About from './components/About';
// import Features from './components/Features';
// import Team from './components/Team';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark">
      <Navbar />
      <Hero />
      
      {/* Temporarily comment out components that aren't created yet */}
      {/* <About />
      <Features />
      <Team />
      <Contact />
      <Footer /> */}
      
      {/* Demo section to verify Tailwind is working */}
      <section className="py-16 bg-white dark:bg-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Demo Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-primary">Feature One</h3>
              <p className="text-dark dark:text-white">
                This is a test to verify Tailwind styling is working properly.
              </p>
              <button className="mt-4 bg-primary text-white px-4 py-2 rounded">
                Learn More
              </button>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-secondary">Feature Two</h3>
              <p className="text-dark dark:text-white">
                If you can see styles applied to this card, Tailwind is working!
              </p>
              <button className="mt-4 bg-secondary text-white px-4 py-2 rounded">
                Explore
              </button>
            </div>
            <div className="bg-white shadow-md p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-accent">Feature Three</h3>
              <p className="text-dark dark:text-white">
                These should be styled with native Tailwind classes.
              </p>
              <button className="mt-4 bg-accent text-dark px-4 py-2 rounded">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
