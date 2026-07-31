import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, CodeSquare, Eye, Calendar, FileText } from 'lucide-react';
import type { Language, Project } from '@/data/portfolioData';
import { projects, projectCategories, translations, getLangText } from '@/data/portfolioData';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  lang: Language;
}

export function Projects({ lang }: ProjectsProps) {
  const t = translations.projects;
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const baseUrl = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

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
            {(t.title as any)[lang] || t.title.en}
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>{(t.subtitle as any)[lang] || t.subtitle.en}</p>
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
              {(cat.label as any)[lang] || cat.label.en}
            </motion.button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div
          layout
          className="projects-grid-container"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 24,
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, index) => {
              const projectImg = project.image
                ? (project.image.startsWith('http') || project.image.startsWith('/') ? project.image : `${baseUrl}${project.image}`)
                : (project.gallery && project.gallery.length > 0
                    ? (project.gallery[0].startsWith('http') || project.gallery[0].startsWith('/') ? project.gallery[0] : `${baseUrl}${project.gallery[0]}`)
                    : `${baseUrl}assets/img/projects/${project.id}/preview.png`);

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.3) }}
                  whileHover={{ y: -6 }}
                  style={{ height: '100%' }}
                >
                  <div
                    className="hud-card"
                    style={{
                      padding: 20,
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      cursor: 'pointer',
                      justifyContent: 'space-between',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="hud-corner-tl" />
                    <div className="hud-corner-tr" />
                    <div className="hud-corner-bl" />
                    <div className="hud-corner-br" />

                    <div>
                      {/* Top Media Preview Image */}
                      <div
                        className="project-row-img-box"
                        style={{
                          width: '100%',
                          height: 200,
                          borderRadius: 'var(--radius-lg)',
                          overflow: 'hidden',
                          position: 'relative',
                          background: 'var(--gradient-card)',
                          border: '1px solid var(--border-accent)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: 16,
                          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
                        }}
                      >
                        {projectImg.toLowerCase().endsWith('.mp4') ? (
                          <video
                            src={projectImg}
                            muted
                            loop
                            autoPlay
                            playsInline
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              objectPosition: 'center',
                            }}
                          />
                        ) : (
                          <img
                            src={projectImg}
                            alt={getLangText(project.title, lang)}
                            onError={(e) => {
                              if (project.gallery && project.gallery.length > 0) {
                                const first = project.gallery[0];
                                (e.currentTarget as HTMLImageElement).src = first.startsWith('http') || first.startsWith('/') ? first : `${baseUrl}${first}`;
                              }
                            }}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              objectPosition: 'center',
                              transition: 'transform 0.5s ease',
                            }}
                          />
                        )}
                      </div>

                      {/* Category & Flagship Badges */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: 8,
                        marginBottom: 10,
                      }}>
                        <span className="tech-tag" style={{
                          fontSize: '0.72rem',
                          padding: '3px 10px',
                          whiteSpace: 'nowrap',
                          maxWidth: '70%',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}>
                          {project.category}
                        </span>
                        {project.highlight && (
                          <span style={{
                            padding: '3px 10px',
                            fontSize: '0.68rem',
                            fontWeight: 800,
                            color: '#ffb700',
                            background: 'rgba(255, 183, 0, 0.12)',
                            border: '1px solid rgba(255, 183, 0, 0.4)',
                            borderRadius: 'var(--radius-full)',
                            boxShadow: '0 0 10px rgba(255, 183, 0, 0.2)',
                            whiteSpace: 'nowrap',
                          }}>
                            ⭐ FLAGSHIP
                          </span>
                        )}
                      </div>

                      {/* Period */}
                      <div style={{
                        display: 'flex', alignItems: 'center', gap: 6,
                        fontSize: '0.78rem', color: 'var(--accent-cyan)',
                        fontFamily: 'var(--font-mono)', marginBottom: 8, fontWeight: 600,
                      }}>
                        <Calendar size={13} />
                        {project.period}
                      </div>

                      {/* Title */}
                      <h3 style={{
                        fontSize: '1.15rem',
                        fontWeight: 800,
                        fontFamily: 'var(--font-display)',
                        color: 'var(--text-primary)',
                        lineHeight: 1.35,
                        marginBottom: 10,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        minHeight: '3.1rem',
                      }}>
                        {getLangText(project.title, lang)}
                      </h3>

                      {/* Summary */}
                      <p style={{
                        fontSize: '0.86rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}>
                        {getLangText(project.summary, lang)}
                      </p>

                      {/* Tech Stack Tags */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 16 }}>
                        {project.techStack.slice(0, 5).map((tech, i) => (
                          <span
                            key={i}
                            style={{
                              padding: '2px 8px',
                              fontSize: '0.7rem',
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
                        {project.techStack.length > 5 && (
                          <span style={{
                            padding: '2px 6px',
                            fontSize: '0.68rem',
                            fontFamily: 'var(--font-mono)',
                            color: 'var(--text-tertiary)',
                          }}>
                            +{project.techStack.length - 5}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Bottom Action Buttons */}
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 10,
                      paddingTop: 12,
                      borderTop: '1px solid var(--border-primary)',
                      marginTop: 'auto',
                    }}>
                      <button
                        onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                        className="btn-primary"
                        style={{ padding: '7px 14px', fontSize: '0.8rem', flex: 1, justifyContent: 'center' }}
                      >
                        <Eye size={14} />
                        {(t.viewDetail as any)[lang] || t.viewDetail.en}
                      </button>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={e => e.stopPropagation()}
                          className="btn-secondary"
                          style={{ padding: '7px 12px', fontSize: '0.8rem' }}
                        >
                          <ExternalLink size={14} />
                          Demo
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={e => e.stopPropagation()}
                          className="btn-secondary"
                          style={{ padding: '7px 12px', fontSize: '0.8rem' }}
                        >
                          <CodeSquare size={14} />
                          Code
                        </a>
                      )}
                      {project.publicationUrl && (
                        <a
                          href={project.publicationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={e => e.stopPropagation()}
                          className="btn-secondary"
                          style={{
                            padding: '7px 12px',
                            fontSize: '0.8rem',
                            background: 'rgba(66, 133, 244, 0.12)',
                            borderColor: 'rgba(66, 133, 244, 0.3)',
                            color: 'var(--text-primary)',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}
                          title="Google Scholar Scientific Paper"
                        >
                          <FileText size={14} style={{ color: '#4285F4' }} />
                          Paper
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
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
        @media (max-width: 1024px) {
          .projects-grid-container {
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)) !important;
            gap: 18px !important;
          }
        }
        @media (max-width: 640px) {
          .projects-grid-container {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}
