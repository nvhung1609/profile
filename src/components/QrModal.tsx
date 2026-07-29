import { motion } from 'framer-motion';
import { X, Copy, Check, ExternalLink, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import type { Language } from '@/data/portfolioData';
import { personalInfo } from '@/data/portfolioData';

interface QrModalProps {
  lang: Language;
  onClose: () => void;
}

export function QrModal({ lang, onClose }: QrModalProps) {
  const [copied, setCopied] = useState(false);
  const contactUrl = personalInfo.zalo;

  const copyPhone = () => {
    navigator.clipboard.writeText('0338812063');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // High-res crisp QR code with dark pixels on white background for 100% scan reliability
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(contactUrl)}&bgcolor=ffffff&color=07070d&format=svg`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-overlay"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.88, y: 20 }}
        transition={{ type: 'spring', damping: 22, stiffness: 220 }}
        onClick={e => e.stopPropagation()}
        className="hud-card"
        style={{
          maxWidth: 420,
          width: '92%',
          padding: '28px 24px',
          textAlign: 'center',
          border: '1px solid var(--border-accent)',
          boxShadow: 'var(--shadow-glow)',
          background: 'var(--bg-secondary)',
          borderRadius: 'var(--radius-xl)',
        }}
      >
        <div className="hud-corner-tl" />
        <div className="hud-corner-tr" />
        <div className="hud-corner-bl" />
        <div className="hud-corner-br" />

        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 20,
          paddingBottom: 12,
          borderBottom: '1px solid var(--border-primary)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 32,
              height: 32,
              borderRadius: 'var(--radius-sm)',
              background: 'rgba(0, 104, 255, 0.18)',
              border: '1px solid rgba(0, 104, 255, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0068ff',
            }}>
              <MessageCircle size={18} />
            </div>
            <h3 style={{
              fontSize: '1.15rem',
              fontWeight: 800,
              fontFamily: 'var(--font-display)',
              color: 'var(--text-primary)',
            }}>
              {lang === 'vi' ? 'Kết Nối Zalo Trực Tiếp' : 'Direct Zalo Contact'}
            </h3>
          </div>

          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            aria-label="Close"
            style={{
              width: 34,
              height: 34,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--bg-glass)',
              border: '1px solid var(--border-primary)',
              borderRadius: '50%',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
            }}
          >
            <X size={16} />
          </motion.button>
        </div>

        {/* High-Tech Cyberpunk Framed QR Container */}
        <div style={{
          position: 'relative',
          margin: '0 auto 20px',
          width: 240,
          height: 240,
          padding: 14,
          background: '#ffffff',
          borderRadius: 'var(--radius-lg)',
          boxShadow: '0 0 35px rgba(0, 229, 255, 0.2), 0 0 20px rgba(255, 85, 0, 0.2)',
          border: '3px solid var(--accent-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {/* QR Code SVG */}
          <img
            src={qrUrl}
            alt="Mã QR Zalo Nguyễn Việt Hưng"
            width={210}
            height={210}
            style={{ display: 'block', borderRadius: 4 }}
          />

          {/* Centered Zalo Brand Badge */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '5px 12px',
            background: '#0068ff',
            color: '#ffffff',
            borderRadius: 'var(--radius-full)',
            fontWeight: 900,
            fontSize: '0.78rem',
            fontFamily: 'var(--font-display)',
            boxShadow: '0 2px 12px rgba(0, 104, 255, 0.6)',
            border: '2px solid #ffffff',
            letterSpacing: '0.04em',
          }}>
            Zalo
          </div>
        </div>

        {/* Subtitle */}
        <p style={{
          fontSize: '0.88rem',
          color: 'var(--text-secondary)',
          marginBottom: 20,
          lineHeight: 1.6,
        }}>
          {lang === 'vi'
            ? 'Quét mã QR bằng Camera điện thoại hoặc Zalo để nhắn tin trực tiếp cho Nguyễn Việt Hưng'
            : 'Scan QR code with phone camera or Zalo app to chat directly with Nguyen Viet Hung'}
        </p>

        {/* Action Buttons: Direct Open & Copy Phone */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <a
            href={personalInfo.zalo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #0068ff 0%, #0044bb 100%)',
              boxShadow: '0 4px 20px rgba(0, 104, 255, 0.4)',
              fontSize: '0.9rem',
              padding: '12px 20px',
              width: '100%',
              textDecoration: 'none',
            }}
          >
            <ExternalLink size={16} />
            💬 {lang === 'vi' ? 'Mở Ứng Dụng Zalo Ngay' : 'Open Zalo App Now'}
          </a>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={copyPhone}
            className="btn-secondary"
            style={{
              justifyContent: 'center',
              fontSize: '0.88rem',
              padding: '11px 20px',
              width: '100%',
              color: copied ? '#34d399' : 'var(--text-primary)',
              borderColor: copied ? 'rgba(52, 211, 153, 0.5)' : 'var(--border-primary)',
            }}
          >
            {copied ? <Check size={16} style={{ color: '#34d399' }} /> : <Copy size={16} />}
            <span>
              {copied
                ? (lang === 'vi' ? '✅ Đã sao chép 0338812063!' : '✅ Copied 0338812063!')
                : (lang === 'vi' ? '📋 Sao chép SĐT: 0338812063' : '📋 Copy Phone: +84 338 812 063')}
            </span>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
