import { motion } from 'framer-motion';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';
import type { Language } from '@/data/portfolioData';
import { workExperiences, translations } from '@/data/portfolioData';

interface ExperienceProps {
  lang: Language;
}

export function Experience({ lang }: ExperienceProps) {
  const t = translations.experience;

  return (
    <section id="experience" className="section">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 50, textAlign: 'center' }}
        >
          <h2 className="section-title">
            {t.title[lang]}
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>{t.subtitle[lang]}</p>
        </motion.div>

        {/* Timeline List */}
        <div style={{ maxWidth: 1040, margin: '0 auto' }}>
          {workExperiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              style={{ marginBottom: 40 }}
            >
              {/* Cyberpunk HUD Card */}
              <motion.div
                whileHover={{ scale: 1.01, y: -3 }}
                className="hud-card"
                style={{ padding: '28px 32px' }}
              >
                <div className="hud-corner-tl" />
                <div className="hud-corner-tr" />
                <div className="hud-corner-bl" />
                <div className="hud-corner-br" />

                {/* Card Header Row 1: Company Title on Left, Period Badge on Right */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: 12,
                  marginBottom: 8,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                    <h3 style={{
                      fontSize: '1.25rem',
                      fontWeight: 800,
                      fontFamily: 'var(--font-display)',
                      color: 'var(--text-primary)',
                      lineHeight: 1.3,
                      margin: 0,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      flexWrap: 'wrap',
                    }}>
                      <span style={{ whiteSpace: 'nowrap' }}>{exp.company}</span>
                      {exp.companyJapanese && (
                        <span style={{
                          fontSize: '1.05rem',
                          fontWeight: 600,
                          color: 'var(--text-secondary)',
                          whiteSpace: 'nowrap',
                          display: 'inline-block',
                        }}>
                          {exp.companyJapanese}
                        </span>
                      )}
                    </h3>
                    {exp.companyUrl && (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--accent-primary)', display: 'inline-flex', alignItems: 'center' }}
                        aria-label="Company website"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>

                  {/* Period Badge - Bright Cyber Cyan */}
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    padding: '5px 14px',
                    fontSize: '0.83rem',
                    color: 'var(--accent-cyan)',
                    background: 'rgba(0, 229, 255, 0.12)',
                    border: '1px solid rgba(0, 229, 255, 0.35)',
                    borderRadius: 'var(--radius-full)',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 700,
                    flexShrink: 0,
                  }}>
                    <Calendar size={14} style={{ color: 'var(--accent-cyan)' }} />
                    {exp.period}
                  </span>
                </div>

                {/* Card Header Row 2: Role Title on Left, Location on Right */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: 10,
                  marginBottom: 18,
                  paddingBottom: 16,
                  borderBottom: '1px solid var(--border-primary)',
                }}>
                  <p style={{
                    color: 'var(--accent-primary)',
                    fontWeight: 700,
                    fontSize: '1rem',
                    margin: 0,
                    fontFamily: 'var(--font-sans)',
                  }}>
                    {exp.role[lang]}
                  </p>

                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 500,
                  }}>
                    <MapPin size={14} style={{ color: 'var(--accent-primary)' }} />
                    {exp.location[lang]}
                  </span>
                </div>

                {/* Description */}
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 1.75,
                  fontSize: '0.95rem',
                  marginBottom: 20,
                }}>
                  {exp.description[lang]}
                </p>

                {/* Achievements Checklist */}
                <div style={{ marginBottom: 20 }}>
                  <h4 style={{
                    fontSize: '0.9rem',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    marginBottom: 12,
                    fontFamily: 'var(--font-display)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}>
                    {t.achievements[lang]}
                  </h4>
                  <ul style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 10,
                    paddingLeft: 0,
                  }}>
                    {exp.achievements.map((ach, i) => (
                      <li
                        key={i}
                        style={{
                          display: 'flex',
                          gap: 10,
                          fontSize: '0.9rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.65,
                        }}
                      >
                        <span style={{ color: 'var(--accent-primary)', flexShrink: 0, fontWeight: 800 }}>⚡</span>
                        <span>{ach[lang]}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack tags - Centered */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 8,
                  justifyContent: 'center',
                  paddingTop: 16,
                  borderTop: '1px solid var(--border-primary)',
                }}>
                  {exp.techStack.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
