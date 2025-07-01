import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div id="home" className="pt-20 min-h-screen flex items-center bg-white dark:bg-dark">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Advanced Medical Imaging with <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">AI Precision</span>
            </h1>
            <p className="text-lg md:text-xl mb-8">
              MultiScan AI delivers cutting-edge medical imaging analysis, empowering healthcare professionals with accurate diagnostics through advanced artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md font-medium shadow-lg hover:shadow-xl transition-all">
                Get Started
              </button>
              <button className="bg-transparent border-2 border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-md font-medium transition-all">
                Learn More
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Placeholder for your image/animation */}
              <div className="bg-gradient-to-r from-primary to-secondary rounded-xl h-80 w-full shadow-2xl flex items-center justify-center">
                <span className="text-white text-xl">AI Medical Imaging</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
