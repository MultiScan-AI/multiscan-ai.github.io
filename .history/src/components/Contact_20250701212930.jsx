import React from 'react';
import microscopeImg from '../assets/images/pngtree-microscope-3d-render-png-image_13126304.png';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-custom-blue-800 via-custom-blue-900 to-custom-blue-950 text-white relative">
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiPjwvcmVjdD4KPC9zdmc+')] opacity-20"></div>
        
        {/* Abstract shapes */}
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full border-[80px] border-white/10 opacity-20 parallax-bg" data-speed="0.08"></div>
        <div className="absolute top-40 left-0 w-[400px] h-[400px] rounded-full border-[60px] border-white/10 opacity-15 parallax-bg" data-speed="-0.05"></div>
      </div>
      
      {/* Floating logo image */}
      <div className="absolute -top-16 -left-16 w-32 h-32 pointer-events-none floating">
        <img 
          src={microscopeImg}
          alt=""
          className="w-full h-full object-contain opacity-20"
          aria-hidden="true"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 scroll-fade-in">
          <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm shadow-sm rounded-full px-4 py-2 mb-8">
            <div className="w-5 h-5">
              <img 
                src={microscopeImg} 
                alt="" 
                className="w-full h-full object-contain filter brightness-0 invert" 
              />
            </div>
            <span className="text-sm font-medium text-white">Get In Touch</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight text-white">
            Ready to <span className="text-white relative">
              Transform
              <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 5C50 -1 150 -1 200 5" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round"/>
              </svg>
            </span> Healthcare?
          </h2>
          
          <p className="text-xl text-blue-100/80 mt-6 scroll-fade-in">
            Interested in bringing MultiScan AI to your healthcare facility? Have questions about our technology? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Featured info card - similar to the Features highlight card */}
          <div className="scroll-slide-right scroll-scale">
            <div className="bg-gradient-to-br from-custom-blue-50 via-custom-blue-100/30 to-white rounded-2xl p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.25)] relative overflow-hidden border border-white/50 hover-lift">
              <div className="absolute -right-20 -bottom-20 opacity-10 w-[200px] h-[200px] pointer-events-none">
                <img 
                  src={microscopeImg} 
                  alt="" 
                  className="w-full h-full object-contain rotate-12 microscope-float"
                  aria-hidden="true"
                />
              </div>
              
              {/* Top gradient line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-custom-blue-300/20 to-transparent"></div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-custom-blue">Contact Information</h3>
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-br from-custom-blue-50 to-custom-blue-100/50 p-4 rounded-full flex-shrink-0 shadow-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-custom-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-custom-blue">Location</h4>
                    <p className="text-gray-700 mb-1">Innovation Hub, Accra, Ghana</p>
                    <p className="text-gray-700">Satellite offices in Nairobi, Kenya and Lagos, Nigeria</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-br from-custom-blue-50 to-custom-blue-100/50 p-4 rounded-full flex-shrink-0 shadow-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-custom-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-custom-blue">Email</h4>
                    <p className="text-gray-700 mb-1">info@multiscanai.com</p>
                    <p className="text-gray-700">support@multiscanai.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-br from-custom-blue-50 to-custom-blue-100/50 p-4 rounded-full flex-shrink-0 shadow-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-custom-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-custom-blue">Phone</h4>
                    <p className="text-gray-700 mb-1">+233 (0) 302 123 456</p>
                    <p className="text-gray-700">+234 (0) 809 123 4567</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced contact form card - similar to highlighted card */}
          <div className="bg-gradient-to-br from-custom-blue-50 via-custom-blue-100/30 to-white rounded-2xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.25)] border border-white/50 relative overflow-hidden scroll-scale hover-lift">
            {/* Subtle top border accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-custom-blue-300/20 to-transparent"></div>
            
            <h3 className="text-2xl font-bold mb-6 text-custom-blue">Send Us a Message</h3>
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-custom-blue focus:border-transparent bg-white/80" 
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-custom-blue focus:border-transparent bg-white/80" 
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-custom-blue focus:border-transparent bg-white/80" 
                  placeholder="How can we help you?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Your Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-custom-blue focus:border-transparent bg-white/80" 
                  placeholder="Tell us more about your needs..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="group bg-gradient-to-r from-custom-blue to-custom-blue-light px-8 py-3.5 rounded-full text-white font-medium transition-all hover:shadow-lg hover:shadow-custom-blue/30 relative overflow-hidden w-full pulse-subtle"
              >
                <span className="relative z-10">Send Message</span>
                {/* Enhanced button animation */}
                <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left bg-gradient-to-r from-custom-blue-light to-custom-blue"></div>
              </button>
            </form>
            
            {/* Decorative elements */}
            <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-custom-blue/5 animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-8 h-8 rounded-full bg-green-500/5 animate-pulse" style={{animationDelay: "1s"}}></div>
            <div className="absolute top-1/3 right-8 w-3 h-3 rounded-full bg-custom-blue/10"></div>
            <div className="absolute bottom-1/4 left-6 w-2 h-2 rounded-full bg-green-400/15"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
