import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { 
  SiTensorflow, SiPytorch, SiScikitlearn, SiPython, SiAmazon, 
  SiDocker, SiJupyter, SiPandas, SiNumpy, SiPostgresql,
  SiGit, SiGithub, SiLinux, SiKubernetes, SiTerraform
} from 'react-icons/si';
import { FaBrain, FaDatabase, FaTools, FaChartLine } from 'react-icons/fa';

interface Skill {
  icon: IconType;
  name: string;
  level: number;
}

type CategoryKey = 'ml' | 'data' | 'devops' | 'research';

interface Category {
  icon: IconType;
  title: string;
  skills: Skill[];
}

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('ml');

  const categories: Record<CategoryKey, Category> = {
    ml: {
      icon: FaBrain,
      title: 'Machine Learning',
      skills: [
        { icon: SiTensorflow, name: 'TensorFlow', level: 90 },
        { icon: SiPytorch, name: 'PyTorch', level: 95 },
        { icon: SiScikitlearn, name: 'Scikit-learn', level: 85 },
        { icon: SiPython, name: 'Python ML', level: 90 }
      ]
    },
    data: {
      icon: FaChartLine,
      title: 'Data Science',
      skills: [
        { icon: SiPandas, name: 'Pandas', level: 95 },
        { icon: SiNumpy, name: 'NumPy', level: 90 },
        { icon: SiJupyter, name: 'Jupyter', level: 85 },
        { icon: SiPostgresql, name: 'SQL', level: 80 }
      ]
    },
    devops: {
      icon: FaTools,
      title: 'MLOps & Cloud',
      skills: [
        { icon: SiAmazon, name: 'AWS', level: 85 },
        { icon: SiDocker, name: 'Docker', level: 80 },
        { icon: SiKubernetes, name: 'Kubernetes', level: 75 },
        { icon: SiTerraform, name: 'Terraform', level: 70 }
      ]
    },
    research: {
      icon: FaBrain,
      title: 'Research Skills',
      skills: [
        { icon: SiPython, name: 'Research Methods', level: 85 },
        { icon: SiPython, name: 'Paper Writing', level: 80 },
        { icon: SiPython, name: 'Experimentation', level: 85 },
        { icon: SiPython, name: 'Data Analysis', level: 90 }
      ]
    }
  };

  return (
    <section id="skills" className="min-h-screen py-20 bg-white">
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
              className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-skills bg-clip-text text-transparent animate-text-gradient"
            >
              Skills & Expertise
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="h-1 w-24 mx-auto bg-gradient-skills rounded-full"
            />
          </div>

          {/* Category Selector */}
          <div className="flex justify-center gap-4 mb-12">
            {(Object.keys(categories) as CategoryKey[]).map((category) => {
              const CategoryIcon = categories[category].icon;
              return (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all relative overflow-hidden ${
                    activeCategory === category
                      ? 'bg-accent text-white'
                      : 'bg-white text-text-secondary border border-accent/20'
                  }`}
                >
                  <motion.div
                    className="absolute inset-0 bg-accent/10 opacity-0 hover:opacity-100 transition-opacity duration-300"
                    style={{ display: activeCategory === category ? 'none' : 'block' }}
                  />
                  <CategoryIcon className="text-lg relative z-10" />
                  <span className="relative z-10">{categories[category].title}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white p-6 rounded-xl border border-accent/10 hover:border-accent/30 transition-all shadow-sm hover:shadow-md"
              >
                <motion.div
                  className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-white border border-accent/10 group-hover:bg-accent/5 group-hover:border-accent/30 transition-colors">
                      <skill.icon className="text-2xl text-accent" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors">{skill.name}</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-32 h-2 bg-accent/10 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="h-full bg-accent"
                          />
                        </div>
                        <span className="text-sm text-accent">{skill.level}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-text-primary mb-8 text-center">Additional Skills</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['Problem Solving', 'Team Leadership', 'Agile Methodology', 'System Design', 'Code Review', 'Technical Writing'].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="px-4 py-2 rounded-full bg-white border border-accent/20 text-text-secondary group relative overflow-hidden hover:border-accent/30 transition-all"
                >
                  <motion.div
                    className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative z-10">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 