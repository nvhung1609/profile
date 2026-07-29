import { motion } from 'framer-motion';
import {
  Cpu, GraduationCap, Target, Zap, Rocket,
  Download, MessageCircle, CodeSquare, Globe, MessageSquare, ExternalLink
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
    { icon: CodeSquare, label: 'GitHub', href: personalInfo.github, color: '#ff5500' },
    { icon: Globe, label: 'Facebook', href: personalInfo.facebook, color: '#1877f2' },
    { icon: MessageSquare, label: 'Zalo', href: personalInfo.zalo, color: '#0068ff' },
    { icon: ExternalLink, label: 'LinkedIn', href: personalInfo.linkedin, color: '#0a66c2' },
  ];

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 'calc(var(--header-height) + 20px)',
        paddingBottom: '60px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Cyber Orbs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: '-5%', left: '-5%',
          width: '550px', height: '550px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 85, 0, 0.25) 0%, transparent 70%)',
          filter: 'blur(90px)',
        }} />
        <div style={{
          position: 'absolute', bottom: '-5%', right: '-5%',
          width: '500px', height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 229, 255, 0.2) 0%, transparent 70%)',
          filter: 'blur(90px)',
        }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.15fr 0.85fr',
          gap: 48,
          alignItems: 'center',
        }}
        className="hero-grid"
        >
          {/* Left - Hero Copy & Facts Panel */}
          <div>
            {/* HUD Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="hero-badge" style={{ flexWrap: 'wrap', textAlign: 'center', maxWidth: '100%' }}>
                <span style={{ color: 'var(--accent-primary)', fontSize: '0.8rem' }}>⚡</span>
                <span>{t.badge[lang]}</span>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ marginTop: 16 }}
            >
              <h1 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
                fontWeight: 900,
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}>
                {t.greeting[lang]} <span className="gradient-text">{personalInfo.name}</span>
              </h1>
              <h3 style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                fontWeight: 700,
                color: 'var(--text-secondary)',
                marginTop: 8,
                letterSpacing: '0.02em',
              }}>
                {t.rolePrefix[lang]} <strong style={{ color: 'var(--accent-primary)', textTransform: 'uppercase' }}>{t.roleName[lang]}</strong>
              </h3>
            </motion.div>

            {/* Hero Facts Panel Matching Reference Site */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hud-card"
              style={{
                marginTop: 24,
                padding: 24,
                display: 'flex',
                flexDirection: 'column',
                gap: 14,
              }}
            >
              <div className="hud-corner-tl" />
              <div className="hud-corner-tr" />
              <div className="hud-corner-bl" />
              <div className="hud-corner-br" />

              {/* Fact 1: Background */}
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 'var(--radius-sm)',
                  background: 'var(--accent-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--accent-primary)', flexShrink: 0, marginTop: 2,
                }}>
                  <GraduationCap size={17} />
                </div>
                <div style={{ fontSize: '0.92rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                  <span style={{ fontWeight: 700, color: 'var(--accent-primary)' }}>{t.backgroundLabel[lang]}</span>{' '}
                  {personalInfo.educationBg[lang]}
                </div>
              </div>

              {/* Fact 2: Focus */}
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 'var(--radius-sm)',
                  background: 'rgba(0, 229, 255, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--accent-cyan)', flexShrink: 0, marginTop: 2,
                }}>
                  <Cpu size={17} />
                </div>
                <div style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {personalInfo.bio[lang]}
                </div>
              </div>

              {/* Fact 3: Interests */}
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 'var(--radius-sm)',
                  background: 'var(--accent-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--accent-primary)', flexShrink: 0, marginTop: 2,
                }}>
                  <Rocket size={17} />
                </div>
                <div style={{ fontSize: '0.92rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                  <span style={{ fontWeight: 700, color: 'var(--accent-primary)' }}>{t.interestsLabel[lang]}</span>{' '}
                  {personalInfo.interests[lang]}
                </div>
              </div>

              {/* Fact 4: Goal */}
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 'var(--radius-sm)',
                  background: 'rgba(0, 229, 255, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--accent-cyan)', flexShrink: 0, marginTop: 2,
                }}>
                  <Target size={17} />
                </div>
                <div style={{ fontSize: '0.92rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                  <span style={{ fontWeight: 700, color: 'var(--accent-cyan)' }}>{t.goalLabel[lang]}</span>{' '}
                  {personalInfo.goal[lang]}
                </div>
              </div>

              {/* Fact 5: Expertise */}
              <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 'var(--radius-sm)',
                  background: 'var(--accent-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--accent-primary)', flexShrink: 0, marginTop: 2,
                }}>
                  <Zap size={17} />
                </div>
                <div style={{ fontSize: '0.92rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                  <span style={{ fontWeight: 700, color: 'var(--accent-primary)' }}>{t.expertiseLabel[lang]}</span>{' '}
                  {personalInfo.expertise[lang]}
                </div>
              </div>
            </motion.div>

            {/* Social Icons & Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{
                marginTop: 28,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: 20,
              }}
            >
              {/* Social Icons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                {socialLinks.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.9 }}
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
                    title={s.label}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = s.color;
                      e.currentTarget.style.boxShadow = `0 0 15px ${s.color}60`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'var(--border-primary)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <s.icon size={20} />
                  </motion.a>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: 12 }}>
                <button className="btn-primary" onClick={onOpenCv}>
                  <Download size={18} />
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
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div className="hero-visual-frame">
              {/* Outer dashed orange orbit */}
              <div className="hero-orbit-outer" />
              {/* Inner solid cyan orbit */}
              <div className="hero-orbit-inner" />

              {/* Image Box */}
              <div className="hero-img-box">
                {/* Fallback MCU Cyber graphic if no image */}
                <div style={{
                  position: 'absolute', inset: 0,
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  background: 'linear-gradient(135deg, #0e0e1a 0%, #1a1a2e 100%)',
                  padding: 24, textAlign: 'center',
                }}>
                  <div style={{
                    width: 110, height: 110, borderRadius: '50%',
                    background: 'var(--gradient-hero)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '2.8rem', fontWeight: 900, color: '#fff',
                    boxShadow: 'var(--shadow-glow)', marginBottom: 16,
                  }}>
                    VH
                  </div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, fontFamily: 'var(--font-display)', color: '#fff' }}>
                    NGUYỄN VIỆT HƯNG
                  </h3>
                  <p style={{ color: 'var(--accent-primary)', fontWeight: 700, fontSize: '0.88rem', marginTop: 4, fontFamily: 'var(--font-mono)' }}>
                    SENIOR EMBEDDED ENGINEER
                  </p>
                  <div style={{
                    marginTop: 14, display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'center',
                  }}>
                    {['STM32', 'ESP32-S3', 'FreeRTOS', 'Altium 4L', 'CAN Bus'].map(tag => (
                      <span key={tag} className="tech-tag" style={{ fontSize: '0.7rem' }}>{tag}</span>
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
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
