import React, { useState, useEffect, useRef } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Search, 
  Sparkles, 
  ArrowUpRight, 
  Info,
  Server,
  Layers,
  Terminal,
  Cpu,
  Bot,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  LayoutGrid,
  Film,
  CheckCircle2
} from 'lucide-react';
import { Github } from './Icons';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMode, setViewMode] = useState('slideshow'); // 'slideshow' | 'grid'
  const [isAutoplay, setIsAutoplay] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const thumbnailStripRef = useRef(null);
  const touchStartX = useRef(null);

  const categories = [
    'All',
    'Full-Stack & Systems',
    'React & Web Apps',
    'Front-End & UI',
    'Games & C++'
  ];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  // Clamp current index when filter results change
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory, searchQuery]);

  const activeIndex = filteredProjects.length > 0 
    ? Math.min(currentIndex, filteredProjects.length - 1) 
    : 0;
  const currentProject = filteredProjects[activeIndex];

  // Auto-advance slideshow
  useEffect(() => {
    if (!isAutoplay || isHovered || activeModalProject || viewMode !== 'slideshow' || filteredProjects.length <= 1) {
      return;
    }

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoplay, isHovered, activeModalProject, viewMode, filteredProjects.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeModalProject || viewMode !== 'slideshow') return;
      if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalProject, viewMode, filteredProjects.length]);

  // Scroll active thumbnail horizontally within its strip only (never jumps or scrolls the webpage window)
  useEffect(() => {
    if (thumbnailStripRef.current) {
      const activeBtn = thumbnailStripRef.current.querySelector(`.slideshow-thumb-btn.active`);
      if (activeBtn) {
        const strip = thumbnailStripRef.current;
        const btnLeft = activeBtn.offsetLeft;
        const btnWidth = activeBtn.offsetWidth;
        const stripWidth = strip.offsetWidth;
        strip.scrollTo({
          left: btnLeft - (stripWidth / 2) + (btnWidth / 2),
          behavior: 'smooth'
        });
      }
    }
  }, [activeIndex]);

  const handleNext = () => {
    if (filteredProjects.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % filteredProjects.length);
  };

  const handlePrev = () => {
    if (filteredProjects.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <section id="projects" className="section-wrapper" style={{ backgroundColor: '#ffffff', borderTop: '1px solid #e4e4e7', borderBottom: '1px solid #e4e4e7' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header-pro">
          <div className="section-pill-tag">
            <Sparkles size={13} />
            <span>Interactive Engineering Portfolio</span>
          </div>
          <h2 className="section-title-pro">
            Featured Systems & Applications
          </h2>
          <p className="section-description-pro">
            Explore production web platforms, corporate LAN tools, and automated bots via an interactive presentation slideshow.
          </p>
        </div>

        {/* Toolbar: Search, Filters & View Toggle */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          alignItems: 'center',
          marginBottom: '2.5rem'
        }}>
          
          {/* Top Row: Search Input + View Mode Switcher */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            width: '100%',
            maxWidth: '780px'
          }}>
            {/* Search Input */}
            <div style={{
              position: 'relative',
              flex: '1 1 300px',
              minWidth: '260px'
            }}>
              <Search 
                size={18} 
                color="#71717a" 
                style={{ position: 'absolute', left: '1.125rem', top: '50%', transform: 'translateY(-50%)' }} 
              />
              <input 
                type="text"
                placeholder="Search projects (React, LAN, SQL, Bot, C++)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.6875rem 1rem 0.6875rem 2.875rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid #e2e8f0',
                  backgroundColor: '#f8fafc',
                  fontSize: '0.875rem',
                  color: '#09090b',
                  outline: 'none',
                  boxShadow: 'var(--shadow-sm)',
                  transition: 'all 0.2s ease'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#059669';
                  e.target.style.backgroundColor = '#ffffff';
                  e.target.style.boxShadow = '0 0 0 3px rgba(5, 150, 105, 0.12)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e2e8f0';
                  e.target.style.backgroundColor = '#f8fafc';
                  e.target.style.boxShadow = 'var(--shadow-sm)';
                }}
              />
            </div>

            {/* View Mode Toggle: Slideshow vs Grid */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              backgroundColor: '#f1f5f9',
              padding: '0.25rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid #e2e8f0'
            }}>
              <button
                type="button"
                onClick={() => setViewMode('slideshow')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.45rem 0.95rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.8125rem',
                  fontWeight: viewMode === 'slideshow' ? 700 : 500,
                  color: viewMode === 'slideshow' ? '#059669' : '#52525b',
                  backgroundColor: viewMode === 'slideshow' ? '#ffffff' : 'transparent',
                  border: 'none',
                  boxShadow: viewMode === 'slideshow' ? '0 1px 3px rgba(0,0,0,0.06)' : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <Film size={15} />
                <span>Slideshow</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode('grid')}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.45rem 0.95rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.8125rem',
                  fontWeight: viewMode === 'grid' ? 700 : 500,
                  color: viewMode === 'grid' ? '#059669' : '#52525b',
                  backgroundColor: viewMode === 'grid' ? '#ffffff' : 'transparent',
                  border: 'none',
                  boxShadow: viewMode === 'grid' ? '0 1px 3px rgba(0,0,0,0.06)' : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <LayoutGrid size={15} />
                <span>All Projects Grid</span>
              </button>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.5rem'
          }}>
            {categories.map((cat) => {
              const count = cat === 'All' 
                ? projectsData.length 
                : projectsData.filter(p => p.category === cat).length;
              const isSelected = selectedCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '0.45rem 1.125rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.8125rem',
                    fontWeight: isSelected ? 700 : 500,
                    color: isSelected ? '#059669' : '#52525b',
                    backgroundColor: isSelected ? '#ecfdf5' : '#ffffff',
                    border: isSelected ? '1px solid #a7f3d0' : '1px solid #e4e4e7',
                    boxShadow: isSelected ? 'var(--shadow-sm)' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <span>{cat}</span>
                  <span style={{
                    fontSize: '0.6875rem',
                    padding: '0.1rem 0.4rem',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: isSelected ? '#d1fae5' : '#f1f5f9',
                    color: isSelected ? '#047857' : '#71717a',
                    fontWeight: 600
                  }}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* ------------------------------------------------------------------ */}
        {/* VIEW 1: EXECUTIVE SLIDESHOW VIEW (DEFAULT)                         */}
        {/* ------------------------------------------------------------------ */}
        {viewMode === 'slideshow' && (
          <div>
            {filteredProjects.length === 0 ? (
              <div style={{
                textAlign: 'center',
                padding: '4rem 1rem',
                backgroundColor: '#f8fafc',
                borderRadius: '20px',
                border: '1px dashed #cbd5e1'
              }}>
                <FolderGit2 size={40} color="#94a3b8" style={{ marginBottom: '1rem' }} />
                <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#09090b', marginBottom: '0.5rem' }}>
                  No systems match your filter
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '1.25rem' }}>
                  Try resetting the category filter or searching for another keyword.
                </p>
                <button
                  onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                  className="btn-pro-outline"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div>
                
                {/* Slideshow Top Navigation Bar */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1rem',
                  padding: '0 0.5rem'
                }}>
                  {/* Left: Slide Counter & Status */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.3rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: '#ecfdf5',
                      border: '1px solid #a7f3d0',
                      color: '#047857',
                      fontSize: '0.78125rem',
                      fontWeight: 700,
                      fontFamily: 'var(--font-mono)'
                    }}>
                      <span>SYSTEM</span>
                      <span>{String(activeIndex + 1).padStart(2, '0')}</span>
                      <span style={{ opacity: 0.5 }}>/</span>
                      <span>{String(filteredProjects.length).padStart(2, '0')}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsAutoplay(!isAutoplay)}
                      title={isAutoplay ? "Pause Slideshow Auto-advance" : "Resume Slideshow Auto-advance"}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: '0.3rem 0.65rem',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: '#ffffff',
                        border: '1px solid #e2e8f0',
                        color: isAutoplay ? '#059669' : '#71717a',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      {isAutoplay ? <Pause size={12} /> : <Play size={12} />}
                      <span>{isAutoplay ? "Autoplay On" : "Paused"}</span>
                    </button>
                  </div>

                  {/* Right: Next & Previous Arrow Controls */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="slideshow-nav-btn"
                      aria-label="Previous Project"
                      title="Previous Project (Left Arrow Key)"
                    >
                      <ChevronLeft size={20} />
                    </button>

                    <button
                      type="button"
                      onClick={handleNext}
                      className="slideshow-nav-btn"
                      aria-label="Next Project"
                      title="Next Project (Right Arrow Key)"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>

                {/* Main Slideshow Showcase Stage */}
                <div 
                  className="slideshow-wrapper"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                >
                  {/* Subtle Top Animated Progress Bar when Autoplay is Active */}
                  {isAutoplay && !isHovered && (
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      backgroundColor: '#f1f5f9',
                      overflow: 'hidden',
                      zIndex: 10
                    }}>
                      <div 
                        key={activeIndex}
                        style={{
                          height: '100%',
                          backgroundColor: '#059669',
                          animation: 'slideProgress 6s linear infinite'
                        }}
                      />
                    </div>
                  )}

                  <div className="slideshow-stage-grid">
                    
                    {/* Column 1: Big Project Mockup & Visual */}
                    <div>
                      <div 
                        style={{
                          position: 'relative',
                          borderRadius: '16px',
                          overflow: 'hidden',
                          aspectRatio: '16 / 9',
                          backgroundColor: '#f1f5f9',
                          border: '1px solid #e2e8f0',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                          cursor: 'pointer'
                        }}
                        onClick={() => setActiveModalProject(currentProject)}
                      >
                        {currentProject.image ? (
                          <img 
                            src={currentProject.image} 
                            alt={currentProject.title}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              display: 'block',
                              transition: 'transform 0.5s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                          />
                        ) : (
                          <div style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#059669',
                            gap: '0.75rem'
                          }}>
                            <Server size={44} />
                            <span style={{ fontSize: '0.875rem', fontWeight: 600, color: '#52525b' }}>Enterprise Internal System</span>
                          </div>
                        )}

                        {/* Top-Left Category Badge */}
                        <div style={{
                          position: 'absolute',
                          top: '12px',
                          left: '12px',
                          background: 'rgba(255, 255, 255, 0.94)',
                          backdropFilter: 'blur(8px)',
                          padding: '0.3rem 0.75rem',
                          borderRadius: 'var(--radius-full)',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          color: '#059669',
                          border: '1px solid rgba(226, 232, 240, 0.9)',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.06)'
                        }}>
                          {currentProject.category}
                        </div>

                        {/* Top-Right Badge: Featured / Deployment */}
                        {currentProject.featured ? (
                          <div style={{
                            position: 'absolute',
                            top: '12px',
                            right: '12px',
                            background: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(8px)',
                            padding: '0.25rem 0.65rem',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '0.71875rem',
                            fontWeight: 700,
                            color: '#059669',
                            border: '1px solid #bbf7d0',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.06)'
                          }}>
                            ★ Featured System
                          </div>
                        ) : currentProject.deploymentNote ? (
                          <div style={{
                            position: 'absolute',
                            top: '12px',
                            right: '12px',
                            background: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(8px)',
                            padding: '0.25rem 0.65rem',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '0.71875rem',
                            fontWeight: 600,
                            color: '#475569',
                            border: '1px solid #e2e8f0',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.06)'
                          }}>
                            {currentProject.deploymentNote}
                          </div>
                        ) : null}

                        {/* Hover Overlay Hint */}
                        <div style={{
                          position: 'absolute',
                          bottom: '12px',
                          right: '12px',
                          background: 'rgba(9, 9, 11, 0.75)',
                          backdropFilter: 'blur(6px)',
                          padding: '0.3rem 0.7rem',
                          borderRadius: 'var(--radius-full)',
                          fontSize: '0.71875rem',
                          fontWeight: 600,
                          color: '#ffffff',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem'
                        }}>
                          <Info size={12} />
                          <span>Click to Inspect</span>
                        </div>
                      </div>
                    </div>

                    {/* Column 2: Rich Project Dossier & Details */}
                    <div>
                      {/* Sub-header pill */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        marginBottom: '0.5rem'
                      }}>
                        <span style={{
                          fontSize: '0.71875rem',
                          fontWeight: 700,
                          color: '#059669',
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em'
                        }}>
                          {currentProject.category}
                        </span>
                      </div>

                      {/* Main Title */}
                      <h3 
                        onClick={() => setActiveModalProject(currentProject)}
                        style={{
                          fontSize: '1.5rem',
                          fontWeight: 800,
                          color: '#09090b',
                          lineHeight: 1.25,
                          marginBottom: '0.75rem',
                          cursor: 'pointer',
                          transition: 'color 0.2s ease'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#059669'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#09090b'}
                      >
                        {currentProject.title}
                      </h3>

                      {/* Summary */}
                      <p style={{
                        fontSize: '0.9375rem',
                        color: '#475569',
                        lineHeight: 1.65,
                        marginBottom: '1.25rem'
                      }}>
                        {currentProject.summary}
                      </p>

                      {/* Engineering Metrics Row */}
                      {currentProject.metrics && (
                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                          gap: '0.625rem',
                          marginBottom: '1.25rem',
                          padding: '0.875rem',
                          backgroundColor: '#f8fafc',
                          border: '1px solid #e2e8f0',
                          borderRadius: '12px'
                        }}>
                          {currentProject.metrics.map((m, mIdx) => (
                            <div key={mIdx}>
                              <div style={{ fontSize: '0.6875rem', fontWeight: 600, color: '#71717a', textTransform: 'uppercase' }}>
                                {m.label}
                              </div>
                              <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#09090b' }}>
                                {m.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech Stack Pills */}
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.4rem',
                        marginBottom: '1.5rem'
                      }}>
                        {currentProject.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="code-tag">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        gap: '0.75rem'
                      }}>
                        <button
                          type="button"
                          onClick={() => setActiveModalProject(currentProject)}
                          className="btn-pro-primary"
                          style={{
                            padding: '0.625rem 1.125rem',
                            fontSize: '0.84375rem'
                          }}
                        >
                          <Info size={15} />
                          <span>Deep-Dive Architecture</span>
                        </button>

                        {currentProject.github && (
                          <a
                            href={currentProject.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-pro-outline"
                            style={{
                              padding: '0.625rem 1rem',
                              fontSize: '0.84375rem'
                            }}
                          >
                            <Github size={15} />
                            <span>GitHub Repository</span>
                          </a>
                        )}

                        {currentProject.demo && (
                          <a
                            href={currentProject.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-pro-outline"
                            style={{
                              padding: '0.625rem 1rem',
                              fontSize: '0.84375rem',
                              backgroundColor: '#ecfdf5',
                              borderColor: '#a7f3d0',
                              color: '#047857'
                            }}
                          >
                            <ExternalLink size={15} />
                            <span>Live System</span>
                          </a>
                        )}
                      </div>

                    </div>

                  </div>

                </div>

                {/* Interactive Slideshow Project Strip / Thumbnail Carousel */}
                <div style={{ marginTop: '1.5rem' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.625rem',
                    padding: '0 0.25rem'
                  }}>
                    <span style={{ fontSize: '0.78125rem', fontWeight: 700, color: '#71717a', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Click Any Project to Jump Directly
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#a1a1aa' }}>
                      Use Left / Right Arrows to Navigate
                    </span>
                  </div>

                  <div 
                    ref={thumbnailStripRef}
                    className="slideshow-thumb-strip"
                  >
                    {filteredProjects.map((proj, idx) => {
                      const isActive = idx === activeIndex;
                      return (
                        <button
                          key={proj.id}
                          type="button"
                          onClick={() => setCurrentIndex(idx)}
                          className={`slideshow-thumb-btn ${isActive ? 'active' : ''}`}
                        >
                          {/* Mini Thumbnail */}
                          <div style={{
                            width: '48px',
                            height: '36px',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            backgroundColor: '#f1f5f9',
                            flexShrink: 0,
                            border: isActive ? '1px solid #059669' : '1px solid #e2e8f0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}>
                            {proj.image ? (
                              <img 
                                src={proj.image} 
                                alt={proj.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                              />
                            ) : (
                              <Server size={18} color="#059669" />
                            )}
                          </div>

                          {/* Mini Label */}
                          <div style={{ overflow: 'hidden' }}>
                            <div style={{
                              fontSize: '0.6875rem',
                              fontWeight: 700,
                              color: isActive ? '#059669' : '#71717a',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.35rem'
                            }}>
                              <span>0{idx + 1}</span>
                              {isActive && <span>• ACTIVE</span>}
                            </div>
                            <div style={{
                              fontSize: '0.8125rem',
                              fontWeight: 700,
                              color: isActive ? '#09090b' : '#334155',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis'
                            }}>
                              {proj.title}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>
            )}
          </div>
        )}

        {/* ------------------------------------------------------------------ */}
        {/* VIEW 2: ALL PROJECTS GRID (TOGGLEABLE ALTERNATIVE)                  */}
        {/* ------------------------------------------------------------------ */}
        {viewMode === 'grid' && (
          <div>
            {filteredProjects.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '3rem 1rem', color: '#64748b' }}>
                No projects match your criteria.
              </div>
            ) : (
              <div className="uniform-projects-grid">
                {filteredProjects.map((project) => (
                  <div key={project.id} className="uniform-project-card">
                    <div>
                      {/* Card Visual Header */}
                      <div 
                        style={{
                          position: 'relative',
                          borderRadius: '14px',
                          overflow: 'hidden',
                          aspectRatio: '16 / 9',
                          backgroundColor: '#f1f5f9',
                          border: '1px solid #e2e8f0',
                          marginBottom: '1.25rem',
                          cursor: 'pointer'
                        }}
                        onClick={() => setActiveModalProject(project)}
                      >
                        {project.image ? (
                          <img 
                            src={project.image} 
                            alt={project.title}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              display: 'block',
                              transition: 'transform 0.4s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.04)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                          />
                        ) : (
                          <div style={{
                            width: '100%',
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#059669',
                            gap: '0.5rem'
                          }}>
                            <Server size={38} />
                            <span style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#52525b' }}>Enterprise System</span>
                          </div>
                        )}

                        <div style={{
                          position: 'absolute',
                          top: '10px',
                          left: '10px',
                          background: 'rgba(255, 255, 255, 0.94)',
                          backdropFilter: 'blur(6px)',
                          padding: '0.25rem 0.65rem',
                          borderRadius: 'var(--radius-full)',
                          fontSize: '0.71875rem',
                          fontWeight: 700,
                          color: '#059669',
                          border: '1px solid rgba(226, 232, 240, 0.9)'
                        }}>
                          {project.category}
                        </div>

                        {project.featured && (
                          <div style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            background: 'rgba(255, 255, 255, 0.94)',
                            backdropFilter: 'blur(6px)',
                            padding: '0.2rem 0.55rem',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '0.6875rem',
                            fontWeight: 700,
                            color: '#059669',
                            border: '1px solid #bbf7d0'
                          }}>
                            Featured
                          </div>
                        )}
                      </div>

                      {/* Project Title */}
                      <h3 
                        onClick={() => setActiveModalProject(project)}
                        style={{
                          fontSize: '1.1875rem',
                          fontWeight: 700,
                          color: '#09090b',
                          lineHeight: 1.3,
                          marginBottom: '0.5rem',
                          cursor: 'pointer',
                          transition: 'color 0.2s ease',
                          minHeight: '2.8rem',
                          display: 'flex',
                          alignItems: 'flex-start'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#059669'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#09090b'}
                      >
                        {project.title}
                      </h3>

                      {/* Summary */}
                      <p style={{
                        fontSize: '0.84375rem',
                        color: '#52525b',
                        lineHeight: 1.55,
                        marginBottom: '1rem',
                        minHeight: '3.9rem',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}>
                        {project.summary}
                      </p>

                      {/* Tech Tags */}
                      <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.35rem',
                        marginBottom: '1.25rem',
                        minHeight: '2.1rem'
                      }}>
                        {project.tags.slice(0, 4).map((tag, tIdx) => (
                          <span key={tIdx} className="code-tag">
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>

                    {/* Card Action Footer */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '1rem',
                      borderTop: '1px solid #f1f5f9',
                      marginTop: 'auto'
                    }}>
                      <button
                        onClick={() => setActiveModalProject(project)}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          fontSize: '0.8125rem',
                          fontWeight: 600,
                          color: '#059669',
                          cursor: 'pointer',
                          transition: 'color 0.15s ease'
                        }}
                      >
                        <Info size={14} />
                        <span>Architecture Details</span>
                      </button>

                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            fontSize: '0.78125rem',
                            fontWeight: 600,
                            color: '#27272a',
                            backgroundColor: '#f8fafc',
                            border: '1px solid #e2e8f0',
                            padding: '0.3rem 0.65rem',
                            borderRadius: 'var(--radius-full)'
                          }}
                        >
                          <Github size={13} />
                          <span>Code</span>
                        </a>
                      ) : (
                        <span style={{ fontSize: '0.71875rem', fontWeight: 600, color: '#64748b' }}>
                          {project.deploymentNote || 'Internal System'}
                        </span>
                      )}
                    </div>

                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Modal for Deep Technical Architecture */}
        {activeModalProject && (
          <ProjectModal 
            project={activeModalProject} 
            onClose={() => setActiveModalProject(null)} 
          />
        )}

      </div>
    </section>
  );
}
