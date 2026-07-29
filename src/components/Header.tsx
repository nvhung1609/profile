import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sun, Moon, Search, Menu, X, Home, User, Wrench,
  Cpu, Rocket, Briefcase, Mail
} from 'lucide-react';
import type { Language, Theme } from '@/data/portfolioData';
import { translations, personalInfo } from '@/data/portfolioData';

interface HeaderProps {
  lang: Language;
  theme: Theme;
  onToggleLang: () => void;
  onToggleTheme: () => void;
  onOpenCommand: () => void;
}

const navItems = [
  { id: 'home', icon: Home },
  { id: 'about', icon: User },
  { id: 'services', icon: Wrench },
  { id: 'technical-stack', icon: Cpu },
  { id: 'projects', icon: Rocket },
  { id: 'experience', icon: Briefcase },
  { id: 'contact', icon: Mail },
] as const;

export function Header({ lang, theme, onToggleLang, onToggleTheme, onOpenCommand }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations.nav;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 'var(--header-height)',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
          background: 'var(--bg-glass)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          borderBottom: '1px solid var(--border-primary)',
          maxWidth: '100vw',
          boxSizing: 'border-box',
        }}
        className="app-header"
      >
        {/* Logo matching reference */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', minWidth: 0, flexShrink: 1 }}
          onClick={() => scrollTo('home')}
        >
          <div style={{
            width: 38,
            height: 38,
            borderRadius: 'var(--radius-md)',
            background: 'var(--gradient-hero)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 900,
            fontSize: '1rem',
            color: '#fff',
            fontFamily: 'var(--font-display)',
            boxShadow: 'var(--shadow-glow)',
            flexShrink: 0,
          }}>
            VH
          </div>
          <div style={{ minWidth: 0, overflow: 'hidden' }}>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '1.05rem',
              color: 'var(--text-primary)',
              letterSpacing: '-0.01em',
              display: 'block',
              lineHeight: 1.15,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
            className="header-name-text"
            >
              {personalInfo.name}
            </span>
            <span style={{
              fontSize: '0.68rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--accent-primary)',
              fontWeight: 600,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: 'block',
            }}
            className="header-role-text"
            >
              SENIOR EMBEDDED ENGINEER
            </span>
          </div>
        </motion.div>

        {/* Desktop Nav Items */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          background: 'var(--bg-glass)',
          padding: '6px 10px',
          borderRadius: 'var(--radius-full)',
          border: '1px solid var(--border-primary)',
        }}
        className="desktop-nav-menu"
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const label = t[item.id as keyof typeof t][lang];
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '7px 14px',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  background: 'transparent',
                  color: 'var(--text-secondary)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  fontFamily: 'var(--font-sans)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'var(--text-primary)';
                  e.currentTarget.style.background = 'var(--bg-glass-hover)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <Icon size={14} style={{ color: 'var(--accent-primary)' }} />
                <span>{label}</span>
              </button>
            );
          })}
        </nav>

        {/* Control Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }} className="header-controls">
          {/* Quick Command Search Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenCommand}
            aria-label="Search"
            style={{
              width: 38,
              height: 38,
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-primary)',
              background: 'var(--bg-glass)',
              color: 'var(--text-secondary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <Search size={17} />
          </motion.button>

          {/* Language Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onToggleLang}
            aria-label="Language toggle"
            style={{
              height: 38,
              padding: '0 10px',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-primary)',
              background: 'var(--bg-glass)',
              color: 'var(--text-primary)',
              fontSize: '0.78rem',
              fontWeight: 800,
              fontFamily: 'var(--font-mono)',
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              cursor: 'pointer',
            }}
          >
            <span>{lang === 'vi' ? 'VN' : 'EN'}</span>
            <span style={{ color: 'var(--accent-primary)' }}>{lang === 'vi' ? 'VI' : 'EN'}</span>
          </motion.button>

          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onToggleTheme}
            aria-label="Theme toggle"
            style={{
              width: 38,
              height: 38,
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-primary)',
              background: 'var(--bg-glass)',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            {theme === 'dark' ? <Sun size={17} style={{ color: '#ffb700' }} /> : <Moon size={17} style={{ color: 'var(--accent-primary)' }} />}
          </motion.button>

          {/* Mobile Menu Trigger */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(o => !o)}
            aria-label="Menu"
            style={{
              width: 38,
              height: 38,
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-primary)',
              background: 'var(--bg-glass)',
              color: 'var(--text-primary)',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: 'var(--header-height)',
              left: 0,
              right: 0,
              background: 'var(--bg-secondary)',
              borderBottom: '1px solid var(--border-primary)',
              padding: 20,
              zIndex: 99,
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              boxShadow: 'var(--shadow-card)',
            }}
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const label = t[item.id as keyof typeof t][lang];
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '12px 16px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-primary)',
                    background: 'var(--bg-glass)',
                    color: 'var(--text-primary)',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    width: '100%',
                    textAlign: 'left',
                    fontFamily: 'var(--font-sans)',
                  }}
                >
                  <Icon size={18} style={{ color: 'var(--accent-primary)' }} />
                  <span>{label}</span>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 960px) {
          .desktop-nav-menu { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
        @media (max-width: 540px) {
          .app-header { padding: 0 10px !important; }
          .header-role-text { display: none !important; }
          .header-name-text { max-width: 110px !important; font-size: 0.92rem !important; }
          .header-controls { gap: 4px !important; }
        }
      `}</style>
    </>
  );
}
