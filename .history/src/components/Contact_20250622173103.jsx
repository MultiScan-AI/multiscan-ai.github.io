import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMapPin, FiMail, FiPhone, FiSend, FiCheck } from 'react-icons/fi';

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      e.target.reset();
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <FiMapPin className="text-2xl" />,
      title: 'Our Location',
      details: 'Kigali, Rwanda',
      color: 'bg-blue-500',
    },
    {
      icon: <FiMail className="text-2xl" />,
      title: 'Email Us',
      details: 'info@multiscanai.com',
      color: 'bg-secondary',
    },
    {
      icon: <FiPhone className="text-2xl" />,
      title: 'Call Us',
      details: '+250 123 456 789',
      color: 'bg-green-500',
    },
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="section bg-white dark:bg-dark/90 relative overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="pattern-dots opacity-[0.03] absolute top-0 left-0 w-full h-full"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium mb-4"
          >
            Get In Touch
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            Contact <span className="text-primary">Us</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.8 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg max-w-3xl mx-auto"
          >
            Have questions about MultiScan AI? Want to partner with us or learn more about our solutions? We'd love to hear from you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-light dark:bg-dark/80 rounded-2xl shadow-xl p-6 md:p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-dark border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className={`btn btn-primary w-full py-3 flex items-center justify-center gap-2 ${formSubmitted ? 'bg-green-500' : ''}`}
                  disabled={formSubmitted}
                >
                  {formSubmitted ? (
                    <>
                      <FiCheck className="text-lg" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <FiSend className="text-lg" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-light dark:bg-dark/80 rounded-xl shadow-lg p-6 flex items-start gap-4 border border-white/10 hover:shadow-xl transition-shadow"
              >
                <div className={`${info.color} w-12 h-12 rounded-lg flex items-center justify-center text-white shrink-0`}>
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">{info.title}</h4>
                  <p className="opacity-80">{info.details}</p>
                </div>
              </div>
            ))}
            
            {/* Map or Image */}
            <div className="bg-light dark:bg-dark/80 rounded-xl shadow-lg overflow-hidden border border-white/10 h-80">
              <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🌍</div>
                  <p className="text-lg font-medium">Map Placeholder</p>
                  <p className="text-sm opacity-70">(Interactive map would go here)</p>
                </div>
              </div>
            </div>
            
            {/* Business Hours */}
            <div className="bg-light dark:bg-dark/80 rounded-xl shadow-lg p-6 border border-white/10">
              <h4 className="text-lg font-bold mb-4">Business Hours</h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-medium">9:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-medium">10:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-medium">Closed</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
