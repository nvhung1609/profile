import { motion } from 'framer-motion';
import { Cpu, Network, Wrench, Code2, Layers, Cloud } from 'lucide-react';
import type { Language } from '@/data/portfolioData';
import { techCategories, translations } from '@/data/portfolioData';

interface SkillsProps {
  lang: Language;
}

const categoryIcons = [Cpu, Network, Wrench, Code2, Layers, Cloud];

export function Skills({ lang }: SkillsProps) {
  const t = translations.techStack;

  return (
    <section id="technical-stack" className="section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 40, textAlign: 'center' }}
        >
          <h2 className="section-title">
            {t.title[lang]}
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>{t.subtitle[lang]}</p>
        </motion.div>

        {/* Technical Stack Compact HUD Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 20,
        }}
        className="tech-stack-grid"
        >
          {techCategories.map((cat, index) => {
            const Icon = categoryIcons[index % categoryIcons.length];
            const isCyan = index % 2 === 1;

            return (
              <motion.div
                key={cat.title.en}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="hud-card"
                style={{ padding: '20px 22px' }}
              >
                <div className="hud-corner-tl" />
                <div className="hud-corner-tr" />
                <div className="hud-corner-bl" />
                <div className="hud-corner-br" />

                {/* Category Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 14,
                  paddingBottom: 10,
                  borderBottom: '1px solid var(--border-primary)',
                }}>
                  <div style={{
                    width: 34,
                    height: 34,
                    borderRadius: 'var(--radius-sm)',
                    background: isCyan ? 'rgba(0, 229, 255, 0.12)' : 'var(--accent-glow)',
                    border: `1px solid ${isCyan ? 'rgba(0, 229, 255, 0.3)' : 'var(--border-accent)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isCyan ? 'var(--accent-cyan)' : 'var(--accent-primary)',
                    flexShrink: 0,
                  }}>
                    <Icon size={18} />
                  </div>
                  <h3 style={{
                    fontSize: '1.02rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-display)',
                    color: 'var(--text-primary)',
                    margin: 0,
                  }}>
                    {cat.title[lang]}
                  </h3>
                </div>

                {/* Compact Horizontal Tech Tags */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 7,
                  justifyContent: 'flex-start',
                }}>
                  {cat.items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.04, y: -1.5 }}
                      style={{
                        padding: '4px 10px',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        fontFamily: 'var(--font-mono)',
                        color: isCyan ? 'var(--accent-cyan)' : 'var(--accent-primary)',
                        background: isCyan ? 'rgba(0, 229, 255, 0.08)' : 'rgba(255, 85, 0, 0.08)',
                        border: `1px solid ${isCyan ? 'rgba(0, 229, 255, 0.28)' : 'rgba(255, 85, 0, 0.28)'}`,
                        borderRadius: 'var(--radius-sm)',
                        cursor: 'default',
                        transition: 'all 0.2s',
                        whiteSpace: 'nowrap',
                        display: 'inline-flex',
                        alignItems: 'center',
                      }}
                    >
                      <span style={{ opacity: 0.6, marginRight: 5, fontSize: '0.68rem' }}>⚡</span>
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
        @media (max-width: 480px) {
          .tech-stack-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
