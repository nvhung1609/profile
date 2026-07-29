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
          style={{ marginBottom: 60, textAlign: 'center' }}
        >
          <h2 className="section-title">
            {t.title[lang]}
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>{t.subtitle[lang]}</p>
        </motion.div>

        {/* Technical Stack Grid Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 24,
        }}
        className="tech-stack-grid"
        >
          {techCategories.map((cat, index) => {
            const Icon = categoryIcons[index % categoryIcons.length];
            const isCyan = index % 2 === 1;

            return (
              <motion.div
                key={cat.title.en}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="hud-card"
                style={{ padding: 28 }}
              >
                <div className="hud-corner-tl" />
                <div className="hud-corner-tr" />
                <div className="hud-corner-bl" />
                <div className="hud-corner-br" />

                {/* Category Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  marginBottom: 20,
                  paddingBottom: 14,
                  borderBottom: '1px solid var(--border-primary)',
                }}>
                  <div style={{
                    width: 40,
                    height: 40,
                    borderRadius: 'var(--radius-sm)',
                    background: isCyan ? 'rgba(0, 229, 255, 0.12)' : 'var(--accent-glow)',
                    border: `1px solid ${isCyan ? 'rgba(0, 229, 255, 0.3)' : 'var(--border-accent)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isCyan ? 'var(--accent-cyan)' : 'var(--accent-primary)',
                    flexShrink: 0,
                  }}>
                    <Icon size={20} />
                  </div>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-display)',
                    color: 'var(--text-primary)',
                  }}>
                    {cat.title[lang]}
                  </h3>
                </div>

                {/* Tech Pills */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 8,
                  justifyContent: 'center',
                }}>
                  {cat.items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.05, y: -2 }}
                      style={{
                        padding: '6px 14px',
                        fontSize: '0.83rem',
                        fontWeight: 600,
                        fontFamily: 'var(--font-mono)',
                        color: isCyan ? 'var(--accent-cyan)' : 'var(--accent-primary)',
                        background: isCyan ? 'rgba(0, 229, 255, 0.08)' : 'var(--accent-glow)',
                        border: `1px solid ${isCyan ? 'rgba(0, 229, 255, 0.25)' : 'var(--border-accent)'}`,
                        borderRadius: 'var(--radius-md)',
                        cursor: 'default',
                        transition: 'all 0.2s',
                      }}
                    >
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
