import { useState, useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'

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

/* ── Scroll reveal hook ── */
function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('visible'); obs.disconnect() } },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

interface Project {
  id: number
  title: string
  category: string
  description: string
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
    id: 1,
    title: '33 Export — Memory Foot',
    category: 'Game Platform · AFCON Edition',
    description: 'Interactive football memory card game launched during the Africa Cup of Nations. Match cards, beat the clock, and climb the leaderboard.',
    tags: ['React', 'TypeScript', 'Game Dev', 'Animations'],
    gradient: 'linear-gradient(135deg, #7f0000 0%, #b91c1c 50%, #dc2626 100%)',
    emoji: '⚽',
    imgSrc: '/img/33 export logo.png',
    cardBg: '#7f0000',
    url: 'https://33export.club/games/memoryfoot',
    accent: '#f87171',
    badge: '🔴 Live',
    cols: 2,
  },
  {
    id: 2,
    title: 'My ENEO',
    category: 'Energy Management · Cameroon',
    description: 'Full customer portal for ENEO — Cameroon\'s electricity provider. Handles billing, meter readings, outage reports and service requests.',
    tags: ['React', 'Node.js', 'Full Stack', 'REST API'],
    gradient: 'linear-gradient(135deg, #1a0500 0%, #4a1500 50%, #8b3a00 100%)',
    emoji: '⚡',
    bgSrc: '/img/back ground image for eneo.jpeg',
    imgSrc: '/img/eneo logo.png',
    url: 'https://my.eneo.cm/',
    accent: '#fbbf24',
    badge: '🔴 Live',
    cols: 1,
  },
  {
    id: 3,
    title: 'Port Authority of Douala',
    category: 'Port Operations System',
    description: 'Digital platform for the Port Authority of Douala streamlining logistics, vessel tracking and administrative operations.',
    tags: ['JavaScript', 'Web Dev', 'Integration'],
    gradient: 'linear-gradient(135deg, #000d1a 0%, #002244 50%, #004080 100%)',
    emoji: '🚢',
    bgSrc: '/img/poer autonome de doula back ground.jpg',
    imgSrc: '/img/pad logo.jpg',
    url: 'https://www.pad.cm/',
    accent: '#38bdf8',
    badge: '🔴 Live',
    cols: 1,
  },
]

interface WorkGridProps {
  searchQuery: string
}

const WorkGrid = ({ searchQuery }: WorkGridProps) => {
  const [hovered, setHovered] = useState<number | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [heroOffset, setHeroOffset] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)
  const sectionRef = useScrollReveal()

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

  // Scroll-reveal observer for all cards
  useEffect(() => {
    const cards = document.querySelectorAll('.project-card')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
        })
      },
      { threshold: 0.12 }
    )
    cards.forEach((c) => obs.observe(c))
    return () => obs.disconnect()
  }, [searchQuery])

  const filtered = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <div ref={scrollRef} className="h-full overflow-y-auto" style={{ background: '#f4f4f6' }}>

      {/* ── SCROLL PROGRESS BAR ── */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {/* ── HERO BANNER ── */}
      <div className="relative overflow-hidden" style={{ minHeight: 340 }}>
        <img
          src="/img/the%20hero%20banner.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover will-change-transform"
          style={{ objectPosition: 'center 30%', transform: `translateY(${heroOffset}px) scale(1.1)` }}
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.85) 100%)',
        }} />

        <div className="relative z-10 px-8 lg:px-12 pt-12 pb-10 flex flex-col justify-end h-full" style={{ minHeight: 340 }}>
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-3"
            style={{ color: 'rgba(255,255,255,0.7)' }}>
            Full Stack Developer · Yaoundé, Cameroon
          </p>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-none tracking-tight mb-4"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}>
            Building Apps<br />That Matter.
          </h1>
          <p className="text-sm lg:text-base mb-6 max-w-md"
            style={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
            React &amp; TypeScript specialist. Crafting scalable web experiences for real-world impact.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-8">
            <a href="mailto:sixcomp8@gmail.com"
              className="px-5 py-2.5 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-80"
              style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.25)' }}>
              Hire Me
            </a>
            <a href="https://github.com/PAULAUGUSTE25" target="_blank" rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl text-sm font-bold transition-opacity hover:opacity-80"
              style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)' }}>
              GitHub ↗
            </a>
          </div>

          <div className="flex gap-8">
            <div ref={c1.ref}>
              <p className="text-2xl font-black text-white leading-none">{c1.count}+</p>
              <p className="text-[11px] mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>Projects</p>
            </div>
            <div ref={c2.ref}>
              <p className="text-2xl font-black text-white leading-none">{c2.count}+</p>
              <p className="text-[11px] mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>Yr Exp.</p>
            </div>
            <div ref={c3.ref}>
              <p className="text-2xl font-black text-white leading-none">{c3.count}+</p>
              <p className="text-[11px] mt-0.5" style={{ color: 'rgba(255,255,255,0.65)' }}>Clients</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── PROJECTS ── */}
      <div ref={sectionRef} className="reveal px-6 lg:px-10 pt-7 pb-3">
        <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 mb-1">Selected Works</p>
        <h2 className="text-xl lg:text-2xl font-black text-gray-900 tracking-tight">My Projects</h2>
      </div>

      <div className="px-6 lg:px-10 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {filtered.map((project) => (
            <div
              key={project.id}
              className={`project-card reveal stagger-${project.id} ${
                project.cols === 2 ? 'sm:col-span-2' : ''
              }`}
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

                <div className="absolute bottom-0 left-0 right-0 px-4 pb-4"
                  style={{
                    opacity: hovered === project.id ? 1 : 0,
                    transform: hovered === project.id ? 'translateY(0)' : 'translateY(8px)',
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
                <p className="text-[11px] font-medium mb-2" style={{ color: project.cardBg ? 'rgba(255,255,255,0.55)' : '#9ca3af' }}>{project.category}</p>
                <p className="text-xs leading-relaxed line-clamp-2 mb-3" style={{ color: project.cardBg ? 'rgba(255,255,255,0.65)' : '#6b7280' }}>{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold" style={{ color: project.id === 2 ? '#047857' : project.accent }}>
                    {project.url !== '#' ? 'View live project →' : 'View case study →'}
                  </span>
                  <div className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ background: (project.id === 2 ? '#047857' : project.accent) + '22' }}>
                    <ArrowUpRight className="w-3 h-3" style={{ color: project.id === 2 ? '#047857' : project.accent }} />
                  </div>
                </div>
              </div>
            </a>
            </div>
          ))}
        </div>
      </div>

      {filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center py-24 text-gray-400">
          <span className="text-5xl mb-4">🔍</span>
          <p className="font-semibold text-gray-500">No projects found</p>
          <p className="text-sm mt-1">Try a different keyword</p>
        </div>
      )}
    </div>
  )
}

export default WorkGrid
