import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaPython, FaBrain } from 'react-icons/fa';
import { 
  SiTensorflow, SiPytorch, SiScikitlearn, SiPython, SiAmazon, SiDocker,
  SiJupyter, SiPandas, SiNumpy, SiMongodb, SiPostgresql, SiGit, SiLinux,
  SiKubernetes, SiTerraform, SiJenkins
} from 'react-icons/si';

const TITLES = [
  { text: "Machine Learning Engineer", className: "text-text-secondary" },
  { text: "Data Scientist", className: "text-accent" },
  { text: "AI Researcher", className: "text-red-500" }
];

const techIcons = [
  { name: 'TensorFlow', icon: <SiTensorflow />, color: '#FF6F00' },
  { name: 'PyTorch', icon: <SiPytorch />, color: '#EE4C2C' },
  { name: 'Scikit-learn', icon: <SiScikitlearn />, color: '#F7931E' },
  { name: 'Python', icon: <FaPython />, color: '#3776AB' },
  { name: 'Jupyter', icon: <SiJupyter />, color: '#F37626' },
  { name: 'Pandas', icon: <SiPandas />, color: '#150458' },
  { name: 'NumPy', icon: <SiNumpy />, color: '#013243' },
  { name: 'AWS', icon: <SiAmazon />, color: '#FF9900' },
  { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
  { name: 'Git', icon: <SiGit />, color: '#F05032' },
  { name: 'Linux', icon: <SiLinux />, color: '#FCC624' },
  { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326CE5' },
  { name: 'Terraform', icon: <SiTerraform />, color: '#7B42BC' }
];

const Hero = () => {
  const [displayed, setDisplayed] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentTitle = TITLES[titleIndex].text;

    if (typing) {
      if (charIndex < currentTitle.length) {
        timeout = setTimeout(() => {
          setDisplayed(currentTitle.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 70);
      } else {
        timeout = setTimeout(() => setTyping(false), 1200);
      }
    } else {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayed(currentTitle.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 40);
      } else {
        setTyping(true);
        setTitleIndex((titleIndex + 1) % TITLES.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, typing, titleIndex]);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background fixed w-full"
    >
      {/* Static background */}
      <div className="absolute inset-0">
        {/* Static gradient background */}
        <div className="absolute inset-0 bg-gradient-mesh opacity-20" />
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-4 relative z-10 h-full flex items-center"
      >
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent"
              >
                Hi, I'm <span className="text-accent">Astha</span>
              </motion.h1>
              <motion.div
                className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-hero rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-16 mb-6"
            >
              <span className="text-2xl md:text-3xl font-bold bg-gradient-about bg-clip-text text-transparent">
                {displayed}
                <motion.span
                  animate={{
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="inline-block w-1 h-6 bg-accent ml-1"
                />
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-text-secondary text-lg mb-8 max-w-lg"
            >
              I build exceptional digital experiences with modern technologies and best practices.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex gap-4 mb-8 justify-center md:justify-start"
            >
              {[
                { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/aastha-chauhan-a9b571252", label: "LinkedIn" },
                { icon: <FaGithub />, href: "https://github.com/Adityasingh098", label: "GitHub" },
                { icon: <FaEnvelope />, href: "mailto:chauhanaastha438@gmail.com", label: "Email" }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-lg bg-white border border-accent/20 hover:border-accent/40 transition-all group relative overflow-hidden shadow-soft hover:shadow-glow"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="text-2xl text-accent">{social.icon}</span>
                    <span className="text-sm font-medium text-text-secondary group-hover:text-accent transition-colors">
                      {social.label}
                    </span>
                  </span>
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex gap-4 justify-center md:justify-start"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-gradient-hero text-white font-medium shadow-soft hover:shadow-glow transition-all relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Get in Touch</span>
                  <motion.span
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.a>
              <motion.a
                href="https://drive.google.com/file/d/1RasSXmZaORyrNc0Z9Ij6adqrppoTdaKJ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 rounded-full bg-white text-text-primary font-medium border border-accent/20 hover:border-accent/40 shadow-soft hover:shadow-md transition-all flex items-center gap-2 group relative overflow-hidden"
              >
                <FaDownload className="text-accent" />
                <span className="relative z-10">Resume</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column - Tech Stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative w-full h-[400px] md:h-[600px] md:w-[600px] ml-auto mt-12 md:mt-24"
          >
            {/* Main Container */}
            <div className="relative w-full h-full">
              {/* Tech Stack Display */}
              <div className="relative w-full h-full p-4 md:p-6">
                {/* Grid Container */}
                <motion.div 
                  className="grid grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 p-4 md:p-6 ml-auto max-w-[300px] md:max-w-[400px]"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ 
                    duration: 0.8,
                    ease: "easeOut"
                  }}
                >
                  {techIcons.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1
                      }}
                      whileHover={{ scale: 1.1 }}
                      className="aspect-square p-2 md:p-4 bg-white rounded-xl shadow-soft hover:shadow-glow transition-all flex items-center justify-center group relative overflow-hidden"
                    >
                      <span className="text-xl md:text-2xl" style={{ color: tech.color }}>
                        {tech.icon}
                      </span>
                      <div className="absolute inset-0 bg-gradient-mesh opacity-0 group-hover:opacity-10 transition-opacity" />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 