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
      <footer className="footer" style={{ borderTop: '1px solid var(--glass-border)', padding: '80px 0', background: 'var(--color-space-dark)' }}>
        <div className="container">
          <div className="footer-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '60px' }}>
            <div className="footer-section">
              <h3 style={{ fontSize: '1.8rem', fontWeight: 900, marginBottom: '20px', background: 'var(--gradient-aurora)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>SSK</h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: '1.8' }}>
                Building Intelligent Systems with AI, NLP & Computer Vision
              </p>
            </div>

            <div className="footer-section">
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '25px', color: 'var(--color-text-primary)' }}>Quick Links</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {quickLinks.map((link) => (
                  <li key={link.name} style={{ marginBottom: '12px' }}>
                    <Link
                      to={link.to}
                      smooth={true}
                      duration={500}
                      style={{ color: 'var(--color-text-muted)', cursor: 'pointer', transition: 'all 0.3s ease', textDecoration: 'none' }}
                      onMouseEnter={(e) => {
                        e.target.style.color = 'var(--color-neon-cyan)';
                        e.target.style.paddingLeft = '5px';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.color = 'var(--color-text-muted)';
                        e.target.style.paddingLeft = '0';
                      }}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '25px', color: 'var(--color-text-primary)' }}>Connect</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '12px' }}>
                  <a href="https://github.com/saisabari2005" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-neon-cyan)'} onMouseLeave={(e) => e.target.style.color = 'var(--color-text-muted)'}>GitHub</a>
                </li>
                <li style={{ marginBottom: '12px' }}>
                  <a href="https://www.linkedin.com/in/sai-sabarinath-k-14bb42321/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-neon-cyan)'} onMouseLeave={(e) => e.target.style.color = 'var(--color-text-muted)'}>LinkedIn</a>
                </li>
                <li>
                  <a href="mailto:saisabarirahul@gmail.com" style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--color-neon-cyan)'} onMouseLeave={(e) => e.target.style.color = 'var(--color-text-muted)'}>Email</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom" style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '30px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
              © {new Date().getFullYear()} Sai Sabarinath K. All rights reserved.
            </p>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem', fontWeight: 500 }}>
              Built with <span style={{ color: 'var(--color-neon-magenta)' }}>Precision</span> and <span style={{ color: 'var(--color-neon-cyan)' }}>AI</span>
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
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 1000 }}
        >
          <Link to="home" smooth={true} duration={500}>
            <button
              aria-label="Back to top"
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: 'var(--gradient-primary)',
                color: '#FFFFFF',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--shadow-neon)',
                transition: 'all 0.3s ease'
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
