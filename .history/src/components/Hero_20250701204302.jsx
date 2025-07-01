import React from 'react';
import { motion } from 'framer-motion';

// Import screenshots
import screenshot1 from '../assets/images/Simulator Screenshot - iPhone 16 Pro - 2025-07-01 at 19.12.18.png';
import screenshot2 from '../assets/images/Simulator Screenshot - iPhone 16 Pro - 2025-07-01 at 19.13.06.png';
import screenshot3 from '../assets/images/Simulator Screenshot - iPhone 16 Pro - 2025-07-01 at 19.13.35.png';
import microscopeImg from '../assets/images/pngtree-microscope-3d-render-png-image_13126304.png';

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center bg-white">
      {/* Abstract shape background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full border-[100px] border-custom-blue transform translate-x-1/4 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full border-[80px] border-green-500 transform -translate-x-1/4 translate-y-1/4"></div>
      </div>
      
      <div className="container-custom py-16 md:py-24 relative z-10">
        {/* Microscope image as decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.07, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] -z-1 pointer-events-none"
        >
          <img 
            src={microscopeImg} 
            alt="" 
            className="w-full h-full object-contain"
            aria-hidden="true"
          />
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            {/* Tagline with microscope icon */}
            <div className="inline-flex items-center space-x-3 bg-white shadow-sm rounded-full px-4 py-2 mb-8">
              <div className="w-5 h-5">
                <img 
                  src={microscopeImg} 
                  alt="" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <span className="text-sm font-medium text-custom-blue">Next-Gen Healthcare AI</span>
            </div>
            
            {/* Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 leading-tight tracking-tight"
            >
              Medical <span className="text-custom-blue relative">
                imaging
                <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 5C50 -1 150 -1 200 5" stroke="#003382" strokeWidth="3" fill="none" strokeLinecap="round"/>
                </svg>
              </span> with 
              AI precision
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-gray-600 mb-10 max-w-xl"
            >
              Empowering healthcare professionals with accurate diagnostics through advanced artificial intelligence, bringing cutting-edge technology to underserved regions.
            </motion.p>
            
            {/* Call to Action Buttons */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-5"
            >
              <button className="group bg-custom-blue px-8 py-3.5 rounded-full text-white font-medium transition-all hover:shadow-lg hover:shadow-custom-blue/30 relative overflow-hidden">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-custom-blue-light transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </button>
              <button className="group bg-white border-2 border-custom-blue px-8 py-3 rounded-full text-custom-blue font-medium hover:bg-custom-blue/5 transition-all">
                Learn More
              </button>
            </motion.div>
            
            {/* Metrics */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-8"
            >
              <div className="relative">
                <div className="absolute -top-6 -left-4 w-4 h-4 bg-blue-100 rounded-full animate-pulse opacity-70"></div>
                <p className="text-3xl font-bold text-custom-blue">95.8%</p>
                <p className="text-sm text-gray-500">Accuracy Rate</p>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-3 h-3 bg-green-100 rounded-full animate-pulse opacity-70" style={{animationDelay: "0.7s"}}></div>
                <p className="text-3xl font-bold text-custom-blue">&lt; 30s</p>
                <p className="text-sm text-gray-500">Diagnosis Time</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-custom-blue">50+</p>
                <p className="text-sm text-gray-500">Supported Conditions</p>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Visual Column */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative flex justify-center"
          >
            {/* Featured microscope image */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4 z-50 w-[180px] pointer-events-none"
            >
              <img 
                src={microscopeImg} 
                alt="Scientific Microscope" 
                className="w-full h-auto object-contain filter drop-shadow-xl" 
              />
            </motion.div>
            
            {/* Phone mockups */}
            <div className="relative">
              {/* Large device display */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="relative z-30"
              >
                <div className="w-[280px] h-[570px] rounded-[45px] p-1.5 bg-gradient-to-br from-gray-100 to-gray-300 shadow-xl flex justify-center">
                  <div className="w-full h-full bg-custom-blue-dark rounded-[40px] overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[130px] h-7 bg-black rounded-b-2xl z-20 flex justify-center items-end pb-1">
                      <div className="w-16 h-1 bg-gray-600 rounded-full"></div>
                    </div>
                    
                    {/* Screenshot */}
                    <img 
                      src={screenshot1} 
                      alt="MultiScan AI App Screenshot" 
                      className="w-full h-full object-cover" 
                    />
                    
                    {/* Bottom Indicator */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
              </motion.div>
              
              {/* Left small device */}
              <motion.div
                initial={{ opacity: 0, x: -80, y: 20, rotate: -12 }}
                animate={{ opacity: 0.7, x: -100, y: 0, rotate: -12 }}
                transition={{ duration: 1, delay: 1 }}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10"
              >
                <div className="w-[200px] h-[410px] rounded-[35px] p-1 bg-gradient-to-br from-gray-100 to-gray-300 shadow-lg">
                  <div className="w-full h-full bg-custom-blue-dark rounded-[32px] overflow-hidden">
                    <img 
                      src={screenshot2} 
                      alt="MultiScan AI App Screenshot" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              </motion.div>
              
              {/* Right small device */}
              <motion.div
                initial={{ opacity: 0, x: 80, y: 20, rotate: 12 }}
                animate={{ opacity: 0.7, x: 100, y: 0, rotate: 12 }}
                transition={{ duration: 1, delay: 1.3 }}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10"
              >
                <div className="w-[200px] h-[410px] rounded-[35px] p-1 bg-gradient-to-br from-gray-100 to-gray-300 shadow-lg">
                  <div className="w-full h-full bg-custom-blue-dark rounded-[32px] overflow-hidden">
                    <img 
                      src={screenshot3} 
                      alt="MultiScan AI App Screenshot" 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-custom-blue/5 animate-pulse"></div>
              <div className="absolute bottom-1/3 right-1/3 w-12 h-12 rounded-full bg-green-500/5 animate-pulse" style={{animationDelay: "1s"}}></div>
              <div className="absolute top-1/3 right-1/4 w-8 h-8 rounded-full bg-custom-blue/10 animate-pulse" style={{animationDelay: "1.5s"}}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
