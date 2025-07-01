import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
function App() {
  const [count, setCount] = useState(0)

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
        <h1 className="text-4xl font-bold text-primary mb-8">
          Welcome to My Application
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card">
            <h2 className="text-2xl font-semibold mb-4">Feature One</h2>
            <p className="text-gray-700 dark:text-gray-300">
              This is a test to verify Tailwind styling is working properly.
            </p>
            <button className="btn btn-primary mt-4">Learn More</button>
          </div>
          <div className="card">
            <h2 className="text-2xl font-semibold mb-4">Feature Two</h2>
            <p className="text-gray-700 dark:text-gray-300">
              If you can see styles applied to this card, Tailwind is working!
            </p>
            <button className="btn btn-secondary mt-4">Explore</button>
          </div>
          <div className="card">
            <h2 className="text-2xl font-semibold mb-4">Feature Three</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Custom components like .card and .btn should be styled properly.
            </p>
            <button className="btn btn-accent mt-4">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
