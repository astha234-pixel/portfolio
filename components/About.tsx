import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { FaCode, FaCloud, FaShieldAlt, FaTrophy } from 'react-icons/fa';

const About = () => {
  const [leetcodeCount, setLeetcodeCount] = useState(0);
  const [codeforcesCount, setCodeforcesCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const animateNumbers = () => {
        const leetcodeTarget = 400;
        const codeforcesTarget = 200;
        const duration = 2000; // 2 seconds
        const steps = 60;
        const leetcodeStep = leetcodeTarget / steps;
        const codeforcesStep = codeforcesTarget / steps;

        let currentLeetcode = 0;
        let currentCodeforces = 0;
        let step = 0;

        const interval = setInterval(() => {
          currentLeetcode += leetcodeStep;
          currentCodeforces += codeforcesStep;
          step++;

          setLeetcodeCount(Math.min(Math.floor(currentLeetcode), leetcodeTarget));
          setCodeforcesCount(Math.min(Math.floor(currentCodeforces), codeforcesTarget));

          if (step >= steps) {
            clearInterval(interval);
            setHasAnimated(true);
          }
        }, duration / steps);

        return () => clearInterval(interval);
      };

      animateNumbers();
    }
  }, [isInView, hasAnimated]);

  return (
    <section id="about" className="min-h-screen py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-about bg-clip-text text-transparent animate-text-gradient"
            >
              About Me
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="h-1 w-24 mx-auto bg-gradient-about rounded-full"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative w-48 h-48 md:w-80 md:h-80"
            >
              {/* Animated Character */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5,
                  delay: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 2
                }}
                className="absolute -bottom-4 -right-4 z-10"
              >
                <div className="relative">
                  {/* Character Body */}
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-accent flex items-center justify-center">
                    <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center">
                      <span className="text-accent text-base md:text-xl">👋</span>
                    </div>
                  </div>
                  {/* Waving Hand */}
                  <motion.div
                    animate={{
                      rotate: [0, 20, 0],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -top-4 -right-4"
                  >
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-accent flex items-center justify-center">
                      <span className="text-white text-xs md:text-sm">Hi!</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <div className="absolute inset-0 bg-accent rounded-full blur-xl opacity-20" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-accent/20">
                <Image
                  src="/asthaimg.jpeg"
                  alt="Astha"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex-1 text-center md:text-left"
            >
              <h3 className="text-xl md:text-3xl font-bold text-text-primary mb-4 md:mb-6">
                Full Stack Developer & ML Engineer
              </h3>
              <p className="text-base md:text-lg text-text-secondary mb-6 md:mb-8 leading-relaxed">
                I'm a passionate developer with expertise in building scalable web applications
                and cloud infrastructure. My journey in technology started with a curiosity
                for how things work, and it has evolved into a career focused on creating
                innovative solutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-secondary p-4 md:p-6 rounded-xl border border-accent/10">
                  <h4 className="text-accent font-semibold mb-2">Professional Experience</h4>
                  <p className="text-sm md:text-base text-text-secondary">Cloud & Security</p>
                  <p className="text-sm md:text-base text-text-secondary">Full-stack development project</p>
                </div>
                <div ref={ref} className="bg-secondary p-4 md:p-6 rounded-xl border border-accent/10">
                  <h4 className="text-accent font-semibold mb-2">Tech Platform</h4>
                  <div className="flex items-center gap-2 mb-2">
                    <FaTrophy className="text-accent" />
                    <span className="text-sm md:text-base text-text-secondary">LeetCode</span>
                    <span className="text-accent font-bold">{leetcodeCount}+</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaTrophy className="text-accent" />
                    <span className="text-sm md:text-base text-text-secondary">Codeforces</span>
                    <span className="text-accent font-bold">{codeforcesCount}+</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 md:mt-16"
          >
            <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-6 md:mb-8 text-center md:text-left">Featured Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  title: 'Cloud Security Platform',
                  description: 'Advanced security monitoring system',
                  icon: FaShieldAlt,
                  color: 'accent'
                },
                {
                  title: 'Web Application',
                  description: 'Full-stack development project',
                  icon: FaCode,
                  color: 'accent'
                },
                {
                  title: 'Cloud Infrastructure',
                  description: 'Scalable cloud architecture',
                  icon: FaCloud,
                  color: 'accent'
                }
              ].map((project) => (
                <motion.div
                  key={project.title}
                  whileHover={{ scale: 1.02 }}
                  className="bg-secondary p-4 md:p-6 rounded-xl border border-accent/10 hover:border-accent/30 transition-all"
                >
                  <project.icon className={`text-3xl md:text-4xl mb-3 md:mb-4 text-${project.color}`} />
                  <h4 className="text-lg md:text-xl font-semibold text-text-primary mb-2">{project.title}</h4>
                  <p className="text-sm md:text-base text-text-secondary">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 