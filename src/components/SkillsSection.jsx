import React, { useState } from 'react';
import { 
  Code2, 
  Terminal, 
  Wrench, 
  Palette, 
  Sparkles,
  Layers,
  Cpu
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', ...skillsData.map(c => c.category)];

  const displayedGroups = activeTab === 'All' 
    ? skillsData 
    : skillsData.filter(c => c.category === activeTab);

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Frontend Development': return <Code2 size={20} color="#059669" />;
      case 'Languages & Computer Science': return <Terminal size={20} color="#0d9488" />;
      case 'Tools, Backend & Deployment': return <Wrench size={20} color="#059669" />;
      case 'Creative & UI Design': return <Palette size={20} color="#047857" />;
      default: return <Sparkles size={20} color="#059669" />;
    }
  };

  return (
    <section id="skills" className="section-wrapper" style={{ backgroundColor: '#f8fafc' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-pro">
          <div className="section-pill-tag">
            <Sparkles size={13} />
            <span>Technical Competencies</span>
          </div>
          <h2 className="section-title-pro">
            Stack & Engineering Capabilities
          </h2>
          <p className="section-description-pro">
            High-efficiency modern frontend libraries, core system languages, database architectures, and developer tooling.
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '3rem'
        }}>
          {categories.map((cat) => {
            const isSelected = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                style={{
                  padding: '0.45rem 1.125rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.8125rem',
                  fontWeight: isSelected ? 700 : 500,
                  color: isSelected ? '#059669' : '#52525b',
                  backgroundColor: isSelected ? '#ecfdf5' : '#f1f5f9',
                  border: isSelected ? '1px solid #a7f3d0' : '1px solid #e4e4e7',
                  boxShadow: isSelected ? 'var(--shadow-sm)' : 'none',
                  cursor: 'pointer'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Bento Grid for Skills */}
        <div className="bento-grid">
          {displayedGroups.map((group, gIdx) => (
            <div 
              key={gIdx}
              className="bento-card col-span-6"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                backgroundColor: '#ffffff'
              }}
            >
              {/* Group Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {getCategoryIcon(group.category)}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#09090b' }}>
                    {group.category}
                  </h3>
                  <p style={{ fontSize: '0.8125rem', color: '#52525b', marginTop: '2px' }}>
                    {group.description}
                  </p>
                </div>
              </div>

              {/* Skill Badges Matrix */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
                gap: '0.75rem'
              }}>
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '1rem 0.625rem',
                      borderRadius: '14px',
                      backgroundColor: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      transition: 'all 0.2s ease',
                      gap: '0.45rem'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#ffffff';
                      e.currentTarget.style.borderColor = '#93c5fd';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#f8fafc';
                      e.currentTarget.style.borderColor = '#e2e8f0';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {skill.icon ? (
                      <div style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img 
                          src={skill.icon} 
                          alt={skill.name} 
                          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    ) : (
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: '#eff6ff',
                        color: '#2563eb',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: '0.75rem'
                      }}>
                        CS
                      </div>
                    )}
                    
                    <span style={{ fontSize: '0.84375rem', fontWeight: 600, color: '#09090b', textAlign: 'center' }}>
                      {skill.name}
                    </span>

                    {skill.tag && (
                      <span className="code-tag" style={{ fontSize: '0.6875rem', padding: '0.1rem 0.35rem' }}>
                        {skill.tag}
                      </span>
                    )}
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
