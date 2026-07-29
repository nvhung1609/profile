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
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="modal-content"
        onClick={e => e.stopPropagation()}
        style={{ maxWidth: 840, maxHeight: '90vh' }}
      >
        {/* Modal Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 28px',
          borderBottom: '1px solid var(--border-primary)',
          position: 'sticky',
          top: 0,
          background: 'var(--bg-secondary)',
          zIndex: 10,
          borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0',
        }}>
          <h2 style={{
            fontSize: '1.15rem',
            fontWeight: 800,
            fontFamily: 'var(--font-display)',
          }}>
            {t.title[lang]}
          </h2>
          <div style={{ display: 'flex', gap: 10 }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrint}
              className="btn-primary"
              style={{ padding: '10px 22px', fontSize: '0.85rem' }}
            >
              <Printer size={16} />
              {t.print[lang]}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              style={{
                width: 36,
                height: 36,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--bg-glass)',
                border: '1px solid var(--border-primary)',
                borderRadius: '50%',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
              }}
            >
              <X size={16} />
            </motion.button>
          </div>
        </div>

        {/* CV Content — printable */}
        <div ref={printRef} style={{
          padding: 40,
          background: 'var(--bg-primary)',
          color: 'var(--text-primary)',
          fontFamily: 'var(--font-sans)',
          lineHeight: 1.65,
        }}
        className="cv-print-area"
        >
          {/* Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: 32,
            paddingBottom: 24,
            borderBottom: '2px solid var(--accent-primary)',
            flexWrap: 'wrap',
            gap: 20,
          }}>
            <div>
              <h1 style={{
                fontSize: '2.2rem',
                fontWeight: 900,
                fontFamily: 'var(--font-display)',
                letterSpacing: '-0.02em',
              }}>
                {personalInfo.name}
              </h1>
              <p style={{
                fontSize: '1.15rem',
                color: 'var(--accent-primary)',
                fontWeight: 800,
                marginTop: 4,
                fontFamily: 'var(--font-mono)',
              }}>
                {personalInfo.title[lang]}
              </p>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
              fontSize: '0.88rem',
              color: 'var(--text-secondary)',
              textAlign: 'right',
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'flex-end' }}>
                <Mail size={14} /> {personalInfo.email}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'flex-end' }}>
                <Phone size={14} /> {personalInfo.phone}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'flex-end' }}>
                <MapPin size={14} /> {personalInfo.location[lang]}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'flex-end' }}>
                <CodeSquare size={14} /> {personalInfo.github.replace('https://', '')}
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'flex-end' }}>
                <Globe size={14} /> {personalInfo.facebook.replace('https://www.', '')}
              </span>
            </div>
          </div>

          {/* Summary */}
          <section style={{ marginBottom: 28 }}>
            <h2 style={{
              fontSize: '1rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--accent-primary)',
              marginBottom: 10,
              paddingBottom: 6,
              borderBottom: '1px solid var(--border-primary)',
            }}>
              {lang === 'vi' ? 'GIỚI THIỆU & NĂNG LỰC R&D' : 'SUMMARY & R&D CAPABILITIES'}
            </h2>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              {personalInfo.bio[lang]}
            </p>
          </section>

          {/* Work Experience */}
          <section style={{ marginBottom: 28 }}>
            <h2 style={{
              fontSize: '1rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--accent-primary)',
              marginBottom: 10,
              paddingBottom: 6,
              borderBottom: '1px solid var(--border-primary)',
            }}>
              {lang === 'vi' ? 'KINH NGHIỆM LÀM VIỆC' : 'WORK EXPERIENCE'}
            </h2>
            {workExperiences.map(exp => (
              <div key={exp.id} style={{ marginBottom: 20 }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  flexWrap: 'wrap',
                }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 800 }}>
                    {exp.company} — <span style={{ fontWeight: 600, color: 'var(--accent-primary)' }}>{exp.role[lang]}</span>
                  </h3>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>
                    {exp.period} | {exp.location[lang]}
                  </span>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: 4, marginBottom: 8 }}>
                  {exp.description[lang]}
                </p>
                <ul style={{ paddingLeft: 20, fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                  {exp.achievements.map((ach, i) => (
                    <li key={i} style={{ marginBottom: 4 }}>{ach[lang]}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Technical Stack */}
          <section style={{ marginBottom: 28 }}>
            <h2 style={{
              fontSize: '1rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--accent-primary)',
              marginBottom: 10,
              paddingBottom: 6,
              borderBottom: '1px solid var(--border-primary)',
            }}>
              {lang === 'vi' ? 'KỸ NĂNG & CÔNG NGHỆ (TECHNICAL STACK)' : 'TECHNICAL STACK'}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {techCategories.map((cat) => (
                <div key={cat.title.en}>
                  <h4 style={{ fontSize: '0.88rem', fontWeight: 700, marginBottom: 6, color: 'var(--text-primary)' }}>
                    • {cat.title[lang]}
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                    {cat.items.map((item) => (
                      <span key={item} style={{
                        fontSize: '0.75rem',
                        padding: '2px 8px',
                        background: 'var(--accent-glow)',
                        borderRadius: 'var(--radius-sm)',
                        color: 'var(--accent-primary)',
                        fontFamily: 'var(--font-mono)',
                        border: '1px solid var(--border-accent)',
                      }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 style={{
              fontSize: '1rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--accent-primary)',
              marginBottom: 10,
              paddingBottom: 6,
              borderBottom: '1px solid var(--border-primary)',
            }}>
              {lang === 'vi' ? 'HỌC VẤN' : 'EDUCATION'}
            </h2>
            {education.map((edu, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 800 }}>{edu.school[lang]}</h3>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>{edu.period}</span>
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--accent-primary)', fontWeight: 700 }}>{edu.degree[lang]}</p>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: 4 }}>{edu.description[lang]}</p>
              </div>
            ))}
          </section>
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
