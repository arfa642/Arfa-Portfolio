import React from 'react';
import { 
  CheckCircle2, 
  Terminal, 
  Layers, 
  Users, 
  Cpu, 
  ShieldCheck,
  FileCheck2,
  Sparkles
} from 'lucide-react';
import { personalData } from '../data/portfolioData';

const principles = [
  {
    icon: <Layers size={22} color="#059669" />,
    title: "Component-Driven Architecture",
    description: "Designing reusable, modular frontend components with clear state separation and responsive layouts."
  },
  {
    icon: <Cpu size={22} color="#059669" />,
    title: "Real-World Systems Engineering",
    description: "Experience deploying corporate tools (e.g. ParkView City LAN Asset Tracker) and database-driven solutions."
  },
  {
    icon: <Users size={22} color="#7c3aed" />,
    title: "Collaborative Leadership",
    description: "Elected Joint Secretary of GCU CS Society; managing executive communications, hackathons, and student teams."
  },
  {
    icon: <ShieldCheck size={22} color="#0284c7" />,
    title: "Authentic & Verified Craft",
    description: "100% genuine projects, verifiable academic record (3.42 CGPA), and hands-on production code."
  }
];

export default function AboutSection() {
  return (
    <section 
      style={{
        backgroundColor: '#ffffff',
        borderTop: '1px solid #e2e8f0',
        borderBottom: '1px solid #e2e8f0',
      }}
      className="section-wrapper"
    >
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} />
            <span>Professional Background</span>
          </div>
          <h2 className="section-title">
            Engineering Web Systems with Precision & Purpose
          </h2>
          <p className="section-description">
            A disciplined engineer uniting academic computer science rigor at GC University Lahore with hands-on enterprise systems deployment.
          </p>
        </div>

        {/* Narrative & Detail Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem',
          alignItems: 'start'
        }}>
          
          {/* Narrative Overview */}
          <div style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '20px',
            padding: '2.25rem',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <h3 style={{ fontSize: '1.375rem', fontWeight: 700, marginBottom: '1rem', color: '#0f172a' }}>
              Who I Am & What I Do
            </h3>
            
            <p style={{ color: '#475569', lineHeight: 1.75, marginBottom: '1.25rem', fontSize: '0.96875rem' }}>
              I am currently pursuing a <strong>Bachelor of Science in Computer Science (BSCS)</strong> at <strong>Government College University (GCU), Lahore</strong> with a <strong>3.42 CGPA</strong>. My technical journey began with core programming logic in C++ and Python, before deepening into high-performance web development with React.js, Tailwind CSS, and REST API architectures.
            </p>

            <p style={{ color: '#475569', lineHeight: 1.75, marginBottom: '1.25rem', fontSize: '0.96875rem' }}>
              At <strong>ParkView City Lahore Head Office</strong>, I architected and deployed an internal <em>Enterprise Asset Tracking System</em> hosted securely on the corporate local network (LAN) to trace hardware lifecycles and transfers. In addition, I have built production tools including the <strong>GCU PastPaperBot</strong> WhatsApp automation engine and relational databases for commercial trading.
            </p>

            <p style={{ color: '#475569', lineHeight: 1.75, marginBottom: '1.75rem', fontSize: '0.96875rem' }}>
              Beyond coding, I serve as <strong>Joint Secretary</strong> for the <em>Computer Science Society, GCU Lahore</em>, coordinating departmental events, student hackathons, and corporate industry visits.
            </p>

            {/* Verification checklist */}
            <div style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.625rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.875rem', color: '#334155' }}>
                <CheckCircle2 size={16} color="#059669" />
                <span><strong>Authentic Credentials:</strong> Registered student at GCU Lahore (Roll 182-BSCS-24).</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.875rem', color: '#334155' }}>
                <CheckCircle2 size={16} color="#059669" />
                <span><strong>No Fake Metrics:</strong> Verifiable GitHub repositories & documented coursework.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.875rem', color: '#334155' }}>
                <CheckCircle2 size={16} color="#059669" />
                <span><strong>Production Ready:</strong> Clean code, responsive UX, and accessible interfaces.</span>
              </div>
            </div>

          </div>

          {/* Principle Cards 2x2 Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem'
          }}>
            {principles.map((p, idx) => (
              <div 
                key={idx}
                className="card-clean"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.875rem',
                  backgroundColor: '#ffffff',
                  border: '1px solid #e2e8f0'
                }}
              >
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  backgroundColor: '#f8fafc',
                  border: '1px solid #f1f5f9',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {p.icon}
                </div>
                <h4 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#0f172a' }}>
                  {p.title}
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.6 }}>
                  {p.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
