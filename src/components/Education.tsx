import { motion } from 'framer-motion';
import { GraduationCap, Calendar } from 'lucide-react';
import type { Language } from '@/data/portfolioData';
import { education } from '@/data/portfolioData';

interface EducationProps {
  lang: Language;
}

export function Education({ lang }: EducationProps) {

  return (
    <section id="education" className="section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 50, textAlign: 'center' }}
        >
          <h2 className="section-title">
            {lang === 'vi' ? 'Học Vấn &' : 'Academic'} <span>{lang === 'vi' ? 'Nền Tảng' : 'Background'}</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            {lang === 'vi' ? 'Nền tảng kiến thức Kỹ thuật Máy tính và Hệ thống Nhúng tại Đại học Cần Thơ' : 'Computer Engineering & Embedded Systems degree at Can Tho University'}
          </p>
        </motion.div>

        {/* Education Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(420px, 1fr))',
          gap: 24,
          maxWidth: 900,
          margin: '0 auto',
        }}>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="hud-card"
              style={{ padding: 32 }}
            >
              <div className="hud-corner-tl" />
              <div className="hud-corner-br" />

              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 20,
              }}>
                {/* Icon */}
                <div style={{
                  width: 58,
                  height: 58,
                  borderRadius: 'var(--radius-lg)',
                  background: 'var(--accent-glow)',
                  border: '1px solid var(--border-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: 'var(--shadow-glow)',
                }}>
                  <GraduationCap size={30} style={{ color: 'var(--accent-primary)' }} />
                </div>

                <div>
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-display)',
                    marginBottom: 6,
                    color: 'var(--text-primary)',
                  }}>
                    {edu.school[lang]}
                  </h3>

                  <p style={{
                    color: 'var(--accent-primary)',
                    fontWeight: 700,
                    fontSize: '0.98rem',
                    marginBottom: 8,
                    fontFamily: 'var(--font-mono)',
                  }}>
                    {edu.degree[lang]}
                  </p>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: '0.85rem',
                    color: 'var(--accent-cyan)',
                    fontFamily: 'var(--font-mono)',
                    marginBottom: 12,
                    fontWeight: 600,
                  }}>
                    <Calendar size={14} />
                    {edu.period}
                  </div>

                  <p style={{
                    fontSize: '0.92rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                  }}>
                    {edu.description[lang]}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          #education .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
