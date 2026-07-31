import { motion } from 'framer-motion';
import { Cpu, Network, Wrench, Code2, Layers, Cloud, Sparkles } from 'lucide-react';
import type { Language } from '@/data/portfolioData';
import { techCategories, translations } from '@/data/portfolioData';

interface SkillsProps {
  lang: Language;
}

const categoryThemes = [
  {
    icon: Cpu,
    color: '#ff5500',
    bg: 'rgba(255, 85, 0, 0.1)',
    border: 'rgba(255, 85, 0, 0.35)',
    glow: '0 0 20px rgba(255, 85, 0, 0.2)',
    tag: 'HARDWARE & SYSTEM',
  },
  {
    icon: Network,
    color: '#00e5ff',
    bg: 'rgba(0, 229, 255, 0.1)',
    border: 'rgba(0, 229, 255, 0.35)',
    glow: '0 0 20px rgba(0, 229, 255, 0.2)',
    tag: 'PROTOCOLS & WIRELESS',
  },
  {
    icon: Wrench,
    color: '#ffb700',
    bg: 'rgba(255, 183, 0, 0.1)',
    border: 'rgba(255, 183, 0, 0.35)',
    glow: '0 0 20px rgba(255, 183, 0, 0.2)',
    tag: 'CAD & LAB TOOLS',
  },
  {
    icon: Code2,
    color: '#a855f7',
    bg: 'rgba(168, 85, 247, 0.1)',
    border: 'rgba(168, 85, 247, 0.35)',
    glow: '0 0 20px rgba(168, 85, 247, 0.2)',
    tag: 'SOFTWARE & RTOS',
  },
  {
    icon: Layers,
    color: '#10b981',
    bg: 'rgba(16, 185, 129, 0.1)',
    border: 'rgba(16, 185, 129, 0.35)',
    glow: '0 0 20px rgba(16, 185, 129, 0.2)',
    tag: 'PCB LAYOUT & EMI',
  },
  {
    icon: Cloud,
    color: '#ec4899',
    bg: 'rgba(236, 72, 153, 0.1)',
    border: 'rgba(236, 72, 153, 0.35)',
    glow: '0 0 20px rgba(236, 72, 153, 0.2)',
    tag: 'EDGE AI & CLOUD',
  },
];

export function Skills({ lang }: SkillsProps) {
  const t = translations.techStack;

  return (
    <section id="technical-stack" className="section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 48, textAlign: 'center' }}
        >
          <h2 className="section-title">
            {(t.title as any)[lang] || t.title.en}
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>{(t.subtitle as any)[lang] || t.subtitle.en}</p>
        </motion.div>

        {/* Technical Stack Cyber HUD Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))',
          gap: 22,
        }}
        className="tech-stack-grid"
        >
          {techCategories.map((cat, index) => {
            const theme = categoryThemes[index % categoryThemes.length];
            const Icon = theme.icon;

            return (
              <motion.div
                key={cat.title.en}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                whileHover={{ y: -5 }}
                className="hud-card"
                style={{
                  padding: 22,
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'linear-gradient(145deg, rgba(16, 18, 36, 0.85) 0%, rgba(8, 10, 22, 0.95) 100%)',
                  border: `1px solid ${theme.border}`,
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <div className="hud-corner-tl" style={{ borderColor: theme.color }} />
                <div className="hud-corner-tr" style={{ borderColor: theme.color }} />
                <div className="hud-corner-bl" style={{ borderColor: theme.color }} />
                <div className="hud-corner-br" style={{ borderColor: theme.color }} />

                {/* Top Glowing Accent Line */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: `linear-gradient(90deg, ${theme.color} 0%, transparent 100%)`,
                }} />

                {/* Category Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 16,
                  paddingBottom: 12,
                  borderBottom: '1px solid var(--border-primary)',
                  gap: 10,
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{
                      width: 40,
                      height: 40,
                      borderRadius: 'var(--radius-md)',
                      background: theme.bg,
                      border: `1px solid ${theme.border}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: theme.color,
                      boxShadow: theme.glow,
                      flexShrink: 0,
                    }}>
                      <Icon size={20} />
                    </div>

                    <h3 style={{
                      fontSize: '1.05rem',
                      fontWeight: 800,
                      fontFamily: 'var(--font-display)',
                      color: 'var(--text-primary)',
                      margin: 0,
                      lineHeight: 1.25,
                    }}>
                      {cat.title[lang]}
                    </h3>
                  </div>

                  <span style={{
                    fontSize: '0.62rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-mono)',
                    color: theme.color,
                    background: `${theme.color}15`,
                    border: `1px solid ${theme.color}35`,
                    padding: '2px 7px',
                    borderRadius: 'var(--radius-full)',
                    whiteSpace: 'nowrap',
                  }}>
                    {theme.tag}
                  </span>
                </div>

                {/* Tech Pills */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 7,
                  justifyContent: 'flex-start',
                }}>
                  {cat.items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.05, y: -2 }}
                      style={{
                        padding: '4px 11px',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        fontFamily: 'var(--font-mono)',
                        color: theme.color,
                        background: theme.bg,
                        border: `1px solid ${theme.border}`,
                        borderRadius: 'var(--radius-sm)',
                        cursor: 'default',
                        transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                        whiteSpace: 'nowrap',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 5,
                        boxShadow: `0 2px 8px ${theme.color}10`,
                      }}
                    >
                      <Sparkles size={11} style={{ color: theme.color, opacity: 0.8 }} />
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .tech-stack-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
