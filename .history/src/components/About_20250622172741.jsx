import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiCheckCircle, FiAlertTriangle, FiClock, FiFileText, FiDatabase } from 'react-icons/fi';
import { gsap } from 'gsap';

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const graphicRef = useRef(null);

  useEffect(() => {
    if (isInView) {
      const ctx = gsap.context(() => {
        gsap.from('.problem-item', {
          y: 30,
          opacity: 0,
          stagger: 0.2,
          duration: 0.8,
          ease: 'power2.out',
        });
      }, sectionRef);

      return () => ctx.revert();
    }
  }, [isInView]);

  const problemItems = [
    {
      icon: <FiAlertTriangle className="text-red-500" />,
      text: 'Critical diseases go undiagnosed (sickle cell, tuberculosis, parasitic infections)',
    },
    {
      icon: <FiCheckCircle className="text-red-500" />,
      text: 'Clinicians rely on symptom-based diagnosis with high error rates',
    },
    {
      icon: <FiClock className="text-red-500" />,
      text: 'Diagnostic delays stretch up to 3 months',
    },
    {
      icon: <FiFileText className="text-red-500" />,
      text: 'Most facilities can only test for 1-2 diseases at most',
    },
    {
      icon: <FiDatabase className="text-red-500" />,
      text: 'Poor documentation hampers disease surveillance and follow-up',
    },
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="section bg-light dark:bg-dark relative overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="pattern-dots opacity-5 absolute top-0 left-0 w-full h-full"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            The <span className="text-secondary">Problem</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.8 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg max-w-3xl mx-auto"
          >
            In rural areas of Africa, healthcare facilities often avoid using microscopy due to a severe shortage of trained specialists (WHO, 2022). As a result:
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Problem List */}
          <div className="space-y-6">
            {problemItems.map((item, index) => (
              <div 
                key={index}
                className="problem-item flex items-start gap-4 p-4 rounded-lg bg-white dark:bg-dark/80 shadow-md"
              >
                <div className="text-2xl mt-1">{item.icon}</div>
                <p className="text-lg">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Graphic/Illustration */}
          <div ref={graphicRef} className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative z-10"
            >
              <div className="relative bg-white dark:bg-dark/80 rounded-2xl shadow-xl overflow-hidden border border-white/20 p-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-60"></div>
                
                {/* Map of Africa with highlighted points */}
                <div className="relative aspect-square bg-light/50 dark:bg-dark/50 rounded-xl flex items-center justify-center mb-6">
                  <div className="w-3/4 h-3/4 relative">
                    {/* Simplified Africa outline */}
                    <div className="absolute inset-0 border-2 border-primary/30 rounded-full transform scale-75"></div>
                    
                    {/* Pulsing dots representing problem areas */}
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-3 h-3 bg-red-500 rounded-full"
                        style={{
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`,
                        }}
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary/70">1:25,000</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">Did you know?</h3>
                  <p className="text-lg font-medium">
                    There is only <span className="text-secondary">1 lab technician</span> per <span className="text-secondary">25,000 people</span> in rural areas of Africa
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/3 -left-12 w-24 h-24 bg-primary rounded-full blur-2xl opacity-30 z-0"></div>
            <div className="absolute -bottom-10 right-1/4 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-20 z-0"></div>
          </div>
        </div>
        
        {/* Solution Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            The <span className="text-primary">Solution</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="card group hover:-translate-y-2 transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl mb-6 mx-auto group-hover:bg-primary group-hover:text-white transition-all">
                01
              </div>
              <h3 className="text-xl font-bold mb-4">Smartphone-powered AI tool</h3>
              <p>
                Diagnostics with 90%+ accuracy detected from the tool. Diseases like Sickle cell, Babesia Parasite, and more will be analyzed and detected in real-time.
              </p>
            </div>
            
            <div className="card group hover:-translate-y-2 transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl mb-6 mx-auto group-hover:bg-primary group-hover:text-white transition-all">
                02
              </div>
              <h3 className="text-xl font-bold mb-4">Cost-effective solution</h3>
              <p>
                Leverages existing equipment and smartphones to minimize implementation costs, making it accessible to healthcare facilities in low-resource settings.
              </p>
            </div>
            
            <div className="card group hover:-translate-y-2 transition-all">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary text-2xl mb-6 mx-auto group-hover:bg-primary group-hover:text-white transition-all">
                03
              </div>
              <h3 className="text-xl font-bold mb-4">Building things people need</h3>
              <p>
                Enables non-specialists (e.g. nurses) to diagnose multiple diseases with high accuracy using standard microscopy, addressing the critical shortage of trained specialists.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
