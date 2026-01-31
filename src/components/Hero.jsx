import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="hero-container">
      {/* Left Side: Content */}
      <div className="hero-left">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="hero-greeting">Hi, I am</p>
          <h1 className="hero-name">SAI SABARINATH K</h1>

          <div className="hero-title-wrapper">
            <h2 className="hero-title">
              Aspiring AI & Data Science Engineer
            </h2>
          </div>

          {/* Social Icons */}
          <div className="social-icons">
            <a
              href="https://github.com/saisabari2005"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              title="GitHub"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/sai-sabarinath-k-14bb42321/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              title="LinkedIn"
            >
              <Linkedin />
            </a>
            <a
              href="mailto:saisabarirahul@gmail.com"
              className="social-icon"
              title="Email"
            >
              <Mail />
            </a>
          </div>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            style={{ marginTop: '40px' }}
          >
            <Link to="projects" smooth={true} duration={500}>
              <button className="btn btn-primary">View Projects</button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <Link to="about" smooth={true} duration={500} className="scroll-indicator">
          <span>Scroll</span>
          <ArrowDown size={16} />
        </Link>
      </div>

      <div className="hero-right">
        <motion.div
          className="hero-photo-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="photo-wrapper"
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="photo-glow"></div>
            <div className="photo-border">
              <img
                src="/saisabarinath (2).png"
                alt="Sai Sabarinath K"
                className="profile-photo"
                loading="eager"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
