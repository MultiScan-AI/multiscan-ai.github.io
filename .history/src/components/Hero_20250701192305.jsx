import React from 'react';
import { motion } from 'framer-motion';

// Import screenshots
import screenshot1 from '../assets/images/Simulator Screenshot - iPhone 16 Pro - 2025-07-01 at 19.12.18.png';
import screenshot2 from '../assets/images/Simulator Screenshot - iPhone 16 Pro - 2025-07-01 at 19.13.06.png';
import screenshot3 from '../assets/images/Simulator Screenshot - iPhone 16 Pro - 2025-07-01 at 19.13.35.png';
import screenshot4 from '../assets/images/Simulator Screenshot - iPhone 16 Pro - 2025-07-01 at 19.14.15.png';

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
          
          {/* iPhone Screenshots Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center items-center relative"
          >
            <div className="relative w-full max-w-lg h-[600px]">
              {/* Background decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-3xl blur-lg transform rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-secondary-500/20 to-tertiary-500/20 rounded-3xl blur-lg transform -rotate-6"></div>
              
              {/* iPhone Mockups with Screenshots */}
              {/* First Screenshot - Main/Front */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
              >
                <div className="relative">
                  {/* iPhone Frame */}
                  <div className="w-[280px] h-[570px] bg-gradient-to-br from-primary-500 to-secondary-500 rounded-[50px] p-1 shadow-2xl">
                    <div className="w-full h-full bg-gray-800 rounded-[46px] overflow-hidden border-4 border-gray-800 relative">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-6 bg-gray-800 rounded-b-xl z-20"></div>
                      {/* Screenshot Image */}
                      <img 
                        src={screenshot1} 
                        alt="MultiScan AI App Screenshot 1" 
                        className="w-full h-full object-cover rounded-[40px]" 
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Second Screenshot - Behind Left */}
              <motion.div 
                initial={{ opacity: 0, x: -50, y: 30, rotate: -15 }}
                animate={{ opacity: 0.9, x: -90, y: -20, rotate: -15 }}
                transition={{ duration: 1, delay: 1.1 }}
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <div className="w-[260px] h-[530px] bg-primary-600/80 rounded-[46px] p-1 shadow-xl">
                  <div className="w-full h-full bg-gray-800 rounded-[42px] overflow-hidden border-4 border-gray-800">
                    <img 
                      src={screenshot2} 
                      alt="MultiScan AI App Screenshot 2" 
                      className="w-full h-full object-cover rounded-[36px]" 
                    />
                  </div>
                </div>
              </motion.div>
              
              {/* Third Screenshot - Behind Right */}
              <motion.div 
                initial={{ opacity: 0, x: 50, y: 30, rotate: 15 }}
                animate={{ opacity: 0.9, x: 90, y: -20, rotate: 15 }}
                transition={{ duration: 1, delay: 1.4 }}
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
              >
                <div className="w-[260px] h-[530px] bg-secondary-600/80 rounded-[46px] p-1 shadow-xl">
                  <div className="w-full h-full bg-gray-800 rounded-[42px] overflow-hidden border-4 border-gray-800">
                    <img 
                      src={screenshot3} 
                      alt="MultiScan AI App Screenshot 3" 
                      className="w-full h-full object-cover rounded-[36px]" 
                    />
                  </div>
                </div>
              </motion.div>
              
              {/* Fourth Screenshot - Bottom */}
              <motion.div 
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 0.8, y: 80 }}
                transition={{ duration: 1, delay: 1.7 }}
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
              >
                <div className="w-[240px] h-[490px] bg-accent-500/70 rounded-[40px] p-1 shadow-lg">
                  <div className="w-full h-full bg-gray-800 rounded-[36px] overflow-hidden border-4 border-gray-800">
                    <img 
                      src={screenshot4} 
                      alt="MultiScan AI App Screenshot 4" 
                      className="w-full h-full object-cover rounded-[32px]" 
                    />
                  </div>
                </div>
              </motion.div>
              
              {/* Stats floating card 1 */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.9 }}
                className="absolute -bottom-10 -left-10 bg-white dark:bg-dark/90 rounded-xl shadow-soft p-5 w-64 z-40"
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
              
              {/* Stats floating card 2 */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 2.1 }}
                className="absolute -top-10 -right-10 bg-white dark:bg-dark/90 rounded-xl shadow-soft p-5 w-64 z-40"
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
              
              {/* Floating particles */}
              <div className="absolute w-full h-full">
                {[...Array(6)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-white opacity-60"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animation: `float ${3 + Math.random() * 4}s infinite ease-in-out`,
                      animationDelay: `${Math.random() * 2}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
