import React from 'react';
import { motion } from 'framer-motion';

// Import screenshots
import screenshot1 from '../assets/images/Simulator Screenshot - iPhone 16 Pro - 2025-07-01 at 19.12.18.png';
import screenshot2 from '../assets/images/Simulator Screenshot - iPhone 16 Pro - 2025-07-01 at 19.13.06.png';
import screenshot3 from '../assets/images/Simulator Screenshot - iPhone 16 Pro - 2025-07-01 at 19.13.35.png';
import microscopeImg from '../assets/images/—Pngtree—scientific microscope_14703109.png';

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Clean background with subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="pattern-dots h-full"></div>
      </div>
      
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
              <span className="px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm inline-block mb-6">
                Next-Gen Healthcare AI
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 leading-tight"
            >
              Advanced Medical Imaging with <span className="text-blue-600">AI Precision</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xl text-blue-600 mb-10"
            >
              Empowering healthcare professionals with accurate diagnostics through advanced artificial intelligence, bringing cutting-edge technology to underserved regions.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="btn btn-blue font-semibold">Get Started</button>
              <button className="btn btn-green font-semibold">Learn More</button>
            </motion.div>
          </motion.div>
          
          {/* iPhone Screenshots and Microscope Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center items-center relative"
          >
            <div className="relative w-full max-w-lg h-[600px]">
              {/* Background decorative elements */}
              <div className="absolute inset-0 bg-blue-50/50 rounded-3xl overflow-hidden"></div>
              
              {/* First Screenshot - Main/Front */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
              >
                <div className="relative">
                  {/* iPhone Frame - simplified */}
                  <div className="w-[280px] h-[570px] bg-blue-500 rounded-[50px] p-1 shadow-lg">
                    <div className="w-full h-full bg-blue-800 rounded-[46px] overflow-hidden border-4 border-blue-800 relative">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-6 bg-blue-800 rounded-b-xl z-20"></div>
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
                <div className="w-[260px] h-[530px] bg-blue-400 rounded-[46px] p-1 shadow-md">
                  <div className="w-full h-full bg-blue-800 rounded-[42px] overflow-hidden border-4 border-blue-800">
                    <img 
                      src={screenshot2} 
                      alt="MultiScan AI App Screenshot 2" 
                      className="w-full h-full object-cover rounded-[36px]" 
                    />
                  </div>
                </div>
              </motion.div>
              
              {/* Third Screenshot - Behind Right (now replaced with microscope) */}
              <motion.div 
                initial={{ opacity: 0, x: 50, y: 30, rotate: 15 }}
                animate={{ opacity: 0.95, x: 90, y: -50, rotate: 15 }}
                transition={{ duration: 1, delay: 1.4 }}
                className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <div className="relative w-[260px] h-[530px]">
                  {/* Beautiful glass-effect frame for the microscope image */}
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-500/80 to-blue-600/80 rounded-[46px] blur-[2px]"></div>
                  
                  <div className="relative w-full h-full bg-blue-50/80 backdrop-blur-sm rounded-[42px] border-4 border-white/40 overflow-hidden shadow-xl flex items-center justify-center p-8">
                    {/* Microscope image with glow effect */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-400/30 rounded-full blur-xl"></div>
                      <img 
                        src={microscopeImg} 
                        alt="Scientific Microscope" 
                        className="w-full h-auto max-h-[400px] object-contain relative z-10 drop-shadow-2xl transform scale-110"
                      />
                      
                      {/* Decorative elements */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-blue-600/20 rounded-full blur-md"></div>
                    </div>
                    
                    {/* Floating text label */}
                    <div className="absolute bottom-10 left-0 right-0 text-center">
                      <span className="bg-white/80 backdrop-blur-sm text-blue-600 px-4 py-1 rounded-full text-sm font-medium shadow-sm">
                        AI-Powered Analysis
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* Stats floating card 1 */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.9 }}
                className="absolute -bottom-10 -left-10 bg-white rounded-xl shadow-md p-5 w-64 z-40"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-50 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-blue-500">Accuracy Rate</p>
                    <p className="text-2xl font-bold text-blue-500">95.8%</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Stats floating card 2 */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 2.1 }}
                className="absolute -top-10 -right-10 bg-white rounded-xl shadow-md p-5 w-64 z-40"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-50 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-green-500">Diagnosis Time</p>
                    <p className="text-2xl font-bold text-green-500">&lt; 30s</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Additional decorative elements */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ delay: 2.2, duration: 1 }}
                className="absolute top-10 left-10 w-16 h-16 bg-blue-400/30 rounded-full blur-xl"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 2.4, duration: 1 }}
                className="absolute bottom-20 right-10 w-20 h-20 bg-green-400/30 rounded-full blur-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
