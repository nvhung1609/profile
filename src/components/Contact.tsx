import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, CodeSquare, Globe, Send, Phone, Check, MessageSquare, ShieldCheck, AlertCircle } from 'lucide-react';
import type { Language } from '@/data/portfolioData';
import { personalInfo, translations } from '@/data/portfolioData';

interface ContactProps {
  lang: Language;
  onOpenQr: () => void;
}

export function Contact({ lang, onOpenQr }: ContactProps) {
  const t = translations.contact;
  const [formState, setFormState] = useState({ name: '', contactInfo: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    try {
      // Send message securely to backend server proxy
      const res = await fetch('/api/send-telegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formState.name,
          contact: formState.contactInfo,
          message: formState.message,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus('success');
        setFormState({ name: '', contactInfo: '', message: '' });
      } else {
        console.error('Server error dispatching Telegram message:', data);
        setStatus('error');
      }
    } catch (err) {
      console.error('Network error posting message:', err);
      setStatus('error');
    } finally {
      setLoading(false);
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  const directContacts = [
    { icon: Phone, label: 'Phone / Zalo', href: personalInfo.zalo, value: personalInfo.phone, color: '#22c55e' },
    { icon: Mail, label: 'Email', href: `mailto:${personalInfo.email}`, value: personalInfo.email, color: '#ff5500' },
    { icon: CodeSquare, label: 'GitHub', href: personalInfo.github, value: 'github.com/nvhung1609', color: '#ff8c00' },
    { icon: Globe, label: 'Facebook', href: personalInfo.facebook, value: 'facebook.com/nvhung1609', color: '#1877f2' },
  ];

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 18px',
    background: 'var(--bg-glass)',
    border: '1px solid var(--border-primary)',
    borderRadius: 'var(--radius-md)',
    color: 'var(--text-primary)',
    fontSize: '0.95rem',
    fontFamily: 'var(--font-sans)',
    outline: 'none',
    transition: 'all 0.2s',
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: 50, textAlign: 'center' }}
        >
          <h2
            className="section-title"
            dangerouslySetInnerHTML={{ __html: t.title[lang] }}
          />
          <p className="section-subtitle" style={{ margin: '0 auto' }}>{t.subtitle[lang]}</p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: 40,
          maxWidth: 1040,
          margin: '0 auto',
        }}
        className="contact-grid"
        >
          {/* Left - Secure Form Sending directly to Telegram Bot */}
          <motion.form
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="hud-card"
            style={{ padding: 32 }}
          >
            <div className="hud-corner-tl" />
            <div className="hud-corner-tr" />
            <div className="hud-corner-bl" />
            <div className="hud-corner-br" />

            {/* Security Badge */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '8px 14px',
              background: 'rgba(0, 229, 255, 0.1)',
              border: '1px solid rgba(0, 229, 255, 0.25)',
              borderRadius: 'var(--radius-md)',
              color: 'var(--accent-cyan)',
              fontSize: '0.82rem',
              fontWeight: 600,
              marginBottom: 24,
            }}>
              <ShieldCheck size={16} />
              <span>{lang === 'vi' ? 'Bảo mật 100%: API Proxy ẩn Bot Token, chống lộ key qua DevTools' : '100% Secure Server Proxy: Bot token hidden from DevTools'}</span>
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={{
                display: 'block',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--text-secondary)',
                marginBottom: 8,
              }}>
                {t.name[lang]}
              </label>
              <input
                type="text"
                required
                value={formState.name}
                onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                style={inputStyle}
                placeholder="Nguyễn Văn A"
                onFocus={e => {
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                  e.currentTarget.style.boxShadow = '0 0 0 3px var(--accent-glow)';
                }}
                onBlur={e => {
                  e.currentTarget.style.borderColor = 'var(--border-primary)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={{
                display: 'block',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--text-secondary)',
                marginBottom: 8,
              }}>
                {t.contactInfo[lang]}
              </label>
              <input
                type="text"
                required
                value={formState.contactInfo}
                onChange={e => setFormState(s => ({ ...s, contactInfo: e.target.value }))}
                style={inputStyle}
                placeholder="0912xxxxxx / email@company.com"
                onFocus={e => {
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                  e.currentTarget.style.boxShadow = '0 0 0 3px var(--accent-glow)';
                }}
                onBlur={e => {
                  e.currentTarget.style.borderColor = 'var(--border-primary)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            </div>

            <div style={{ marginBottom: 24 }}>
              <label style={{
                display: 'block',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--text-secondary)',
                marginBottom: 8,
              }}>
                {t.message[lang]}
              </label>
              <textarea
                required
                rows={4}
                value={formState.message}
                onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                style={{ ...inputStyle, resize: 'vertical' }}
                placeholder={lang === 'vi' ? 'Nêu chi tiết công việc hoặc cơ hội hợp tác...' : 'State your project details or job offer...'}
                onFocus={e => {
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                  e.currentTarget.style.boxShadow = '0 0 0 3px var(--accent-glow)';
                }}
                onBlur={e => {
                  e.currentTarget.style.borderColor = 'var(--border-primary)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              type="submit"
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              {loading ? (
                <>
                  <span style={{ animation: 'spin 1s linear infinite' }}>⏳</span>
                  {t.sending[lang]}
                </>
              ) : status === 'success' ? (
                <>
                  <Check size={18} />
                  {t.sendSuccess[lang]}
                </>
              ) : (
                <>
                  <Send size={18} />
                  {t.send[lang]}
                </>
              )}
            </motion.button>
          </motion.form>

          {/* Right - Direct Social Channels & QR Code */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
          >
            <p style={{
              fontSize: '0.88rem',
              color: 'var(--text-tertiary)',
              marginBottom: 4,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              fontWeight: 700,
            }}>
              {t.or[lang]}
            </p>

            {directContacts.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                whileHover={{ scale: 1.02, x: 5 }}
                className="hud-card"
                style={{
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  textDecoration: 'none',
                  color: 'var(--text-primary)',
                }}
              >
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: 'var(--radius-md)',
                  background: `${s.color}18`,
                  border: `1px solid ${s.color}40`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <s.icon size={22} style={{ color: s.color }} />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{s.label}</div>
                  <div style={{
                    fontSize: '0.82rem',
                    color: 'var(--text-secondary)',
                    fontFamily: 'var(--font-mono)',
                    marginTop: 2,
                  }}>
                    {s.value}
                  </div>
                </div>
              </motion.a>
            ))}

            {/* QR Code Contact Modal Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenQr}
              className="btn-secondary"
              style={{
                marginTop: 8,
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <MessageSquare size={18} />
              📱 {lang === 'vi' ? 'Quét Mã QR Zalo / Danh Bạ' : 'Scan QR Contact'}
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Toast notifications */}
      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            style={{
              position: 'fixed', bottom: 32, left: '50%',
              padding: '16px 28px', background: 'var(--bg-secondary)',
              border: '1px solid rgba(52, 211, 153, 0.4)', borderRadius: 'var(--radius-lg)',
              color: '#34d399', fontWeight: 700, fontSize: '0.95rem',
              boxShadow: '0 10px 40px rgba(0,0,0,0.5)', zIndex: 200,
              display: 'flex', alignItems: 'center', gap: 10, backdropFilter: 'blur(20px)',
            }}
          >
            <Check size={20} />
            {t.sendSuccess[lang]}
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            style={{
              position: 'fixed', bottom: 32, left: '50%',
              padding: '16px 28px', background: 'var(--bg-secondary)',
              border: '1px solid rgba(239, 68, 68, 0.4)', borderRadius: 'var(--radius-lg)',
              color: '#ef4444', fontWeight: 700, fontSize: '0.95rem',
              boxShadow: '0 10px 40px rgba(0,0,0,0.5)', zIndex: 200,
              display: 'flex', alignItems: 'center', gap: 10, backdropFilter: 'blur(20px)',
            }}
          >
            <AlertCircle size={20} />
            {t.sendError[lang]}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 850px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
