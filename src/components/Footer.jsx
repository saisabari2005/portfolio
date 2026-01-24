import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const quickLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <>
      <footer className="footer" style={{ borderTop: '1px solid #E5E7EB', padding: '60px 0' }}>
        <div className="container">
          <div className="footer-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '60px' }}>
            <div className="footer-section">
              <h3 style={{ fontSize: '1.5rem', fontWeight: 900, marginBottom: '20px' }}>SSK</h3>
              <p style={{ color: '#6B7280', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Building Intelligent Systems with AI, NLP & Computer Vision
              </p>
            </div>

            <div className="footer-section">
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '20px' }}>Quick Links</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {quickLinks.map((link) => (
                  <li key={link.name} style={{ marginBottom: '10px' }}>
                    <Link
                      to={link.to}
                      smooth={true}
                      duration={500}
                      style={{ color: '#4B5563', cursor: 'pointer', transition: 'color 0.3s' }}
                      onMouseEnter={(e) => e.target.style.color = '#000000'}
                      onMouseLeave={(e) => e.target.style.color = '#4B5563'}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '20px' }}>Connect</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '10px' }}>
                  <a href="https://github.com/saisabari2005" target="_blank" rel="noopener noreferrer" style={{ color: '#4B5563' }}>GitHub</a>
                </li>
                <li style={{ marginBottom: '10px' }}>
                  <a href="https://www.linkedin.com/in/sai-sabarinath-k-14bb42321/" target="_blank" rel="noopener noreferrer" style={{ color: '#4B5563' }}>LinkedIn</a>
                </li>
                <li>
                  <a href="mailto:saisabarirahul@gmail.com" style={{ color: '#4B5563' }}>Email</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom" style={{ borderTop: '1px solid #E5E7EB', paddingTop: '30px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
            <p style={{ color: '#9CA3AF', fontSize: '0.875rem' }}>
              © {new Date().getFullYear()} Sai Sabarinath K. All rights reserved.
            </p>
            <p style={{ color: '#9CA3AF', fontSize: '0.875rem' }}>
              Built with Precision and AI
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 1000 }}
        >
          <Link to="home" smooth={true} duration={500}>
            <button
              aria-label="Back to top"
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: '#000000',
                color: '#FFFFFF',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
              }}
            >
              <ArrowUp size={24} />
            </button>
          </Link>
        </motion.div>
      )}
    </>
  );
};

export default Footer;
