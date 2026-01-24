import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Experience', to: 'experience' },
  ];

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="nav-container">
          <Link to="home" smooth={true} duration={500} className="logo" style={{ cursor: 'pointer' }}>
            <span className="logo-icon">SSK</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="nav-menu desktop-menu">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="active"
                  className="nav-link"
                  offset={-80}
                  style={{ cursor: 'pointer' }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="contact" smooth={true} duration={500} offset={-80}>
                <button className="nav-contact-btn">CONTACT ME</button>
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'none', // Overridden by CSS at breakpoint
              background: 'none',
              border: 'none',
              color: 'inherit',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              width: '80%',
              maxWidth: '300px',
              background: '#FFFFFF',
              zIndex: 1000,
              padding: '60px 30px',
              boxShadow: '-10px 0 30px rgba(0,0,0,0.1)'
            }}
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              style={{ position: 'absolute', top: 20, right: 20, background: 'none', border: 'none', cursor: 'pointer' }}
            >
              <X size={24} />
            </button>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {navItems.map((item, index) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    className="mobile-nav-link"
                    onClick={() => setMobileMenuOpen(false)}
                    offset={-80}
                    style={{ fontSize: '1.5rem', fontWeight: 700, color: '#000000' }}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
              <li style={{ marginTop: '20px' }}>
                <Link to="contact" smooth={true} duration={500} onClick={() => setMobileMenuOpen(false)}>
                  <button className="btn btn-primary" style={{ width: '100%' }}>CONTACT ME</button>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
