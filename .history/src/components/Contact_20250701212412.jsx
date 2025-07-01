import React from 'react';
import microscopeImg from '../assets/images/pngtree-microscope-3d-render-png-image_13126304.png';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-50/30 via-white to-blue-50/20 relative">
      {/* Abstract shape backgrounds - Lighter blue and green tones */}
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full border-[80px] border-green-200 opacity-20 parallax-bg" data-speed="0.08"></div>
      <div className="absolute top-40 left-0 w-[400px] h-[400px] rounded-full border-[60px] border-custom-blue-100 opacity-15 parallax-bg" data-speed="-0.05"></div>
      
      {/* Floating logo image */}
      <div className="absolute -top-16 -left-16 w-32 h-32 pointer-events-none floating">
        <img 
          src={microscopeImg}
          alt=""
          className="w-full h-full object-contain opacity-25"
          aria-hidden="true"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 scroll-fade-in">
          <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm shadow-sm rounded-full px-4 py-2 mb-8">
            <div className="w-5 h-5">
              <img 
                src={microscopeImg} 
                alt="" 
                className="w-full h-full object-contain" 
              />
            </div>
            <span className="text-sm font-medium text-custom-blue">Get In Touch</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
            Ready to <span className="text-custom-blue relative">
              Transform
              <svg className="absolute -bottom-2 left-0 w-full" height="10" viewBox="0 0 200 10" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 5C50 -1 150 -1 200 5" stroke="#003382" strokeWidth="3" fill="none" strokeLinecap="round"/>
              </svg>
            </span> Healthcare?
          </h2>
          
          <p className="text-xl text-gray-600 mt-6 scroll-fade-in">
            Interested in bringing MultiScan AI to your healthcare facility? Have questions about our technology? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Enhanced contact info cards */}
          <div className="space-y-10 scroll-slide-right scroll-scale">
            <div className="bg-gradient-to-br from-white to-custom-blue-50/20 backdrop-blur rounded-2xl p-6 shadow-[0_15px_35px_rgba(0,51,130,0.08)] border border-white/80 flex items-start space-x-6 hover-lift scroll-scale">
              <div className="bg-gradient-to-br from-custom-blue-50 to-custom-blue-100/50 p-4 rounded-full flex-shrink-0 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-custom-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-custom-blue">Location</h3>
                <p className="text-gray-600 mb-1">Innovation Hub, Accra, Ghana</p>
                <p className="text-gray-600">Satellite offices in Nairobi, Kenya and Lagos, Nigeria</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-white to-custom-blue-50/20 backdrop-blur rounded-2xl p-6 shadow-[0_15px_35px_rgba(0,51,130,0.08)] border border-white/80 flex items-start space-x-6 hover-lift scroll-scale">
              <div className="bg-gradient-to-br from-custom-blue-50 to-custom-blue-100/50 p-4 rounded-full flex-shrink-0 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-custom-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-custom-blue">Email</h3>
                <p className="text-gray-600 mb-1">info@multiscanai.com</p>
                <p className="text-gray-600">support@multiscanai.com</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-white to-custom-blue-50/20 backdrop-blur rounded-2xl p-6 shadow-[0_15px_35px_rgba(0,51,130,0.08)] border border-white/80 flex items-start space-x-6 hover-lift scroll-scale">
              <div className="bg-gradient-to-br from-custom-blue-50 to-custom-blue-100/50 p-4 rounded-full flex-shrink-0 shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-custom-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-custom-blue">Phone</h3>
                <p className="text-gray-600 mb-1">+233 (0) 302 123 456</p>
                <p className="text-gray-600">+234 (0) 809 123 4567</p>
              </div>
            </div>
            
            {/* Microscope image */}
            <div className="absolute -bottom-10 -left-10 w-[200px] h-[200px] pointer-events-none opacity-20 hidden md:block microscope-float">
              <img 
                src={microscopeImg} 
                alt="" 
                className="w-full h-full object-contain"
                aria-hidden="true"
              />
            </div>
          </div>
          
          {/* Enhanced contact form card */}
          <div className="bg-gradient-to-br from-white to-blue-50/20 backdrop-blur rounded-2xl p-8 shadow-[0_20px_50px_rgba(0,51,130,0.12)] border border-white/80 relative overflow-hidden scroll-scale">
            {/* Subtle top border accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-custom-blue/10 via-custom-blue/30 to-custom-blue/10"></div>
            
            <h3 className="text-2xl font-bold mb-6 text-custom-blue">Send Us a Message</h3>
            <form className="space-y-6">
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
