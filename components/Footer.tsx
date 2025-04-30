import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: 'GitHub',
      icon: FaGithub,
      url: 'https://github.com/Adityasingh098'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      url: 'https://www.linkedin.com/in/aastha-chauhan-a9b571252'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      url: 'mailto:chauhanaastha438@gmail.com'
    }
  ];

  return (
    <footer className="bg-white py-12 border-t border-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <link.icon className="text-2xl" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center text-text-secondary"
          >
            <p className="text-sm">
              © {currentYear} Astha Chauhan. All rights reserved.
            </p>
            <p className="text-sm mt-2">
              Built with Next.js, Tailwind CSS, and ❤️
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 