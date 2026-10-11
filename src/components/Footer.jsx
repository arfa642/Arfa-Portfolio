import React from 'react';
import { 
  ArrowUp, 
  Mail, 
  Code2, 
  Heart,
  FileDown
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Leadership', id: 'leadership' },
    { label: 'Education', id: 'education' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer style={{
      backgroundColor: '#ffffff',
      borderTop: '1px solid #e2e8f0',
      paddingTop: '4rem',
      paddingBottom: '3rem',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Main Footer Row */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '2rem',
          paddingBottom: '2.5rem',
          borderBottom: '1px solid #f1f5f9'
        }}>
          
          {/* Brand info */}
          <div style={{ maxWidth: '340px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.75rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #059669 0%, #0d9488 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff'
              }}>
                <Code2 size={18} strokeWidth={2.5} />
              </div>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a' }}>
                Muhammad <span style={{ color: '#059669' }}>Arfa</span>
              </span>
            </div>
            <p style={{ fontSize: '0.84375rem', color: '#64748b', lineHeight: 1.6 }}>
              Frontend Developer & Software Engineer based in Lahore, Pakistan. Building verified, high-performance web applications and enterprise systems.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <ul style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              listStyle: 'none'
            }}>
              {navLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      const el = document.getElementById(item.id);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: '#475569',
                      transition: 'color 0.2s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#059669'}
                    onMouseLeave={(e) => e.currentTarget.style.color = '#475569'}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#334155'
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
                borderRadius: '50%',
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0077b5'
              }}
            >
              <Linkedin size={18} />
            </a>

            <a
              href={`mailto:${personalData.email}`}
              aria-label="Email Muhammad Arfa"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: '#f8fafc',
                border: '1px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#2563eb'
              }}
            >
              <Mail size={18} />
            </a>

            <button
              onClick={scrollToTop}
              aria-label="Scroll to Top"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: '#ecfdf5',
                border: '1px solid #a7f3d0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#059669',
                cursor: 'pointer'
              }}
            >
              <ArrowUp size={18} />
            </button>

          </div>

        </div>

        {/* Bottom Copyright & Verification notice */}
        <div style={{
          paddingTop: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem',
          fontSize: '0.8125rem',
          color: '#94a3b8'
        }}>
          <div>
            © {new Date().getFullYear()} Muhammad Arfa. All rights reserved.
          </div>
          <div>
            Verified Professional Portfolio • Zero Fake Testimonials • 100% Authentic Code
          </div>
        </div>

      </div>
    </footer>
  );
}
