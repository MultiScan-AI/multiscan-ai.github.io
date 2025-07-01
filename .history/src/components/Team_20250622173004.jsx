import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiLinkedin, FiTwitter, FiMail, FiGlobe } from 'react-icons/fi';

const Team = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const teamMembers = [
    {
      name: 'Moussa Moustapha',
      role: 'Co-Founder & CEO',
      bio: 'Passionate about leveraging technology to solve healthcare challenges in Africa.',
      image: 'moussa',
      socials: [
        { icon: <FiLinkedin />, url: '#' },
        { icon: <FiTwitter />, url: '#' },
        { icon: <FiMail />, url: '#' },
      ],
    },
    {
      name: 'Jamillah Ssoziobedine Flore',
      role: 'Co-Founder & CTO',
      bio: 'Expert in AI and machine learning with a focus on medical image analysis.',
      image: 'jamillah',
      socials: [
        { icon: <FiLinkedin />, url: '#' },
        { icon: <FiGlobe />, url: '#' },
        { icon: <FiMail />, url: '#' },
      ],
    },
    {
      name: 'Elvis Kinyua',
      role: 'Co-Founder & COO',
      bio: 'Experienced in healthcare operations and scaling solutions in resource-limited settings.',
      image: 'elvis',
      socials: [
        { icon: <FiLinkedin />, url: '#' },
        { icon: <FiTwitter />, url: '#' },
        { icon: <FiMail />, url: '#' },
      ],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section 
      id="team" 
      ref={sectionRef}
      className="section bg-light dark:bg-dark relative overflow-hidden"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="pattern-zigzag opacity-[0.02] absolute bottom-0 right-0 w-full h-1/2"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-full bg-secondary/10 text-secondary font-medium mb-4"
          >
            Our Team
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold mb-4"
          >
            Meet the <span className="text-secondary">Visionaries</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 0.8 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg max-w-3xl mx-auto"
          >
            Our diverse team combines expertise in AI, healthcare, and business to bring advanced diagnostic solutions to those who need it most.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white dark:bg-dark/80 transform group-hover:-translate-y-2 transition-all duration-300">
                {/* Colorful top border */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
                
                {/* Image */}
                <div className="relative aspect-[3/4] bg-gray-200 dark:bg-gray-700 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-gray-400 dark:text-gray-600">
                    {member.image.charAt(0).toUpperCase()}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="opacity-80 mb-4">{member.bio}</p>
                  
                  {/* Social links */}
                  <div className="flex space-x-4">
                    {member.socials.map((social, idx) => (
                      <a 
                        key={idx} 
                        href={social.url} 
                        className="w-8 h-8 rounded-full bg-light dark:bg-dark flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Join the team section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-white dark:bg-dark/80 rounded-2xl shadow-xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold mb-4">Join Our Mission</h3>
            <p className="text-lg opacity-80 max-w-2xl mx-auto mb-6">
              We're looking for passionate individuals who want to make a difference in healthcare accessibility across Africa. Join us in ensuring no one dies from a preventable or manageable disease.
            </p>
            <button className="btn btn-secondary px-8 py-3">
              View Open Positions
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
