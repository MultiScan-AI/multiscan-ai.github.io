import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center overflow-hidden pattern-mesh">
      {/* Enhanced Background decoration with gradients */}
      <div className="absolute -top-40 -right-40 w-96 h-96 gradient-hero rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 gradient-hero rounded-full blur-3xl opacity-20" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] gradient-hero rounded-full blur-3xl opacity-10"></div>
      
      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full blur-xl opacity-40 animate-bounce" style={{animationDuration: '3s', animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br from-secondary-400 to-tertiary-400 rounded-full blur-xl opacity-40 animate-bounce" style={{animationDuration: '4s'}}></div>
      
      <div className="container-custom py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="px-4 py-2 rounded-full bg-primary-50 text-primary-600 font-medium text-sm inline-block mb-6">
                Next-Gen Healthcare AI
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 leading-tight"
            >
              Advanced Medical Imaging with <span className="heading-gradient">AI Precision</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-10"
            >
              Empowering healthcare professionals with accurate diagnostics through advanced artificial intelligence, bringing cutting-edge technology to underserved regions.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="btn btn-gradient text-white font-semibold">Get Started</button>
              <button className="btn btn-gradient-secondary text-white font-semibold">Learn More</button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center items-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Image container with decoration */}
              <div className="absolute inset-0 bg-primary-500/10 rounded-3xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-secondary-500/10 rounded-3xl transform -rotate-3"></div>
              
              <div className="relative bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-1 shadow-2xl">
                <div className="bg-white dark:bg-dark rounded-xl overflow-hidden">
                  <div className="aspect-video w-full bg-gradient-to-r from-primary-400/20 to-secondary-400/20 flex items-center justify-center p-8">
                    <img 
                      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80" 
                      alt="AI Medical Imaging"
                      className="w-full h-full object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
              
              {/* Stats floating card */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute -bottom-10 -left-10 bg-white dark:bg-dark/90 rounded-xl shadow-soft p-5 w-64"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Accuracy Rate</p>
                    <p className="text-2xl font-bold text-primary-500">95.8%</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Second stats floating card */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                className="absolute -top-10 -right-10 bg-white dark:bg-dark/90 rounded-xl shadow-soft p-5 w-64"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-secondary-50 dark:bg-secondary-900/20 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Diagnosis Time</p>
                    <p className="text-2xl font-bold text-secondary-500">&lt; 30s</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
