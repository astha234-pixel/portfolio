import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCertificate, FaCalendarAlt, FaExternalLinkAlt } from 'react-icons/fa';

const Certificates = () => {
  const certificates = [
    {
      image: '/certifications/Screenshot 2025-05-01 040047.png',
      title: 'Full Stack Development Certification',
      issuer: 'CipherSchool',
      date: '2024',
      description: 'Comprehensive training in modern web development technologies and best practices.',
      skills: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      link: '#'
    },
    {
      image: '/certifications/Screenshot 2025-05-01 040130.png',
      title: 'Cloud Computing Certification',
      issuer: 'CipherSchool',
      date: '2024',
      description: 'Advanced training in cloud infrastructure and services.',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      link: '#'
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-white scroll-mt-20">
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
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-certificates bg-clip-text text-transparent animate-text-gradient"
            >
              Certifications
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="h-1 w-24 mx-auto bg-gradient-certificates rounded-full"
            />
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
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
                  {/* Certificate Image */}
                  <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden border border-accent/10">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Certificate Details */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-accent">
                      <FaCertificate className="text-xl" />
                      <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors">
                        {cert.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 text-text-secondary">
                      <FaCalendarAlt className="text-accent" />
                      <span>{cert.date}</span>
                    </div>

                    <p className="text-text-secondary">
                      {cert.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* View Certificate Link */}
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
                    >
                      <span>View Certificate</span>
                      <FaExternalLinkAlt className="text-sm" />
                    </a>
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

export default Certificates; 