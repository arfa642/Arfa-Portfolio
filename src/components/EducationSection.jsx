import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  Award, 
  CheckCircle2, 
  Sparkles,
  BookOpen
} from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function EducationSection() {
  return (
    <section id="education" className="section-wrapper" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e4e4e7' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-pro">
          <div className="section-pill-tag">
            <Sparkles size={13} />
            <span>Academic Rigor</span>
          </div>
          <h2 className="section-title-pro">
            Education & Academic Standing
          </h2>
          <p className="section-description-pro">
            Foundational computer science degree at GC University Lahore (3.42 CGPA / 3.57 SGPA) and academic honors.
          </p>
        </div>

        {/* Bento Grid Education */}
        <div className="bento-grid">
          {educationData.map((edu, idx) => (
            <div 
              key={idx}
              className={`bento-card ${idx === 0 ? 'col-span-12' : 'col-span-6'}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2.25rem',
                backgroundColor: '#ffffff'
              }}
            >
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.25rem'
                }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '14px',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '8px'
                  }}>
                    {edu.logo ? (
                      <img 
                        src={edu.logo} 
                        alt={edu.school} 
                        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <GraduationCap size={28} color="#059669" />
                    )}
                  </div>

                  <div style={{
                    padding: '0.25rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: '#ecfdf5',
                    border: '1px solid #a7f3d0',
                    color: '#059669',
                    fontSize: '0.8125rem',
                    fontWeight: 700
                  }}>
                    {edu.grade}
                  </div>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#09090b', marginBottom: '0.35rem' }}>
                  {edu.degree}
                </h3>

                <div style={{ fontSize: '0.9375rem', fontWeight: 600, color: '#059669', marginBottom: '0.5rem' }}>
                  {edu.school}
                </div>

                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.8125rem',
                  color: '#71717a',
                  marginBottom: '1.25rem'
                }}>
                  <Calendar size={13} />
                  <span>{edu.period}</span>
                </div>

                <p style={{
                  fontSize: '0.875rem',
                  color: '#52525b',
                  lineHeight: 1.65,
                  marginBottom: '1.25rem'
                }}>
                  {edu.description}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {edu.highlights.map((h, hIdx) => (
                    <div key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.8125rem', color: '#27272a' }}>
                      <CheckCircle2 size={15} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
