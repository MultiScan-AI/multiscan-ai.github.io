import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiSmartphone, FiDollarSign, FiUsers, FiBarChart2, FiClock, FiGlobe } from 'react-icons/fi';

const Features = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      icon: <FiSmartphone className="text-3xl" />,
      title: 'AI-Powered Diagnostics',
      description: 'Our advanced AI algorithms can detect multiple diseases with over 90% accuracy using standard microscopy images.',
      color: 'from-primary to-blue-700',
    },
    {
      icon: <FiDollarSign className="text-3xl" />,
      title: 'Cost-Effective',
      description: 'Leverages existing equipment and smartphones, minimizing implementation costs for healthcare facilities.',
      color: 'from-secondary to-orange-600',
    },
    {
      icon: <FiUsers className="text-3xl" />,
      title: 'Non-Specialist Friendly',
      description: 'Enables nurses and other healthcare workers to perform accurate diagnoses without specialized training.',
      color: 'from-green-500 to-green-700',
    },
    {
      icon: <FiBarChart2 className="text-3xl" />,
      title: 'Data Analytics',
      description: 'Provides valuable insights and analytics for disease surveillance and public health monitoring.',
      color: 'from-purple-500 to-purple-700',
    },
    {
      icon: <FiClock className="text-3xl" />,
      title: 'Real-Time Results',
      description: 'Get diagnostic results in minutes instead of days or weeks, enabling faster treatment decisions.',
      color: 'from-red-500 to-red-700',
    },
    {
      icon: <FiGlobe className="text-3xl" />,
      title: 'Offline Capability',
      description: 'Works in areas with limited connectivity, ensuring reliability in remote healthcare settings.',
      color: 'from-teal-500 to-teal-700',
    },
  ];

  const tabContent = [
    {
      title: 'Sickle Cell Detection',
      description: 'MultiScan AI can identify sickle cell disease from blood smear images with high accuracy, helping diagnose this common genetic disorder that affects millions across Africa.',
      image: 'sickle-cell-placeholder',
      stats: [
        { value: '94%', label: 'Accuracy' },
        { value: '< 2 min', label: 'Detection Time' },
        { value: '1000+', label: 'Cases Analyzed' },
      ],
    },
    {
      title: 'Malaria Parasite Detection',
      description: 'Our AI can detect various species of malaria parasites in blood samples, helping combat one of Africa\'s most prevalent infectious diseases.',
      image: 'malaria-placeholder',
      stats: [
        { value: '92%', label: 'Accuracy' },
        { value: '< 3 min', label: 'Detection Time' },
        { value: '5000+', label: 'Cases Analyzed' },
      ],
    },
    {
      title: 'Tuberculosis Screening',
      description: 'MultiScan AI analyzes sputum smear microscopy images to detect tuberculosis, a major public health challenge in resource-limited settings.',
      image: 'tb-placeholder',
      stats: [
        { value: '90%', label: 'Accuracy' },
        { value: '< 5 min', label: 'Detection Time' },
        { value: '2500+', label: 'Cases Analyzed' },
      ],
    },
  ];

  return (
    <section 
      id="solution" 
      ref={sectionRef}
      className="section bg-white dark:bg-dark/90 relative overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="pattern-stripes opacity-[0.02] absolute top-0 right-0 w-full h-full"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium mb-4"
          >
            Our Solution
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            Advanced Features for <span className="text-primary">Better Healthcare</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.8 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg max-w-3xl mx-auto"
          >
            MultiScan AI combines cutting-edge technology with practical healthcare solutions to address the diagnostic challenges in resource-limited settings.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="card group hover:-translate-y-2 transition-all overflow-hidden"
            >
              <div className={`absolute top-0 left-0 h-2 w-full bg-gradient-to-r ${feature.color}`}></div>
              <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-all">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="opacity-80">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Interactive Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="bg-light dark:bg-dark/80 rounded-2xl shadow-xl overflow-hidden border border-white/10"
        >
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200 dark:border-gray-700">
            {tabContent.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex-1 py-4 px-6 text-center font-medium transition-all ${
                  activeTab === index 
                    ? 'bg-primary text-white' 
                    : 'hover:bg-primary/10'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>
          
          {/* Tab Content */}
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">{tabContent[activeTab].title}</h3>
                <p className="mb-6 text-lg opacity-80">{tabContent[activeTab].description}</p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {tabContent[activeTab].stats.map((stat, index) => (
                    <div key={index} className="text-center p-4 bg-white/50 dark:bg-dark/50 rounded-lg">
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-sm opacity-70">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <button className="btn btn-primary">Learn More</button>
              </div>
              
              <div className="bg-gray-200 dark:bg-gray-700 rounded-xl aspect-video flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🔬</div>
                  <p className="text-lg font-medium">{tabContent[activeTab].image}</p>
                  <p className="text-sm opacity-70">(Placeholder for microscopy image)</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to transform healthcare diagnostics?</h3>
          <button className="btn btn-primary px-8 py-3 text-lg">Get Started Today</button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
