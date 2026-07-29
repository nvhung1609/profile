import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CodeSquare, ChevronLeft, ChevronRight, FolderOpen, Layers, Sparkles } from 'lucide-react';
import type { Language, Project } from '@/data/portfolioData';
import { translations } from '@/data/portfolioData';

interface ProjectModalProps {
  project: Project;
  lang: Language;
  onClose: () => void;
}

export function ProjectModal({ project, lang, onClose }: ProjectModalProps) {
  const t = translations.projects;
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Base URL for assets
  const baseUrl = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  // 6 Image URLs per project: 1.png, 2.png, 3.png, 4.png, 5.png, 6.png
  const galleryImages = [1, 2, 3, 4, 5, 6].map(
    num => `${baseUrl}assets/img/projects/${project.id}/${num}.png`
  );

  const nextImg = () => setActiveImgIndex((prev) => (prev + 1) % galleryImages.length);
  const prevImg = () => setActiveImgIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);

  // Auto-play slideshow every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveImgIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [galleryImages.length, isPaused]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-overlay"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 220 }}
        className="modal-content"
        onClick={e => e.stopPropagation()}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxHeight: 'calc(90vh - var(--header-height))',
        }}
      >
        {/* Sticky Header Bar with Title & Easy-Tap Close Button */}
        <div style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 18px',
          background: 'rgba(14, 14, 26, 0.96)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--border-accent)',
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
            <span className="tech-tag" style={{ fontSize: '0.7rem', flexShrink: 0 }}>
              {project.category}
            </span>
            <h3 style={{
              fontSize: '0.98rem',
              fontWeight: 800,
              fontFamily: 'var(--font-display)',
              color: '#fff',
              margin: 0,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}>
              {project.title}
            </h3>
          </div>

          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            aria-label="Close modal"
            style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: 'var(--accent-glow)',
              border: '1px solid var(--border-accent)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
              boxShadow: 'var(--shadow-glow)',
            }}
          >
            <X size={18} />
          </motion.button>
        </div>

        {/* Scrollable Body Content */}
        <div style={{
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
          flex: 1,
        }}
        className="modal-scroll-body"
        >
          {/* Gallery Carousel Banner */}
          <div style={{
            position: 'relative',
            width: '100%',
            height: 300,
            background: '#07070d',
            overflow: 'hidden',
            borderBottom: '1px solid var(--border-accent)',
          }}
          className="modal-banner-box"
          >
            {/* Active Image Render */}
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImgIndex}
                src={galleryImages[activeImgIndex]}
                alt={`${project.title} render ${activeImgIndex + 1}`}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
              />
            </AnimatePresence>

            {/* Sci-Fi Overlay Gradient */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(180deg, rgba(7,7,13,0.3) 0%, rgba(14,14,26,0.92) 100%)',
              pointerEvents: 'none',
            }} />

            {/* Carousel Arrow Buttons */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => { e.stopPropagation(); prevImg(); }}
              aria-label="Previous Image"
              style={{
                position: 'absolute', top: '50%', left: 12,
                transform: 'translateY(-50%)',
                width: 36, height: 36, borderRadius: '50%',
                background: 'rgba(0,0,0,0.75)', border: '1px solid rgba(255,255,255,0.3)',
                color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', backdropFilter: 'blur(10px)', zIndex: 10,
              }}
            >
              <ChevronLeft size={20} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => { e.stopPropagation(); nextImg(); }}
              aria-label="Next Image"
              style={{
                position: 'absolute', top: '50%', right: 12,
                transform: 'translateY(-50%)',
                width: 36, height: 36, borderRadius: '50%',
                background: 'rgba(0,0,0,0.75)', border: '1px solid rgba(255,255,255,0.3)',
                color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', backdropFilter: 'blur(10px)', zIndex: 10,
              }}
            >
              <ChevronRight size={20} />
            </motion.button>

            {/* Image index badge & folder path notice */}
            <div style={{
              position: 'absolute', bottom: 10, left: 12, right: 12,
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 6,
              zIndex: 10,
            }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 6,
                fontSize: '0.73rem', fontFamily: 'var(--font-mono)',
                color: 'var(--accent-cyan)', background: 'rgba(0,0,0,0.85)',
                padding: '4px 10px', borderRadius: 'var(--radius-sm)',
                backdropFilter: 'blur(10px)', border: '1px solid rgba(0,229,255,0.35)',
              }}>
                <FolderOpen size={12} />
                <span>public/assets/img/projects/{project.id}/ (1.png - 6.png)</span>
              </div>

              <div style={{
                display: 'flex', alignItems: 'center', gap: 6,
                fontSize: '0.78rem', fontFamily: 'var(--font-mono)', fontWeight: 700,
                color: '#fff', background: 'var(--accent-glow-strong)',
                padding: '4px 12px', borderRadius: 'var(--radius-full)',
                border: '1px solid var(--border-accent)',
              }}>
                <Layers size={13} style={{ color: 'var(--accent-primary)' }} />
                <span>{activeImgIndex + 1} / {galleryImages.length}</span>
              </div>
            </div>
          </div>

          {/* 6 Thumbnail Selector Bar */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(6, 1fr)',
            gap: 6,
            padding: '10px 14px',
            background: 'var(--bg-tertiary)',
            borderBottom: '1px solid var(--border-primary)',
          }}>
            {galleryImages.map((url, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveImgIndex(idx)}
                style={{
                  height: 46,
                  borderRadius: 'var(--radius-sm)',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: activeImgIndex === idx ? '2px solid var(--accent-primary)' : '1px solid var(--border-primary)',
                  boxShadow: activeImgIndex === idx ? 'var(--shadow-glow)' : 'none',
                  position: 'relative',
                  opacity: activeImgIndex === idx ? 1 : 0.55,
                  transition: 'all 0.2s',
                }}
              >
                <img
                  src={url}
                  alt={`Thumb ${idx + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <span style={{
                  position: 'absolute', bottom: 2, right: 3,
                  fontSize: '0.62rem', fontFamily: 'var(--font-mono)', fontWeight: 800,
                  color: '#fff', textShadow: '0 1px 3px #000',
                }}>
                  #{idx + 1}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Modal Body Information */}
          <div style={{ padding: '24px 24px' }} className="modal-body-content">
            {/* Title & Highlight Tag */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12, flexWrap: 'wrap' }}>
              <span className="tech-tag" style={{ fontSize: '0.75rem' }}>{project.category}</span>
              {project.highlight && (
                <span style={{
                  padding: '4px 12px',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  color: '#ffb700',
                  background: 'rgba(255, 183, 0, 0.15)',
                  border: '1px solid rgba(255, 183, 0, 0.35)',
                  borderRadius: 'var(--radius-full)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                }}>
                  <Sparkles size={12} /> FLAGSHIP PROJECT
                </span>
              )}
            </div>

            <h2 style={{
              fontSize: '1.45rem',
              fontWeight: 800,
              fontFamily: 'var(--font-display)',
              marginBottom: 14,
              color: 'var(--text-primary)',
              lineHeight: 1.3,
            }}>
              {project.title}
            </h2>

            {/* Long description */}
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: 1.75,
              fontSize: '0.94rem',
              marginBottom: 24,
            }}>
              {project.longDescription[lang]}
            </p>

            {/* Key Features & Specs */}
            <div style={{ marginBottom: 24 }}>
              <h4 style={{
                fontSize: '0.92rem',
                fontWeight: 800,
                marginBottom: 12,
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-display)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}>
                {t.features[lang]}
              </h4>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: 10,
              }}>
                {project.features.map((feature, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 10,
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary)',
                      padding: '12px 14px',
                      background: 'var(--bg-glass)',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-primary)',
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: 'var(--accent-cyan)', fontWeight: 800, flexShrink: 0 }}>✓</span>
                    <span>{feature[lang]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack */}
            <div style={{ marginBottom: 28 }}>
              <h4 style={{
                fontSize: '0.92rem',
                fontWeight: 800,
                marginBottom: 12,
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-display)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}>
                {t.techUsed[lang]}
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ textDecoration: 'none' }}
                >
                  <ExternalLink size={16} />
                  {t.liveDemo[lang]}
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ textDecoration: 'none' }}
                >
                  <CodeSquare size={16} />
                  {t.sourceCode[lang]}
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 640px) {
          .modal-banner-box { height: 200px !important; }
          .modal-body-content { padding: 18px 14px !important; }
        }
      `}</style>
    </motion.div>
  );
}
