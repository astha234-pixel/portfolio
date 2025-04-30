import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiPython, SiAmazon, SiDocker, SiJupyter } from 'react-icons/si';
import Image from 'next/image';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: 'Deep Learning Image Classification',
      description: 'Developed a CNN model using TensorFlow for image classification, achieving 95% accuracy on the CIFAR-10 dataset.',
      technologies: [SiTensorflow, SiPython, SiDocker],
      category: 'ml',
      github: 'https://github.com/yourusername/image-classification',
      live: '#',
      image: '/projects/ml-classification.png'
    },
    {
      title: 'Natural Language Processing System',
      description: 'Built an NLP pipeline for sentiment analysis and text classification using PyTorch and BERT.',
      technologies: [SiPytorch, SiPython, SiAmazon],
      category: 'ml',
      github: 'https://github.com/yourusername/nlp-system',
      live: '#',
      image: '/projects/nlp-system.png'
    },
    {
      title: 'MLOps Pipeline Automation',
      description: 'Implemented an automated MLOps pipeline for model training, evaluation, and deployment using AWS and Docker.',
      technologies: [SiPython, SiAmazon, SiDocker],
      category: 'mlops',
      github: 'https://github.com/yourusername/mlops-pipeline',
      live: '#',
      image: '/projects/mlops.png'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-projects bg-clip-text text-transparent animate-text-gradient"
            >
              ML Projects
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="h-1 w-24 mx-auto bg-gradient-projects rounded-full"
            />
          </div>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            {['all', 'ml', 'mlops'].map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? 'bg-accent text-white'
                    : 'bg-white text-text-secondary hover:text-accent border border-accent/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white p-6 rounded-xl border border-accent/10 hover:border-accent/30 transition-all shadow-sm hover:shadow-md"
              >
                <motion.div
                  className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                <div className="relative z-10">
                  {/* Project Image */}
                  <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden border border-accent/10">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Project Details */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-text-secondary">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((Tech, i) => (
                        <span
                          key={i}
                          className="p-2 rounded-lg bg-accent/10 text-accent"
                        >
                          <Tech className="text-xl" />
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                      >
                        <FaGithub />
                        <span>GitHub</span>
                      </a>
                      {project.live !== '#' && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                        >
                          <FaExternalLinkAlt />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 