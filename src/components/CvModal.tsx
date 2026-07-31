import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Mail, MapPin, Phone, CodeSquare, Globe } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { Language } from '@/data/portfolioData';
import { personalInfo, workExperiences, projects, techCategories, education, translations, getLangText } from '@/data/portfolioData';

interface CvModalProps {
  lang: Language;
  onClose: () => void;
  onToggleLang: () => void;
  onSelectLang?: (lang: Language) => void;
}

export function CvModal({ lang, onClose, onToggleLang, onSelectLang }: CvModalProps) {
  const t = translations.cv;
  const printRef = useRef<HTMLDivElement>(null);
  const [imgError, setImgError] = useState(false);
  const [isCompactMode, setIsCompactMode] = useState<boolean>(true);
  const [langMenuOpen, setLangMenuOpen] = useState<boolean>(false);

  const languages: { code: Language; flag: string; name: string }[] = [
    { code: 'vi', flag: '🇻🇳', name: 'Tiếng Việt' },
    { code: 'en', flag: '🇺🇸', name: 'English' },
    { code: 'ja', flag: '🇯🇵', name: '日本語' },
  ];


  const handlePrint = () => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#ff5500', '#ff2a00', '#00e5ff', '#ffb700'],
    });

    const printContent = printRef.current;
    if (!printContent) {
      window.print();
      return;
    }

    try {
      const printWindow = window.open('', '_blank');
      if (!printWindow) {
        window.print();
        return;
      }

      printWindow.document.write(`
        <!DOCTYPE html>
        <html lang="${lang}">
          <head>
            <meta charset="utf-8" />
            <title>CV_Nguyen_Viet_Hung_Senior_Embedded_Engineer</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
            <style>
              :root {
                --accent-primary: #ea580c;
                --accent-cyan: #0284c7;
                --accent-gold: #d97706;
                --text-primary: #0f172a;
                --text-secondary: #334155;
                --text-tertiary: #64748b;
                --bg-primary: #ffffff;
                --bg-glass: #f8fafc;
                --border-primary: #e2e8f0;
                --border-accent: #cbd5e1;
                --radius-full: 9999px;
                --radius-sm: 4px;
                --font-sans: 'Plus Jakarta Sans', sans-serif;
                --font-mono: 'JetBrains Mono', monospace;
                --font-display: 'Plus Jakarta Sans', sans-serif;
              }
              * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
                box-shadow: none !important;
                text-shadow: none !important;
                filter: none !important;
              }
              body {
                font-family: 'Plus Jakarta Sans', sans-serif;
                color: #1e293b;
                background: #ffffff;
                padding: 20px 28px;
                font-size: ${isCompactMode ? '8.8pt' : '9.5pt'};
                line-height: ${isCompactMode ? '1.45' : '1.55'};
                -webkit-print-color-adjust: exact;
                print-color-adjust: exact;
              }
              h1, h2, h3, h4, strong { color: #0f172a !important; }
              p, span, li, div { color: #334155; }
              .cv-print-area { width: 100% !important; background: #ffffff !important; }
              
              section {
                page-break-inside: auto !important;
                break-inside: auto !important;
                margin-bottom: ${isCompactMode ? '10px' : '14px'} !important;
              }
              .cv-experience-item {
                page-break-inside: auto !important;
                break-inside: auto !important;
                margin-bottom: ${isCompactMode ? '12px' : '16px'} !important;
                margin-left: 0 !important;
                padding-left: 10px !important;
                border-left: 2.5px solid #ea580c !important;
              }
              .cv-achievement-bullet {
                page-break-inside: avoid !important;
                break-inside: avoid !important;
                margin-bottom: ${isCompactMode ? '4px' : '6px'} !important;
              }
              .cv-project-card {
                page-break-inside: avoid !important;
                break-inside: avoid !important;
                margin-bottom: ${isCompactMode ? '8px' : '10px'} !important;
                padding-left: 10px !important;
                border-left: 2.5px solid #0284c7 !important;
              }
              .cv-skill-group {
                page-break-inside: avoid !important;
                break-inside: avoid !important;
                margin-bottom: ${isCompactMode ? '6px' : '8px'} !important;
              }
              .cv-timeline-dot, div[style*="left: -6px"], div[style*="left: -5px"] {
                display: none !important;
              }
              h2, h3, h4 {
                page-break-after: avoid !important;
                break-after: avoid !important;
              }

              @page {
                size: A4 portrait;
                margin: 0 !important;
              }
              @media print {
                html, body {
                  margin: 0 !important;
                  padding: ${isCompactMode ? '8mm 12mm' : '10mm 14mm'} !important;
                  background: #ffffff !important;
                }
              }
            </style>
          </head>
          <body>
            <div class="cv-print-area">
              ${printContent.innerHTML}
            </div>
            <script>
              setTimeout(() => {
                window.print();
                window.close();
              }, 400);
            </script>
          </body>
        </html>
      `);
      printWindow.document.close();
    } catch {
      window.print();
    }
  };

  const flagshipProjectIds = ['ecocare-ai', 'forklift-safety', 'smart-agri-lora', 'edge-ai-box', 'ecohotel-smart-hotel'];
  const featuredCvProjects = isCompactMode 
    ? projects.filter(p => flagshipProjectIds.includes(p.id))
    : projects;

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
            {(t.title as any)[lang] || t.title.en}
          </h2>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0, flexWrap: 'wrap' }}>
            {/* Language Dropdown Menu */}
            <div style={{ position: 'relative' }}>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 5,
                  padding: '6px 14px',
                  background: 'rgba(255, 140, 0, 0.15)',
                  color: '#ff8c00',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  fontFamily: 'var(--font-sans)',
                  border: '1px solid rgba(255, 140, 0, 0.4)',
                  borderRadius: 'var(--radius-full)',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                <span>🌐 {lang === 'vi' ? 'VI' : lang === 'ja' ? 'JA' : 'EN'} ▾</span>
              </motion.button>

              <AnimatePresence>
                {langMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    style={{
                      position: 'absolute',
                      top: '120%',
                      right: 0,
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-primary)',
                      borderRadius: 'var(--radius-md)',
                      boxShadow: '0 12px 36px rgba(0,0,0,0.6)',
                      padding: '6px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 4,
                      minWidth: 140,
                      zIndex: 110,
                      backdropFilter: 'blur(24px)',
                    }}
                  >
                    {languages.map(l => (
                      <button
                        key={l.code}
                        onClick={() => {
                          if (onSelectLang) onSelectLang(l.code);
                          else onToggleLang();
                          setLangMenuOpen(false);
                        }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 8,
                          padding: '8px 12px',
                          borderRadius: 'var(--radius-sm)',
                          border: 'none',
                          background: lang === l.code ? 'rgba(255, 85, 0, 0.15)' : 'transparent',
                          color: lang === l.code ? 'var(--accent-primary)' : 'var(--text-primary)',
                          fontSize: '0.82rem',
                          fontWeight: lang === l.code ? 700 : 500,
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'all 0.2s',
                          fontFamily: 'var(--font-sans)',
                        }}
                      >
                        <span style={{ fontSize: '0.95rem' }}>{l.flag}</span>
                        <span>{l.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            {/* Toggle Compact 2-Page CV Mode Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setIsCompactMode(!isCompactMode)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '6px 14px',
                background: isCompactMode ? 'rgba(2, 132, 199, 0.2)' : 'rgba(255, 255, 255, 0.08)',
                color: isCompactMode ? 'var(--accent-cyan)' : 'var(--text-tertiary)',
                fontSize: '0.78rem',
                fontWeight: 700,
                fontFamily: 'var(--font-sans)',
                border: `1px solid ${isCompactMode ? 'var(--accent-cyan)' : 'var(--border-accent)'}`,
                borderRadius: 'var(--radius-full)',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              <span>{isCompactMode 
                ? (lang === 'vi' ? '📄 CV 2 Trang' : lang === 'ja' ? '📄 2ページCV' : '📄 2-Page CV') 
                : (lang === 'vi' ? '📚 Bản Đầy Đủ' : lang === 'ja' ? '📚 フルバージョン' : '📚 Full Version')}</span>
            </motion.button>

            {/* Print Button */}
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
                fontSize: '0.78rem',
                fontWeight: 700,
                fontFamily: 'var(--font-sans)',
                border: 'none',
                borderRadius: 'var(--radius-full)',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                boxShadow: 'var(--shadow-glow)',
              }}
            >
              <Printer size={14} />
              <span>{lang === 'vi' ? 'In / Tải PDF CV' : lang === 'ja' ? '印刷 / PDF出力' : 'Print / Export PDF'}</span>
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

            {/* SECTION 1: EDUCATION / HỌC VẤN */}
            <section style={{ marginBottom: 26 }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginBottom: 12,
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
                  {lang === 'vi' ? 'HỌC VẤN' : lang === 'ja' ? '学歴' : 'EDUCATION'}
                </h2>
                <div style={{ flex: 1, height: '1.5px', background: 'var(--border-primary)' }} />
              </div>

              {education.map((edu, i) => (
                <div key={i} style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderLeft: '3px solid var(--accent-cyan)',
                  borderRadius: '8px',
                  padding: '12px 16px',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: 6 }}>
                    <h3 style={{ fontSize: '0.98rem', fontWeight: 800, margin: 0, color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
                      {edu.school[lang]}
                    </h3>
                    <span style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                      🗓️ {edu.period}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.86rem', color: 'var(--accent-primary)', fontWeight: 700, marginTop: 4, marginBottom: 4 }}>
                    🎓 {edu.degree[lang]}
                  </div>
                  <p style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>
                    {edu.description[lang]}
                  </p>
                </div>
              ))}
            </section>

            {/* SECTION 2: OBJECTIVE / MỤC TIÊU NGHỀ NGHIỆP (hidden in compact mode) */}
            {!isCompactMode && <section style={{ marginBottom: 24 }}>
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
                  {lang === 'vi' ? 'MỤC TIÊU NGHỀ NGHIỆP' : lang === 'ja' ? 'キャリア目標' : 'OBJECTIVE'}
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
            </section>}

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
                  {lang === 'vi' ? 'KINH NGHIỆM LÀM VIỆC' : lang === 'ja' ? '職務経歴' : 'WORK EXPERIENCE'}
                </h2>
                <div style={{ flex: 1, height: '1.5px', background: 'var(--border-primary)' }} />
              </div>

              {workExperiences.map(exp => (
                <div key={exp.id} className="cv-experience-item" style={{
                  position: 'relative',
                  paddingLeft: 22,
                  marginLeft: 10,
                  borderLeft: '2px solid var(--border-accent)',
                  marginBottom: 28,
                }}>
                  {/* Timeline Dot */}
                  <div className="cv-timeline-dot" style={{
                    position: 'absolute',
                    left: -6,
                    top: 6,
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: 'var(--accent-primary)',
                    boxShadow: 'none',
                  }} />

                  {/* Header Block: Clean 2-row layout */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 6,
                    marginBottom: 12,
                    paddingBottom: 10,
                    borderBottom: '1px dashed rgba(255, 255, 255, 0.1)',
                  }}>
                    {/* Row 1: Role Title + Period Badge */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: 8,
                    }}>
                      <h3 style={{
                        fontSize: '1.08rem',
                        fontWeight: 800,
                        color: 'var(--accent-primary)',
                        margin: 0,
                        lineHeight: 1.25,
                        fontFamily: 'var(--font-display)',
                      }}>
                        {exp.role[lang]}
                      </h3>

                      <span style={{
                        fontSize: '0.78rem',
                        color: 'var(--accent-cyan)',
                        background: 'rgba(0, 229, 255, 0.1)',
                        border: '1px solid rgba(0, 229, 255, 0.3)',
                        padding: '3px 10px',
                        borderRadius: 'var(--radius-full)',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 700,
                        whiteSpace: 'nowrap',
                      }}>
                        🗓️ {lang === 'vi' ? exp.period.replace('Present', 'Hiện tại') : lang === 'ja' ? exp.period.replace('Present', '現在').replace('Hiện tại', '現在') : exp.period.replace('Hiện tại', 'Present')}
                      </span>
                    </div>

                    {/* Row 2: Company Name + Location */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: 8,
                      fontSize: '0.88rem',
                    }}>
                      <div style={{
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 6,
                        flexWrap: 'wrap',
                      }}>
                        <span>{getLangText(exp.company, lang)}</span>
                        {exp.companyJapanese && (
                          <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                            {getLangText(exp.companyJapanese, lang)}
                          </span>
                        )}
                      </div>

                      <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                        📍 {exp.location[lang]}
                      </div>
                    </div>
                  </div>

                  {/* Description (hidden in compact mode to save space) */}
                  {!isCompactMode && (
                    <p style={{
                      fontSize: '0.87rem',
                      color: 'var(--text-secondary)',
                      marginBottom: 14,
                      lineHeight: 1.65,
                      textAlign: 'justify',
                    }}>
                      {exp.description[lang]}
                    </p>
                  )}

                  {/* Achievements Project Blueprint List */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: isCompactMode ? 6 : 12,
                    marginTop: isCompactMode ? 4 : 8,
                  }}>
                    {(isCompactMode ? exp.achievements.slice(0, 3) : exp.achievements).map((ach, i) => {
                      const text = (ach as any)[lang] || ach.en || ach.vi || '';
                      const colonIndex = text.indexOf(': ');
                      let title = '';
                      let content = text;
                      if (colonIndex > 0 && colonIndex < 120) {
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
                          className="cv-achievement-bullet"
                          style={{
                            position: 'relative',
                            paddingLeft: 18,
                            paddingBottom: i === exp.achievements.length - 1 ? 0 : 10,
                            borderBottom: i === exp.achievements.length - 1 ? 'none' : '1px dashed rgba(255, 255, 255, 0.08)',
                          }}
                        >
                          {/* Glowing Diamond Bullet Marker */}
                          <div style={{
                            position: 'absolute',
                            left: 0,
                            top: 7,
                            width: 7,
                            height: 7,
                            borderRadius: '1.5px',
                            transform: 'rotate(45deg)',
                            background: i % 2 === 0 ? 'var(--accent-cyan)' : 'var(--accent-primary)',
                            boxShadow: i % 2 === 0 ? '0 0 6px var(--accent-cyan)' : '0 0 6px var(--accent-primary)',
                          }} />

                          {title ? (
                            <div>
                              <span style={{
                                fontSize: '0.86rem',
                                fontWeight: 800,
                                color: i % 2 === 0 ? 'var(--accent-cyan)' : 'var(--accent-primary)',
                                fontFamily: 'var(--font-display)',
                                display: 'inline-block',
                                marginRight: 6,
                              }}>
                                {renderTextWithLinks(title)}
                              </span>
                              <span style={{
                                fontSize: '0.83rem',
                                color: 'var(--text-secondary)',
                                lineHeight: 1.6,
                              }}>
                                — {renderTextWithLinks(content)}
                              </span>
                            </div>
                          ) : (
                            <div style={{
                              fontSize: '0.83rem',
                              color: 'var(--text-secondary)',
                              lineHeight: 1.6,
                            }}>
                              {text}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
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
                  {lang === 'vi' ? 'DỰ ÁN R&D & FREELANCE TIÊU BIỂU' : lang === 'ja' ? '主要R&D・フリーランスプロジェクト' : 'TYPICAL R&D & FREELANCE PROJECTS'}
                </h2>
                <div style={{ flex: 1, height: '1.5px', background: 'var(--border-primary)' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {featuredCvProjects.map(proj => (
                  <div key={proj.id} className="cv-project-card" style={{
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
                        {getLangText(proj.title, lang)}
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

            {/* SECTION 4: SKILLS & TECHNICAL STACK */}
            <section style={{ marginBottom: 20 }}>
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
                  {lang === 'vi' ? 'KỸ NĂNG & CÔNG NGHỆ CHUYÊN MÔN' : lang === 'ja' ? '専門スキル & 技術スタック' : 'SKILLS & TECHNICAL STACK'}
                </h2>
                <div style={{ flex: 1, height: '1.5px', background: 'var(--border-primary)' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {techCategories.map(cat => (
                      <div key={cat.title.en} className="cv-skill-group">
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
