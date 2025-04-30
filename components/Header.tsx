import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-accent/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent animate-text-gradient">
              Portfolio
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-8">
            <motion.a
              href="#home"
              className="text-sm font-medium text-text-secondary hover:text-accent transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Home
            </motion.a>
            <motion.a
              href="#about"
              className="text-sm font-medium text-text-secondary hover:text-accent transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About
            </motion.a>
            <motion.a
              href="#skills"
              className="text-sm font-medium text-text-secondary hover:text-accent transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Skills
            </motion.a>
            <motion.a
              href="#projects"
              className="text-sm font-medium text-text-secondary hover:text-accent transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Projects
            </motion.a>
            <motion.a
              href="#experience"
              className="text-sm font-medium text-text-secondary hover:text-accent transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Experience
            </motion.a>
            <motion.a
              href="#education"
              className="text-sm font-medium text-text-secondary hover:text-accent transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Education
            </motion.a>
            <motion.a
              href="#certificates"
              className="text-sm font-medium text-text-secondary hover:text-accent transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Certificates
            </motion.a>
            <motion.a
              href="#contact"
              className="text-sm font-medium text-text-secondary hover:text-accent transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 