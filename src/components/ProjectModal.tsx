import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CodeSquare, ChevronLeft, ChevronRight, Layers, Sparkles, ZoomIn, Play, FileText } from 'lucide-react';
import type { Language, Project } from '@/data/portfolioData';
import { translations, getLangText } from '@/data/portfolioData';

interface ProjectModalProps {
  project: Project;
  lang: Language;
  onClose: () => void;
}

export function ProjectModal({ project, lang, onClose }: ProjectModalProps) {
  const t = translations.projects;
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isFullscreenZoom, setIsFullscreenZoom] = useState(false);
  const activeThumbRef = useRef<HTMLDivElement | null>(null);

  // Base URL for assets
  const baseUrl = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  // Use project.gallery if provided, or fallback to project.image
  const galleryImages = project.gallery && project.gallery.length > 0
    ? project.gallery.map(img => img.startsWith('http') || img.startsWith('/') ? img : `${baseUrl}${img}`)
    : (project.image ? [project.image.startsWith('http') || project.image.startsWith('/') ? project.image : `${baseUrl}${project.image}`] : []);

  const activeIsVid = galleryImages[activeImgIndex]?.toLowerCase().endsWith('.mp4');

  const nextImg = () => {
    setActiveImgIndex((prev) => (prev + 1) % galleryImages.length);
    setTimeout(() => {
      activeThumbRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }, 50);
  };

  const prevImg = () => {
    setActiveImgIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    setTimeout(() => {
      activeThumbRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }, 50);
  };

  // Ultra-Smooth Drag-to-Scroll with Global Listener & Inertia
  const thumbsContainerRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const animIdRef = useRef<number | null>(null);
  const totalMovedRef = useRef(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!thumbsContainerRef.current) return;

    // Pause slideshow on manual user drag interaction
    setIsPaused(true);

    // Cancel any ongoing momentum inertia animation
    if (animIdRef.current) {
      cancelAnimationFrame(animIdRef.current);
      animIdRef.current = null;
    }

    isDraggingRef.current = true;
    setIsMouseDown(true);
    startXRef.current = e.pageX;
    lastXRef.current = e.pageX;
    scrollLeftRef.current = thumbsContainerRef.current.scrollLeft;
    velocityRef.current = 0;
    lastTimeRef.current = performance.now();
    totalMovedRef.current = 0;

    const handleGlobalMouseMove = (moveEvent: MouseEvent) => {
      if (!isDraggingRef.current || !thumbsContainerRef.current) return;

      const currentX = moveEvent.pageX;
      const currentTime = performance.now();
      const deltaX = currentX - lastXRef.current;
      const deltaTime = currentTime - lastTimeRef.current;

      totalMovedRef.current += Math.abs(deltaX);

      // Track velocity for inertia
      if (deltaTime > 0) {
        velocityRef.current = deltaX / deltaTime;
      }

      lastXRef.current = currentX;
      lastTimeRef.current = currentTime;

      const walk = currentX - startXRef.current;
      thumbsContainerRef.current.scrollLeft = scrollLeftRef.current - walk;
    };

    const handleGlobalMouseUp = () => {
      isDraggingRef.current = false;
      setIsMouseDown(false);

      window.removeEventListener('mousemove', handleGlobalMouseMove);
      window.removeEventListener('mouseup', handleGlobalMouseUp);

      // Inertia Momentum Physics
      const el = thumbsContainerRef.current;
      if (!el) return;

      let currentVel = velocityRef.current * 16;
      if (Math.abs(currentVel) > 1) {
        const step = () => {
          if (Math.abs(currentVel) < 0.3 || !el) {
            animIdRef.current = null;
            return;
          }
          el.scrollLeft -= currentVel;
          currentVel *= 0.92; // smooth decay
          animIdRef.current = requestAnimationFrame(step);
        };
        animIdRef.current = requestAnimationFrame(step);
      }
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    window.addEventListener('mouseup', handleGlobalMouseUp);
  };

  // Convert mouse wheel vertically into horizontal scroll
  useEffect(() => {
    const el = thumbsContainerRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        setIsPaused(true);
        el.scrollLeft += e.deltaY * 1.2;
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, []);

  // Cleanup inertia animation on unmount
  useEffect(() => {
    return () => {
      if (animIdRef.current) {
        cancelAnimationFrame(animIdRef.current);
      }
    };
  }, []);

  // Auto-play slideshow every 3.5 seconds (paused when user interacts or when video is playing)
  useEffect(() => {
    if (isPaused || activeIsVid) return;
    const interval = setInterval(() => {
      setActiveImgIndex((prev) => (prev + 1) % galleryImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [galleryImages.length, isPaused, activeIsVid]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-overlay"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 220 }}
        className="modal-content"
        onClick={e => e.stopPropagation()}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxHeight: 'calc(92vh - var(--header-height))',
        }}
      >
        {/* Sticky Header Bar with Title & Close Button */}
        <div style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 18px',
          background: 'rgba(14, 14, 26, 0.96)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--border-accent)',
          flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
            <span className="tech-tag" style={{ fontSize: '0.7rem', flexShrink: 0 }}>
              {project.category}
            </span>
            <h3 style={{
              fontSize: '0.98rem',
              fontWeight: 800,
              fontFamily: 'var(--font-display)',
              color: '#fff',
              margin: 0,
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}>
              {getLangText(project.title, lang)}
            </h3>
          </div>

          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            aria-label="Close modal"
            style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: 'var(--accent-glow)',
              border: '1px solid var(--border-accent)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
              boxShadow: 'var(--shadow-glow)',
            }}
          >
            <X size={18} />
          </motion.button>
        </div>

        {/* Scrollable Body Content */}
        <div style={{
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
          flex: 1,
        }}
        className="modal-scroll-body"
        >
          {/* Gallery Carousel Banner - Taller & Larger Display */}
          <div style={{
            position: 'relative',
            width: '100%',
            height: 420,
            background: '#07070d',
            overflow: 'hidden',
            borderBottom: '1px solid var(--border-accent)',
            cursor: 'zoom-in',
          }}
          className="modal-banner-box"
          onClick={() => setIsFullscreenZoom(true)}
          >
            {/* Ambient Blurred Background */}
            <AnimatePresence mode="wait">
              {galleryImages[activeImgIndex]?.toLowerCase().endsWith('.mp4') ? (
                <motion.video
                  key={`bg-${activeImgIndex}`}
                  src={galleryImages[activeImgIndex]}
                  autoPlay
                  loop
                  muted
                  playsInline
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.3 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'blur(30px) brightness(0.6)',
                    transform: 'scale(1.15)',
                    pointerEvents: 'none',
                  }}
                />
              ) : (
                <motion.img
                  key={`bg-${activeImgIndex}`}
                  src={galleryImages[activeImgIndex]}
                  alt=""
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.4 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'blur(30px) brightness(0.7)',
                    transform: 'scale(1.15)',
                    pointerEvents: 'none',
                  }}
                />
              )}
            </AnimatePresence>

            {/* Active 100% Sharp Media (Image or Video) */}
            <AnimatePresence mode="wait">
              {galleryImages[activeImgIndex]?.toLowerCase().endsWith('.mp4') ? (
                <motion.video
                  key={`fg-${activeImgIndex}`}
                  src={galleryImages[activeImgIndex]}
                  autoPlay
                  loop
                  muted
                  controls
                  playsInline
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    objectPosition: 'center',
                    background: 'rgba(0,0,0,0.5)',
                  }}
                />
              ) : (
                <motion.img
                  key={`fg-${activeImgIndex}`}
                  src={galleryImages[activeImgIndex]}
                  alt={`${getLangText(project.title, lang)} render ${activeImgIndex + 1}`}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    objectPosition: 'center',
                  }}
                />
              )}
            </AnimatePresence>

            {/* Zoom Hint Badge */}
            <div style={{
              position: 'absolute', top: 14, left: 14,
              zIndex: 10,
            }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 6,
                fontSize: '0.75rem', fontFamily: 'var(--font-mono)', fontWeight: 700,
                color: '#fff', background: 'rgba(0,0,0,0.75)',
                padding: '4px 12px', borderRadius: 'var(--radius-full)',
                border: '1px solid var(--border-accent)', backdropFilter: 'blur(10px)',
              }}>
                <ZoomIn size={14} style={{ color: 'var(--accent-cyan)' }} />
                <span>{lang === 'vi' ? 'Phóng to full màn hình' : 'Click to Fullscreen Zoom'}</span>
              </div>
            </div>

            {/* Carousel Arrow Buttons */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => { e.stopPropagation(); prevImg(); }}
              aria-label="Previous Image"
              style={{
                position: 'absolute', top: '50%', left: 14,
                transform: 'translateY(-50%)',
                width: 40, height: 40, borderRadius: '50%',
                background: 'rgba(0,0,0,0.75)', border: '1px solid rgba(255,255,255,0.3)',
                color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', backdropFilter: 'blur(10px)', zIndex: 10,
              }}
            >
              <ChevronLeft size={22} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => { e.stopPropagation(); nextImg(); }}
              aria-label="Next Image"
              style={{
                position: 'absolute', top: '50%', right: 14,
                transform: 'translateY(-50%)',
                width: 40, height: 40, borderRadius: '50%',
                background: 'rgba(0,0,0,0.75)', border: '1px solid rgba(255,255,255,0.3)',
                color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', backdropFilter: 'blur(10px)', zIndex: 10,
              }}
            >
              <ChevronRight size={22} />
            </motion.button>

            {/* Clean Image Counter Badge Only */}
            <div style={{
              position: 'absolute', bottom: 14, right: 14,
              zIndex: 10,
            }}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 6,
                fontSize: '0.8rem', fontFamily: 'var(--font-mono)', fontWeight: 700,
                color: '#fff', background: 'rgba(0,0,0,0.85)',
                padding: '5px 14px', borderRadius: 'var(--radius-full)',
                border: '1px solid var(--border-accent)', backdropFilter: 'blur(10px)',
              }}>
                <Layers size={14} style={{ color: 'var(--accent-primary)' }} />
                <span>{activeImgIndex + 1} / {galleryImages.length}</span>
              </div>
            </div>
          </div>

          {/* High Performance Horizontal Scrollable Thumbnail Selector Bar (Physics Drag & Inertia Supported) */}
          <div
            ref={thumbsContainerRef}
            className="modal-scroll-thumbs"
            onMouseDown={handleMouseDown}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: 10,
              padding: '12px 16px',
              background: 'var(--bg-tertiary)',
              borderBottom: '1px solid var(--border-primary)',
              overflowX: 'auto',
              WebkitOverflowScrolling: 'touch',
              maxWidth: '100%',
              cursor: isMouseDown ? 'grabbing' : 'grab',
              userSelect: 'none',
            }}
          >
            {galleryImages.map((url, idx) => {
              const isVid = url.toLowerCase().endsWith('.mp4');
              const isActive = activeImgIndex === idx;
              return (
                <motion.div
                  key={idx}
                  ref={isActive ? activeThumbRef : null}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    if (totalMovedRef.current > 5) return;
                    setActiveImgIndex(idx);
                  }}
                  style={{
                    width: 90,
                    height: 60,
                    flexShrink: 0,
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    border: isActive ? '2px solid var(--accent-primary)' : '1px solid var(--border-primary)',
                    boxShadow: isActive ? 'var(--shadow-glow)' : 'none',
                    position: 'relative',
                    opacity: isActive ? 1 : 0.75,
                    transition: 'all 0.2s',
                    background: '#080810',
                  }}
                  className="thumb-box"
                >
                  {isVid ? (
                    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                      <video
                        src={url.includes('#') ? url : `${url}#t=0.1`}
                        muted
                        loop={isActive}
                        autoPlay={isActive}
                        playsInline
                        preload="metadata"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                      {!isActive && (
                        <div style={{
                          position: 'absolute', inset: 0,
                          background: 'rgba(0,0,0,0.3)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                          <Play size={18} fill="#fff" color="#fff" />
                        </div>
                      )}
                    </div>
                  ) : (
                    <img
                      src={url}
                      alt={`Thumb ${idx + 1}`}
                      loading="lazy"
                      decoding="async"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  )}
                  {isVid && (
                    <span style={{
                      position: 'absolute', top: 3, left: 3,
                      fontSize: '0.55rem', fontWeight: 800,
                      color: '#fff', background: '#ff2d55',
                      padding: '1px 5px', borderRadius: '3px',
                      zIndex: 2,
                    }}>
                      VIDEO
                    </span>
                  )}
                  <span style={{
                    position: 'absolute', bottom: 3, right: 3,
                    fontSize: '0.65rem', fontFamily: 'var(--font-mono)', fontWeight: 800,
                    color: '#fff', textShadow: '0 1px 3px #000',
                    background: 'rgba(0,0,0,0.75)', padding: '1px 5px', borderRadius: '3px',
                  }}>
                    #{idx + 1}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Modal Body Information */}
          <div style={{ padding: '24px 24px' }} className="modal-body-content">
            {/* Title & Highlight Tag */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12, flexWrap: 'wrap' }}>
              <span className="tech-tag" style={{ fontSize: '0.75rem' }}>{project.category}</span>
              {project.highlight && (
                <span style={{
                  padding: '4px 12px',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  color: '#ffb700',
                  background: 'rgba(255, 183, 0, 0.15)',
                  border: '1px solid rgba(255, 183, 0, 0.35)',
                  borderRadius: 'var(--radius-full)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                }}>
                  <Sparkles size={12} /> FLAGSHIP PROJECT
                </span>
              )}
            </div>

            <h2 style={{
              fontSize: '1.45rem',
              fontWeight: 800,
              fontFamily: 'var(--font-display)',
              marginBottom: 14,
              color: 'var(--text-primary)',
              lineHeight: 1.3,
            }}>
              {getLangText(project.title, lang)}
            </h2>

            {/* Long description */}
            <p style={{
              color: 'var(--text-secondary)',
              lineHeight: 1.75,
              fontSize: '0.94rem',
              marginBottom: 24,
            }}>
              {project.longDescription[lang]}
            </p>

            {/* Key Features & Specs */}
            <div style={{ marginBottom: 24 }}>
              <h4 style={{
                fontSize: '0.92rem',
                fontWeight: 800,
                marginBottom: 12,
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-display)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}>
                {(t.features as any)[lang] || t.features.en}
              </h4>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: 10,
              }}>
                {project.features.map((feature, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 10,
                      fontSize: '0.88rem',
                      color: 'var(--text-secondary)',
                      padding: '12px 14px',
                      background: 'var(--bg-glass)',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-primary)',
                      lineHeight: 1.5,
                    }}
                  >
                    <span style={{ color: 'var(--accent-cyan)', fontWeight: 800, flexShrink: 0 }}>✓</span>
                    <span>{(feature as any)[lang] || feature.en}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech stack */}
            <div style={{ marginBottom: 28 }}>
              <h4 style={{
                fontSize: '0.92rem',
                fontWeight: 800,
                marginBottom: 12,
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-display)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}>
                {(t.techUsed as any)[lang] || t.techUsed.en}
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ textDecoration: 'none' }}
                >
                  <ExternalLink size={16} />
                  {(t.liveDemo as any)[lang] || t.liveDemo.en}
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ textDecoration: 'none' }}
                >
                  <CodeSquare size={16} />
                  {(t.sourceCode as any)[lang] || t.sourceCode.en}
                </a>
              )}
              {project.publicationUrl && (
                <a
                  href={project.publicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{
                    textDecoration: 'none',
                    background: 'linear-gradient(135deg, rgba(234, 67, 53, 0.15), rgba(66, 133, 244, 0.15))',
                    borderColor: 'rgba(66, 133, 244, 0.4)',
                    color: 'var(--text-primary)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <FileText size={16} style={{ color: '#4285F4' }} />
                  {lang === 'vi' ? '📄 Bài báo Khoa học (Google Scholar)' : lang === 'ja' ? '📄 学術論文 (Google Scholar)' : '📄 Scientific Paper (Google Scholar)'}
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Full-Screen Lightbox Zoom Modal */}
      <AnimatePresence>
        {isFullscreenZoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              zIndex: 999999,
              background: '#05050c',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '60px 20px 20px 20px',
              boxSizing: 'border-box',
            }}
            onClick={() => setIsFullscreenZoom(false)}
          >
            {/* Top Bar with Title & Close Button */}
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'absolute',
                top: 16,
                left: 20,
                right: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                zIndex: 100000,
              }}
            >
              <div style={{ color: '#fff', fontSize: '0.9rem', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
                🔍 {getLangText(project.title, lang)} ({activeImgIndex + 1}/{galleryImages.length})
              </div>
              <button
                onClick={() => setIsFullscreenZoom(false)}
                aria-label="Close Lightbox"
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: '50%',
                  background: 'var(--accent-glow)',
                  border: '1px solid var(--border-accent)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: 'var(--shadow-glow)',
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Lightbox Main Media (100% Crisp Full Screen Display) */}
            {galleryImages[activeImgIndex]?.toLowerCase().endsWith('.mp4') ? (
              <video
                key={`lightbox-${activeImgIndex}`}
                src={galleryImages[activeImgIndex]}
                controls
                autoPlay
                loop
                muted
                playsInline
                onClick={(e) => e.stopPropagation()}
                style={{
                  maxWidth: '96vw',
                  maxHeight: '88vh',
                  objectFit: 'contain',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: '0 0 60px rgba(0,0,0,0.9)',
                  border: '1px solid var(--border-accent)',
                  background: '#000',
                }}
              />
            ) : (
              <motion.img
                key={`lightbox-${activeImgIndex}`}
                src={galleryImages[activeImgIndex]}
                alt={`${getLangText(project.title, lang)} full view`}
                initial={{ scale: 0.94, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.94, opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                  maxWidth: '96vw',
                  maxHeight: '88vh',
                  objectFit: 'contain',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: '0 0 60px rgba(0,0,0,0.9)',
                  border: '1px solid var(--border-accent)',
                }}
              />
            )}

            {/* Left/Right Navigation Controls */}
            <button
              onClick={(e) => { e.stopPropagation(); prevImg(); }}
              aria-label="Previous Image"
              style={{
                position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)',
                width: 48, height: 48, borderRadius: '50%', background: 'rgba(0,0,0,0.85)',
                border: '1px solid var(--border-accent)', color: '#fff', display: 'flex',
                alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 100000,
                boxShadow: 'var(--shadow-glow)',
              }}
            >
              <ChevronLeft size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); nextImg(); }}
              aria-label="Next Image"
              style={{
                position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)',
                width: 48, height: 48, borderRadius: '50%', background: 'rgba(0,0,0,0.85)',
                border: '1px solid var(--border-accent)', color: '#fff', display: 'flex',
                alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 100000,
                boxShadow: 'var(--shadow-glow)',
              }}
            >
              <ChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .modal-scroll-thumbs::-webkit-scrollbar {
          height: 6px;
        }
        .modal-scroll-thumbs::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.4);
          border-radius: 4px;
        }
        .modal-scroll-thumbs::-webkit-scrollbar-thumb {
          background: var(--accent-primary);
          border-radius: 4px;
        }
        @media (max-width: 640px) {
          .modal-banner-box { height: 280px !important; }
          .modal-body-content { padding: 18px 14px !important; }
          .thumb-box { min-height: 48px !important; }
        }
      `}</style>
    </motion.div>
  );
}
