import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Briefcase, Award } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Code2, label: 'Projects', value: '11+' },
    { icon: Briefcase, label: 'Internships', value: '2' },
    { icon: Award, label: 'AI Domains', value: 'Multiple' },
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>

          {/* Profile Photo */}
          <motion.div
            className="about-photo-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: 'flex', justifyContent: 'center', marginBottom: '60px' }}
          >
            <div className="about-photo-wrapper" style={{ padding: '5px', background: 'var(--color-neon-purple)', borderRadius: '50%' }}>
              <img
                src="/saisabarinath.jpg"
                alt="Sai Sabarinath K"
                className="about-profile-photo"
                style={{ width: '180px', height: '180px', borderRadius: '50%', objectFit: 'cover' }}
              />
            </div>
          </motion.div>

          <div className="about-content">
            <motion.div
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                I'm <strong>Sai Sabarinath K</strong>, an AI and Data Science enthusiast pursuing my B.Tech at{' '}
                <strong>Jeppiaar Engineering College</strong>. My passion lies in transforming complex data into intelligent solutions through the power of AI, Natural Language Processing, and Computer Vision.
              </p>

              <p>
                With hands-on experience in building <strong>end-to-end ML/DL systems</strong>, I specialize in creating real-world applications that leverage cutting-edge technologies like{' '}
                <strong>PyTorch</strong>, <strong>TensorFlow</strong>, and <strong>Transformers</strong>. From sentiment analysis systems processing real-time social media data to computer vision models classifying cricket shots, I thrive on solving challenging problems at the intersection of AI and practical applications.
              </p>

              <p>
                My technical journey includes internships at <strong>Shiash Info Solutions</strong> and <strong>Pantech AI</strong>, where I've worked on production-grade projects involving Big Data tools, speech processing pipelines, and RAG-based intelligent systems. I'm particularly drawn to projects that combine multiple AI domains—whether it's integrating NLP with audio processing or merging computer vision with real-time data analytics.
              </p>

              <p>
                Beyond coding, I'm constantly exploring emerging AI technologies, experimenting with new frameworks, and contributing to open-source projects. I believe in{' '}
                <strong>learning by building</strong>, and every project is an opportunity to push the boundaries of what's possible with AI.
              </p>
            </motion.div>

            <motion.div
              className="about-stats"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px', marginTop: '60px' }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="skill-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  style={{ textAlign: 'center' }}
                >
                  <div className="stat-icon" style={{ marginBottom: '15px', display: 'flex', justifyContent: 'center', color: 'var(--color-neon-cyan)' }}>
                    <stat.icon size={32} />
                  </div>
                  <div className="stat-value" style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--color-neon-purple)' }}>{stat.value}</div>
                  <div className="stat-label" style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default About;
