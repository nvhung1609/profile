import { motion } from 'framer-motion';
import {
  FileText, MessageCircle, Code, Globe, Send, ExternalLink,
  BookOpen, Sparkles, Target, Zap
} from 'lucide-react';
import type { Language } from '@/data/portfolioData';
import { personalInfo, translations } from '@/data/portfolioData';

interface HeroProps {
  lang: Language;
  onOpenCv: () => void;
}

export function Hero({ lang, onOpenCv }: HeroProps) {
  const t = translations.hero;

  const socialLinks = [
    { icon: Code, href: personalInfo.github, label: 'GitHub' },
    { icon: Globe, href: personalInfo.facebook, label: 'Facebook' },
    { icon: Send, href: personalInfo.zalo, label: 'Zalo' },
    { icon: ExternalLink, href: personalInfo.website, label: 'Website' },
  ];

  return (
    <section id="home" className="section" style={{ paddingTop: 'calc(var(--header-height) + 40px)', paddingBottom: 60 }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: 40,
          alignItems: 'center',
        }}
        className="hero-grid"
        >
          {/* Left - Hero Text & Facts Panel */}
          <div className="hero-text-col">
            {/* Cyber Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ marginBottom: 16 }}
            >
              <div className="hero-badge" style={{ flexWrap: 'wrap', textAlign: 'center', maxWidth: '100%' }}>
                <span style={{ color: 'var(--accent-primary)', fontSize: '0.8rem' }}>⚡</span>
                <span>{t.badge[lang]}</span>
              </div>
            </motion.div>

            {/* Main Greeting & Name Block (Unbroken Name) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ marginBottom: 16 }}
            >
              <span style={{
                display: 'block',
                fontSize: 'clamp(1.25rem, 3.2vw, 1.8rem)',
                fontWeight: 700,
                color: 'var(--text-secondary)',
                fontFamily: 'var(--font-display)',
                marginBottom: 4,
              }}>
                {t.greeting[lang]}
              </span>

              <h1 style={{
                fontSize: 'clamp(2.1rem, 5.5vw, 4.2rem)',
                fontWeight: 900,
                fontFamily: 'var(--font-display)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                margin: 0,
                whiteSpace: 'nowrap',
              }}
              className="gradient-text hero-name-title"
              >
                {personalInfo.name}
              </h1>
            </motion.div>

            {/* Role Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                fontSize: 'clamp(0.95rem, 2.2vw, 1.3rem)',
                fontWeight: 700,
                color: 'var(--text-secondary)',
                marginBottom: 28,
                fontFamily: 'var(--font-mono)',
              }}
            >
              {t.rolePrefix[lang]}{' '}
              <span style={{ color: 'var(--accent-primary)', textDecoration: 'underline var(--border-accent)' }}>
                {t.roleName[lang]}
              </span>
            </motion.p>

            {/* Cyber Facts HUD Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hud-card"
              style={{
                padding: 24,
                marginBottom: 32,
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
                textAlign: 'left',
              }}
            >
              <div className="hud-corner-tl" />
              <div className="hud-corner-tr" />
              <div className="hud-corner-bl" />
              <div className="hud-corner-br" />

              {/* Fact Item 1 */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 'var(--radius-sm)',
                  background: 'var(--accent-glow)', border: '1px solid var(--border-accent)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--accent-primary)', flexShrink: 0, marginTop: 2,
                }}>
                  <BookOpen size={16} />
                </div>
                <div style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                  <strong style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)' }}>{t.backgroundLabel[lang]}</strong>{' '}
                  <span style={{ color: 'var(--text-primary)' }}>{personalInfo.educationBg[lang]}</span>
                </div>
              </div>

              {/* Fact Item 2 */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 'var(--radius-sm)',
                  background: 'rgba(0, 229, 255, 0.12)', border: '1px solid rgba(0, 229, 255, 0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--accent-cyan)', flexShrink: 0, marginTop: 2,
                }}>
                  <Sparkles size={16} />
                </div>
                <div style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                  <strong style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>{t.interestsLabel[lang]}</strong>{' '}
                  <span style={{ color: 'var(--text-secondary)' }}>{personalInfo.interests[lang]}</span>
                </div>
              </div>

              {/* Fact Item 3 */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 'var(--radius-sm)',
                  background: 'rgba(255, 183, 0, 0.12)', border: '1px solid rgba(255, 183, 0, 0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--accent-gold)', flexShrink: 0, marginTop: 2,
                }}>
                  <Target size={16} />
                </div>
                <div style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                  <strong style={{ color: 'var(--accent-gold)', fontFamily: 'var(--font-mono)' }}>{t.goalLabel[lang]}</strong>{' '}
                  <span style={{ color: 'var(--text-secondary)' }}>{personalInfo.goal[lang]}</span>
                </div>
              </div>

              {/* Fact Item 4 */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 'var(--radius-sm)',
                  background: 'var(--accent-glow)', border: '1px solid var(--border-accent)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--accent-primary)', flexShrink: 0, marginTop: 2,
                }}>
                  <Zap size={16} />
                </div>
                <div style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
                  <strong style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)' }}>{t.expertiseLabel[lang]}</strong>{' '}
                  <span style={{ color: 'var(--text-primary)' }}>{personalInfo.expertise[lang]}</span>
                </div>
              </div>
            </motion.div>

            {/* Social Buttons & Action CTAs (Centered on Mobile) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                flexWrap: 'wrap',
              }}
              className="hero-social-action-row"
            >
              {/* Quick Social Icon Row */}
              <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
                {socialLinks.map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--bg-glass)',
                      border: '1px solid var(--border-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-primary)',
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                    }}
                    aria-label={s.label}
                  >
                    <s.icon size={18} />
                  </motion.a>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
                <button
                  className="btn-primary"
                  onClick={onOpenCv}
                >
                  <FileText size={18} />
                  {t.downloadCv[lang]}
                </button>

                <button
                  className="btn-secondary"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <MessageCircle size={18} />
                  {t.contactMe[lang]}
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right - Sci-Fi Cyber Orbit Visual Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
          >
            <div className="hero-visual-frame">
              {/* Outer dashed orange orbit */}
              <div className="hero-orbit-outer" />
              {/* Inner solid cyan orbit */}
              <div className="hero-orbit-inner" />

              {/* Image Box */}
              <div className="hero-img-box">
                {/* Fallback MCU Cyber graphic cleanly formatted */}
                <div style={{
                  position: 'absolute', inset: 0,
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  background: 'linear-gradient(135deg, #0e0e1a 0%, #1a1a2e 100%)',
                  padding: '16px 12px', textAlign: 'center', overflow: 'hidden',
                }}>
                  <div style={{
                    width: 'clamp(64px, 16vw, 100px)',
                    height: 'clamp(64px, 16vw, 100px)',
                    borderRadius: '50%',
                    background: 'var(--gradient-hero)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 900, color: '#fff',
                    boxShadow: 'var(--shadow-glow)', marginBottom: 10, flexShrink: 0,
                  }}>
                    VH
                  </div>

                  <h3 style={{
                    fontSize: 'clamp(0.95rem, 2.8vw, 1.25rem)',
                    fontWeight: 800,
                    fontFamily: 'var(--font-display)',
                    color: '#fff',
                    lineHeight: 1.2,
                    margin: 0,
                    whiteSpace: 'nowrap',
                  }}>
                    NGUYỄN VIỆT HƯNG
                  </h3>

                  <p style={{
                    color: 'var(--accent-primary)',
                    fontWeight: 700,
                    fontSize: 'clamp(0.72rem, 2vw, 0.85rem)',
                    marginTop: 3,
                    fontFamily: 'var(--font-mono)',
                    lineHeight: 1.2,
                  }}>
                    SENIOR EMBEDDED ENGINEER
                  </p>

                  <div style={{
                    marginTop: 10, display: 'flex', gap: 4, flexWrap: 'wrap', justifyContent: 'center',
                  }}>
                    {['STM32 (ARM)', 'ESP (SoC)', 'CH32 (RISC-V)', 'EC800M 4G', 'FreeRTOS', 'SBC/Linux'].map(tag => (
                      <span key={tag} className="tech-tag" style={{ fontSize: '0.68rem', padding: '2px 8px' }}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
            text-align: center !important;
          }
          .hero-badge {
            margin: 0 auto !important;
          }
          .hero-text-col {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }
          .hero-social-action-row {
            justify-content: center !important;
            width: 100% !important;
          }
        }
        @media (max-width: 480px) {
          .hero-name-title {
            font-size: clamp(1.7rem, 7.5vw, 2.5rem) !important;
          }
        }
      `}</style>
    </section>
  );
}
