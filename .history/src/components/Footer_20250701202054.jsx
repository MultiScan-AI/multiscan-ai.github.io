import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-custom-blue-dark text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-custom-blue-100 mb-6">MultiScan AI</h3>
            <p className="mb-6 text-custom-blue-100">
              Transforming healthcare in Africa through AI-powered medical imaging diagnostics.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-custom-blue-100 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-custom-blue-100 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-custom-blue-100 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm-1.41 7.08c.84-.52 1.84-.82 2.91-.82s2.07.3 2.91.82c.34.21.88.1 1.25-.27.36-.36.46-.89.25-1.23C16.99 6.58 15.59 6 14 6c-1.59 0-2.99.58-3.91 1.58-.21.34-.11.87.25 1.23.37.36.91.48 1.25.27zm-4.4 7.47c-.21.34-.11.87.25 1.23C7.74 19.2 9.79 20 12 20c2.21 0 4.26-.8 5.56-2.22.36-.36.47-.89.25-1.23-.21-.34-.75-.45-1.11-.09C15.65 17.46 13.91 18 12 18s-3.65-.54-4.7-1.54c-.36-.36-.9-.25-1.11.09zm4.31-5.2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5c-.83 0-1.5-.67-1.5-1.5z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-custom-blue-100 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-custom-blue-100 hover:text-white transition-colors">About</a></li>
              <li><a href="#solution" className="text-custom-blue-100 hover:text-white transition-colors">Solution</a></li>
              <li><a href="#team" className="text-custom-blue-100 hover:text-white transition-colors">Team</a></li>
              <li><a href="#contact" className="text-custom-blue-100 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-custom-blue-100 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-custom-blue-100 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-custom-blue-100 hover:text-white transition-colors">Research Papers</a></li>
              <li><a href="#" className="text-custom-blue-100 hover:text-white transition-colors">Technology</a></li>
              <li><a href="#" className="text-custom-blue-100 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Stay Updated</h4>
            <p className="mb-4 text-custom-blue-100">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 w-full rounded-l-md focus:outline-none text-gray-900"
              />
              <button 
                type="submit" 
                className="bg-custom-blue hover:bg-custom-blue-light text-white px-4 rounded-r-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="pt-8 border-t border-custom-blue-800 text-center md:flex md:justify-between md:text-left">
          <p className="text-custom-blue-200 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} MultiScan AI. All rights reserved.
          </p>
          <div className="flex space-x-6 justify-center md:justify-end">
            <a href="#" className="text-custom-blue-200 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-custom-blue-200 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-custom-blue-200 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
