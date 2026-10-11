import React, { useState, useEffect } from 'react';
import { 
  FileDown, 
  Menu, 
  X, 
  ExternalLink,
  Code2
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalData } from '../data/portfolioData';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('about');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scroll spy logic
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.25s ease',
        background: isScrolled ? 'rgba(255, 255, 255, 0.92)' : 'rgba(255, 255, 255, 0.75)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: isScrolled ? '1px solid #e2e8f0' : '1px solid rgba(226, 232, 240, 0.5)',
        boxShadow: isScrolled ? '0 4px 20px -2px rgba(15, 23, 42, 0.05)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        
        {/* Brand Logo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', textAlign: 'left' }}
          aria-label="Muhammad Arfa Home"
        >
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #059669 0%, #0d9488 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            boxShadow: '0 4px 10px rgba(5, 150, 105, 0.25)'
          }}>
            <Code2 size={20} strokeWidth={2.5} />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.125rem', color: '#0f172a', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Muhammad <span style={{ color: '#059669' }}>Arfa</span>
            </div>
            <div style={{ fontSize: '0.6875rem', color: '#64748b', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Software Engineer
            </div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none' }} className="desktop-nav-wrap">
          <ul style={{ display: 'flex', listStyle: 'none', gap: '0.375rem', alignItems: 'center' }}>
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    style={{
                      padding: '0.5rem 0.875rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.875rem',
                      fontWeight: isActive ? 600 : 500,
                      color: isActive ? '#059669' : '#475569',
                      backgroundColor: isActive ? '#ecfdf5' : 'transparent',
                      transition: 'all 0.2s ease',
                      border: isActive ? '1px solid #a7f3d0' : '1px solid transparent'
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = '#0f172a';
                        e.currentTarget.style.backgroundColor = '#f8fafc';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.color = '#475569';
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right CTA / Social Icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          
          <a
            href={personalData.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid #e2e8f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#334155',
              background: '#ffffff',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#0f172a';
              e.currentTarget.style.borderColor = '#94a3b8';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#334155';
              e.currentTarget.style.borderColor = '#e2e8f0';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Github size={18} />
          </a>

          <a
            href={personalData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid #e2e8f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0077b5',
              background: '#ffffff',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#0077b5';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#e2e8f0';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <Linkedin size={18} />
          </a>

          <a
            href={personalData.resumeUrl}
            download="Muhammad_Arfa_Resume.pdf"
            className="btn-primary"
            style={{
              padding: '0.5rem 1.125rem',
              fontSize: '0.84375rem',
              textDecoration: 'none'
            }}
          >
            <FileDown size={16} />
            <span>Resume</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            aria-label="Toggle Navigation Menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
              background: '#ffffff',
              color: '#0f172a'
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          background: '#ffffff',
          borderBottom: '1px solid #e2e8f0',
          padding: '1.25rem 1.5rem',
          boxShadow: 'var(--shadow-lg)',
          animation: 'fadeIn 0.2s ease'
        }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    fontSize: '0.9375rem',
                    fontWeight: activeSection === item.id ? 700 : 500,
                    color: activeSection === item.id ? '#059669' : '#334155',
                    background: activeSection === item.id ? '#ecfdf5' : 'transparent',
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li style={{ paddingTop: '0.75rem', borderTop: '1px solid #e2e8f0', display: 'flex', gap: '0.75rem' }}>
              <a
                href={personalData.googleDocResume}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.875rem',
                  color: '#059669',
                  fontWeight: 600
                }}
              >
                <span>View Google Doc Resume</span>
                <ExternalLink size={14} />
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Responsive Inline CSS helper for Nav */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav-wrap {
            display: block !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
