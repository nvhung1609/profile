import { motion } from 'framer-motion';
import { X, ExternalLink, CodeSquare, FolderOpen } from 'lucide-react';
import type { Language, Project } from '@/data/portfolioData';
import { translations } from '@/data/portfolioData';

interface ProjectModalProps {
  project: Project;
  lang: Language;
  onClose: () => void;
}

export function ProjectModal({ project, lang, onClose }: ProjectModalProps) {
  const t = translations.projects;

  // Use import.meta.env.BASE_URL for bulletproof asset paths on Vite & GitHub Pages
  const baseUrl = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const projectImg = project.image || `${baseUrl}assets/img/projects/${project.id}/preview.png`;

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
        style={{ maxWidth: 780 }}
      >
        {/* Hardware Render Header Banner */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: 260,
          background: 'var(--bg-tertiary)',
          overflow: 'hidden',
          borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0',
          borderBottom: '1px solid var(--border-accent)',
        }}>
          <img
            src={projectImg}
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />

          {/* Sci-Fi Overlay Gradient */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, rgba(7,7,13,0.3) 0%, rgba(14,14,26,0.9) 100%)',
          }} />

          {/* Close button */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            style={{
              position: 'absolute',
              top: 16,
              right: 16,
              width: 36,
              height: 36,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0,0,0,0.5)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '50%',
              color: '#fff',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
              zIndex: 10,
            }}
          >
            <X size={18} />
          </motion.button>

          {/* Image folder path notice for the user */}
          <div style={{
            position: 'absolute',
            bottom: 12,
            left: 16,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            fontSize: '0.78rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--accent-cyan)',
            background: 'rgba(0,0,0,0.65)',
            padding: '6px 12px',
            borderRadius: 'var(--radius-sm)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(0,229,255,0.35)',
          }}>
            <FolderOpen size={14} />
            <span>📁 Folder ảnh: public/assets/img/projects/{project.id}/</span>
          </div>
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
