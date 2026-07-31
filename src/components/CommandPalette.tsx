import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Home, User, Wrench, Cpu, Rocket, Briefcase, Mail, Globe, Moon, FileDown } from 'lucide-react';
import type { Language } from '@/data/portfolioData';
import { translations } from '@/data/portfolioData';

interface CommandPaletteProps {
  lang: Language;
  onClose: () => void;
  onToggleLang: () => void;
  onToggleTheme: () => void;
  onOpenCv: () => void;
}

interface CommandItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  action: () => void;
  keywords: string;
}

export function CommandPalette({ lang, onClose, onToggleLang, onToggleTheme, onOpenCv }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const t = translations.commandPalette;
  const navT = translations.nav;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    onClose();
  };

  const commands: CommandItem[] = useMemo(() => [
    { id: 'home', label: (navT.home as any)[lang] || navT.home.en, icon: <Home size={18} />, action: () => scrollTo('home'), keywords: 'home trang chu' },
    { id: 'about', label: (navT.about as any)[lang] || navT.about.en, icon: <User size={18} />, action: () => scrollTo('about'), keywords: 'about me gioi thieu senior embedded' },
    { id: 'services', label: (navT.services as any)[lang] || navT.services.en, icon: <Wrench size={18} />, action: () => scrollTo('services'), keywords: 'services dich vu pcb firmware r&d' },
    { id: 'technical-stack', label: (navT.techStack as any)[lang] || navT.techStack.en, icon: <Cpu size={18} />, action: () => scrollTo('technical-stack'), keywords: 'technical stack esp32 stm32 freertos canbus altium' },
    { id: 'projects', label: (navT.projects as any)[lang] || navT.projects.en, icon: <Rocket size={18} />, action: () => scrollTo('projects'), keywords: 'projects du an ecocare ai box forklift uav' },
    { id: 'experience', label: (navT.experience as any)[lang] || navT.experience.en, icon: <Briefcase size={18} />, action: () => scrollTo('experience'), keywords: 'experience jv tech musen plus japan osaka' },
    { id: 'contact', label: (navT.contact as any)[lang] || navT.contact.en, icon: <Mail size={18} />, action: () => scrollTo('contact'), keywords: 'contact lien he email telegram zalo' },
    { id: 'toggle-lang', label: (t.switchLang as any)[lang] || t.switchLang.en, icon: <Globe size={18} />, action: () => { onToggleLang(); onClose(); }, keywords: 'language ngon ngu tieng viet english' },
    { id: 'toggle-theme', label: (t.toggleTheme as any)[lang] || t.toggleTheme.en, icon: <Moon size={18} />, action: () => { onToggleTheme(); onClose(); }, keywords: 'theme dark light giao dien' },
    { id: 'download-cv', label: (t.downloadCv as any)[lang] || t.downloadCv.en, icon: <FileDown size={18} />, action: () => { onOpenCv(); onClose(); }, keywords: 'cv resume download tai' },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  ], [lang]);

  const filtered = query
    ? commands.filter(c =>
        c.label.toLowerCase().includes(query.toLowerCase()) ||
        c.keywords.toLowerCase().includes(query.toLowerCase())
      )
    : commands;

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(i => (i + 1) % filtered.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(i => (i - 1 + filtered.length) % filtered.length);
      } else if (e.key === 'Enter' && filtered[selectedIndex]) {
        e.preventDefault();
        filtered[selectedIndex].action();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [filtered, selectedIndex, onClose]);

  // Reset selection when query changes
  useEffect(() => setSelectedIndex(0), [query]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-overlay"
      onClick={onClose}
      style={{ alignItems: 'flex-start', paddingTop: '12vh' }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        onClick={e => e.stopPropagation()}
        style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-hover)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)',
          width: '100%',
          maxWidth: 580,
          overflow: 'hidden',
        }}
      >
        {/* Search Input */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '16px 20px',
          borderBottom: '1px solid var(--border-primary)',
        }}>
          <Search size={20} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={(t.placeholder as any)[lang] || t.placeholder.en}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'var(--text-primary)',
              fontSize: '1rem',
              fontFamily: 'var(--font-sans)',
            }}
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            style={{
              padding: '4px 8px',
              background: 'var(--bg-glass)',
              border: '1px solid var(--border-primary)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--text-tertiary)',
              cursor: 'pointer',
              fontSize: '0.7rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
            }}
          >
            ESC
          </motion.button>
        </div>

        {/* Results */}
        <div style={{
          maxHeight: 380,
          overflowY: 'auto',
          padding: '8px',
        }}>
          {filtered.length === 0 ? (
            <div style={{
              padding: '36px 20px',
              textAlign: 'center',
              color: 'var(--text-tertiary)',
              fontSize: '0.9rem',
            }}>
              {(t.noResults as any)[lang] || t.noResults.en}
            </div>
          ) : (
            filtered.map((cmd, i) => (
              <motion.button
                key={cmd.id}
                onClick={cmd.action}
                whileHover={{ scale: 1.01 }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  padding: '12px 18px',
                  background: i === selectedIndex ? 'var(--accent-glow)' : 'transparent',
                  border: 'none',
                  borderRadius: 'var(--radius-md)',
                  color: i === selectedIndex ? 'var(--accent-primary)' : 'var(--text-secondary)',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'var(--font-sans)',
                  textAlign: 'left',
                  transition: 'all 0.15s',
                }}
                onMouseEnter={() => setSelectedIndex(i)}
              >
                <span style={{ display: 'flex', color: i === selectedIndex ? 'var(--accent-primary)' : 'var(--text-tertiary)' }}>{cmd.icon}</span>
                {cmd.label}
              </motion.button>
            ))
          )}
        </div>

        {/* Footer */}
        <div style={{
          padding: '12px 20px',
          borderTop: '1px solid var(--border-primary)',
          display: 'flex',
          gap: 20,
          justifyContent: 'center',
          background: 'var(--bg-tertiary)',
        }}>
          {[
            { key: '↑↓', label: lang === 'vi' ? 'Di chuyển' : 'Navigate' },
            { key: '↵', label: lang === 'vi' ? 'Chọn' : 'Select' },
            { key: 'Esc', label: lang === 'vi' ? 'Đóng' : 'Close' },
          ].map(h => (
            <div key={h.key} style={{
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              fontSize: '0.75rem',
              color: 'var(--text-tertiary)',
            }}>
              <span style={{
                padding: '2px 6px',
                background: 'var(--bg-glass)',
                border: '1px solid var(--border-primary)',
                borderRadius: 4,
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
              }}>
                {h.key}
              </span>
              {h.label}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
