import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [filter, setFilter] = useState('all');

  const skillCategories = [
    {
      category: 'Programming',
      skills: ['Python', 'SQL', 'Bash', 'HTML', 'CSS', 'JavaScript'],
    },
    {
      category: 'AI/ML',
      skills: ['PyTorch', 'TensorFlow', 'scikit-learn', 'TorchAudio', 'TorchVision', 'Mixed Precision Training'],
    },
    {
      category: 'NLP',
      skills: ['Transformers', 'Hugging Face', 'NLTK', 'spaCy', 'LangChain', 'Groq AI', 'RAG Systems', 'Vector Databases'],
    },
    {
      category: 'Computer Vision',
      skills: ['OpenCV', 'CNNs', 'Vision Transformers', 'Object Detection', 'Image Classification', 'Video Analysis'],
    },
    {
      category: 'Speech & Audio',
      skills: ['ESPnet', 'SpeechBrain', 'S3PRL', 'Fairseq', 'ASR', 'TTS', 'Speech Enhancement'],
    },
    {
      category: 'Big Data',
      skills: ['Apache Airflow', 'PySpark', 'ETL Pipelines'],
    },
    {
      category: 'Web & Backend',
      skills: ['Streamlit', 'FastAPI', 'Flask'],
    },
    {
      category: 'Tools & DevOps',
      skills: ['Linux', 'Git', 'GitHub', 'VS Code', 'Jupyter', 'Docker', 'CUDA', 'WSL2'],
    },
  ];

  const filters = ['all', ...skillCategories.map(cat => cat.category)];

  const filteredCategories = filter === 'all'
    ? skillCategories
    : skillCategories.filter(cat => cat.category === filter);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technical Skills</h2>

          {/* Filter Buttons */}
          <motion.div
            className="skill-filters"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px' }}
          >
            {filters.map((f) => (
              <button
                key={f}
                className={`btn ${filter === f ? 'btn-primary' : 'btn-secondary'}`}
                onClick={() => setFilter(f)}
                style={{ borderRadius: '50px', padding: '8px 24px' }}
              >
                {f === 'all' ? 'All Skills' : f}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <div className="skills-grid">
            {filteredCategories.map((category, catIndex) => (
              <motion.div
                key={category.category}
                className="skill-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + catIndex * 0.1 }}
              >
                <h3 className="category-title" style={{ color: '#000000', marginBottom: '20px' }}>{category.category}</h3>
                <div className="skills-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="badge"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.3,
                        delay: 0.4 + catIndex * 0.1 + skillIndex * 0.05
                      }}
                      whileHover={{
                        scale: 1.05,
                        borderColor: '#000000'
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Skills;
