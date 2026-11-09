import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Briefcase, GraduationCap, MapPin, Calendar, ChevronRight, ExternalLink, Sparkles } from 'lucide-react'
import { useLang } from '../i18n'
import ExperienceHeroSlideshow from './ExperienceHeroSlideshow'
import FloatingLogos from './FloatingLogos'
import TypingText from './TypingText'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.8, 0.25, 1] as const } },
}
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const deliveredProjects = [
  {
    name: '33 Export — Memory Foot',
    desc: 'Interactive football memory game for Africa Cup of Nations',
    img: '/img/33 export logo.png',
    bg: '/img/33 export logo.png',
    color: '#dc2626',
    gradient: 'linear-gradient(135deg, #7f0000, #dc2626)',
    url: 'https://33export.club/games/memoryfoot',
    tags: ['React', 'Game Dev'],
  },
  {
    name: 'My ENEO',
    desc: 'Functional testing, bug reporting and tracking',
    img: '/img/my-eneo-logo.png',
    bg: '/img/back ground image for eneo.jpeg',
    color: '#047857',
    gradient: 'linear-gradient(135deg, #064e3b, #047857)',
    url: 'https://my.eneo.cm/',
    tags: ['Full Stack', 'REST API'],
  },
  {
    name: 'Port Authority of Douala',
    desc: 'Digital platform for port logistics and vessel tracking',
    img: '/img/pad logo.jpg',
    bg: '/img/port autonome de dla back ground image .jpg',
    color: '#1e3a8a',
    gradient: 'linear-gradient(135deg, #0c1445, #1e3a8a)',
    url: 'https://www.pad.cm/',
    tags: ['JavaScript', 'Integration'],
  },
]

