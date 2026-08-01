import { motion } from 'framer-motion';
import { Code2, Cpu, BrainCircuit, Network, CheckCircle2 } from 'lucide-react';
import type { Language } from '@/data/portfolioData';
import { services, translations } from '@/data/portfolioData';

interface ServicesProps {
  lang: Language;
}

const serviceThemes = [
  {
    icon: Code2,
    number: '01',
    color: '#ff5500',
    gradient: 'linear-gradient(135deg, rgba(255, 85, 0, 0.2) 0%, rgba(255, 136, 0, 0.05) 100%)',
    border: 'rgba(255, 85, 0, 0.4)',
    glow: '0 0 25px rgba(255, 85, 0, 0.25)',
    tag: 'PRODUCTION READY',
    pills: ['Embedded C/C++', 'STM32', 'ESP32', 'FreeRTOS', 'RTOS Multi-Tasking'],
  },
  {
    icon: Cpu,
    number: '02',
    color: '#00e5ff',
    gradient: 'linear-gradient(135deg, rgba(0, 229, 255, 0.2) 0%, rgba(0, 136, 255, 0.05) 100%)',
    border: 'rgba(0, 229, 255, 0.4)',
    glow: '0 0 25px rgba(0, 229, 255, 0.25)',
    tag: 'HIGH-SPEED PCB',
    pills: ['Altium 2/4-Layer', 'Impedance 50Ω/90Ω', 'EMI/EMC Shield', 'DFM/DFA'],
  },
  {
    icon: BrainCircuit,
    number: '03',
    color: '#b026ff',
    gradient: 'linear-gradient(135deg, rgba(176, 38, 255, 0.2) 0%, rgba(240, 0, 255, 0.05) 100%)',
    border: 'rgba(176, 38, 255, 0.4)',
    glow: '0 0 25px rgba(176, 38, 255, 0.25)',
    tag: 'EDGE AI TFLITE',
    pills: ['TFLite Micro', 'ToF 8x8 Matrix', '60GHz mmWave Radar', 'Sensor Fusion'],
  },
  {
    icon: Network,
    number: '04',
    color: '#00ff9d',
    gradient: 'linear-gradient(135deg, rgba(0, 255, 157, 0.2) 0%, rgba(0, 184, 101, 0.05) 100%)',
    border: 'rgba(0, 255, 157, 0.4)',
    glow: '0 0 25px rgba(0, 255, 157, 0.25)',
    tag: 'INDUSTRIAL MESH',
    pills: ['CAN Bus / CAN-FD', 'RS485 Modbus', 'LoRaWAN', 'BLE 5.3 / MQTT'],
  },
];

export function Services({ lang }: ServicesProps) {
  const t = translations.services;

  return (
    <section id="services" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 56, textAlign: 'center' }}
        >
          <h2 className="section-title">
            {(t.title as any)[lang] || t.title.en}
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>{(t.subtitle as any)[lang] || t.subtitle.en}</p>
        </motion.div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 24,
        }} className="services-grid-box">
          {services.map((service, index) => {
            const theme = serviceThemes[index % serviceThemes.length];
            const Icon = theme.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="hud-card service-hud-card"
                style={{
                  padding: 26,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  justifyContent: 'space-between',
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'var(--bg-card)',
                  border: `1px solid ${theme.border}`,
                  boxShadow: 'var(--shadow-card)',
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <div className="hud-corner-tl" style={{ borderColor: theme.color }} />
                <div className="hud-corner-tr" style={{ borderColor: theme.color }} />
                <div className="hud-corner-bl" style={{ borderColor: theme.color }} />
                <div className="hud-corner-br" style={{ borderColor: theme.color }} />

                {/* Top Accent Line */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: `linear-gradient(90deg, ${theme.color} 0%, transparent 100%)`,
                }} />

                <div>
                  {/* Top Bar: Icon + Number + HUD Tag */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 20,
                  }}>
                    {/* Glowing Icon Box */}
                    <div style={{
                      width: 54,
                      height: 54,
                      borderRadius: 'var(--radius-md)',
                      background: theme.gradient,
                      border: `1px solid ${theme.border}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: theme.color,
                      boxShadow: theme.glow,
                    }}>
                      <Icon size={26} />
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <span style={{
                        fontSize: '0.65rem',
                        fontWeight: 800,
                        fontFamily: 'var(--font-mono)',
                        color: theme.color,
                        background: `${theme.color}15`,
                        border: `1px solid ${theme.color}40`,
                        padding: '3px 8px',
                        borderRadius: 'var(--radius-full)',
                        display: 'block',
                        marginBottom: 4,
                      }}>
                        {theme.tag}
                      </span>
                      <span style={{
                        fontSize: '1.2rem',
                        fontWeight: 900,
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-tertiary)',
                        opacity: 0.6,
                      }}>
                        {theme.number}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontSize: '1.18rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-display)',
                    marginBottom: 12,
                    color: 'var(--text-primary)',
                    lineHeight: 1.35,
                  }}>
                    {service.title[lang]}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontSize: '0.86rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.65,
                    marginBottom: 20,
                  }}>
                    {service.description[lang]}
                  </p>
                </div>

                {/* Bottom Tech Pills */}
                <div style={{
                  paddingTop: 14,
                  borderTop: '1px solid var(--border-primary)',
                }}>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {theme.pills.map((pill, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '0.7rem',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 700,
                          color: 'var(--text-primary)',
                          background: 'var(--bg-tertiary)',
                          border: `1px solid ${theme.color}35`,
                          padding: '3px 8px',
                          borderRadius: 'var(--radius-sm)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 4,
                        }}
                      >
                        <CheckCircle2 size={11} style={{ color: theme.color }} />
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
