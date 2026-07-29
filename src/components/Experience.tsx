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
          style={{ marginBottom: 60 }}
        >
          <h2 className="section-title gradient-text">{t.title[lang]}</h2>
          <p className="section-subtitle">{t.subtitle[lang]}</p>
        </motion.div>

        {/* Timeline */}
        <div className="timeline">
          {workExperiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              style={{ position: 'relative', marginBottom: 48 }}
            >
              {/* Timeline dot */}
              <div className="timeline-dot" />

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="glass-card"
                style={{ padding: 28 }}
              >
                {/* Company header */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: 12,
                  marginBottom: 16,
                }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <h3 style={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        fontFamily: 'var(--font-display)',
                        color: 'var(--text-primary)',
                      }}>
                        {exp.company}
                      </h3>
                      {exp.companyUrl && (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: 'var(--accent-primary)', display: 'flex' }}
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                    <p style={{
                      color: 'var(--accent-primary)',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      marginTop: 4,
                    }}>
                      {exp.role[lang]}
                    </p>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4, alignItems: 'flex-end' }}>
                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      fontSize: '0.85rem',
                      color: 'var(--text-tertiary)',
                      fontFamily: 'var(--font-mono)',
                    }}>
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      fontSize: '0.85rem',
                      color: 'var(--text-tertiary)',
                    }}>
                      <MapPin size={14} />
                      {exp.location[lang]}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p style={{
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  fontSize: '0.95rem',
                  marginBottom: 16,
                }}>
                  {exp.description[lang]}
                </p>

                {/* Achievements */}
                <div style={{ marginBottom: 16 }}>
                  <p style={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: 8,
                  }}>
                    {t.achievements[lang]}
                  </p>
                  <ul style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 6,
                    paddingLeft: 0,
                  }}>
                    {exp.achievements.map((ach, i) => (
                      <li
                        key={i}
                        style={{
                          display: 'flex',
                          gap: 8,
                          fontSize: '0.9rem',
                          color: 'var(--text-secondary)',
                          lineHeight: 1.6,
                        }}
                      >
                        <span style={{ color: 'var(--accent-primary)', flexShrink: 0 }}>▹</span>
                        {ach[lang]}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
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
