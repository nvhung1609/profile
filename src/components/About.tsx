import { motion } from 'framer-motion';
import { Cpu, Award, Users, CheckCircle, FileText } from 'lucide-react';
import type { Language } from '@/data/portfolioData';
import { personalInfo, translations } from '@/data/portfolioData';

interface AboutProps {
  lang: Language;
  onOpenCv: () => void;
}

export function About({ lang, onOpenCv }: AboutProps) {
  const t = translations.about;

  const stats = [
    { value: `${personalInfo.yearsExp}+`, label: lang === 'vi' ? 'Năm Kinh Nghiệm R&D' : lang === 'ja' ? 'R&D実務経験年数' : 'Years R&D Experience', icon: Cpu },
    { value: `${personalInfo.productsCount}+`, label: lang === 'vi' ? 'Sản Phẩm IoT Thương Mại' : lang === 'ja' ? '商用IoT製品数' : 'Commercial IoT Products', icon: Award },
    { value: `${personalInfo.communityMembers.toLocaleString()}+`, label: lang === 'vi' ? 'Thành Viên AI Box Kit' : lang === 'ja' ? 'コミュニティ開発者' : 'Community Developers', icon: Users },
  ];

  return (
    <section id="about" className="section">
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
            {(t.title as any)[lang] || t.title.en}
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>{(t.subtitle as any)[lang] || t.subtitle.en}</p>
        </motion.div>

        {/* Grid Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 40,
          alignItems: 'center',
        }}
        className="about-grid"
        >
          {/* Left - Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="hud-card"
            style={{ padding: 32 }}
          >
            <div className="hud-corner-tl" />
            <div className="hud-corner-tr" />
            <div className="hud-corner-bl" />
            <div className="hud-corner-br" />

            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 800,
              fontFamily: 'var(--font-display)',
              marginBottom: 16,
              color: 'var(--accent-primary)',
              display: 'flex',
              flexWrap: 'wrap',
              gap: 8,
              alignItems: 'center',
            }}>
              <span style={{ whiteSpace: 'nowrap' }}>JV TECH</span>
              <span style={{ whiteSpace: 'nowrap', fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
                {lang === 'vi' ? '(HQ Nhật Bản: MUSEN PLUS Co., Ltd.)' : '(Japan HQ: MUSEN PLUS Co., Ltd.)'}
              </span>
            </h3>

            <p style={{
              fontSize: '0.95rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              marginBottom: 20,
            }}>
              {personalInfo.aboutText[lang]}
            </p>

            {/* Checklist */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                lang === 'vi' ? 'Thiết kế nguyên lý & PCB 2/4-Layer trên Altium Designer' : 'Schematic capture & 2/4-Layer PCB layout in Altium Designer',
                lang === 'vi' ? 'Lập trình C/C++ & SBC/Linux: STM32 (ARM), ESP (SoC), CH32 (RISC-V), MSP430, PIC, EC800M, Raspberry Pi, Orange Pi' : 'Production C/C++ & SBC/Linux: STM32 (ARM), ESP (SoC), CH32 (RISC-V), MSP430, PIC, EC800M, Raspberry Pi, Orange Pi',
                lang === 'vi' ? 'Tích hợp Edge AI (TensorFlow Lite Micro) & ma trận ToF 8x8' : 'Edge AI (TensorFlow Lite Micro) & 8x8 ToF sensor matrix fusion',
                lang === 'vi' ? 'Chuẩn hóa truyền thông CAN Bus, RS485/Modbus, LoRa, MQTT' : 'Industrial protocol stacks: CAN Bus, RS485/Modbus, LoRa, MQTT',
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                  <CheckCircle size={17} style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Stats Grid & Read CV CTA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 20 }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02, x: 5 }}
                className="hud-card"
                style={{
                  padding: '24px 28px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 20,
                }}
              >
                <div style={{
                  width: 54, height: 54, borderRadius: 'var(--radius-md)',
                  background: i % 2 === 0 ? 'var(--accent-glow)' : 'rgba(0, 229, 255, 0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: i % 2 === 0 ? 'var(--accent-primary)' : 'var(--accent-cyan)',
                  flexShrink: 0,
                }}>
                  <s.icon size={26} />
                </div>
                <div>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: 900,
                    fontFamily: 'var(--font-display)',
                    color: i % 2 === 0 ? 'var(--accent-primary)' : 'var(--accent-cyan)',
                    lineHeight: 1.1,
                  }}>
                    {s.value}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: 4 }}>
                    {s.label}
                  </div>
                </div>
              </motion.div>
            ))}

            <button
              className="btn-primary"
              onClick={onOpenCv}
              style={{ marginTop: 10, justifyContent: 'center' }}
            >
              <FileText size={18} />
              {(t.readMore as any)[lang] || t.readMore.en}
            </button>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
