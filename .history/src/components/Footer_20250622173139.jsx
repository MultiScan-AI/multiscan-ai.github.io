import { motion } from 'framer-motion';
import { FiLinkedin, FiTwitter, FiFacebook, FiInstagram, FiArrowUp } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="pattern-dots opacity-[0.03] absolute top-0 left-0 w-full h-full"></div>
      </div>
      
      {/* Scroll to top button */}
      <div className="container-custom relative">
        <div className="flex justify-center">
          <button 
            onClick={scrollToTop}
            className="bg-primary hover:bg-primary/90 text-white w-12 h-12 rounded-full flex items-center justify-center transform -translate-y-1/2 shadow-lg transition-transform hover:scale-110"
          >
            <FiArrowUp className="text-xl" />
          </button>
        </div>
      </div>
      
      <div className="container-custom pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-6 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              MultiScan AI
            </h3>
            <p className="text-gray-400 mb-6">
              Bringing advanced microscopy diagnostics to those who need it most. Our mission is to ensure no one dies from a preventable or manageable disease.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FiTwitter className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FiLinkedin className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FiFacebook className="text-xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FiInstagram className="text-xl" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#solution" className="text-gray-400 hover:text-white transition-colors">Our Solution</a>
              </li>
              <li>
                <a href="#team" className="text-gray-400 hover:text-white transition-colors">Team</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold mb-6">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Research Papers</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Press Kit</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and news.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-1 focus:ring-primary w-full"
              />
              <button 
                type="submit" 
                className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-r-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} MultiScan AI. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
      
      {/* African-inspired pattern at the bottom */}
      <div className="h-2 w-full bg-gradient-to-r from-primary via-secondary to-accent"></div>
    </footer>
  );
};

export default Footer;
