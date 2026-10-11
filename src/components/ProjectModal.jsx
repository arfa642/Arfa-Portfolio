import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Layers, 
  CheckCircle2, 
  Code2, 
  Sparkles,
  Server
} from 'lucide-react';
import { Github } from './Icons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    
    // Lock scroll only when modal is actively open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow || 'unset';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 2000,
        backgroundColor: 'rgba(15, 23, 42, 0.45)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        animation: 'fadeIn 0.2s ease',
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: '#ffffff',
          borderRadius: '24px',
          maxWidth: '720px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.25)',
          border: '1px solid #e2e8f0',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Project Modal"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            border: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#475569',
            boxShadow: 'var(--shadow-sm)',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#f1f5f9';
            e.currentTarget.style.color = '#0f172a';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#ffffff';
            e.currentTarget.style.color = '#475569';
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Image Header */}
        <div style={{
          width: '100%',
          height: '240px',
          backgroundColor: '#f1f5f9',
          borderBottom: '1px solid #e2e8f0',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative'
        }}>
          {project.image ? (
            <img 
              src={project.image} 
              alt={project.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', color: '#64748b' }}>
              <Server size={40} color="#2563eb" />
              <span style={{ fontWeight: 600 }}>System Architecture Project</span>
            </div>
          )}

          <div style={{
            position: 'absolute',
            bottom: '12px',
            left: '16px',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(6px)',
            padding: '0.3rem 0.75rem',
            borderRadius: 'var(--radius-full)',
            fontSize: '0.75rem',
            fontWeight: 700,
            color: '#2563eb',
            border: '1px solid rgba(226, 232, 240, 0.9)'
          }}>
            {project.category}
          </div>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '2rem' }}>
          
          <h3 style={{
            fontSize: '1.625rem',
            fontWeight: 800,
            color: '#0f172a',
            marginBottom: '0.5rem'
          }}>
            {project.title}
          </h3>

          <p style={{
            fontSize: '1rem',
            color: '#475569',
            lineHeight: 1.7,
            marginBottom: '1.5rem'
          }}>
            {project.fullDescription || project.summary}
          </p>

          {/* Key Metrics / Highlights */}
          {project.metrics && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '0.875rem',
              marginBottom: '1.5rem',
              backgroundColor: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '1.25rem'
            }}>
              {project.metrics.map((m, idx) => (
                <div key={idx}>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {m.label}
                  </div>
                  <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#0f172a', marginTop: '2px' }}>
                    {m.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Technology Badges */}
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.04em', marginBottom: '0.625rem' }}>
              Technologies & Stack
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.tags.map((tag, tIdx) => (
                <span 
                  key={tIdx}
                  style={{
                    padding: '0.3rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: '#eff6ff',
                    border: '1px solid #bfdbfe',
                    color: '#1d4ed8',
                    fontSize: '0.78125rem',
                    fontWeight: 600
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', alignItems: 'center', paddingTop: '1.25rem', borderTop: '1px solid #e2e8f0' }}>
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: '0.65rem 1.35rem', fontSize: '0.875rem' }}
              >
                <Github size={16} />
                <span>View Source Code on GitHub</span>
              </a>
            ) : (
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.8125rem',
                color: '#64748b',
                backgroundColor: '#f1f5f9',
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-full)'
              }}>
                <Server size={14} color="#64748b" />
                <span>Internal Enterprise Deployment (Protected Repository)</span>
              </div>
            )}

            <button
              onClick={onClose}
              className="btn-secondary"
              style={{ padding: '0.65rem 1.25rem', fontSize: '0.875rem' }}
            >
              <span>Close</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
