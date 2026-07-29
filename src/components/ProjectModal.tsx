import { motion } from 'framer-motion';
import { X, ExternalLink, CodeSquare } from 'lucide-react';
import type { Language, Project } from '@/data/portfolioData';
import { translations } from '@/data/portfolioData';

interface ProjectModalProps {
  project: Project;
  lang: Language;
  onClose: () => void;
}

export function ProjectModal({ project, lang, onClose }: ProjectModalProps) {
  const t = translations.projects;

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
      >
        {/* Header gradient */}
        <div style={{
          height: 160,
          background: project.highlight
            ? 'linear-gradient(135deg, rgba(129, 140, 248, 0.4) 0%, rgba(167, 139, 250, 0.3) 50%, rgba(192, 132, 252, 0.2) 100%)'
            : 'var(--gradient-card)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0',
        }}>
          <span style={{ fontSize: '4rem', opacity: 0.5 }}>
            {project.category === 'Fullstack' ? '🏗️' : '🎨'}
          </span>

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
              background: 'rgba(0,0,0,0.3)',
              border: 'none',
              borderRadius: '50%',
              color: '#fff',
              cursor: 'pointer',
              backdropFilter: 'blur(10px)',
            }}
          >
            <X size={18} />
          </motion.button>
        </div>

        {/* Body */}
        <div style={{ padding: 32 }}>
          {/* Title */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <span className="tech-tag" style={{ fontSize: '0.7rem' }}>{project.category}</span>
            {project.highlight && (
              <span style={{
                padding: '3px 8px',
                fontSize: '0.7rem',
                fontWeight: 700,
                color: '#fbbf24',
                background: 'rgba(251, 191, 36, 0.15)',
                border: '1px solid rgba(251, 191, 36, 0.3)',
                borderRadius: 'var(--radius-full)',
              }}>
                ⭐ HIGHLIGHT
              </span>
            )}
          </div>

          <h2 style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            fontFamily: 'var(--font-display)',
            marginBottom: 16,
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
              fontSize: '0.9rem',
              fontWeight: 700,
              marginBottom: 12,
              color: 'var(--text-primary)',
            }}>
              {t.features[lang]}
            </h4>
            <ul style={{
              listStyle: 'none',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
              gap: 8,
              paddingLeft: 0,
            }}>
              {project.features.map((feature, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    fontSize: '0.9rem',
                    color: 'var(--text-secondary)',
                    padding: '8px 12px',
                    background: 'var(--bg-glass)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-primary)',
                  }}
                >
                  <span style={{ color: '#34d399' }}>✓</span>
                  {feature[lang]}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div style={{ marginBottom: 28 }}>
            <h4 style={{
              fontSize: '0.9rem',
              fontWeight: 700,
              marginBottom: 12,
              color: 'var(--text-primary)',
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
