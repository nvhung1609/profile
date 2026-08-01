import { motion } from 'framer-motion';
import { ExternalLink, Calendar, MapPin } from 'lucide-react';
import type { Language } from '@/data/portfolioData';
import { workExperiences, translations, getLangText } from '@/data/portfolioData';

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
            {(t.title as any)[lang] || t.title.en}
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>{(t.subtitle as any)[lang] || t.subtitle.en}</p>
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
                      <span style={{ whiteSpace: 'nowrap' }}>{getLangText(exp.company, lang)}</span>
                      {exp.companyJapanese && (
                        <span style={{
                          fontSize: '1.05rem',
                          fontWeight: 600,
                          color: 'var(--text-secondary)',
                          whiteSpace: 'nowrap',
                          display: 'inline-block',
                        }}>
                          {getLangText(exp.companyJapanese, lang)}
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
                        title="Website hệ thống IoT (MUSEN PLUS)"
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
                    {lang === 'vi' ? exp.period.replace('Present', 'Hiện tại') : lang === 'ja' ? exp.period.replace('Present', '現在').replace('Hiện tại', '現在') : exp.period.replace('Hiện tại', 'Present')}
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
                <div style={{ marginBottom: 24 }}>
                  <h4 style={{
                    fontSize: '0.9rem',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    marginBottom: 14,
                    fontFamily: 'var(--font-display)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}>
                    {(t.achievements as any)[lang] || t.achievements.en}
                  </h4>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 14,
                    marginTop: 8,
                  }}>
                    {exp.achievements.map((ach, i) => {
                      const achItem = ach as any;
                      const hasMetadata = Boolean(achItem.projectName);
                      const pName = hasMetadata ? getLangText(achItem.projectName, lang) : '';
                      const pRole = hasMetadata && achItem.role ? getLangText(achItem.role, lang) : '';
                      const pNote = hasMetadata && achItem.note ? getLangText(achItem.note, lang) : '';
                      const pPeriod = hasMetadata && achItem.startDate ? `${achItem.startDate} – ${achItem.endDate}` : '';
                      const text = hasMetadata ? getLangText(achItem, lang) : ((ach as any)[lang] || ach.en || ach.vi || '');
                      const colonIndex = text.indexOf(': ');
                      let title = '';
                      let content = text;
                      if (!hasMetadata && colonIndex > 0 && colonIndex < 120) {
                        title = text.substring(0, colonIndex).trim();
                        content = text.substring(colonIndex + 2).trim();
                      }

                      const renderTextWithLinks = (str: string) => {
                        const urlRegex = /\((https?:\/\/[^\s)]+|[a-zA-Z0-9-]+\.(?:com|vn|net|io|org)[^\s)]*)\)/g;
                        const parts = [];
                        let lastIndex = 0;
                        let match;

                        while ((match = urlRegex.exec(str)) !== null) {
                          if (match.index > lastIndex) {
                            parts.push(str.substring(lastIndex, match.index));
                          }
                          const domain = match[1];
                          const fullUrl = domain.startsWith('http') ? domain : `https://${domain}`;
                          parts.push(
                            <a
                              key={match.index}
                              href={fullUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              style={{
                                color: 'var(--accent-cyan)',
                                textDecoration: 'underline',
                                fontWeight: 700,
                                margin: '0 3px',
                              }}
                            >
                              ({domain})
                            </a>
                          );
                          lastIndex = match.index + match[0].length;
                        }
                        if (lastIndex < str.length) {
                          parts.push(str.substring(lastIndex));
                        }
                        return parts.length > 0 ? parts : str;
                      };

                      return (
                        <div
                          key={i}
                          style={{
                            position: 'relative',
                            paddingLeft: 22,
                            paddingBottom: i === exp.achievements.length - 1 ? 0 : 16,
                            borderBottom: i === exp.achievements.length - 1 ? 'none' : '1px dashed rgba(255, 255, 255, 0.08)',
                          }}
                        >
                          {/* Glowing Diamond Bullet Marker */}
                          <div style={{
                            position: 'absolute',
                            left: 0,
                            top: hasMetadata ? 9 : 7,
                            width: 8,
                            height: 8,
                            borderRadius: '1.5px',
                            transform: 'rotate(45deg)',
                            background: i % 2 === 0 ? 'var(--accent-cyan)' : 'var(--accent-primary)',
                            boxShadow: i % 2 === 0 ? '0 0 8px var(--accent-cyan)' : '0 0 8px var(--accent-primary)',
                          }} />

                          {hasMetadata ? (
                            <div>
                              {/* Top Row: Project Title & Time Badge */}
                              <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                gap: 8,
                                marginBottom: 4,
                              }}>
                                <h5 style={{
                                  fontSize: '0.98rem',
                                  fontWeight: 800,
                                  color: i % 2 === 0 ? 'var(--accent-cyan)' : 'var(--accent-primary)',
                                  fontFamily: 'var(--font-display)',
                                  margin: 0,
                                  lineHeight: 1.35,
                                }}>
                                  {pName}
                                </h5>
                                {pPeriod && (
                                  <span style={{
                                    fontSize: '0.8rem',
                                    color: 'var(--accent-cyan)',
                                    background: 'rgba(0, 229, 255, 0.08)',
                                    border: '1px solid rgba(0, 229, 255, 0.25)',
                                    padding: '2px 10px',
                                    borderRadius: '12px',
                                    fontFamily: 'var(--font-mono)',
                                    fontWeight: 700,
                                    whiteSpace: 'nowrap',
                                  }}>
                                    {pPeriod}
                                  </span>
                                )}
                              </div>

                              {/* Role Row */}
                              {pRole && (
                                <div style={{
                                  fontSize: '0.84rem',
                                  color: 'var(--text-secondary)',
                                  fontWeight: 600,
                                  marginBottom: pNote ? 3 : 6,
                                  display: 'flex',
                                  alignItems: 'center',
                                  gap: 6,
                                }}>
                                  <span style={{ color: 'var(--accent-primary)', fontWeight: 700 }}>{lang === 'vi' ? 'Vai trò:' : lang === 'ja' ? '役割:' : 'Role:'}</span>
                                  <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{pRole}</span>
                                </div>
                              )}

                              {/* Version Note */}
                              {pNote && (
                                <div style={{
                                  fontSize: '0.8rem',
                                  color: 'var(--text-secondary)',
                                  opacity: 0.85,
                                  fontStyle: 'italic',
                                  marginBottom: 6,
                                }}>
                                  * Note: {pNote}
                                </div>
                              )}

                              {/* Description Row */}
                              <div style={{
                                fontSize: '0.9rem',
                                color: 'var(--text-secondary)',
                                lineHeight: 1.65,
                              }}>
                                {renderTextWithLinks(text)}
                              </div>
                            </div>
                          ) : title ? (
                            <div>
                              <span style={{
                                fontSize: '0.92rem',
                                fontWeight: 800,
                                color: i % 2 === 0 ? 'var(--accent-cyan)' : 'var(--accent-primary)',
                                fontFamily: 'var(--font-display)',
                                display: 'inline-block',
                                marginRight: 8,
                              }}>
                                {renderTextWithLinks(title)}
                              </span>
                              <span style={{
                                fontSize: '0.9rem',
                                color: 'var(--text-secondary)',
                                lineHeight: 1.65,
                              }}>
                                — {renderTextWithLinks(content)}
                              </span>
                            </div>
                          ) : (
                            <div style={{
                              fontSize: '0.9rem',
                              color: 'var(--text-secondary)',
                              lineHeight: 1.65,
                            }}>
                              {renderTextWithLinks(text)}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
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
