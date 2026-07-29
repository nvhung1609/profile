import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import type { Language } from '@/data/portfolioData';
import { personalInfo, translations } from '@/data/portfolioData';

interface FooterProps {
  lang: Language;
}

export function Footer({ lang }: FooterProps) {
  const t = translations.footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      padding: '44px 0',
      borderTop: '1px solid var(--border-primary)',
      background: 'var(--bg-secondary)',
      position: 'relative',
      zIndex: 2,
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 16,
        }}>
          {/* Left */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontSize: '0.9rem',
              color: 'var(--text-tertiary)',
            }}
          >
            <span>{t.madeWith[lang]}</span>
            <span style={{ fontWeight: 800, color: 'var(--accent-primary)', fontFamily: 'var(--font-display)' }}>{personalInfo.name}</span>
            <span style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>({t.role[lang]})</span>
            <Cpu size={18} style={{ color: 'var(--accent-primary)' }} />
          </motion.div>

          {/* Center */}
          <div style={{
            fontSize: '0.82rem',
            color: 'var(--text-tertiary)',
            fontFamily: 'var(--font-mono)',
          }}>
            © {currentYear} {personalInfo.name}. {t.rights[lang]}
          </div>

          {/* Right - Tech Stack Badges */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}>
            {['STM32', 'ESP32-S3', 'FreeRTOS', 'Altium 4L', 'Edge AI'].map(tech => (
              <span
                key={tech}
                style={{
                  fontSize: '0.72rem',
                  padding: '3px 9px',
                  background: 'var(--accent-glow)',
                  border: '1px solid var(--border-accent)',
                  borderRadius: 'var(--radius-full)',
                  color: 'var(--accent-primary)',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
