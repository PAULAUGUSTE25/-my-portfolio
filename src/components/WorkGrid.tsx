import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight, Globe2 } from 'lucide-react'
import { useLang } from '../i18n'
import HeroSlideshow from './HeroSlideshow'

/* ── Animated counter hook ── */
function useCounter(target: number, duration = 1800) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect() } },
      { threshold: 0.5 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    let start = 0
    const step = (ts: number) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [started, target, duration])

  return { count, ref }
}

/* ── Framer Motion variants ── */
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.25, 0.8, 0.25, 1] as const } },
}
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.8, 0.25, 1] as const } },
}

interface Project {
  id: number
  title: string
  categoryKey: 'proj1.category' | 'proj2.category' | 'proj3.category' | 'proj4.category' | 'proj5.category'
  descriptionKey: 'proj1.description' | 'proj2.description' | 'proj3.description' | 'proj4.description' | 'proj5.description'
  tags: string[]
  gradient: string
  emoji: string
  imgSrc?: string
  bgSrc?: string
  animation?: 'spin' | 'float'
  cardBg?: string
  url: string
  accent: string
  badge: string
  cols: number
}

const projects: Project[] = [
  {
    id: 4,
    title: 'MBOA Market',
    categoryKey: 'proj4.category',
    descriptionKey: 'proj4.description',
    tags: ['Marketplace', 'Agriculture', 'Cameroon'],
    gradient: 'linear-gradient(135deg, #14532d 0%, #15803d 55%, #84cc16 100%)',
    emoji: '🛒',
    imgSrc: '/img/mboamarket-logo.png',
    url: 'https://mboamarket.netlify.app/',
    accent: '#15803d',
    badge: '🔴 Live',
    cols: 2,
  },
  {
    id: 1,
    title: '33 Export — Memory Foot',
    categoryKey: 'proj1.category',
    descriptionKey: 'proj1.description',
    tags: ['React', 'TypeScript', 'Game Dev', 'Animations'],
    gradient: 'linear-gradient(135deg, #7f0000 0%, #b91c1c 50%, #dc2626 100%)',
    emoji: '⚽',
    imgSrc: '/img/33 export logo.png',
    cardBg: '#7f0000',
    url: 'https://33export.club/games/memoryfoot',
    accent: '#f87171',
    badge: '🔴 Live',
    cols: 1,
  },
  {
    id: 2,
    title: 'My ENEO',
    categoryKey: 'proj2.category',
    descriptionKey: 'proj2.description',
    tags: ['React', 'Node.js', 'Full Stack', 'REST API'],
    gradient: 'linear-gradient(135deg, #1a0500 0%, #4a1500 50%, #8b3a00 100%)',
    emoji: '⚡',
    bgSrc: '/img/back ground image for eneo.jpeg',
    imgSrc: '/img/my-eneo-logo.png',
    url: 'https://my.eneo.cm/',
    accent: '#fbbf24',
    badge: '🔴 Live',
    cols: 1,
  },
  {
    id: 3,
    title: 'Port Authority of Douala',
    categoryKey: 'proj3.category',
    descriptionKey: 'proj3.description',
    tags: ['JavaScript', 'Web Dev', 'Integration'],
    gradient: 'linear-gradient(135deg, #000d1a 0%, #002244 50%, #004080 100%)',
    emoji: '🚢',
    bgSrc: '/img/port autonome de dla back ground image .jpg',
    imgSrc: '/img/pad logo.jpg',
    url: 'https://www.pad.cm/',
    accent: '#38bdf8',
    badge: '🔴 Live',
    cols: 1,
  },
  {
    id: 5,
    title: 'Mboa Phone Games',
    categoryKey: 'proj5.category',
    descriptionKey: 'proj5.description',
    tags: ['JavaScript', 'Game Dev', 'Mobile'],
    gradient: 'linear-gradient(135deg, #312e81 0%, #4f46e5 55%, #818cf8 100%)',
    emoji: '🎮',
    url: '#',
    accent: '#6366f1',
    badge: 'Personal Project',
    cols: 1,
  },
]

interface WorkGridProps {
  searchQuery: string
}

