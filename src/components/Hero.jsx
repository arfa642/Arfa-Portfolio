import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Copy, 
  FolderGit2,
  GraduationCap,
  Briefcase,
  Code2,
  ExternalLink
} from 'lucide-react';
import { Github, Linkedin } from './Icons';
import confetti from 'canvas-confetti';
import { personalData } from '../data/portfolioData';

export default function Hero() {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [copiedItem, setCopiedItem] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setSubtitleIndex((prev) => (prev + 1) % personalData.subtitles.length);
        setIsFading(false);
      }, 250);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(type);
    setTimeout(() => setCopiedItem(null), 2200);
  };

  const triggerResumeConfetti = () => {
    try {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.85 } });
    } catch {}
  };

  return (
    <section id="about" className="section-wrapper hero-section-wrapper" style={{ paddingTop: 'calc(5rem + 1.5vw)', paddingBottom: '3.5rem' }}>
      <div className="container">
        
        {/* Main 2-Column Hero Grid */}
        <div className="hero-master-grid">

          
          {/* Left Column: Identity & Value Proposition */}
          <div>
            
            {/* Mobile Portrait Hero Banner (Visible on Mobile / iPhone SE) */}
            <div className="hero-mobile-avatar" style={{ marginBottom: '1rem' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.4rem 0.85rem 0.4rem 0.4rem',
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: 'var(--radius-full)',
                boxShadow: '0 4px 14px rgba(5, 150, 105, 0.08)'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid #059669',
                  flexShrink: 0
                }}>
                  <img 
                    src="/pics/arfa_circle_favicon.png" 
                    alt="Muhammad Arfa"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div>
                  <div style={{ fontSize: '0.6875rem', fontWeight: 700, color: '#059669', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    GCU Lahore BSCS
                  </div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 800, color: '#09090b', lineHeight: 1.1 }}>
                    Muhammad Arfa
                  </div>
                  <div style={{ fontSize: '0.6875rem', color: '#64748b', fontWeight: 500 }}>
                    Ex-ParkView City Intern
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Beacon */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.3rem 0.8rem',
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: 'var(--radius-full)',
              marginBottom: '1.25rem',
              boxShadow: 'var(--shadow-sm)',
              maxWidth: '100%'
            }}>
              <span style={{
                display: 'inline-flex',
                height: '8px',
                width: '8px',
                borderRadius: '50%',
                backgroundColor: '#059669',
                boxShadow: '0 0 0 3px rgba(5, 150, 105, 0.2)',
                flexShrink: 0
              }} />
              <span style={{ fontSize: '0.78125rem', fontWeight: 600, color: '#334155' }}>
                Open to Software Engineering & Frontend Roles
              </span>
            </div>

            {/* Main Heading */}
            <h1 style={{
              fontSize: 'clamp(2rem, 6.5vw, 3.85rem)',
              fontWeight: 800,
              color: '#09090b',
              lineHeight: 1.12,
              letterSpacing: '-0.03em',
              marginBottom: '0.75rem'
            }}>
              Hi, I'm <span style={{
                background: 'linear-gradient(135deg, #059669 0%, #0d9488 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Muhammad Arfa</span>
            </h1>

            {/* Smooth Subtitle Rotator */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: 'clamp(0.95rem, 3.2vw, 1.25rem)',
              fontWeight: 600,
              color: '#52525b',
              minHeight: '2.4rem',
              marginBottom: '1.25rem',
              flexWrap: 'wrap'
            }}>
              <span style={{ color: '#71717a' }}>Building software as</span>
              <span 
                style={{
                  color: '#047857',
                  fontWeight: 700,
                  padding: '0.2rem 0.65rem',
                  borderRadius: '8px',
                  backgroundColor: '#ecfdf5',
                  border: '1px solid #a7f3d0',
                  boxShadow: '0 1px 3px rgba(5,150,105,0.08)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  opacity: isFading ? 0 : 1,
                  transform: isFading ? 'translateY(4px)' : 'translateY(0)'
                }}
              >
                <span>{personalData.subtitles[subtitleIndex]}</span>
                <span style={{
                  display: 'inline-block',
                  width: '2px',
                  height: '1.1em',
                  backgroundColor: '#059669',
                  animation: 'cursorPulse 1s ease-in-out infinite'
                }} />
              </span>
            </div>

            {/* Bio Statement - Human-written, factual, senior tone */}
            <p style={{
              fontSize: '1.0625rem',
              color: '#3f3f46',
              lineHeight: 1.75,
              marginBottom: '2rem',
              maxWidth: '620px'
            }}>
              Computer Science scholar at <strong style={{ color: '#09090b' }}>Government College University (GCU), Lahore</strong> with a <strong style={{ color: '#09090b' }}>3.42 CGPA</strong>. Former Software & Network Engineering Intern at <strong style={{ color: '#09090b' }}>ParkView City Head Office</strong>, where I architected and deployed an internal Enterprise Asset Tracking System on corporate LAN. Passionate about engineering robust web systems, clean React architectures, and high-impact automated workflows.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', marginBottom: '2rem' }}>
              <button 
                onClick={() => {
                  const el = document.getElementById('projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-pro-primary"
              >
                <span>Explore Featured Systems</span>
                <ArrowRight size={17} />
              </button>

              <a 
                href={personalData.resumeUrl}
                download="Muhammad_Arfa_Resume.pdf"
                onClick={triggerResumeConfetti}
                className="btn-pro-secondary"
              >
                <FileDown size={17} />
                <span>Download Resume (PDF)</span>
              </a>

              <a 
                href={personalData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.45rem',
                  padding: '0.8125rem 1.125rem',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: 'var(--radius-full)',
                  color: '#0077b5',
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#0077b5';
                  e.currentTarget.style.backgroundColor = '#f0f9ff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.backgroundColor = '#ffffff';
                }}
              >
                <Linkedin size={17} />
                <span>LinkedIn</span>
              </a>

              <a 
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.45rem',
                  padding: '0.8125rem 1.125rem',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: 'var(--radius-full)',
                  color: '#09090b',
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#09090b';
                  e.currentTarget.style.backgroundColor = '#f8fafc';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e2e8f0';
                  e.currentTarget.style.backgroundColor = '#ffffff';
                }}
              >
                <Github size={17} />
                <span>GitHub</span>
              </a>
            </div>

            {/* Quick Contact Interactive Pills */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.625rem',
              alignItems: 'center',
              paddingTop: '1.25rem',
              borderTop: '1px solid #e4e4e7'
            }}>
              <button
                onClick={() => handleCopy(personalData.email, 'email')}
                title="Click to copy email address"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.4rem 0.85rem',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.8125rem',
                  color: '#27272a',
                  boxShadow: 'var(--shadow-sm)',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                {copiedItem === 'email' ? <CheckCircle2 size={13} color="#059669" /> : <Mail size={13} color="#64748b" />}
                <span>{personalData.email}</span>
                <Copy size={11} color="#a1a1aa" />
              </button>

              <button
                onClick={() => handleCopy(personalData.phone, 'phone')}
                title="Click to copy phone number"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.4rem 0.85rem',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.8125rem',
                  color: '#27272a',
                  boxShadow: 'var(--shadow-sm)',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                {copiedItem === 'phone' ? <CheckCircle2 size={13} color="#059669" /> : <Phone size={13} color="#64748b" />}
                <span>{personalData.displayPhone}</span>
                <Copy size={11} color="#a1a1aa" />
              </button>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.8125rem', color: '#71717a' }}>
                <MapPin size={13} />
                <span>{personalData.location}</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Muhammad Arfa Portrait - No Overlay Clutter */}
          <div className="hero-desktop-portrait" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            
            <div style={{
              width: '100%',
              maxWidth: '360px',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.14), 0 0 0 1px rgba(226, 232, 240, 0.9)',
              background: '#ffffff'
            }}>
              <img 
                src="/pics/arfa_profile.jpg" 
                alt="Muhammad Arfa - Software Engineer"
                style={{
                  width: '100%',
                  height: 'auto',
                  aspectRatio: '4 / 4.9',
                  objectFit: 'cover',
                  objectPosition: 'center 12%',
                  display: 'block'
                }}
              />
            </div>

            {/* Clean Verifiable Sub-caption Below Picture (Not Over Face) */}
            <div style={{
              marginTop: '1rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.45rem 1rem',
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: 'var(--radius-full)',
              boxShadow: 'var(--shadow-sm)',
              fontSize: '0.8125rem',
              color: '#334155'
            }}>
              <GraduationCap size={15} color="#059669" />
              <span><strong>GC University Lahore</strong> • BSCS 3.42 CGPA</span>
            </div>

          </div>

        </div>

        {/* Verifiable Stats Metric Row - Clean 4-column cards */}
        <div className="hero-stats-grid">

          {personalData.stats.map((stat, idx) => (
            <div 
              key={idx}
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '1.25rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#a7f3d0';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 18px -4px rgba(5, 150, 105, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem',
                fontWeight: 800,
                color: '#09090b',
                lineHeight: 1.1
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '0.8125rem', color: '#64748b', fontWeight: 500, marginTop: '0.35rem' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
