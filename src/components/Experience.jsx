import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: 'Shiash Info Solutions',
      role: 'AI/ML Intern',
      type: 'Offline Internship',
      duration: '3 Months',
      period: '2024',
      achievements: [
        'Worked on production-level AI/ML projects',
        'Hands-on experience with Big Data tools (PySpark, Airflow)',
        'Collaborated on end-to-end ML pipelines',
        'Real-world deployment and system integration'
      ],
      technologies: ['Python', 'PySpark', 'Apache Airflow', 'Machine Learning', 'Big Data']
    },
    {
      company: 'Pantech AI',
      role: 'AI/ML Intern',
      type: 'Online Internship',
      duration: 'Completed',
      period: '2024',
      achievements: [
        'Advanced AI and Deep Learning projects',
        'NLP and Computer Vision applications',
        'Industry-standard best practices',
        'Remote collaboration and project delivery'
      ],
      technologies: ['Python', 'Deep Learning', 'NLP', 'Computer Vision', 'PyTorch']
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Professional Experience</h2>

          <div className="timeline" style={{ marginTop: '60px' }}>
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                className="timeline-item"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              >
                <div className="timeline-dot" />

                <motion.div
                  className="skill-card"
                  whileHover={{ y: -5, borderColor: '#000000' }}
                >
                  <div className="experience-header" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '15px', marginBottom: '20px' }}>
                    <div>
                      <h3 className="company-name" style={{ margin: 0 }}>{exp.company}</h3>
                      <h4 className="role-title" style={{ fontWeight: 600, color: '#4B5563', margin: '5px 0' }}>{exp.role}</h4>
                      <span className="badge" style={{ margin: '5px 0 0 0' }}>{exp.type}</span>
                    </div>
                    <div className="experience-duration" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#6B7280', fontWeight: 500 }}>
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  <div className="achievements" style={{ marginBottom: '20px' }}>
                    <h5 style={{ fontSize: '1rem', marginBottom: '10px' }}>Key Learning & Achievements:</h5>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative', color: '#6B7280' }}>
                          <span style={{ position: 'absolute', left: 0, color: '#000000' }}>▹</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="technologies" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '15px', borderTop: '1px solid #F3F4F6' }}>
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Experience;
