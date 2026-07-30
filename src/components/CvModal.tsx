import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { X, Printer, Mail, MapPin, Phone, CodeSquare, Globe, ExternalLink, Award, BookOpen, Cpu, Wrench } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { Language } from '@/data/portfolioData';
import { personalInfo, workExperiences, projects, techCategories, education, translations } from '@/data/portfolioData';

interface CvModalProps {
  lang: Language;
  onClose: () => void;
}

export function CvModal({ lang, onClose }: CvModalProps) {
  const t = translations.cv;
  const printRef = useRef<HTMLDivElement>(null);
  const [imgError, setImgError] = useState(false);

  const handlePrint = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#ff5500', '#ff2a00', '#00e5ff', '#ffb700'],
    });

    setTimeout(() => {
      window.print();
    }, 500);
  };

  // Display all R&D & Freelance projects in CV
  const featuredCvProjects = projects;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-overlay no-print"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 220 }}
        className="modal-content"
        onClick={e => e.stopPropagation()}
        style={{
          maxWidth: 900,
          width: '96%',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: 'calc(92vh - var(--header-height))',
        }}
      >
        {/* Sticky Header Bar with Print & Close Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '12px 20px',
          borderBottom: '1px solid var(--border-accent)',
          position: 'sticky',
          top: 0,
          background: 'rgba(14, 14, 26, 0.96)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          zIndex: 50,
          flexShrink: 0,
          gap: 10,
        }}>
          <h2 style={{
            fontSize: '1rem',
            fontWeight: 800,
            fontFamily: 'var(--font-display)',
            color: '#fff',
            margin: 0,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            flex: 1,
            minWidth: 0,
          }}>
            {t.title[lang]}
          </h2>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
            {/* Print Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrint}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '7px 16px',
                background: 'var(--gradient-hero)',
                color: '#fff',
                fontSize: '0.82rem',
                fontWeight: 700,
                fontFamily: 'var(--font-sans)',
                border: 'none',
                borderRadius: 'var(--radius-full)',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                boxShadow: 'var(--shadow-glow)',
              }}
            >
              <Printer size={15} />
              <span>{lang === 'vi' ? 'In / Tải PDF CV' : 'Print / Export PDF'}</span>
            </motion.button>

            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              aria-label="Close modal"
              style={{
                width: 34,
                height: 34,
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
              <X size={17} />
            </motion.button>
          </div>
        </div>

        {/* Scrollable CV Document Body */}
        <div style={{
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
          flex: 1,
        }}
        className="cv-modal-scroll-area"
        >
          <div
            ref={printRef}
            style={{
              padding: '32px 36px',
              background: 'var(--bg-primary)',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-sans)',
              lineHeight: 1.65,
            }}
            className="cv-print-area"
          >
            {/* Header Section: Avatar + Name/Title + Contact Info */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 26,
              paddingBottom: 20,
              borderBottom: '2.5px solid var(--accent-primary)',
              gap: 20,
              flexWrap: 'wrap',
            }}>
              {/* Left Column: Avatar + Name & Subtitle */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 18, flex: '1 1 340px' }}>
                <div style={{
                  width: 76,
                  height: 76,
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2.5px solid var(--accent-primary)',
                  boxShadow: '0 0 15px rgba(255, 85, 0, 0.25)',
                  flexShrink: 0,
                  background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-cyan) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  {!imgError ? (
                    <img
                      src={personalInfo.avatar}
                      alt=""
                      onError={() => setImgError(true)}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <div style={{
                      fontSize: '1.45rem',
                      fontWeight: 900,
                      fontFamily: 'var(--font-display)',
                      color: '#ffffff',
                      letterSpacing: '0.05em',
                      userSelect: 'none',
                    }}>
                      NVH
                    </div>
                  )}
                </div>

                <div>
                  <h1 style={{
                    fontSize: '1.85rem',
                    fontWeight: 900,
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '-0.02em',
                    margin: 0,
                    color: 'var(--text-primary)',
                    lineHeight: 1.15,
                  }}>
                    {personalInfo.name}
                  </h1>
                  <div style={{
                    fontSize: '0.98rem',
                    color: 'var(--accent-primary)',
                    fontWeight: 800,
                    marginTop: 4,
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                    fontFamily: 'var(--font-mono)',
                  }}>
                    {personalInfo.title[lang]}
                  </div>
                  <div style={{
                    fontSize: '0.78rem',
                    color: 'var(--text-secondary)',
                    marginTop: 3,
                    fontWeight: 600,
                  }}>
                    R&D Firmware & Hardware Design Engineer • Edge AI • IoT/AIoT Systems
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Info Grid */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 5,
                fontSize: '0.82rem',
                color: 'var(--text-secondary)',
                alignItems: 'flex-start',
                flexShrink: 0,
                borderLeft: '2px solid var(--border-accent)',
                paddingLeft: 16,
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                  <Phone size={13} style={{ color: 'var(--accent-cyan)' }} />
                  <strong style={{ color: 'var(--text-primary)' }}>{personalInfo.phone}</strong>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                  <Mail size={13} style={{ color: 'var(--accent-primary)' }} />
                  <span>{personalInfo.email}</span>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                  <MapPin size={13} style={{ color: 'var(--accent-gold)' }} />
                  <span>{personalInfo.location[lang]}</span>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                  <CodeSquare size={13} style={{ color: 'var(--accent-primary)' }} />
                  <span>{personalInfo.github.replace('https://', '')}</span>
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                  <Globe size={13} style={{ color: 'var(--accent-cyan)' }} />
                  <span>{personalInfo.website.replace('https://', '')}</span>
                </span>
              </div>
            </div>

            {/* SECTION 1: OBJECTIVE / MỤC TIÊU NGHỀ NGHIỆP */}
            <section style={{ marginBottom: 24 }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginBottom: 10,
                paddingBottom: 4,
                borderBottom: '1.5px solid var(--border-primary)',
              }}>
                <h2 style={{
                  fontSize: '0.95rem',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--accent-primary)',
                  fontFamily: 'var(--font-display)',
                  margin: 0,
                  whiteSpace: 'nowrap',
                }}>
                  {lang === 'vi' ? 'MỤC TIÊU NGHỀ NGHIỆP' : 'OBJECTIVE'}
                </h2>
                <div style={{ flex: 1, height: '1.5px', background: 'var(--border-primary)' }} />
              </div>
              <p style={{
                fontSize: '0.88rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                margin: 0,
                textAlign: 'justify',
              }}>
                {personalInfo.aboutText[lang]}
              </p>
            </section>

            {/* SECTION 2: WORK EXPERIENCE / KINH NGHIỆM LÀM VIỆC (Timeline Layout) */}
            <section style={{ marginBottom: 26 }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginBottom: 14,
                paddingBottom: 4,
                borderBottom: '1.5px solid var(--border-primary)',
              }}>
                <h2 style={{
                  fontSize: '0.95rem',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--accent-primary)',
                  fontFamily: 'var(--font-display)',
                  margin: 0,
                  whiteSpace: 'nowrap',
                }}>
                  {lang === 'vi' ? 'KINH NGHIỆM LÀM VIỆC' : 'WORK EXPERIENCE'}
                </h2>
                <div style={{ flex: 1, height: '1.5px', background: 'var(--border-primary)' }} />
              </div>

              {workExperiences.map(exp => (
                <div key={exp.id} style={{
                  position: 'relative',
                  paddingLeft: 20,
                  borderLeft: '2px solid var(--accent-cyan)',
                  marginBottom: 20,
                }}>
                  {/* Timeline Dot */}
                  <div style={{
                    position: 'absolute',
                    left: -6,
                    top: 4,
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: 'var(--accent-cyan)',
                    boxShadow: '0 0 8px var(--accent-cyan)',
                  }} />

                  {/* Header Row: Role & Company */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    flexWrap: 'wrap',
                    gap: 8,
                    marginBottom: 4,
                  }}>
                    <div>
                      <h3 style={{
                        fontSize: '1.02rem',
                        fontWeight: 800,
                        color: 'var(--text-primary)',
                        margin: 0,
                        lineHeight: 1.3,
                      }}>
                        {exp.role[lang]}
                      </h3>
                      <div style={{
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        color: 'var(--accent-primary)',
                        marginTop: 2,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                        flexWrap: 'wrap',
                      }}>
                        <span>{exp.company}</span>
                        {exp.companyJapanese && (
                          <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                            {exp.companyJapanese}
                          </span>
                        )}
                      </div>
                    </div>

                    <div style={{
                      fontSize: '0.8rem',
                      color: 'var(--accent-cyan)',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 700,
                      textAlign: 'right',
                    }}>
                      <span>🗓️ {exp.period}</span>
                      <div style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', fontWeight: 500, marginTop: 1 }}>
                        📍 {exp.location[lang]}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.87rem',
                    color: 'var(--text-secondary)',
                    marginTop: 6,
                    marginBottom: 8,
                    lineHeight: 1.6,
                    textAlign: 'justify',
                  }}>
                    {exp.description[lang]}
                  </p>

                  {/* Achievements List */}
                  <ul style={{
                    paddingLeft: 16,
                    fontSize: '0.84rem',
                    color: 'var(--text-secondary)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 5,
                    margin: 0,
                  }}>
                    {exp.achievements.map((ach, i) => (
                      <li key={i} style={{ lineHeight: 1.55 }}>
                        {ach[lang]}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* SECTION 3: FREELANCE & TYPICAL R&D PROJECTS / DỰ ÁN R&D TIÊU BIỂU */}
            <section style={{ marginBottom: 26 }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginBottom: 14,
                paddingBottom: 4,
                borderBottom: '1.5px solid var(--border-primary)',
              }}>
                <h2 style={{
                  fontSize: '0.95rem',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--accent-primary)',
                  fontFamily: 'var(--font-display)',
                  margin: 0,
                  whiteSpace: 'nowrap',
                }}>
                  {lang === 'vi' ? 'DỰ ÁN R&D & FREELANCE TIÊU BIỂU' : 'TYPICAL R&D & FREELANCE PROJECTS'}
                </h2>
                <div style={{ flex: 1, height: '1.5px', background: 'var(--border-primary)' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {featuredCvProjects.map(proj => (
                  <div key={proj.id} style={{
                    position: 'relative',
                    paddingLeft: 18,
                    borderLeft: '2px solid var(--border-accent)',
                  }}>
                    {/* Project Dot */}
                    <div style={{
                      position: 'absolute',
                      left: -5,
                      top: 4,
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: 'var(--accent-primary)',
                    }} />

                    {/* Title & Period */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'baseline',
                      flexWrap: 'wrap',
                      gap: 6,
                    }}>
                      <h3 style={{
                        fontSize: '0.95rem',
                        fontWeight: 800,
                        color: 'var(--text-primary)',
                        margin: 0,
                      }}>
                        {proj.title}
                      </h3>
                      <span style={{
                        fontSize: '0.78rem',
                        color: 'var(--accent-cyan)',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 700,
                      }}>
                        🗓️ {proj.period}
                      </span>
                    </div>

                    <p style={{
                      fontSize: '0.84rem',
                      color: 'var(--text-secondary)',
                      marginTop: 3,
                      marginBottom: 6,
                      lineHeight: 1.55,
                    }}>
                      {proj.description[lang]}
                    </p>

                    {/* Features list */}
                    <ul style={{
                      paddingLeft: 16,
                      fontSize: '0.82rem',
                      color: 'var(--text-secondary)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 3,
                      marginBottom: 8,
                    }}>
                      {proj.features.slice(0, 3).map((f, idx) => (
                        <li key={idx}>{f[lang]}</li>
                      ))}
                    </ul>

                    {/* Tech Badges */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                      {proj.techStack.map(tech => (
                        <span key={tech} style={{
                          fontSize: '0.7rem',
                          padding: '1px 6px',
                          borderRadius: 'var(--radius-sm)',
                          background: 'rgba(255, 85, 0, 0.08)',
                          border: '1px solid var(--border-accent)',
                          color: 'var(--accent-primary)',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 600,
                        }}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* SECTION 4: DUAL-COLUMN GRID (LEFT: EDUCATION & CERTIFICATIONS | RIGHT: SKILLS) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 24,
              alignItems: 'start',
            }}
            className="cv-bottom-grid"
            >
              {/* Left Column: EDUCATION & CERTIFICATIONS */}
              <div>
                {/* EDUCATION */}
                <section style={{ marginBottom: 20 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    marginBottom: 10,
                    paddingBottom: 4,
                    borderBottom: '1.5px solid var(--border-primary)',
                  }}>
                    <h2 style={{
                      fontSize: '0.9rem',
                      fontWeight: 900,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--accent-primary)',
                      fontFamily: 'var(--font-display)',
                      margin: 0,
                    }}>
                      {lang === 'vi' ? 'HỌC VẤN' : 'EDUCATION'}
                    </h2>
                  </div>

                  {education.map((edu, i) => (
                    <div key={i} style={{ marginBottom: 10 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                        <h3 style={{ fontSize: '0.92rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)' }}>
                          {edu.school[lang]}
                        </h3>
                        <span style={{ fontSize: '0.78rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                          {edu.period}
                        </span>
                      </div>
                      <div style={{ fontSize: '0.84rem', color: 'var(--accent-primary)', fontWeight: 700, marginTop: 2, marginBottom: 2 }}>
                        {edu.degree[lang]}
                      </div>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.55 }}>
                        {edu.description[lang]}
                      </p>
                    </div>
                  ))}
                </section>

                {/* CERTIFICATIONS & PROFESSIONAL HONORS */}
                <section>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    marginBottom: 10,
                    paddingBottom: 4,
                    borderBottom: '1.5px solid var(--border-primary)',
                  }}>
                    <h2 style={{
                      fontSize: '0.9rem',
                      fontWeight: 900,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--accent-primary)',
                      fontFamily: 'var(--font-display)',
                      margin: 0,
                    }}>
                      {lang === 'vi' ? 'CHỨNG CHỈ & CHUYÊN MÔN' : 'CERTIFICATIONS'}
                    </h2>
                  </div>

                  <ul style={{
                    paddingLeft: 16,
                    fontSize: '0.82rem',
                    color: 'var(--text-secondary)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 6,
                    margin: 0,
                  }}>
                    <li>
                      <strong style={{ color: 'var(--text-primary)' }}>
                        {lang === 'vi' ? 'Chứng chỉ Tiếng Anh B1 / TOEIC' : 'B1 / TOEIC English Certificate'}
                      </strong> — Đọc hiểu tài liệu Datasheet & giao tiếp kỹ thuật tốt.
                    </li>
                    <li>
                      <strong style={{ color: 'var(--text-primary)' }}>Altium Designer High-Speed PCB Layout</strong> — Chứng nhận đi dây đa lớp & kiểm soát trở kháng EMI/EMC.
                    </li>
                    <li>
                      <strong style={{ color: 'var(--text-primary)' }}>FreeRTOS & Embedded C/C++ System Architect</strong> — Thiết kế firmware chuẩn công nghiệp.
                    </li>
                  </ul>
                </section>
              </div>

              {/* Right Column: SKILLS & TECHNICAL STACK */}
              <div>
                <section>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    marginBottom: 10,
                    paddingBottom: 4,
                    borderBottom: '1.5px solid var(--border-primary)',
                  }}>
                    <h2 style={{
                      fontSize: '0.9rem',
                      fontWeight: 900,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--accent-primary)',
                      fontFamily: 'var(--font-display)',
                      margin: 0,
                    }}>
                      {lang === 'vi' ? 'KỸ NĂNG CÔNG NGHỆ' : 'SKILLS'}
                    </h2>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {techCategories.map(cat => (
                      <div key={cat.title.en}>
                        <div style={{
                          fontSize: '0.82rem',
                          fontWeight: 800,
                          color: 'var(--text-primary)',
                          marginBottom: 4,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 6,
                        }}>
                          <span>⚡ {cat.title[lang]}</span>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                          {cat.items.map(item => (
                            <span key={item} style={{
                              fontSize: '0.72rem',
                              padding: '2px 7px',
                              background: 'var(--accent-glow)',
                              borderRadius: 'var(--radius-sm)',
                              color: 'var(--accent-primary)',
                              fontFamily: 'var(--font-mono)',
                              border: '1px solid var(--border-accent)',
                              fontWeight: 600,
                            }}>
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Print-specific CSS styles */}
      <style>{`
        @media (max-width: 768px) {
          .cv-bottom-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media print {
          body * {
            visibility: hidden !important;
          }
          .cv-print-area, .cv-print-area * {
            visibility: visible !important;
          }
          .cv-print-area {
            position: absolute !important;
            left: 0 !important;
            top: 0 !important;
            width: 100% !important;
            background: #ffffff !important;
            color: #111827 !important;
            padding: 24px 32px !important;
            font-size: 11pt !important;
          }
          .cv-print-area h1, .cv-print-area h2, .cv-print-area h3, .cv-print-area h4 {
            color: #0f172a !important;
          }
          .cv-print-area p, .cv-print-area li, .cv-print-area span, .cv-print-area div {
            color: #334155 !important;
          }
          .cv-print-area strong {
            color: #0f172a !important;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>
    </motion.div>
  );
}
