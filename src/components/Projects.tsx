import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, CodeSquare, Eye, Cpu, Calendar } from 'lucide-react';
import type { Language, Project } from '@/data/portfolioData';
import { projects, projectCategories, translations } from '@/data/portfolioData';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  lang: Language;
}

export function Projects({ lang }: ProjectsProps) {
  const t = translations.projects;
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 40, textAlign: 'center' }}
        >
          <h2 className="section-title">
            {t.title[lang]}
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>{t.subtitle[lang]}</p>
        </motion.div>

        {/* Category Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: 10,
            marginBottom: 48,
          }}
        >
          {projectCategories.map(cat => (
            <motion.button
              key={cat.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat.key)}
              style={{
                padding: '9px 22px',
                borderRadius: 'var(--radius-full)',
                border: '1px solid',
                borderColor: activeCategory === cat.key ? 'var(--accent-primary)' : 'var(--border-primary)',
                background: activeCategory === cat.key ? 'var(--gradient-hero)' : 'var(--bg-glass)',
                color: activeCategory === cat.key ? '#fff' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '0.85rem',
                cursor: 'pointer',
                fontFamily: 'var(--font-sans)',
                transition: 'all 0.2s',
                boxShadow: activeCategory === cat.key ? 'var(--shadow-glow)' : 'none',
              }}
            >
              {cat.label[lang]}
            </motion.button>
          ))}
        </motion.div>

        {/* Project Rows */}
        <motion.div
          layout
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 32,
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <div
                  className="hud-card"
                  style={{
                    padding: 32,
                    display: 'grid',
                    gridTemplateColumns: '120px 1fr',
                    gap: 32,
                    alignItems: 'flex-start',
                    cursor: 'pointer',
                  }}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="hud-corner-tl" />
                  <div className="hud-corner-tr" />
                  <div className="hud-corner-bl" />
                  <div className="hud-corner-br" />

                  {/* Left Media Graphic Badge */}
                  <div style={{
                    width: 120,
                    height: 120,
                    borderRadius: 'var(--radius-lg)',
                    background: 'var(--gradient-card)',
                    border: '1px solid var(--border-accent)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    flexShrink: 0,
                    boxShadow: 'var(--shadow-glow)',
                  }}>
                    <Cpu size={38} style={{ color: 'var(--accent-primary)' }} />
                    <span style={{
                      fontSize: '0.68rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      color: 'var(--accent-cyan)',
                      textTransform: 'uppercase',
                    }}>
                      {project.category.split(' ')[0]}
                    </span>
                  </div>

                  {/* Right Content */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, minWidth: 0 }}>
                    {/* Category & Period */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                        <span className="tech-tag" style={{ fontSize: '0.72rem' }}>{project.category}</span>
                        {project.highlight && (
                          <span style={{
                            padding: '3px 10px',
                            fontSize: '0.7rem',
                            fontWeight: 800,
                            color: '#ffb700',
                            background: 'rgba(255, 183, 0, 0.15)',
                            border: '1px solid rgba(255, 183, 0, 0.35)',
                            borderRadius: 'var(--radius-full)',
                          }}>
                            ⭐ FLAGSHIP
                          </span>
                        )}
                      </div>
                      <span style={{
                        display: 'flex', alignItems: 'center', gap: 6,
                        fontSize: '0.82rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)',
                      }}>
                        <Calendar size={14} />
                        {project.period}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 style={{
                      fontSize: '1.35rem',
                      fontWeight: 800,
                      fontFamily: 'var(--font-display)',
                      color: 'var(--text-primary)',
                      lineHeight: 1.3,
                    }}>
                      {project.title}
                    </h3>

                    {/* Summary & Description */}
                    <p style={{
                      fontSize: '0.95rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.7,
                    }}>
                      {project.description[lang]}
                    </p>

                    {/* Tech Stack Tags */}
                    <div style={{ marginTop: 6, display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {project.techStack.map((tech, i) => (
                        <span
                          key={i}
                          style={{
                            padding: '4px 10px',
                            fontSize: '0.75rem',
                            fontFamily: 'var(--font-mono)',
                            fontWeight: 600,
                            color: 'var(--text-secondary)',
                            background: 'var(--bg-tertiary)',
                            border: '1px solid var(--border-primary)',
                            borderRadius: 'var(--radius-sm)',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 12,
                      marginTop: 12,
                      paddingTop: 14,
                      borderTop: '1px solid var(--border-primary)',
                    }}>
                      <button
                        onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                        className="btn-primary"
                        style={{ padding: '8px 18px', fontSize: '0.82rem' }}
                      >
                        <Eye size={15} />
                        {t.viewDetail[lang]}
                      </button>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={e => e.stopPropagation()}
                          className="btn-secondary"
                          style={{ padding: '8px 18px', fontSize: '0.82rem' }}
                        >
                          <ExternalLink size={15} />
                          Live Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={e => e.stopPropagation()}
                          className="btn-secondary"
                          style={{ padding: '8px 18px', fontSize: '0.82rem' }}
                        >
                          <CodeSquare size={15} />
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            lang={lang}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          #projects .hud-card {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
