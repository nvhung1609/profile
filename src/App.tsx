import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import type { Language, Theme } from '@/data/portfolioData';
import { ParticleCanvas } from '@/components/ParticleCanvas';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Experience } from '@/components/Experience';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { CommandPalette } from '@/components/CommandPalette';
import { CvModal } from '@/components/CvModal';
import { QrModal } from '@/components/QrModal';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('portfolio_lang') as Language) || 'en';
    }
    return 'en';
  });
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('portfolio_theme') as Theme) || 'dark';
    }
    return 'dark';
  });
  const [showCommand, setShowCommand] = useState(false);
  const [showCv, setShowCv] = useState(false);
  const [showQr, setShowQr] = useState(false);

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio_theme', theme);
  }, [theme]);

  // Persist language
  useEffect(() => {
    localStorage.setItem('portfolio_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  // Global keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setShowCommand(prev => !prev);
      }
      if (e.key === 'Escape') {
        setShowCommand(false);
        setShowCv(false);
        setShowQr(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleLang = () => setLang(l => (l === 'en' ? 'ja' : l === 'ja' ? 'vi' : 'en'));
  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  return (
    <>
      {/* Background Cyber Mesh */}
      <ParticleCanvas />

      {/* Header */}
      <Header
        lang={lang}
        theme={theme}
        onToggleLang={toggleLang}
        onSelectLang={(l: Language) => setLang(l)}
        onToggleTheme={toggleTheme}
        onOpenCommand={() => setShowCommand(true)}
      />

      {/* Main Sections */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero lang={lang} onOpenCv={() => setShowCv(true)} />
        <About lang={lang} onOpenCv={() => setShowCv(true)} />
        <Services lang={lang} />
        <Skills lang={lang} />
        <Projects lang={lang} />
        <Experience lang={lang} />
        <Contact lang={lang} onOpenQr={() => setShowQr(true)} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Modals */}
      <AnimatePresence>
        {showCommand && (
          <CommandPalette
            lang={lang}
            onClose={() => setShowCommand(false)}
            onToggleLang={toggleLang}
            onToggleTheme={toggleTheme}
            onOpenCv={() => setShowCv(true)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showCv && (
          <CvModal lang={lang} onClose={() => setShowCv(false)} onToggleLang={toggleLang} onSelectLang={(l: Language) => setLang(l)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showQr && (
          <QrModal lang={lang} onClose={() => setShowQr(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
