import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: 'Cricket Shot Classification System',
      description: 'Advanced deep learning system analyzing cricket videos to automatically classify batting shots using spatial and temporal pattern recognition.',
      tech: ['Python', 'Deep Learning', 'Computer Vision', 'PyTorch', 'OpenCV'],
      github: 'https://github.com/saisabari2005/cricket-shot-classification',
      features: [
        'Video frame processing and feature extraction',
        'Temporal modeling for action recognition',
        'Multi-class classification with high accuracy',
        'Real-time shot detection capabilities'
      ],
      impact: 'Demonstrates expertise in video analysis and action recognition'
    },
    {
      title: 'Cricket Live Information Extraction',
      description: 'Real-time cricket broadcast analysis system extracting scoreboard information from live match videos with intelligent change logging.',
      tech: ['Python', 'OpenCV', 'EasyOCR', 'Computer Vision'],
      github: 'https://github.com/saisabari2005/cricket-live-information-extraction',
      features: [
        'Real-time OCR from video streams',
        'Scoreboard region detection',
        'Smart change detection',
        'Automated data extraction pipeline'
      ],
      impact: 'Real-world application of CV for sports analytics'
    },
    {
      title: 'Intent Recognition System',
      description: 'End-to-end intent recognition system for virtual assistants using advanced NLP techniques, enabling context-aware responses.',
      tech: ['Python', 'NLP', 'Streamlit', 'Machine Learning'],
      github: 'https://github.com/saisabari2005/INTENT-RECOGNNITION-WITH-VIRTUAL-ASSISTANCE',
      features: [
        'Multi-intent classification',
        'Context-aware response generation',
        'Streamlit-based interactive interface',
        'Scalable NLP pipeline'
      ],
      impact: 'Production-ready virtual assistant component'
    },
    {
      title: 'RAG-Based Chatbot with PDF Q&A',
      description: 'Retrieval-Augmented Generation chatbot that ingests PDFs, performs semantic search, and generates accurate summaries using LLMs.',
      tech: ['Python', 'LangChain', 'LLMs', 'Vector Databases', 'RAG'],
      github: 'https://github.com/saisabari2005/RAG-Based-Chatbot-with-PDF-Summarization-and-Q-A',
      features: [
        'PDF document processing and chunking',
        'Semantic search with embeddings',
        'LLM-powered Q&A system',
        'Document summarization capabilities'
      ],
      impact: 'Modern LLM application with practical business use cases'
    },
    {
      title: 'Sentiment Trading Analysis',
      description: 'Sentiment-driven trading analysis system processing financial news and social media, applying NLP-based sentiment classification.',
      tech: ['Python', 'NLP', 'Financial APIs', 'Sentiment Analysis'],
      github: 'https://github.com/saisabari2005/sentiment-trading-analysis',
      features: [
        'Real-time financial news aggregation',
        'Sentiment classification pipeline',
        'Market correlation analysis',
        'Trading signal generation'
      ],
      impact: 'Finance + AI intersection project'
    },
    {
      title: 'Real-Time Sentiment Analysis with X',
      description: 'Real-time sentiment analysis system collecting live data from X (Twitter), processing text, and tracking opinion trends.',
      tech: ['Python', 'Twitter API', 'NLP', 'Real-time Processing'],
      github: 'https://github.com/saisabari2005/Sentiment-Analysis-With-Real-Time-X-Data',
      features: [
        'Real-time data streaming',
        'Text preprocessing pipeline',
        'Multi-class sentiment classification',
        'Live dashboard for tracking trends'
      ],
      impact: 'Real-time data processing at scale'
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p style={{ marginBottom: '60px', color: '#9CA3AF' }}>
            Building intelligent systems that solve real-world problems
          </p>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <Code2 size={32} color="#FFFFFF" />
                  <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ opacity: 0.8 }}>
                    <Github size={20} color="#FFFFFF" />
                  </a>
                </div>

                <h3 className="project-title" style={{ color: '#FFFFFF', marginBottom: '15px' }}>{project.title}</h3>
                <p className="project-description" style={{ color: '#9CA3AF', marginBottom: '25px', fontSize: '0.95rem' }}>{project.description}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '25px' }}>
                  {project.tech.map((tech) => (
                    <span key={tech} style={{ padding: '4px 12px', background: '#333333', color: '#FFFFFF', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 600 }}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={{ borderTop: '1px solid #333333', paddingTop: '20px' }}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', color: '#FFFFFF', fontSize: '0.875rem' }}>
                    <span style={{ fontWeight: 700 }}>Impact:</span>
                    <span style={{ color: '#9CA3AF' }}>{project.impact}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{ textAlign: 'center', marginTop: '80px' }}
          >
            <a
              href="https://github.com/saisabari2005"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ background: '#FFFFFF', color: '#000000', border: 'none' }}
            >
              View More on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default Projects;