const ExperienceSection = () => {
  const { t } = useLang()
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true })
  const contentRef = useRef<HTMLDivElement>(null)
  const contentInView = useInView(contentRef, { once: true, margin: '-40px' })

  return (
    <div className="h-full overflow-y-auto" style={{ background: '#F5F1E9' }}>

      {/* ── SECTION HERO with slideshow + floating logos ── */}
      <div className="relative overflow-hidden" style={{ minHeight: 240 }} ref={heroRef}>
        <ExperienceHeroSlideshow />
        <div className="absolute inset-0 z-[6]" style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.82) 100%)',
        }} />
        <FloatingLogos />
        <motion.div className="relative z-10 px-8 lg:px-10 pt-10 pb-8"
          initial="hidden" animate={heroInView ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } }}>
          <motion.p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}
            variants={fadeUp}>
            {t('exp.heroLabel')}
          </motion.p>
          <motion.h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-3" variants={fadeUp}>{t('exp.heroTitle')}</motion.h2>
          <motion.div variants={fadeUp}>
            <TypingText
              text={t('exp.heroSub')}
              speed={30}
              delay={800}
              className="text-sm"
              style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 400, display: 'block' }}
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="px-6 lg:px-10 py-8" ref={contentRef}>
        <motion.div className="max-w-2xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate={contentInView ? 'visible' : 'hidden'}>

          {/* ── WORK EXPERIENCE ── */}
          <motion.div className="relative mb-10" variants={fadeUp}>
            {/* Section label */}
            <motion.div className="flex items-center gap-3 mb-5"
              initial={{ opacity: 0, x: -16 }}
              animate={contentInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] as const }}>
              <motion.div className="w-8 h-8 rounded-xl flex items-center justify-center"
                style={{ background: '#D8CBB844' }}
                whileHover={{ scale: 1.15, rotate: 8 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}>
                <Briefcase className="w-4 h-4" style={{ color: '#242321' }} />
              </motion.div>
              <div>
                <p className="text-xs font-bold text-gray-900">{t('exp.workExp')}</p>
                <p className="text-[10px]" style={{ color: '#898680' }}>{t('exp.workExpSub')}</p>
              </div>
            </motion.div>

            {/* Experience Card */}
            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 1px 20px rgba(0,0,0,0.07)' }}>
              {/* Hero header */}
              <div className="relative px-6 py-5" style={{
                background: '#242321',
              }}>
                <div className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05), transparent 50%)' }} />
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white/10 flex items-center justify-center flex-shrink-0"
                    style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                    <a href="https://zen.africa/" target="_blank" rel="noopener noreferrer"
                      aria-label={t('exp.visitZenAfrica')}
                      className="w-20 h-16 rounded-2xl overflow-hidden bg-white flex items-center justify-center flex-shrink-0 p-2 hover:opacity-90 transition-opacity">
                      <img src="/img/zen-africa-logo.png" alt="Zen Africa" className="w-full h-full object-contain" />
                    </a>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-black text-white leading-tight">{t('exp.fullStackDev')}</h3>
                    </div>
                    <a href="https://zen.africa/" target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold hover:text-white transition-colors"
                      style={{ color: 'rgba(255,255,255,0.5)' }}>
                      {t('exp.zenAfrica')} <ExternalLink className="h-3 w-3" />
                    </a>
                    <div className="flex flex-wrap items-center gap-3 mt-1.5">
                      <span className="flex items-center gap-1 text-[11px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
                        <Calendar className="w-3 h-3" /> 2025 — 2026
                      </span>
                      <span className="flex items-center gap-1 text-[11px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
                        <MapPin className="w-3 h-3" /> {t('exp.cameroon')}
                      </span>
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold"
                        style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.15)' }}>
                        {t('exp.internship')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Projects delivered */}
              <div className="bg-white">
                <div className="px-6 pt-5 pb-1">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-3.5 h-3.5 text-gray-400" />
                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">{t('exp.projectsDelivered')}</p>
                  </div>

                  <div className="grid gap-3 mb-5">
                    {deliveredProjects.map((proj, idx) => (
                      <motion.div key={idx}
                        onMouseEnter={() => setHoveredProject(idx)}
                        onMouseLeave={() => setHoveredProject(null)}
                        onClick={() => setExpandedProject(expandedProject === idx ? null : idx)}
                        className="rounded-xl overflow-hidden cursor-pointer"
                        style={{
                          border: `1px solid ${hoveredProject === idx ? proj.color + '30' : 'rgba(0,0,0,0.06)'}`,
                        }}
                        whileHover={{ y: -3, boxShadow: `0 8px 24px ${proj.color}18` }}
                        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      >
                        {/* Project header — always visible */}
                        <div className="flex items-center gap-3 px-4 py-3">
                          <div className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center flex-shrink-0"
                            style={{ background: proj.gradient }}>
                            <img src={proj.img} alt={proj.name} className="w-7 h-7 object-contain"
                              style={{ filter: 'brightness(1.1)' }} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-gray-900 truncate">{proj.name}</p>
                            <p className="text-[11px] text-gray-400 truncate">{proj.desc}</p>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <a href={proj.url} target="_blank" rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200"
                              style={{
                                background: hoveredProject === idx ? proj.color : '#F5F1E9',
                                color: hoveredProject === idx ? '#fff' : '#898680',
                              }}>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                            <ChevronRight className="w-4 h-4 transition-transform duration-200"
                              style={{
                                color: hoveredProject === idx ? proj.color : '#d1d5db',
                                transform: expandedProject === idx ? 'rotate(90deg)' : 'rotate(0deg)',
                              }} />
                          </div>
                        </div>

                        {/* Expanded details */}
                        <div className="overflow-hidden transition-all duration-300"
                          style={{
                            maxHeight: expandedProject === idx ? 120 : 0,
                            opacity: expandedProject === idx ? 1 : 0,
                          }}>
                          <div className="px-4 pb-3 pt-0">
                            <div className="relative h-16 rounded-lg overflow-hidden mb-2">
                              {proj.bg && (
                                <img src={proj.bg} alt="" className="absolute inset-0 w-full h-full object-cover" />
                              )}
                              <div className="absolute inset-0" style={{ background: `${proj.gradient}cc` }} />
                              <div className="relative z-10 flex items-center justify-center h-full">
                                <span className="text-[11px] font-bold text-white/80">{t('exp.liveProject')}</span>
                              </div>
                            </div>
                            <div className="flex gap-1.5">
                              {proj.tags.map((tag) => (
                                <span key={tag} className="px-2 py-0.5 rounded text-[10px] font-semibold"
                                  style={{ background: proj.color + '10', color: proj.color, border: `1px solid ${proj.color}20` }}>
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Highlights + Tech */}
                <div className="px-6 pb-5 border-t border-gray-50 pt-4">
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {[
                      { icon: '⚡', label: t('exp.components'), text: t('exp.componentsDesc') },
                      { icon: '🤝', label: t('exp.teamwork'), text: t('exp.teamworkDesc') },
                      { icon: '🚀', label: t('exp.deployment'), text: t('exp.deploymentDesc') },
                      { icon: '🎨', label: t('exp.uiux'), text: t('exp.uiuxDesc') },
                    ].map((item, idx) => (
                      <div key={idx} className="px-3 py-2.5 rounded-xl"
                        style={{ background: '#fafafa', border: '1px solid #f0f0f0' }}>
                        <div className="flex items-center gap-1.5 mb-1">
                          <span className="text-xs">{item.icon}</span>
                          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">{item.label}</span>
                        </div>
                        <p className="text-[11px] text-gray-600 leading-snug">{item.text}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { tag: 'React', color: '#6366f1' },
                      { tag: 'TypeScript', color: '#3b82f6' },
                      { tag: 'JavaScript', color: '#f59e0b' },
                      { tag: 'Node.js', color: '#10b981' },
                      { tag: 'Tailwind CSS', color: '#06b6d4' },
                      { tag: 'Git', color: '#f05032' },
                    ].map(({ tag, color }) => (
                      <motion.span key={tag} className="px-2.5 py-1 rounded-lg text-[11px] font-semibold"
                        style={{ background: color + '10', color: color, border: `1px solid ${color}20` }}
                        whileHover={{ scale: 1.08, y: -2 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── EDUCATION ── */}
          <motion.div className="relative" variants={fadeUp}>
            {/* Section label */}
            <motion.div className="flex items-center gap-3 mb-5"
              initial={{ opacity: 0, x: -16 }}
              animate={contentInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.25, 0.8, 0.25, 1] as const }}>
              <motion.div className="w-8 h-8 rounded-xl flex items-center justify-center"
                style={{ background: '#D8CBB844' }}
                whileHover={{ scale: 1.15, rotate: -8 }}
                transition={{ type: 'spring', stiffness: 400, damping: 15 }}>
                <GraduationCap className="w-4 h-4" style={{ color: '#242321' }} />
              </motion.div>
              <div>
                <p className="text-xs font-bold text-gray-900">{t('exp.educationLabel')}</p>
                <p className="text-[10px]" style={{ color: '#898680' }}>{t('exp.educationSub')}</p>
              </div>
            </motion.div>

            {/* Education Card */}
            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 1px 20px rgba(0,0,0,0.07)' }}>
              {/* Header */}
              <div className="relative px-6 py-5" style={{
                background: '#242321',
              }}>
                <div className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.05), transparent 50%)' }} />
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white/10 flex items-center justify-center flex-shrink-0"
                    style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                    <img src="/img/ictu%20logo.png" alt="ICT University" className="w-12 h-12 object-contain" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white leading-tight">{t('exp.bachelorICT')}</h3>
                    <p className="text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.5)' }}>{t('exp.ictUniversity')}</p>
                    <p className="text-[11px] mt-1" style={{ color: 'rgba(255,255,255,0.45)' }}>{t('exp.gceAdvancedLevel')}</p>
                    <div className="flex items-center gap-3 mt-1.5">
                      <span className="text-[11px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
                        {t('exp.softwareEngProgram')}
                      </span>
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold"
                        style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.15)' }}>
                        {t('exp.graduated')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="bg-white px-6 py-4">
                <div className="mb-4 flex justify-center overflow-hidden rounded-xl bg-[#F5F1E9] p-3">
                  <img
                    src="/img/software-engineering-graduation.png"
                    alt="Ndefo Kuate Paul Auguste's Software Engineering graduation stole"
                    className="max-h-64 w-full object-contain"
                  />
                </div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">{t('exp.keyCourses')}</p>
                <div className="flex flex-wrap gap-1.5">
                  {[t('exp.course.softEng'), t('exp.course.webDev'), t('exp.course.db'), t('exp.course.algo'), t('exp.course.pm'), t('exp.course.security')].map((course) => (
                    <motion.span key={course} className="px-2.5 py-1 rounded-lg text-[11px] font-semibold"
                      style={{ background: '#F5F1E9', color: '#6f6b64', border: '1px solid #D8CBB8' }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
                      {course}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  )
}

export default ExperienceSection
