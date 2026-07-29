import { motion } from 'framer-motion';
import { Code2, Microchip, Brain, Network } from 'lucide-react';
import type { Language } from '@/data/portfolioData';
import { services, translations } from '@/data/portfolioData';

interface ServicesProps {
  lang: Language;
}

const serviceIcons = [Code2, Microchip, Brain, Network];

export function Services({ lang }: ServicesProps) {
  const t = translations.services;

  return (
    <section id="services" className="section">
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

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 24,
        }}>
          {services.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="hud-card"
                style={{
                  padding: 32,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                <div className="hud-corner-tl" />
                <div className="hud-corner-br" />

                {/* Icon Box */}
                <div style={{
                  width: 60,
                  height: 60,
                  borderRadius: 'var(--radius-md)',
                  background: isEven ? 'var(--accent-glow)' : 'rgba(0, 229, 255, 0.12)',
                  border: `1px solid ${isEven ? 'var(--border-accent)' : 'rgba(0, 229, 255, 0.3)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isEven ? 'var(--accent-primary)' : 'var(--accent-cyan)',
                  marginBottom: 20,
                  boxShadow: isEven ? 'var(--shadow-glow)' : 'var(--shadow-cyan-glow)',
                }}>
                  <Icon size={28} />
                </div>

                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-display)',
                  marginBottom: 12,
                  color: 'var(--text-primary)',
                  lineHeight: 1.3,
                }}>
                  {service.title[lang]}
                </h3>

                <p style={{
                  fontSize: '0.92rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                  flex: 1,
                }}>
                  {service.description[lang]}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
