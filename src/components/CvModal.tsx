import { useRef } from 'react';
import { motion } from 'framer-motion';
import { X, Printer, Mail, MapPin, Phone, CodeSquare, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { Language } from '@/data/portfolioData';
import { personalInfo, workExperiences, techCategories, education, translations } from '@/data/portfolioData';

interface CvModalProps {
  lang: Language;
  onClose: () => void;
}

export function CvModal({ lang, onClose }: CvModalProps) {
  const t = translations.cv;
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#ff5500', '#ff2a00', '#00e5ff', '#ffb700'],
    });

    setTimeout(() => {
      window.print();
    }, 600);
  };

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
          maxWidth: 860,
          width: '96%',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: 'calc(90vh - var(--header-height))',
        }}
      >
        {/* Sticky Header Bar with Compact Print & Close Button */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 16px',
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
            fontSize: '0.95rem',
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

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
            {/* Compact Print Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrint}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '6px 14px',
                background: 'var(--gradient-hero)',
                color: '#fff',
                fontSize: '0.8rem',
                fontWeight: 700,
                fontFamily: 'var(--font-sans)',
                border: 'none',
                borderRadius: 'var(--radius-full)',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                width: 'auto',
                flexShrink: 0,
                boxShadow: 'var(--shadow-glow)',
              }}
            >
              <Printer size={14} />
              <span>{lang === 'vi' ? 'In CV' : 'Print CV'}</span>
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

        {/* Scrollable CV Content */}
        <div style={{
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
          flex: 1,
        }}
        className="cv-modal-scroll-area"
        >
          <div ref={printRef} style={{
            padding: '24px 24px',
            background: 'var(--bg-primary)',
            color: 'var(--text-primary)',
            fontFamily: 'var(--font-sans)',
            lineHeight: 1.65,
          }}
          className="cv-print-area"
          >
            {/* CV Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: 24,
              paddingBottom: 18,
              borderBottom: '2px solid var(--accent-primary)',
              flexWrap: 'wrap',
              gap: 14,
            }}>
              <div>
                <h1 style={{
                  fontSize: '1.9rem',
                  fontWeight: 900,
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '-0.02em',
                  margin: 0,
                  whiteSpace: 'nowrap',
                }}>
                  {personalInfo.name}
                </h1>
                <p style={{
                  fontSize: '1.05rem',
                  color: 'var(--accent-primary)',
                  fontWeight: 800,
                  marginTop: 4,
                  marginBottom: 0,
                  fontFamily: 'var(--font-mono)',
                }}>
                  {personalInfo.title[lang]}
                </p>
              </div>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
                fontSize: '0.84rem',
                color: 'var(--text-secondary)',
                textAlign: 'left',
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Mail size={14} style={{ color: 'var(--accent-primary)' }} /> {personalInfo.email}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Phone size={14} style={{ color: 'var(--accent-cyan)' }} /> {personalInfo.phone}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <MapPin size={14} style={{ color: 'var(--accent-gold)' }} /> {personalInfo.location[lang]}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <CodeSquare size={14} style={{ color: 'var(--accent-primary)' }} /> {personalInfo.github.replace('https://', '')}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Globe size={14} style={{ color: 'var(--accent-cyan)' }} /> {personalInfo.facebook.replace('https://www.', '')}
                </span>
              </div>
            </div>

            {/* 1. Education (Moved to Top) */}
            <section style={{ marginBottom: 24 }}>
              <h2 style={{
                fontSize: '0.92rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--accent-primary)',
                marginBottom: 10,
                paddingBottom: 6,
                borderBottom: '1px solid var(--border-primary)',
                fontFamily: 'var(--font-display)',
              }}>
                {lang === 'vi' ? 'HỌC VẤN' : 'EDUCATION'}
              </h2>
              {education.map((edu, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 6 }}>
                    <h3 style={{ fontSize: '0.98rem', fontWeight: 800, margin: 0 }}>{edu.school[lang]}</h3>
                    <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{edu.period}</span>
                  </div>
                  <p style={{ fontSize: '0.86rem', color: 'var(--accent-primary)', fontWeight: 700, marginTop: 3, marginBottom: 3 }}>{edu.degree[lang]}</p>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', marginTop: 2, margin: 0 }}>{edu.description[lang]}</p>
                </div>
              ))}
            </section>

            {/* 2. Summary & R&D Capabilities */}
            <section style={{ marginBottom: 24 }}>
              <h2 style={{
                fontSize: '0.92rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--accent-primary)',
                marginBottom: 10,
                paddingBottom: 6,
                borderBottom: '1px solid var(--border-primary)',
                fontFamily: 'var(--font-display)',
              }}>
                {lang === 'vi' ? 'GIỚI THIỆU & NĂNG LỰC R&D' : 'SUMMARY & R&D CAPABILITIES'}
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                {personalInfo.bio[lang]}
              </p>
            </section>

            {/* 3. Work Experience (Clean Block Responsive Layout) */}
            <section style={{ marginBottom: 24 }}>
              <h2 style={{
                fontSize: '0.92rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--accent-primary)',
                marginBottom: 12,
                paddingBottom: 6,
                borderBottom: '1px solid var(--border-primary)',
                fontFamily: 'var(--font-display)',
              }}>
                {lang === 'vi' ? 'KINH NGHIỆM LÀM VIỆC' : 'WORK EXPERIENCE'}
              </h2>
              {workExperiences.map(exp => (
                <div key={exp.id} style={{ marginBottom: 22 }}>
                  {/* Clean Block 1: Company Title & Japanese Name */}
                  <div style={{
                    fontSize: '1rem',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    marginBottom: 4,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    flexWrap: 'wrap',
                  }}>
                    <span style={{ whiteSpace: 'nowrap' }}>{exp.company}</span>
                    {exp.companyJapanese && (
                      <span style={{
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: 'var(--text-secondary)',
                        whiteSpace: 'nowrap',
                      }}>
                        {exp.companyJapanese}
                      </span>
                    )}
                  </div>

                  {/* Clean Block 2: Role Title */}
                  <div style={{
                    fontSize: '0.92rem',
                    fontWeight: 700,
                    color: 'var(--accent-primary)',
                    marginBottom: 6,
                    lineHeight: 1.45,
                  }}>
                    {exp.role[lang]}
                  </div>

                  {/* Clean Block 3: Period & Location */}
                  <div style={{
                    fontSize: '0.8rem',
                    color: 'var(--accent-cyan)',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600,
                    marginBottom: 8,
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 8,
                    alignItems: 'center',
                  }}>
                    <span>🗓️ {exp.period}</span>
                    <span style={{ color: 'var(--border-accent)' }}>•</span>
                    <span>📍 {exp.location[lang]}</span>
                  </div>

                  {/* Description & Achievements */}
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: 4, marginBottom: 8, lineHeight: 1.6 }}>
                    {exp.description[lang]}
                  </p>
                  <ul style={{ paddingLeft: 16, fontSize: '0.86rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: 5 }}>
                    {exp.achievements.map((ach, i) => (
                      <li key={i} style={{ lineHeight: 1.55 }}>{ach[lang]}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* 4. Technical Stack */}
            <section style={{ marginBottom: 24 }}>
              <h2 style={{
                fontSize: '0.92rem',
                fontWeight: 800,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--accent-primary)',
                marginBottom: 10,
                paddingBottom: 6,
                borderBottom: '1px solid var(--border-primary)',
                fontFamily: 'var(--font-display)',
              }}>
                {lang === 'vi' ? 'KỸ NĂNG & CÔNG NGHỆ (TECHNICAL STACK)' : 'TECHNICAL STACK'}
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 14 }}>
                {techCategories.map((cat) => (
                  <div key={cat.title.en}>
                    <h4 style={{ fontSize: '0.86rem', fontWeight: 700, marginBottom: 6, color: 'var(--text-primary)' }}>
                      ⚡ {cat.title[lang]}
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                      {cat.items.map((item) => (
                        <span key={item} style={{
                          fontSize: '0.74rem',
                          padding: '2px 8px',
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
      </motion.div>

      {/* Print-specific styles */}
      <style>{`
        @media print {
          body * { visibility: hidden; }
          .cv-print-area, .cv-print-area * {
            visibility: visible !important;
          }
          .cv-print-area {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            background: white !important;
            color: #0f101d !important;
            padding: 24px !important;
          }
          .cv-print-area h1, .cv-print-area h2, .cv-print-area h3, .cv-print-area h4 {
            color: #0f101d !important;
          }
          .cv-print-area p, .cv-print-area li, .cv-print-area span {
            color: #333 !important;
          }
          .no-print { display: none !important; }
        }
      `}</style>
    </motion.div>
  );
}
