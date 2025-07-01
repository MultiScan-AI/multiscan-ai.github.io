import React from 'react';
import microscopeImg from '../assets/images/pngtree-microscope-3d-render-png-image_13126304.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-custom-blue-900 to-custom-blue-800 text-white relative overflow-hidden">
      {/* Floating blood cell image - Using microscope image as replacement */}
      <div className="absolute -top-16 -left-16 w-32 h-32 pointer-events-none floating">
        <img 
          src={microscopeImg} // Using microscopeImg instead of bloodCellsImg
          alt=""
          className="w-full h-full object-contain opacity-20"
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] rounded-full border-[60px] border-white parallax-bg" data-speed="0.05"></div>
        <div className="absolute -bottom-40 -right-40 w-[300px] h-[300px] rounded-full border-[40px] border-white parallax-bg" data-speed="-0.05"></div>
      </div>

      {/* Microscope decorative image */}
      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] opacity-10 pointer-events-none microscope-float">
        <img 
          src={microscopeImg} 
          alt="" 
          className="w-full h-full object-contain"
          aria-hidden="true"
        />
      </div>
      
      <div className="container mx-auto px-4 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="scroll-fade-in">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 pulse-subtle">
                <img 
                  src={microscopeImg} 
                  alt="" 
                  className="w-full h-full object-contain filter brightness-0 invert" 
                />
              </div>
              <h3 className="text-2xl font-bold text-white pulse-subtle">MultiScan AI</h3>
            </div>
            <p className="mb-6 text-gray-300 leading-relaxed">
              Transforming healthcare in Africa through AI-powered medical imaging diagnostics, bringing cutting-edge technology to underserved regions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm-1.41 7.08c.84-.52 1.84-.82 2.91-.82s2.07.3 2.91.82c.34.21.88.1 1.25-.27.36-.36.46-.89.25-1.23C16.99 6.58 15.59 6 14 6c-1.59 0-2.99.58-3.91 1.58-.21.34-.11.87.25 1.23.37.36.91.48 1.25.27zm-4.4 7.47c-.21.34-.11.87.25 1.23C7.74 19.2 9.79 20 12 20c2.21 0 4.26-.8 5.56-2.22.36-.36.47-.89.25-1.23-.21-.34-.75-.45-1.11-.09C15.65 17.46 13.91 18 12 18s-3.65-.54-4.7-1.54c-.36-.36-.9-.25-1.11.09zm4.31-5.2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5c-.83 0-1.5-.67-1.5-1.5z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="scroll-slide-up">
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">About</a></li>
              <li><a href="#solution" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">Solution</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">Contact</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="scroll-slide-up" style={{ animationDelay: "0.2s" }}>
            <h4 className="text-lg font-bold mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">Case Studies</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">Research Papers</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">Technology</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors hover:translate-x-1 inline-block">FAQ</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="scroll-slide-up" style={{ animationDelay: "0.4s" }}>
            <h4 className="text-lg font-bold mb-6">Stay Updated</h4>
            <p className="mb-4 text-gray-300">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-3 w-full rounded-l-lg focus:outline-none text-gray-900 bg-white/90"
              />
              <button 
                type="submit" 
                className="bg-custom-blue hover:bg-custom-blue-light text-white px-5 py-3 rounded-r-lg font-medium transition-all pulse-subtle"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="pt-8 border-t border-white/10 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} MultiScan AI. All rights reserved.
          </p>
          <div className="flex space-x-6 justify-center md:justify-end">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
