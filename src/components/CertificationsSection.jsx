import React from 'react';
import { 
  Award, 
  Sparkles, 
  Calendar, 
  ShieldCheck
} from 'lucide-react';
import { certificationsData } from '../data/portfolioData';

export default function CertificationsSection() {
  return (
    <section className="section-wrapper" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-pro">
          <div className="section-pill-tag">
            <Sparkles size={13} />
            <span>Honors & Certifications</span>
          </div>
          <h2 className="section-title-pro">
            Verified Credentials & Achievements
          </h2>
          <p className="section-description-pro">
            Recognitions and technical certifications from respected universities, global tech communities, and competitive institutions.
          </p>
        </div>

        {/* Certifications Grid (3 Key Achievements) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.75rem'
        }}>
          {certificationsData.map((cert, idx) => (
            <div 
              key={idx}
              className="card-clean"
              style={{
                padding: '2rem',
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#6ee7b7';
                e.currentTarget.style.boxShadow = '0 12px 24px -6px rgba(5, 150, 105, 0.08)';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e2e8f0';
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                {/* Header Icon + Badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    backgroundColor: '#ecfdf5',
                    border: '1px solid #a7f3d0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#059669'
                  }}>
                    <Award size={24} />
                  </div>

                  <span style={{
                    fontSize: '0.71875rem',
                    fontWeight: 700,
                    padding: '0.25rem 0.65rem',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: '#ecfdf5',
                    border: '1px solid #a7f3d0',
                    color: '#047857'
                  }}>
                    {cert.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.1875rem', fontWeight: 800, color: '#09090b', marginBottom: '0.4rem', lineHeight: 1.35 }}>
                  {cert.title}
                </h3>

                <div style={{ fontSize: '0.90625rem', fontWeight: 700, color: '#059669', marginBottom: '0.625rem' }}>
                  {cert.issuer}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78125rem', color: '#64748b', marginBottom: '1.25rem' }}>
                  <Calendar size={13} />
                  <span>{cert.issueDate}</span>
                </div>

                {/* Topics Covered */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {cert.topics.map((topic, tIdx) => (
                    <span 
                      key={tIdx}
                      style={{
                        fontSize: '0.71875rem',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '6px',
                        backgroundColor: '#f8fafc',
                        border: '1px solid #e2e8f0',
                        color: '#475569',
                        fontWeight: 500
                      }}
                    >
                      {topic}
                    </span>
                  ))}
                </div>

              </div>

              <div style={{
                marginTop: '1.5rem',
                paddingTop: '0.875rem',
                borderTop: '1px solid #f1f5f9',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: '#64748b'
              }}>
                <ShieldCheck size={14} color="#059669" />
                <span>Verified Achievement Record</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
