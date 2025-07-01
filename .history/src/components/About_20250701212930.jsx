import React from 'react';
import microscopeImg from '../assets/images/pngtree-microscope-3d-render-png-image_13126304.png';

const About = () => {
  return (
    <section id="about" className="section bg-gradient-to-br from-custom-blue-800 via-custom-blue-900 to-custom-blue-950 text-white relative overflow-hidden py-24">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiPjwvcmVjdD4KPC9zdmc+')] opacity-20"></div>
        
        {/* Abstract shapes */}
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full border-[40px] border-white/10 opacity-30 parallax-bg" data-speed="0.1"></div>
        <div className="absolute -top-40 right-0 w-64 h-64 rounded-full border-[30px] border-white/10 opacity-20 parallax-bg" data-speed="-0.05"></div>
      </div>
      
      {/* Floating cell image */}
      <div className="absolute -top-24 -left-24 w-40 h-40 pointer-events-none floating">
        <img 
          src={microscopeImg}
          alt="" 
          className="w-full h-full object-contain opacity-20"
          aria-hidden="true"
        />
      </div>
      
      {/* Microscope decorative image */}
      <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] pointer-events-none scroll-rotate">
        <img 
          src={microscopeImg} 
          alt="" 
          className="w-full h-full object-contain microscope-float opacity-10"
          aria-hidden="true"
        />
      </div>
      
      <div className="container-custom relative z-10">
        {/* Section header */}
        <div className="max-w-4xl mx-auto text-center mb-20 scroll-fade-in">
          <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm shadow-sm rounded-full px-4 py-2 mb-8">
            <div className="w-5 h-5">
              <img 
                src={microscopeImg} 
                alt="" 
                className="w-full h-full object-contain filter brightness-0 invert" 
              />
            </div>
            <span className="text-sm font-medium text-white">Our Story</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight pulse-subtle text-white">
            Transforming Healthcare <span className="text-white relative">
              Access
              <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 5C50 -1 150 -1 200 5" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          
          <p className="text-xl text-blue-100/80 max-w-3xl mx-auto scroll-fade-in">
            We're revolutionizing medical diagnostics through advanced AI technology, making healthcare more accurate, accessible, and efficient across Africa and beyond.
          </p>
        </div>

        {/* Enhanced featured box - similar to the card in Features */}
        <div className="bg-gradient-to-br from-custom-blue-50 via-custom-blue-100/30 to-white rounded-2xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.25)] relative overflow-hidden border border-white/30 mb-16 hover-lift scroll-fade-in">
          <div className="absolute -right-20 -bottom-20 opacity-10 w-[300px] h-[300px] pointer-events-none">
            <img 
              src={microscopeImg} 
              alt="" 
              className="w-full h-full object-contain rotate-12 microscope-float"
              aria-hidden="true"
            />
          </div>
          
          {/* Additional subtle decorative elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-custom-blue-300/20 to-transparent"></div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="scroll-slide-right">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-custom-blue">
                Our Vision for Healthcare
              </h3>
              <p className="text-gray-700 mb-6 text-lg">
                To create a world where advanced medical diagnostics are available to everyone, regardless of location or economic status, saving countless lives through early detection.
              </p>
            </div>
            <div className="scroll-slide-left">
              <div className="bg-white/80 backdrop-blur rounded-xl p-6 shadow-lg border border-white/50">
                <div className="bg-custom-blue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-inner">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-custom-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <p className="text-gray-600">Our technology allows for unprecedented accuracy in disease detection, surpassing traditional diagnostic methods.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cards with the new style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 stagger-group">
          {/* Mission Card */}
          <div className="stagger-item hover-lift scroll-scale">
            <div className="bg-gradient-to-br from-custom-blue-50 via-custom-blue-100/30 to-white rounded-2xl p-8 shadow-[0_15px_35px_rgba(0,0,0,0.15)] relative overflow-hidden border border-white/50 h-full">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-300/20 to-transparent"></div>
              <div className="bg-green-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-custom-blue">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To develop and deploy cutting-edge AI diagnostic tools that assist healthcare professionals in detecting diseases earlier and with greater accuracy.
              </p>
              
              <div className="absolute bottom-4 right-4 flex space-x-1">
                <div className="w-1 h-1 rounded-full bg-green-300 opacity-30"></div>
                <div className="w-1 h-1 rounded-full bg-green-400 opacity-40"></div>
                <div className="w-1 h-1 rounded-full bg-green-500 opacity-50"></div>
              </div>
            </div>
          </div>

          {/* Values Card */}
          <div className="stagger-item hover-lift scroll-scale">
            <div className="bg-gradient-to-br from-custom-blue-50 via-custom-blue-100/30 to-white rounded-2xl p-8 shadow-[0_15px_35px_rgba(0,0,0,0.15)] relative overflow-hidden border border-white/50 h-full">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-300/20 to-transparent"></div>
              <div className="bg-red-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-custom-blue">Our Values</h3>
              <p className="text-gray-700 leading-relaxed">
                Accuracy, accessibility, innovation, and compassion drive everything we do. We believe in technology that serves humanity and creates impact.
              </p>
              
              <div className="absolute bottom-4 right-4 flex space-x-1">
                <div className="w-1 h-1 rounded-full bg-red-300 opacity-30"></div>
                <div className="w-1 h-1 rounded-full bg-red-400 opacity-40"></div>
                <div className="w-1 h-1 rounded-full bg-red-500 opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
