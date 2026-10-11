import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building2, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-wrapper" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e4e4e7' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-pro">
          <div className="section-pill-tag">
            <Sparkles size={13} />
            <span>Verifiable Track Record</span>
          </div>
          <h2 className="section-title-pro">
            Professional Experience & Internships
          </h2>
          <p className="section-description-pro">
            Direct enterprise infrastructure software deployment, retail business operations supervision, and graphic design.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '1.75rem'
        }}>
          {experienceData.map((item) => (
            <div 
              key={item.id}
              className="card-clean"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2rem',
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '20px',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#6ee7b7';
                e.currentTarget.style.boxShadow = '0 12px 24px -6px rgba(5, 150, 105, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
              }}
            >
              <div>
                
                {/* Top Row: Company Logo on Left, Badge on Right */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '6px',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.04)'
                  }}>
                    {item.logo ? (
                      <img 
                        src={item.logo} 
                        alt={item.company}
                        style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <Briefcase size={22} color="#059669" />
                    )}
                  </div>

                  <span style={{
                    fontSize: '0.71875rem',
                    fontWeight: 700,
                    padding: '0.25rem 0.7rem',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: '#ecfdf5',
                    border: '1px solid #a7f3d0',
                    color: '#047857'
                  }}>
                    {item.badge}
                  </span>
                </div>

                {/* Second Row: Role Title with Full Width Single Line */}
                <h3 
                  style={{ 
                    fontSize: '1.1875rem', 
                    fontWeight: 800, 
                    color: '#09090b', 
                    lineHeight: 1.3,
                    marginBottom: '0.35rem'
                  }} 
                >
                  {item.role}
                </h3>

                {/* Third Row: FULL Company Name - Never Truncated */}
                <div style={{ 
                  fontSize: '0.9375rem', 
                  fontWeight: 700, 
                  color: '#059669', 
                  lineHeight: 1.3,
                  marginBottom: '0.65rem'
                }}>
                  {item.company}
                </div>

                {/* Fourth Row: Date Pill + Location */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '0.625rem',
                  marginBottom: '1.25rem',
                  fontSize: '0.8125rem'
                }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    padding: '0.2rem 0.6rem',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '6px',
                    fontWeight: 600,
                    color: '#334155'
                  }}>
                    <Calendar size={13} color="#059669" />
                    <span>{item.period}</span>
                  </div>

                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', color: '#64748b' }}>
                    <MapPin size={12} />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Role Description */}
                <p style={{ fontSize: '0.859375rem', color: '#52525b', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  {item.description}
                </p>

                {/* Key Points */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.5rem' }}>
                  {item.keyPoints.map((pt, pIdx) => (
                    <div key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.8125rem', color: '#27272a' }}>
                      <CheckCircle2 size={15} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Footer */}
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.35rem',
                paddingTop: '1rem',
                borderTop: '1px solid #f1f5f9'
              }}>
                {item.skills.map((sk, sIdx) => (
                  <span key={sIdx} className="code-tag">
                    {sk}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
