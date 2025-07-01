import React from 'react';
import { motion } from 'framer-motion';
import microscopeImg from '../assets/images/pngtree-microscope-3d-render-png-image_13126304.png';

const About = () => {
  return (
    <section id="about" className="section bg-white relative overflow-hidden">
      {/* Abstract shape backgrounds */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full border-[40px] border-green-100 opacity-30 parallax-bg" data-speed="0.1"></div>
      <div className="absolute -top-40 right-0 w-64 h-64 rounded-full border-[30px] border-custom-blue-100 opacity-20 parallax-bg" data-speed="-0.05"></div>
      
      {/* Microscope decorative image */}
      <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] pointer-events-none scroll-rotate">
        <img 
          src={microscopeImg} 
          alt="" 
          className="w-full h-full object-contain microscope-float"
          aria-hidden="true"
        />
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20 scroll-fade-in">
          <div className="inline-flex items-center space-x-3 bg-white shadow-sm rounded-full px-4 py-2 mb-8">
            <div className="w-5 h-5">
              <img 
                src={microscopeImg} 
                alt="" 
                className="w-full h-full object-contain" 
              />
            </div>
            <span className="text-sm font-medium text-custom-blue">Our Story</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
            Transforming Healthcare <span className="text-custom-blue relative">
              Access
              <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 5C50 -1 150 -1 200 5" stroke="#003382" strokeWidth="3" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto scroll-fade-in">
            We're revolutionizing medical diagnostics through advanced AI technology, making healthcare more accurate, accessible, and efficient across Africa and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-group">
          {/* Vision */}
          <div className="stagger-item hover-lift">
            <div className="bg-white rounded-2xl p-8 shadow-lg transition-all border border-gray-50 h-full">
              <div className="bg-custom-blue-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-custom-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-custom-blue">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To create a world where advanced medical diagnostics are available to everyone, regardless of location or economic status, saving countless lives through early detection.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="stagger-item hover-lift">
            <div className="bg-white rounded-2xl p-8 shadow-lg transition-all border border-gray-50 h-full">
              <div className="bg-green-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-custom-blue">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To develop and deploy cutting-edge AI diagnostic tools that assist healthcare professionals in detecting diseases earlier and with greater accuracy.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="stagger-item hover-lift">
            <div className="bg-white rounded-2xl p-8 shadow-lg transition-all border border-gray-50 h-full">
              <div className="bg-red-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-custom-blue">Our Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Accuracy, accessibility, innovation, and compassion drive everything we do. We believe in technology that serves humanity and creates impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
