import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  const heroRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    // GSAP animation for the background elements
    const ctx = gsap.context(() => {
      gsap.to('.floating-circle', {
        y: -30,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        stagger: 0.2,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-light to-white dark:from-dark dark:to-dark/70"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="pattern-dots opacity-10 absolute top-0 right-0 w-1/3 h-1/3"></div>
        <div className="pattern-zigzag opacity-5 absolute bottom-0 left-0 w-1/4 h-1/4"></div>
        
        {/* Floating circles */}
        <div ref={circleRef} className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`floating-circle absolute rounded-full bg-primary/20 dark:bg-primary/10`}
              style={{
                width: `${Math.random() * 100 + 50}px`,
                height: `${Math.random() * 100 + 50}px`,
                left: `${Math.random() * 90}%`,
                top: `${Math.random() * 90}%`,
                animationDelay: `${i * 0.2}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          <motion.div variants={itemVariants} className="inline-block mb-4 px-4 py-1 rounded-full bg-secondary/10 text-secondary font-medium">
            Advanced AI Diagnostics
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              Bringing advanced microscopy
            </span>
            <br />
            diagnostics to those who need it most
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl opacity-80 mb-8 max-w-2xl mx-auto lg:mx-0"
          >
            In rural areas of Africa, there is only 1 lab technician per 25,000 people. 
            MultiScan AI is changing that with smartphone-powered AI diagnostics.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <button className="btn btn-primary px-8 py-3 text-lg flex items-center gap-2">
              Get Started <FiArrowRight />
            </button>
            <button className="btn border-2 border-primary/20 hover:border-primary/40 px-8 py-3 text-lg">
              Learn More
            </button>
          </motion.div>
        </motion.div>
        
        {/* 3D or Image Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          className="relative"
        >
          <div className="relative z-10 bg-white dark:bg-dark/80 rounded-2xl shadow-2xl overflow-hidden border border-white/20 transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-60"></div>
            <div className="p-6 md:p-8">
              <div className="w-full aspect-[4/3] bg-gradient-to-tr from-primary to-secondary rounded-lg mb-6 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">MultiScan AI</span>
              </div>
              <div className="space-y-4">
                <div className="h-8 bg-gray-200 dark:bg-dark/50 rounded-md w-3/4"></div>
                <div className="h-8 bg-gray-200 dark:bg-dark/50 rounded-md"></div>
                <div className="h-8 bg-gray-200 dark:bg-dark/50 rounded-md w-5/6"></div>
                <div className="h-20 bg-gray-200 dark:bg-dark/50 rounded-md"></div>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/2 -right-12 transform -translate-y-1/2 w-24 h-24 bg-accent rounded-full blur-2xl opacity-60 z-0"></div>
          <div className="absolute -bottom-10 left-1/4 w-32 h-32 bg-secondary rounded-full blur-3xl opacity-30 z-0"></div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm opacity-60 mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-2 h-2 bg-primary rounded-full mt-2"
            ></motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
