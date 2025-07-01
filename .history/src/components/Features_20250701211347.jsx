import React from 'react';
import { motion } from 'framer-motion';
import microscopeImg from '../assets/images/pngtree-microscope-3d-render-png-image_13126304.png';

const Features = () => {
  const features = [
    {
      title: "Multi-Disease Detection",
      description: "Our AI algorithms can detect multiple diseases from various medical images including X-rays, CT scans, MRIs, and ultrasounds.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 0 012 2" />
        </svg>
      ),
      color: "custom-blue"
    },
    {
      title: "Real-time Analysis",
      description: "Get results in seconds, not days. Our system processes medical images in real-time, providing immediate insights for faster clinical decision-making.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "green"
    },
    {
      title: "High Accuracy",
      description: "Our models achieve over 95% accuracy in disease detection, matching or exceeding the performance of experienced radiologists in many cases.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "custom-blue"
    },
    {
      title: "Offline Capability",
      description: "Our system can work offline in areas with limited connectivity, bringing advanced diagnostics to remote and underserved regions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: "green"
    },
    {
      title: "Continuous Learning",
      description: "Our AI models improve over time by learning from new data, adapting to diverse populations and emerging disease patterns.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      color: "custom-blue"
    },
    {
      title: "Secure & Compliant",
      description: "Built with privacy by design, our platform ensures patient data security and complies with international healthcare regulations.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      color: "green"
    }
  ];

  return (
    <section id="solution" className="py-24 bg-white relative overflow-hidden">
      {/* Abstract shape backgrounds */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full border-[80px] border-custom-blue opacity-5 parallax-bg" data-speed="0.15"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full border-[40px] border-green-500 opacity-5 parallax-bg" data-speed="-0.1"></div>
      
      {/* Microscope decorative image */}
      <div className="absolute left-0 top-1/4 w-[350px] h-[350px] pointer-events-none scroll-slide-right">
        <img 
          src={microscopeImg} 
          alt="" 
          className="w-full h-full object-contain -rotate-12 opacity-5"
          aria-hidden="true"
        />
      </div>
      {/* Extra floating accent image */}
      <div className="absolute bottom-0 right-0 w-40 h-40 pointer-events-none floating">
        <img 
          src={'../assets/images/—Pngtree—scientific microscope_14703109.png'}
          alt=""
          className="w-full h-full object-contain"
          aria-hidden="true"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 scroll-fade-in">
          <div className="inline-flex items-center space-x-3 bg-white shadow-sm rounded-full px-4 py-2 mb-8">
            <div className="w-5 h-5">
              <img 
                src={microscopeImg} 
                alt="" 
                className="w-full h-full object-contain" 
              />
            </div>
            <span className="text-sm font-medium text-custom-blue">AI-Powered Features</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight pulse-subtle">
            Advanced <span className="text-custom-blue relative">
              Solutions
              <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 5C50 -1 150 -1 200 5" stroke="#003382" strokeWidth="3" fill="none" strokeLinecap="round"/>
              </svg>
            </span> for Healthcare
          </h2>
          
          <p className="text-xl text-gray-600 mt-6 scroll-fade-in">
            MultiScan AI combines advanced machine learning, computer vision, and medical expertise to deliver precise diagnostic tools that support healthcare professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-group">
          {features.map((feature, index) => (
            <div key={index} className="stagger-item hover-lift scroll-scale">
              <div className="bg-white rounded-2xl p-8 shadow-lg transition-all border border-gray-50 h-full relative group">
                {/* Animated gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-custom-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                
                <div className={`bg-${feature.color}-50 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-${feature.color}-100 transition-colors`}>
                  <div className={`text-${feature.color}-600`}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-custom-blue">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Featured highlight box */}
        <div className="mt-20 scroll-fade-in">
          <div className="bg-gradient-to-br from-custom-blue-50 to-custom-blue-100/50 rounded-2xl p-8 md:p-12 shadow-lg relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 opacity-10 w-[300px] h-[300px] pointer-events-none">
              <img 
                src={microscopeImg} 
                alt="" 
                className="w-full h-full object-contain rotate-12 microscope-float"
                aria-hidden="true"
              />
            </div>
            
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3 scroll-slide-right">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-custom-blue">
                  Bringing Medical Expertise to Every Corner of Africa
                </h3>
                <p className="text-gray-700 mb-6 text-lg">
                  Our AI-powered diagnostic platform helps bridge the gap between limited healthcare resources and the growing need for specialized medical expertise in underserved regions.
                </p>
                <button className="group bg-custom-blue px-8 py-3.5 rounded-full text-white font-medium transition-all hover:shadow-lg hover:shadow-custom-blue/30 relative overflow-hidden">
                  <span className="relative z-10">Request a Demo</span>
                  <div className="absolute inset-0 bg-custom-blue-light transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                </button>
              </div>
              <div className="md:col-span-2 flex justify-center md:justify-end scroll-slide-left">
                <div className="flex items-center gap-8">
                  <div className="text-center pulse-subtle">
                    <p className="text-4xl font-bold text-custom-blue">200+</p>
                    <p className="text-sm text-gray-600 mt-1">Facilities Served</p>
                  </div>
                  <div className="text-center pulse-subtle" style={{ animationDelay: "0.5s" }}>
                    <p className="text-4xl font-bold text-custom-blue">12</p>
                    <p className="text-sm text-gray-600 mt-1">Countries</p>
                  </div>
                  <div className="text-center pulse-subtle" style={{ animationDelay: "1s" }}>
                    <p className="text-4xl font-bold text-custom-blue">50k+</p>
                    <p className="text-sm text-gray-600 mt-1">Diagnoses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
