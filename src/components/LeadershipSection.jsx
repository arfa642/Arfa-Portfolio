import React from 'react';
import { 
  Users, 
  Award, 
  Sparkles, 
  Coins, 
  ShieldCheck,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { leadershipData } from '../data/portfolioData';

export default function LeadershipSection() {
  return (
    <section id="leadership" className="section-wrapper" style={{ backgroundColor: '#f8fafc' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-pro">
          <div className="section-pill-tag">
            <Sparkles size={13} />
            <span>Community Leadership</span>
          </div>
          <h2 className="section-title-pro">
            Computer Science Society Leadership
          </h2>
          <p className="section-description-pro">
            Executive leadership within GC University's premier computing body. Driving major student hackathons, finances, and corporate industrial visits.
          </p>
        </div>

        {/* Bento Grid Leadership */}
        <div className="bento-grid">
          {leadershipData.map((item, idx) => (
            <div 
              key={idx}
              className="bento-card col-span-6"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '2.25rem',
                backgroundColor: '#ffffff'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '12px',
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '4px',
                    boxShadow: 'var(--shadow-sm)'
                  }}>
                    <img 
                      src="/pics/css_gcu_logo.png" 
                      alt="Computer Science Society GCU Lahore"
                      style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                    />
                  </div>

                  <span style={{
                    padding: '0.2rem 0.6rem',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: '#ecfdf5',
                    border: '1px solid #a7f3d0',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: '#047857'
                  }}>
                    {item.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.3125rem', fontWeight: 700, color: '#09090b', marginBottom: '0.25rem' }}>
                  {item.role}
                </h3>

                <div style={{ fontSize: '0.9375rem', color: '#52525b', fontWeight: 600, marginBottom: '0.75rem' }}>
                  {item.organization}
                </div>

                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.8125rem',
                  color: '#71717a',
                  marginBottom: '1.25rem',
                  backgroundColor: '#f8fafc',
                  padding: '0.2rem 0.6rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid #e2e8f0'
                }}>
                  <Calendar size={13} />
                  <span>{item.period}</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {item.highlights.map((h, hIdx) => (
                    <div key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: '#27272a' }}>
                      <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{
                marginTop: '1.75rem',
                paddingTop: '0.875rem',
                borderTop: '1px solid #e4e4e7',
                fontSize: '0.75rem',
                color: '#71717a',
                display: 'flex',
                alignItems: 'center',
                gap: '0.45rem'
              }}>
                <ShieldCheck size={14} color="#059669" />
                <span>Verified GCU Departmental Society Record</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
