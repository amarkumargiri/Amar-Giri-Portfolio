import React, { useState, useEffect } from 'react';
import './App.css';

// SVG Icon Components
const Icons = {
  Code: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  Server: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  ),
  Database: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  ),
  Award: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
  Github: ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  Linkedin: ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  Mail: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  Download: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  ),
  ExternalLink: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.message.trim()) errors.message = 'Message is required';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const projects = [
    {
      title: 'Employee Management System',
      description: 'Manual employee tracking is inefficient and error-prone.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      features: ['Role-based access control', 'CRUD operations', 'Real-time updates', 'Performance analytics'],
      gradient: 'from-purple-600 to-blue-600',
      live: "#",
      github: "https://github.com/amarkumargiri/Employee-Management-System",
    },
    {
      title: 'Voting Platform',
      description: 'Need a secure and transparent digital voting system.',
      tech: ['Node.js', 'Express', 'JWT', 'PostgreSQL'],
      features: ['Authentication & authorization', 'Vote integrity checks', 'Encrypted data storage', 'Audit trail logging'],
      gradient: 'from-blue-600 to-cyan-600',
      live: "#",
      github: "https://github.com/amarkumargiri/voting-app"
    },
    {
      title: 'Secure Task Manager',
      description: 'A secure and scalable task management system with role-based access control.',
      tech: ['React', 'Node.js', 'Express','JWT', 'Authentication', 'MongoDB'],
      features: ['User authentication and authorization', 'Role-based access control', 'CRUD operations for tasks'],
      gradient: 'from-cyan-600 to-teal-600',
      live: "#",
      github: "https://github.com/amarkumargiri/Secure-Task-Manager-API"
    },
  ];

  const skills = [
    {
      category: 'Frontend',
      icon: 'Code',
      items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind'],
      color: 'from-orange-500 to-red-500'
    },
    {
      category: 'Backend',
      icon: 'Server',
      items: ['Node.js', 'Express', 'REST APIs', 'JWT', 'MongoDB'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      category: 'Tools',
      icon: 'Database',
      items: ['Git', 'GitHub', 'Postman', 'VS Code'],
      color: 'from-blue-500 to-indigo-500'
    },
    {
      category: 'CS Fundamentals',
      icon: 'Award',
      items: ['DSA', 'OOP', 'OS Basics', 'DBMS'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const achievements = [
    'AWS Certified Cloud Practitioner',
    'Postman API Fundamentals Student Expert',
    'React JS Development Certification',
    'MongoDB Basics Certification',
    'SQL certification',
    'Daily LeetCode problem solving',
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-content">
            <h1 className="nav-logo">
              Amar.
            </h1>
            <div className="nav-links">
              {['Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`nav-link ${activeSection === item.toLowerCase() ? 'active' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content animate-fade-in">
          <div className="hero-text">
            <h2 className="hero-title animate-slide-up">
              Amar Kumar Giri
            </h2>
            <h3 className="hero-subtitle animate-slide-up" style={{animationDelay: '0.2s'}}>
             Full Stack & Software Developer
            </h3>
          </div>
          
          <p className="hero-description animate-slide-up" style={{animationDelay: '0.4s'}}>
            I design and build clean, performant web products using React, JavaScript, and modern backend tools — with a strong focus on problem-solving and real user impact.
          </p>
          
          <div className="hero-buttons animate-slide-up" style={{animationDelay: '0.6s'}}>
            <button
              onClick={() => scrollToSection('projects')}
              className="btn btn-primary"
            >
              View Projects
            </button>
            <a
              href='/Amar_Giri_Resume.pdf'
              download
              className="btn btn-secondary"
            >
              <Icons.Download className="btn-icon" />
              Download Resume
            </a>
            <button
              onClick={() => scrollToSection('contact')}
              className="btn btn-outline"
            >
              Contact Me
            </button>
          </div>

          {/* Social Links */}
          <div className="social-links animate-slide-up" style={{animationDelay: '0.8s'}}>
            <a href="https://github.com/amarkumargiri" className="social-link">
              <Icons.Github className="social-icon" />
            </a>
            <a href="https://www.linkedin.com/in/amar-kumar-giri-83a499278/" className="social-link">
              <Icons.Linkedin className="social-icon" />
            </a>
            <a href="mailto:amargiri1717@gmail.com" className="social-link">
              <Icons.Mail className="social-icon" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          
          <div className="about-card">
            <p className="about-text">
              I'm a developer with a strong foundation in JavaScript, React, and backend fundamentals. I enjoy breaking down complex problems, building clean architectures, and continuously improving code quality. I focus on real-world projects, scalable design, and writing production-ready code.
            </p>
            
            <div className="stats-grid">
              {[
                { number: '15+', label: 'Projects' },
                { number: '5+', label: 'Certifications' },
                { number: 'Daily', label: 'Problem Solving' }
              ].map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          
          <div className="projects-grid">
            {projects.map((project, index) => {
              const IconComponent = Icons[project.icon];
              return (
                <div key={index} className="project-card">
                  <div className={`project-bar bg-gradient-${project.gradient}`}></div>
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    
                    <div className="tech-tags">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    
                    <ul className="feature-list">
                      {project.features.map((feature, i) => (
                        <li key={i} className="feature-item">
                          <span className="bullet">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="project-links">
                     <a
                     href={project.live}
                     target='_blank'
                     rel='noopener norefferer'
                     className='project-link primary'
                     >
                    <Icons.ExternalLink className='link-icon' />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='project-link'
                    >
                      <Icons.Github className='link-icon' />
                      GitHub
                    </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          
          <div className="skills-grid">
            {skills.map((skill, index) => {
              const IconComponent = Icons[skill.icon];
              return (
                <div key={index} className="skill-card">
                  <div className={`skill-icon bg-gradient-${skill.color}`}>
                    <IconComponent className="icon" />
                  </div>
                  <h3 className="skill-title">{skill.category}</h3>
                  <ul className="skill-list">
                    {skill.items.map((item, i) => (
                      <li key={i} className="skill-item">{item}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section section-alt">
        <div className="container">
          <h2 className="section-title">Experience & Learning</h2>
          
          <div className="experience-card">
            <h3 className="experience-title">Backend & API Development</h3>
            <p className="experience-period">2024 – Present</p>
            <ul className="experience-list">
              <li className="experience-item">
                <span className="bullet-cyan">•</span>
                Built REST APIs using Node.js & Express
              </li>
              <li className="experience-item">
                <span className="bullet-cyan">•</span>
                Implemented JWT authentication and authorization
              </li>
              <li className="experience-item">
                <span className="bullet-cyan">•</span>
                Worked with MongoDB and PostgreSQL databases
              </li>
              <li className="experience-item">
                <span className="bullet-cyan">•</span>
                Deployed full-stack applications on cloud platforms
              </li>
            </ul>
          </div>

          <div className="achievements-section">
            <h3 className="achievements-title">Achievements & Certifications</h3>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-item">
                  <div className="achievement-icon">
                    <Icons.Award className="icon" />
                  </div>
                  <span className="achievement-text">{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container-small">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Interested in working together or discussing opportunities? Let's talk.
          </p>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className={`form-input ${formErrors.name ? 'error' : ''}`}
              />
              {formErrors.name && (
                <p className="error-text">{formErrors.name}</p>
              )}
            </div>
            
            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className={`form-input ${formErrors.email ? 'error' : ''}`}
              />
              {formErrors.email && (
                <p className="error-text">{formErrors.email}</p>
              )}
            </div>
            
            <div className="form-group">
              <textarea
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className={`form-textarea ${formErrors.message ? 'error' : ''}`}
              ></textarea>
              {formErrors.message && (
                <p className="error-text">{formErrors.message}</p>
              )}
            </div>
            
            <button type="submit" className="btn btn-primary btn-full">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">© 2026 Amar Kumar Giri. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;