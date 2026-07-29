import { motion } from 'framer-motion';
import { X, Copy, Check } from 'lucide-react';
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

  const copyLink = () => {
    navigator.clipboard.writeText(personalInfo.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(contactUrl)}&bgcolor=0e0e18&color=ff5500&format=svg`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-overlay"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 30 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        onClick={e => e.stopPropagation()}
        style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-hover)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)',
          maxWidth: 420,
          width: '100%',
          padding: 32,
          textAlign: 'center',
        }}
      >
        {/* Close */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
          <h3 style={{
            fontSize: '1.15rem',
            fontWeight: 800,
            fontFamily: 'var(--font-display)',
          }}>
            📱 {lang === 'vi' ? 'Mã QR Zalo / Danh Bạ' : 'Zalo Contact QR Code'}
          </h3>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
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

        {/* QR Image Box */}
        <div style={{
          padding: 20,
          background: '#fff',
          borderRadius: 'var(--radius-lg)',
          display: 'inline-block',
          marginBottom: 20,
          boxShadow: 'var(--shadow-glow)',
        }}>
          <img
            src={qrUrl}
            alt="QR Code Zalo"
            width={220}
            height={220}
            style={{ display: 'block' }}
          />
        </div>

        <p style={{
          fontSize: '0.88rem',
          color: 'var(--text-secondary)',
          marginBottom: 16,
          lineHeight: 1.6,
        }}>
          {lang === 'vi'
            ? 'Quét mã QR bằng ứng dụng Zalo hoặc Camera điện thoại để kết nối trực tiếp với Nguyễn Việt Hưng'
            : 'Scan QR code using Zalo app or phone camera to connect directly with Nguyen Viet Hung'}
        </p>

        {/* Copy Phone / Zalo Link */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          background: 'var(--bg-glass)',
          border: '1px solid var(--border-primary)',
          borderRadius: 'var(--radius-md)',
          padding: '10px 14px',
        }}>
          <span style={{
            flex: 1,
            fontSize: '0.88rem',
            color: 'var(--accent-primary)',
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            textAlign: 'left',
          }}>
            {personalInfo.phone} ({personalInfo.zalo})
          </span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={copyLink}
            style={{
              width: 34,
              height: 34,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: copied ? 'rgba(52, 211, 153, 0.2)' : 'var(--accent-glow)',
              border: 'none',
              borderRadius: 'var(--radius-sm)',
              color: copied ? '#34d399' : 'var(--accent-primary)',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
