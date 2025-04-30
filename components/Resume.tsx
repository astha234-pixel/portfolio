import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiPython, SiReact, SiNextdotjs, SiTypescript, SiDocker, SiAmazon } from 'react-icons/si';

const Resume = () => {
  const personalInfo = {
    name: 'Astha Chauhan',
    title: 'Machine Learning Engineer & Full Stack Developer',
    email: 'chauhanaastha438@gmail.com',
    phone: '+91 9876543210',
    location: 'New Delhi, India',
    linkedin: 'https://www.linkedin.com/in/aastha-chauhan-a9b571252',
    github: 'https://github.com/Adityasingh098'
  };

  const education = [
    {
      degree: 'Bachelor of Technology',
      institution: 'Lovely Professional University',
      year: '2022 - 2026',
      specialization: 'Computer Science with Specialization in Cyber Security',
      achievements: [
        'GPA: 3.8/4.0',
        'Dean\'s List for Academic Excellence',
        'Machine Learning Research Assistant'
      ]
    }
  ];

  const experience = [
    {
      role: 'Machine Learning Engineer',
      company: 'AI Solutions Inc.',
      period: '2023 - Present',
      achievements: [
        'Developed and deployed deep learning models for computer vision tasks',
        'Implemented MLOps pipelines for automated model training and deployment',
        'Led a team of 3 ML engineers in developing AI solutions'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'Python', 'Docker', 'AWS']
    },
    {
      role: 'Full Stack Developer',
      company: 'Tech Solutions Ltd',
      period: '2022 - 2023',
      achievements: [
        'Built scalable web applications using React and Node.js',
        'Implemented RESTful APIs and microservices architecture',
        'Optimized application performance and reduced load times by 40%'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB']
    }
  ];

  const skills = {
    'Machine Learning': ['Deep Learning', 'Computer Vision', 'NLP', 'MLOps'],
    'Full Stack': ['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB'],
    'Cloud & DevOps': ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    'Tools & Libraries': ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy']
  };

  return (
    <section id="resume" className="min-h-screen py-20 bg-white">
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
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold text-[#FF1675] mb-4"
            >
              Resume
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
              className="h-1 w-32 mx-auto bg-gradient-to-r from-[#FF1675] to-[#FF8E1C]"
            />
          </div>

          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#F8F9FC] p-8 rounded-2xl mb-12"
          >
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">{personalInfo.name}</h3>
              <p className="text-xl text-[#7000FF]">{personalInfo.title}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-[#7000FF]" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-[#7000FF]" />
                <span>{personalInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[#7000FF]" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-4">
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#7000FF] hover:text-[#7000FF]/80">
                  <FaLinkedin size={24} />
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-[#7000FF] hover:text-[#7000FF]/80">
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Education</h3>
            {education.map((edu, index) => (
              <div key={index} className="bg-[#F8F9FC] p-6 rounded-xl mb-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">{edu.degree}</h4>
                    <p className="text-[#7000FF]">{edu.institution}</p>
                  </div>
                  <span className="text-gray-500">{edu.year}</span>
                </div>
                <p className="text-gray-600 mb-4">{edu.specialization}</p>
                <ul className="space-y-2">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7000FF]"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Experience</h3>
            {experience.map((exp, index) => (
              <div key={index} className="bg-[#F8F9FC] p-6 rounded-xl mb-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-800">{exp.role}</h4>
                    <p className="text-[#7000FF]">{exp.company}</p>
                  </div>
                  <span className="text-gray-500">{exp.period}</span>
                </div>
                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-600">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7000FF]"></span>
                      {achievement}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-white text-[#7000FF] text-sm border border-[#7000FF]/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(skills).map(([category, items], index) => (
                <div key={index} className="bg-[#F8F9FC] p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, i) => (
                      <span key={i} className="px-3 py-1 rounded-full bg-white text-[#7000FF] text-sm border border-[#7000FF]/20">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume; 