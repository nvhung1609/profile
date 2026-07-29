import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CodeSquare, ChevronLeft, ChevronRight, FolderOpen, Layers } from 'lucide-react';
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-overlay"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="modal-content"
        onClick={e => e.stopPropagation()}
        style={{ maxWidth: 840, width: '95%' }}
      >
        {/* Gallery Carousel Banner */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: 320,
          background: '#07070d',
          overflow: 'hidden',
          borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0',
          borderBottom: '1px solid var(--border-accent)',
        }}>
          {/* Active Image Render */}
          <AnimatePresence mode="wait">
            <motion.img
              key={activeImgIndex}
              src={galleryImages[activeImgIndex]}
              alt={`${project.title} render ${activeImgIndex + 1}`}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
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
            background: 'linear-gradient(180deg, rgba(7,7,13,0.35) 0%, rgba(14,14,26,0.92) 100%)',
            pointerEvents: 'none',
          }} />

          {/* Carousel Left / Right Arrow Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevImg}
            aria-label="Previous Image"
            style={{
              position: 'absolute', top: '45%', left: 16,
              transform: 'translateY(-50%)',
              width: 40, height: 40, borderRadius: '50%',
              background: 'rgba(0,0,0,0.65)', border: '1px solid rgba(255,255,255,0.25)',
              color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', backdropFilter: 'blur(10px)', zIndex: 10,
            }}
          >
            <ChevronLeft size={22} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextImg}
            aria-label="Next Image"
            style={{
              position: 'absolute', top: '45%', right: 16,
              transform: 'translateY(-50%)',
              width: 40, height: 40, borderRadius: '50%',
              background: 'rgba(0,0,0,0.65)', border: '1px solid rgba(255,255,255,0.25)',
              color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', backdropFilter: 'blur(10px)', zIndex: 10,
            }}
          >
            <ChevronRight size={22} />
          </motion.button>

          {/* Close button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            aria-label="Close"
            style={{
              position: 'absolute', top: 16, right: 16,
              width: 38, height: 38, borderRadius: '50%',
              background: 'rgba(0,0,0,0.65)', border: '1px solid rgba(255,255,255,0.25)',
              color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', backdropFilter: 'blur(10px)', zIndex: 10,
            }}
          >
            <X size={20} />
          </motion.button>

          {/* Image index badge & folder path notice */}
          <div style={{
            position: 'absolute', bottom: 14, left: 16, right: 16,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8,
            zIndex: 10,
          }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: 6,
              fontSize: '0.78rem', fontFamily: 'var(--font-mono)',
              color: 'var(--accent-cyan)', background: 'rgba(0,0,0,0.75)',
              padding: '6px 12px', borderRadius: 'var(--radius-sm)',
              backdropFilter: 'blur(10px)', border: '1px solid rgba(0,229,255,0.35)',
            }}>
              <FolderOpen size={14} />
              <span>public/assets/img/projects/{project.id}/ (1.png - 6.png)</span>
            </div>

            <div style={{
              display: 'flex', alignItems: 'center', gap: 6,
              fontSize: '0.8rem', fontFamily: 'var(--font-mono)', fontWeight: 700,
              color: '#fff', background: 'var(--accent-glow-strong)',
              padding: '6px 14px', borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-accent)',
            }}>
              <Layers size={14} style={{ color: 'var(--accent-primary)' }} />
              <span>{activeImgIndex + 1} / {galleryImages.length}</span>
            </div>
          </div>
        </div>

        {/* 6 Thumbnail Selector Bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: 8,
          padding: '12px 20px',
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
                height: 52,
                borderRadius: 'var(--radius-sm)',
                overflow: 'hidden',
                cursor: 'pointer',
                border: activeImgIndex === idx ? '2px solid var(--accent-primary)' : '1px solid var(--border-primary)',
                boxShadow: activeImgIndex === idx ? 'var(--shadow-glow)' : 'none',
                position: 'relative',
                opacity: activeImgIndex === idx ? 1 : 0.6,
                transition: 'all 0.2s',
              }}
            >
              <img
                src={url}
                alt={`Thumb ${idx + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <span style={{
                position: 'absolute', bottom: 2, right: 4,
                fontSize: '0.65rem', fontFamily: 'var(--font-mono)', fontWeight: 800,
                color: '#fff', textShadow: '0 1px 3px #000',
              }}>
                #{idx + 1}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Body */}
        <div style={{ padding: 32 }}>
          {/* Title & Badge */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, flexWrap: 'wrap' }}>
            <span className="tech-tag" style={{ fontSize: '0.75rem' }}>{project.category}</span>
            {project.highlight && (
              <span style={{
                padding: '3px 10px',
                fontSize: '0.72rem',
                fontWeight: 800,
                color: '#ffb700',
                background: 'rgba(255, 183, 0, 0.15)',
                border: '1px solid rgba(255, 183, 0, 0.35)',
                borderRadius: 'var(--radius-full)',
              }}>
                ⭐ FLAGSHIP PROJECT
              </span>
            )}
          </div>

          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            fontFamily: 'var(--font-display)',
            marginBottom: 16,
            color: 'var(--text-primary)',
          }}>
            {project.title}
          </h2>

          {/* Long description */}
          <p style={{
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
            fontSize: '0.95rem',
            marginBottom: 24,
          }}>
            {project.longDescription[lang]}
          </p>

          {/* Features */}
          <div style={{ marginBottom: 24 }}>
            <h4 style={{
              fontSize: '0.92rem',
              fontWeight: 800,
              marginBottom: 12,
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-display)',
            }}>
              {t.features[lang]}
            </h4>
            <ul style={{
              listStyle: 'none',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: 10,
              paddingLeft: 0,
            }}>
              {project.features.map((feature, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    fontSize: '0.88rem',
                    color: 'var(--text-secondary)',
                    padding: '10px 14px',
                    background: 'var(--bg-glass)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-primary)',
                  }}
                >
                  <span style={{ color: 'var(--accent-cyan)', fontWeight: 800 }}>✓</span>
                  {feature[lang]}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div style={{ marginBottom: 28 }}>
            <h4 style={{
              fontSize: '0.92rem',
              fontWeight: 800,
              marginBottom: 12,
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-display)',
            }}>
              {t.techUsed[lang]}
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {project.techStack.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
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
      </motion.div>
    </motion.div>
  );
}
