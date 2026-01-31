import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Github, Linkedin, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'saisabarirahul@gmail.com',
            link: 'mailto:saisabarirahul@gmail.com'
        },
        {
            icon: Github,
            label: 'GitHub',
            value: 'saisabari2005',
            link: 'https://github.com/saisabari2005'
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            value: 'Sai Sabarinath K',
            link: 'https://www.linkedin.com/in/sai-sabarinath-k-14bb42321/'
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Chennai, Tamil Nadu, India',
            link: null
        }
    ];

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title" style={{ textAlign: 'center', margin: '0 auto 40px' }}>Get In Touch</h2>

                    <div className="contact-content" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', marginTop: '40px' }}>
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            style={{ textAlign: 'left' }}
                        >
                            <h3 style={{ fontSize: '2rem', marginBottom: '20px', background: 'var(--gradient-accent)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Let's Connect</h3>
                            <p style={{ marginBottom: '40px', color: 'var(--color-text-secondary)' }}>
                                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                            </p>

                            <div className="contact-methods" style={{ display: 'grid', gap: '20px' }}>
                                {contactInfo.map((contact, index) => (
                                    <div key={contact.label} style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                        <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-neon-cyan)' }}>
                                            <contact.icon size={20} />
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>{contact.label}</div>
                                            {contact.link ? (
                                                <a href={contact.link} target="_blank" rel="noopener noreferrer" style={{ fontWeight: 500, color: 'var(--color-text-primary)' }}>
                                                    {contact.value}
                                                </a>
                                            ) : (
                                                <div style={{ fontWeight: 500, color: 'var(--color-text-primary)' }}>{contact.value}</div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="skill-card" style={{ textAlign: 'center', padding: '40px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <Send size={48} style={{ marginBottom: '20px', color: 'var(--color-neon-purple)' }} />
                                <h3 style={{ marginBottom: '15px' }}>Hire Me</h3>
                                <p style={{ marginBottom: '30px', color: 'var(--color-text-secondary)' }}>
                                    Available for freelance projects and full-time roles.
                                </p>
                                <a href="mailto:saisabarirahul@gmail.com" className="contact-btn" style={{ display: 'inline-block', width: 'fit-content', textDecoration: 'none' }}>
                                    Send Me an Email
                                </a>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
