import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendar } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      icon: FaGraduationCap,
      title: 'Bachelor of Technology',
      institution: 'Lovely Professional University',
      year: '2022 - 2026',
      description: 'Computer Science with Specialization in Cyber Security',
      achievements: [
        'Participated in multiple hackathons and coding competitions',
        'Active member of the university Cyber Security Club'
      ]
    },
    {
      icon: FaGraduationCap,
      title: 'Higher Secondary Education',
      institution: 'Modern National Public School, New Delhi',
      year: '2020 - 2022',
      description: 'Science Stream',
      achievements: [
        'Percentage: 87%'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
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
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-education bg-clip-text text-transparent animate-text-gradient"
            >
              Education
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="h-1 w-24 mx-auto bg-gradient-education rounded-full"
            />
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            {education.map((edu, index) => (
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
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-white border border-accent/10 group-hover:bg-accent/5 group-hover:border-accent/30 transition-colors">
                      <edu.icon className="text-2xl text-accent" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors">{edu.title}</h4>
                      <p className="text-accent">{edu.institution}</p>
                    </div>
                  </div>
                  <p className="text-text-secondary mb-4">{edu.description}</p>
                  <div className="flex items-center gap-2 text-text-secondary mb-4">
                    <FaCalendar className="text-accent" />
                    <span>{edu.year}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-white border border-accent/10 text-text-secondary text-sm group-hover:border-accent/30 transition-colors"
                      >
                        {achievement}
                      </span>
                    ))}
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

export default Education; 