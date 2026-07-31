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
  onSelectLang?: (lang: Language) => void;
  onToggleTheme: () => void;
  onOpenCommand: () => void;
}

const navItems = [
  { id: 'home', sectionId: 'home', icon: Home },
  { id: 'about', sectionId: 'about', icon: User },
  { id: 'services', sectionId: 'services', icon: Wrench },
  { id: 'techStack', sectionId: 'technical-stack', icon: Cpu },
  { id: 'projects', sectionId: 'projects', icon: Rocket },
  { id: 'experience', sectionId: 'experience', icon: Briefcase },
  { id: 'contact', sectionId: 'contact', icon: Mail },
] as const;

export function Header({ lang, theme, onToggleLang, onSelectLang, onToggleTheme, onOpenCommand }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const t = translations.nav;

  const languages: { code: Language; flag: string; name: string }[] = [
    { code: 'vi', flag: '🇻🇳', name: 'Tiếng Việt' },
    { code: 'en', flag: '🇺🇸', name: 'English' },
    { code: 'ja', flag: '🇯🇵', name: '日本語' },
  ];

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
        {/* Logo with full name ALWAYS visible */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', flexShrink: 0 }}
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
          <div>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '1.05rem',
              color: 'var(--text-primary)',
              letterSpacing: '-0.01em',
              display: 'block',
              lineHeight: 1.15,
              whiteSpace: 'nowrap',
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
            const labelObj = t[item.id as keyof typeof t] || t.techStack;
            const label = labelObj ? (labelObj as any)[lang] || labelObj.en : '';
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.sectionId)}
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
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }} className="header-controls">
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
            className="ctrl-btn search-btn"
          >
            <Search size={16} />
          </motion.button>

          {/* Language Dropdown Menu */}
          <div style={{ position: 'relative' }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              aria-label="Language selector"
              style={{
                height: 38,
                padding: '0 12px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-accent)',
                background: 'var(--bg-glass)',
                color: 'var(--text-primary)',
                fontSize: '0.85rem',
                fontWeight: 800,
                fontFamily: 'var(--font-mono)',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                cursor: 'pointer',
                boxShadow: 'var(--shadow-glow)',
              }}
              className="ctrl-btn lang-btn"
            >
              <span>{lang === 'vi' ? '🇻🇳' : lang === 'ja' ? '🇯🇵' : '🇺🇸'}</span>
              <span style={{ color: 'var(--accent-primary)', fontWeight: 800 }}>
                {lang.toUpperCase()}
              </span>
              <span style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)', marginLeft: 2 }}>▾</span>
            </motion.button>

            <AnimatePresence>
              {langMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  style={{
                    position: 'absolute',
                    top: '120%',
                    right: 0,
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-primary)',
                    borderRadius: 'var(--radius-md)',
                    boxShadow: '0 12px 36px rgba(0,0,0,0.6)',
                    padding: '6px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4,
                    minWidth: 145,
                    zIndex: 110,
                    backdropFilter: 'blur(24px)',
                  }}
                >
                  {languages.map(l => (
                    <button
                      key={l.code}
                      onClick={() => {
                        if (onSelectLang) onSelectLang(l.code);
                        else onToggleLang();
                        setLangMenuOpen(false);
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                        padding: '9px 12px',
                        borderRadius: 'var(--radius-sm)',
                        border: 'none',
                        background: lang === l.code ? 'rgba(255, 85, 0, 0.15)' : 'transparent',
                        color: lang === l.code ? 'var(--accent-primary)' : 'var(--text-primary)',
                        fontSize: '0.85rem',
                        fontWeight: lang === l.code ? 700 : 500,
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'all 0.2s',
                        fontFamily: 'var(--font-sans)',
                      }}
                    >
                      <span style={{ fontSize: '1rem' }}>{l.flag}</span>
                      <span>{l.name}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

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
            className="ctrl-btn"
          >
            {theme === 'dark' ? <Sun size={16} style={{ color: '#ffb700' }} /> : <Moon size={16} style={{ color: 'var(--accent-primary)' }} />}
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
            className="mobile-menu-btn ctrl-btn"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
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
              const labelObj = t[item.id as keyof typeof t] || t.techStack;
              const label = labelObj ? (labelObj as any)[lang] || labelObj.en : '';
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.sectionId)}
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
          .header-name-text { max-width: none !important; font-size: 0.88rem !important; font-weight: 800 !important; }
          .header-controls { gap: 4px !important; }
          .ctrl-btn { width: 36px !important; height: 36px !important; }
          .lang-btn { width: auto !important; padding: 0 8px !important; }
        }
        @media (max-width: 380px) {
          .search-btn { display: none !important; }
          .header-name-text { font-size: 0.82rem !important; }
        }
      `}</style>
    </>
  );
}
