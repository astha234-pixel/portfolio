import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'chauhanaastha438@gmail.com',
      link: 'mailto:chauhanaastha438@gmail.com'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: '+91 82870 13971',
      link: 'tel:+918287013971'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: 'New Delhi, India',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: FaGithub,
      label: 'GitHub',
      link: 'https://github.com/astha234-pixel'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/aastha-chauhan-a9b571252'
    },
    {
      icon: FaTwitter,
      label: 'Twitter',
      link: 'https://twitter.com/yourusername'
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-text-primary">
            Get In Touch
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <h3 className="text-2xl font-bold text-text-primary mb-8">Contact Information</h3>
              
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-white border border-accent/10 hover:border-accent/30 transition-all relative overflow-hidden shadow-sm hover:shadow-md"
                >
                  <motion.div
                    className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="p-3 rounded-lg bg-white border border-accent/10 group-hover:bg-accent/5 group-hover:border-accent/30 transition-colors relative z-10">
                    <info.icon className="text-2xl text-accent" />
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-text-primary font-medium">{info.title}</h4>
                    <p className="text-text-secondary group-hover:text-accent transition-colors">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="text-xl font-bold text-text-primary mb-4">Connect With Me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group relative p-4 rounded-xl bg-white border border-accent/10 hover:border-accent/30 transition-all shadow-sm hover:shadow-md"
                    >
                      <motion.div
                        className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      <div className="relative z-10 flex items-center gap-2">
                        <social.icon className="text-2xl text-accent" />
                        <span className="text-text-secondary group-hover:text-accent transition-colors">{social.label}</span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-xl border border-accent/10 relative overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <motion.div
                className="absolute inset-0 bg-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-300"
              />
              <h3 className="text-2xl font-bold text-text-primary mb-8 relative z-10">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-text-secondary mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white border border-accent/10 text-text-primary focus:border-accent/30 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-text-secondary mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white border border-accent/10 text-text-primary focus:border-accent/30 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-text-secondary mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-accent/10 text-text-primary focus:border-accent/30 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-text-secondary mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-accent/10 text-text-primary focus:border-accent/30 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-lg bg-accent text-white font-medium transition-all relative overflow-hidden ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:bg-accent/90'
                  }`}
                >
                  <motion.div
                    className="absolute inset-0 bg-accent/10 opacity-0 hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative z-10">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-accent text-center"
                  >
                    Message sent successfully!
                  </motion.p>
                )}

                {submitStatus === 'error' && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-center"
                  >
                    Error sending message. Please try again.
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 