const WorkGrid = ({ searchQuery }: WorkGridProps) => {
  const { t } = useLang()
  const [hovered, setHovered] = useState<number | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [heroOffset, setHeroOffset] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const sectionInView = useInView(sectionRef, { once: true, margin: '-50px' })
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true })

  // Animated counters
  const c1 = useCounter(4)
  const c2 = useCounter(1)
  const c3 = useCounter(2)

  // Scroll handler — progress bar + parallax
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = el
      setScrollProgress(scrollTop / (scrollHeight - clientHeight) * 100)
      setHeroOffset(scrollTop * 0.35)
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])


  const filtered = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t(p.categoryKey).toLowerCase().includes(searchQuery.toLowerCase()) ||
      t(p.descriptionKey).toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <div ref={scrollRef} className="h-full overflow-y-auto" style={{ background: '#F5F1E9' }}>

      {/* ── SCROLL PROGRESS BAR ── */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {/* ── HERO BANNER ── */}
      <div className="relative overflow-hidden" style={{ minHeight: 340 }} ref={heroRef}>
        <HeroSlideshow parallaxOffset={heroOffset} />
        <div className="absolute inset-0 z-10" style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.82) 100%)',
        }} />

        <motion.div
          className="relative z-20 px-6 sm:px-8 lg:px-12 pt-12 pb-10 flex flex-col justify-end h-full"
          style={{ minHeight: 340 }}
          initial="hidden"
          animate={heroInView ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } }}
        >
          <motion.div className="flex flex-wrap items-center gap-2.5 mb-3" variants={fadeIn}>
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase"
              style={{ color: 'rgba(255,255,255,0.7)' }}>
              {t('work.location')}
            </p>
            <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold"
              style={{ color: '#F5F1E9', background: 'rgba(216,203,184,0.18)', border: '1px solid rgba(216,203,184,0.4)' }}>
              <Globe2 className="h-3 w-3" />
              {t('left.languages')}
            </span>
          </motion.div>
          <motion.h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-none tracking-tight mb-4"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}
            variants={fadeIn}>
            {t('work.headline').split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}
          </motion.h1>
          <motion.p className="text-sm lg:text-base mb-6 max-w-md"
            style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}
            variants={fadeIn}>
            {t('work.subtitle')}
          </motion.p>

          <motion.div className="flex flex-wrap items-center gap-3 mb-8" variants={fadeIn}>
            <motion.a href="https://github.com/PAULAUGUSTE25" target="_blank" rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl text-sm font-bold"
              style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)' }}
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              {t('work.github')}
            </motion.a>
          </motion.div>

          <motion.div className="flex gap-8" variants={fadeIn}>
            <div ref={c1.ref}>
              <p className="text-2xl font-black text-white leading-none">{c1.count}+</p>
              <p className="text-[11px] mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>{t('left.projects')}</p>
            </div>
            <div ref={c2.ref}>
              <p className="text-2xl font-black text-white leading-none">{c2.count}+</p>
              <p className="text-[11px] mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>{t('left.yrExp')}</p>
            </div>
            <div ref={c3.ref}>
              <p className="text-2xl font-black text-white leading-none">{c3.count}+</p>
              <p className="text-[11px] mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>{t('left.clients')}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── PROJECTS ── */}
      <motion.div ref={sectionRef} className="px-6 lg:px-10 pt-7 pb-3"
        initial={{ opacity: 0, y: 16 }}
        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] as const }}>
        <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 mb-1">{t('work.selectedWorks')}</p>
        <h2 className="text-xl lg:text-2xl font-black text-gray-900 tracking-tight">{t('work.myProjects')}</h2>
      </motion.div>

      <div className="px-6 lg:px-10 pb-10">
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          variants={containerVariants}
          initial="hidden"
          animate={sectionInView ? 'show' : 'hidden'}>
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              className={project.cols === 2 ? 'sm:col-span-2' : ''}
              variants={cardVariants}
            >
            <a
              href={project.url !== '#' ? project.url : undefined}
              target={project.url !== '#' ? '_blank' : undefined}
              rel="noopener noreferrer"
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              className="group rounded-3xl overflow-hidden cursor-pointer block"
              style={{
                transform: hovered === project.id ? 'translateY(-5px)' : 'translateY(0)',
                boxShadow: hovered === project.id
                  ? '0 24px 60px rgba(0,0,0,0.15)'
                  : '0 2px 12px rgba(0,0,0,0.07)',
                transition: 'transform 0.3s cubic-bezier(.25,.8,.25,1), box-shadow 0.3s ease',
              }}
            >
              <div
                className="relative flex items-center justify-center overflow-hidden"
                style={{
                  height: project.cols === 2 ? 240 : 210,
                  background: project.gradient,
                }}
              >
                {project.bgSrc && (
                  <img
                    src={project.bgSrc}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                    style={{
                      opacity: 0.92,
                      transform: hovered === project.id ? 'scale(1.05)' : 'scale(1)',
                    }}
                  />
                )}

                {/* Cinematic bottom-fade overlay for photo cards, flat overlay for gradient cards */}
                <div className="absolute inset-0 transition-all duration-300"
                  style={{
                    background: project.bgSrc
                      ? hovered === project.id
                        ? 'linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.82) 100%)'
                        : 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0.72) 100%)'
                      : hovered === project.id ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.08)',
                  }} />

                {project.imgSrc ? (
                  project.bgSrc ? (
                    /* Frosted glass container for logos on photo backgrounds */
                    <div className="relative flex items-center justify-center rounded-2xl transition-transform duration-300"
                      style={{
                        background: 'rgba(255,255,255,0.18)',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        border: '1px solid rgba(255,255,255,0.3)',
                        padding: '14px 24px',
                        transform: hovered === project.id ? 'scale(1.04)' : 'scale(1)',
                      }}>
                      <img
                        src={project.imgSrc}
                        alt={project.title}
                        className="select-none object-contain"
                        style={{ maxHeight: 72, maxWidth: 160, filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))' }}
                      />
                    </div>
                  ) : (
                    <img
                      src={project.imgSrc}
                      alt={project.title}
                      className={`relative select-none object-contain ${project.animation === 'spin' ? 'logo-spin' : project.animation === 'float' ? 'logo-float' : ''}`}
                      style={{
                        maxHeight: project.cols === 2 ? 170 : 140,
                        maxWidth: '75%',
                        filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.5))',
                      }}
                    />
                  )
                ) : (
                  <span className="relative select-none transition-all duration-500"
                    style={{
                      fontSize: project.cols === 2 ? 88 : 72,
                      filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.5))',
                      transform: hovered === project.id ? 'scale(1.12)' : 'scale(1)',
                    }}>
                    {project.emoji}
                  </span>
                )}

                <span className="absolute top-4 left-4 text-[10px] font-bold px-2.5 py-1 rounded-full"
                  style={{
                    background: 'rgba(0,0,0,0.4)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    color: 'rgba(255,255,255,0.9)',
                  }}>
                  {project.badge}
                </span>

                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-xl"
                  style={{
                    opacity: hovered === project.id ? 1 : 0,
                    transform: hovered === project.id ? 'translateY(0) rotate(0deg)' : 'translateY(6px) rotate(-10deg)',
                    transition: 'all 0.3s ease',
                  }}>
                  <ArrowUpRight className="w-4 h-4 text-gray-900" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100"
                  style={{
                    opacity: hovered === project.id ? 1 : undefined,
                    transform: hovered === project.id ? 'translateY(0)' : undefined,
                    transition: 'all 0.3s ease',
                  }}>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-white"
                        style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-5 py-4" style={{ background: project.cardBg ?? '#ffffff' }}>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <h3 className="font-bold text-sm leading-snug truncate" style={{ transition: 'color 0.2s' }}>
                    {project.id === 2 ? (
                      <>
                        <span style={{ color: '#2563eb' }}>My </span>
                        <span style={{ color: '#047857' }}>ENEO</span>
                      </>
                    ) : project.id === 3 ? (
                      <span style={{ color: '#1e3a8a' }}>{project.title}</span>
                    ) : (
                      <span style={{ color: hovered === project.id ? project.accent : (project.cardBg ? '#ffffff' : '#111827') }}>
                        {project.title}
                      </span>
                    )}
                  </h3>
                </div>
                <p className="text-[11px] font-medium mb-2" style={{ color: project.cardBg ? 'rgba(255,255,255,0.55)' : '#9ca3af' }}>{t(project.categoryKey)}</p>
                <p className="text-xs leading-relaxed line-clamp-2 mb-3" style={{ color: project.cardBg ? 'rgba(255,255,255,0.65)' : '#6b7280' }}>{t(project.descriptionKey)}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold" style={{ color: project.id === 2 ? '#047857' : project.accent }}>
                    {project.url !== '#' ? t('work.viewLive') : t('work.viewCase')}
                  </span>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ background: (project.id === 2 ? '#047857' : project.accent) + '22' }}>
                    <ArrowUpRight className="w-3 h-3" style={{ color: project.id === 2 ? '#047857' : project.accent }} />
                  </div>
                </div>
              </div>
            </a>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center py-24 text-gray-400">
          <span className="text-5xl mb-4">🔍</span>
          <p className="font-semibold text-gray-500">{t('work.noProjectsFound')}</p>
          <p className="text-sm mt-1">{t('work.tryDifferent')}</p>
        </div>
      )}
    </div>
  )
}

export default WorkGrid
