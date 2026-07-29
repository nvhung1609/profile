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
      padding: '36px 0',
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
        }}
        className="footer-content"
        >
          {/* Brand Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              flexWrap: 'wrap',
              fontSize: '0.9rem',
              color: 'var(--text-secondary)',
            }}
          >
            <Cpu size={18} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
            <span style={{ fontWeight: 800, color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>
              {personalInfo.name}
            </span>
            <span style={{ color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: '0.82rem' }}>
              • {t.role[lang]}
            </span>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)' }}>
              © {currentYear}. {t.rights[lang]}
            </span>
          </motion.div>

          {/* Right - Tech Stack Badges */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 6,
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

      <style>{`
        @media (max-width: 640px) {
          .footer-content {
            flexDirection: column !important;
            text-align: center !important;
            justify-content: center !important;
          }
          .footer-content > div {
            justify-content: center !important;
          }
        }
      `}</style>
    </footer>
  );
}
