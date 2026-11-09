import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GraduationCap, MapPin, Mail, CalendarDays, Download, Code2, Layers, Globe, Users } from 'lucide-react'
import { useLang } from '../i18n'
import AboutHeroSlideshow from './AboutHeroSlideshow'
import FloatingLogos from './FloatingLogos'
import TypingText from './TypingText'
import PhoneContacts from './PhoneContacts'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.8, 0.25, 1] as const } },
}
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const skills = [
  { name: 'React', level: 95, color: '#242321' },
  { name: 'TypeScript', level: 90, color: '#898680' },
  { name: 'JavaScript', level: 95, color: '#D8CBB8' },
  { name: 'Node.js', level: 85, color: '#6f6b64' },
  { name: 'Tailwind CSS', level: 90, color: '#b5a58e' },
  { name: 'Git & GitHub', level: 88, color: '#4b4945' },
  { name: 'Python', level: 75, color: '#898680' },
  { name: 'Databases & Testing', level: 82, color: '#6f6b64' },
]

const AboutSection = () => {
  const { t } = useLang()
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true })
  const contentRef = useRef<HTMLDivElement>(null)
  const contentInView = useInView(contentRef, { once: true, margin: '-40px' })
  const skillsRef = useRef<HTMLDivElement>(null)
  const skillsInView = useInView(skillsRef, { once: true, margin: '-40px' })

  return (
    <div className="h-full overflow-y-auto" style={{ background: '#F5F1E9' }}>

      {/* ── SECTION HERO with slideshow + floating logos ── */}
      <div className="relative overflow-hidden" style={{ minHeight: 260 }} ref={heroRef}>
        <AboutHeroSlideshow />
        <div className="absolute inset-0 z-[6]" style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.8) 100%)',
        }} />
        <FloatingLogos />
        <motion.div className="relative z-10 px-8 lg:px-10 pt-10 pb-8"
          initial="hidden" animate={heroInView ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } }}>
          <motion.p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}
            variants={fadeUp}>
            {t('about.heroLabel')}
          </motion.p>
          <motion.h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-3" variants={fadeUp}>{t('about.heroTitle')}</motion.h2>
          <motion.div variants={fadeUp}>
            <TypingText
              text={t('about.heroSub')}
              speed={30}
              delay={800}
              className="text-sm"
              style={{ color: 'rgba(255,255,255,0.7)', maxWidth: 420, display: 'block' }}
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="px-6 lg:px-10 py-8" ref={contentRef}>
        <motion.div className="max-w-2xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate={contentInView ? 'visible' : 'hidden'}>

          {/* ── BIO CARD ── */}
          <motion.div className="rounded-2xl overflow-hidden mb-6" style={{ boxShadow: '0 1px 20px rgba(0,0,0,0.07)' }}
            variants={fadeUp}>
            <div className="relative px-6 py-5" style={{
              background: '#242321',
            }}>
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0"
                  style={{ border: '2px solid rgba(255,255,255,0.1)', boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }}>
                  <img src="/img/profile-auguste.png" alt="Ndefo Paul Auguste" className="w-full h-full object-cover" style={{ objectPosition: 'center 24%' }} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-black text-white leading-tight">Ndefo Kuate Paul Auguste</h3>
                  <p className="text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.5)' }}>{t('mobile.subtitle')}</p>
                  <p className="text-[11px] mt-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>Yaoundé, Cameroon</p>
                </div>
                <img
                  src="/img/software-engineering-graduation.png"
                  alt="Ndefo Kuate Paul Auguste's Software Engineering graduation stole"
                  className="hidden sm:block h-20 w-16 flex-shrink-0 rounded-lg object-cover object-center"
                />
              </div>
            </div>
            <div className="bg-white px-6 py-5">
              <p className="text-sm text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t('about.bio1') }} />
              <p className="text-sm text-gray-600 leading-relaxed mt-3"
                dangerouslySetInnerHTML={{ __html: t('about.bio2') }} />
              <a
                href="/cv-ndefo-paul-auguste.pdf"
                download="Ndefo-Paul-Auguste-CV.pdf"
                className="mt-5 inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#3b3833] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#242321]"
                style={{ background: '#242321' }}
              >
                <Download className="h-4 w-4" />
                {t('about.downloadCv')}
              </a>
            </div>
          </motion.div>

          {/* ── INFO GRID with gradient accents ── */}
          <motion.div className="grid grid-cols-2 gap-3 mb-6" variants={fadeUp}>
            {[
              { icon: GraduationCap, label: t('about.education'), value: t('about.university'), sub: t('about.degree'), color: '#242321', gradient: 'linear-gradient(135deg, #242321, #898680)' },
              { icon: MapPin, label: t('about.location'), value: t('about.city'), sub: t('about.country'), color: '#898680', gradient: 'linear-gradient(135deg, #898680, #D8CBB8)' },
              { icon: Mail, label: t('about.email'), value: 'ndefokuatepaulauguste@gmail.com', sub: t('about.availableWork'), color: '#6f6b64', gradient: 'linear-gradient(135deg, #6f6b64, #b5a58e)' },
              { icon: CalendarDays, label: t('about.birthDateLabel'), value: '28/08/2000', sub: t('about.birthDateSub'), color: '#b5a58e', gradient: 'linear-gradient(135deg, #898680, #D8CBB8)' },
            ].map((item) => (
              <motion.div key={item.label} className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 1px 12px rgba(0,0,0,0.05)' }}
                whileHover={{ y: -4, boxShadow: `0 8px 24px ${item.color}20` }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                <div className="h-1.5" style={{ background: item.gradient }} />
                <div className="bg-white px-4 py-4">
                  <div className="flex items-center gap-3 mb-2">
                    <motion.div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: item.color + '15' }}
                      whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                      transition={{ duration: 0.4 }}>
                      <item.icon className="w-4 h-4" style={{ color: item.color }} />
                    </motion.div>
                    <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: item.color }}>{item.label}</p>
                  </div>
                  <p className="text-sm font-bold text-gray-900 truncate">{item.value}</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">{item.sub}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="mb-6" variants={fadeUp}>
            <PhoneContacts />
          </motion.div>

          <motion.div className="rounded-2xl bg-white px-5 py-4 mb-6 flex flex-wrap items-center justify-between gap-3"
            style={{ boxShadow: '0 1px 12px rgba(0,0,0,0.05)' }}
            variants={fadeUp}>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: '#D8CBB833' }}>
                <Globe className="w-4 h-4" style={{ color: '#6f6b64' }} />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">{t('about.languages')}</p>
                <p className="text-[11px] text-gray-400">{t('about.bilingual')}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {[t('about.english'), t('about.french')].map((language) => (
                <span key={language} className="rounded-full px-3 py-1.5 text-[11px] font-semibold"
                  style={{ background: '#F5F1E9', color: '#242321', border: '1px solid #D8CBB8' }}>
                  {language}
                </span>
              ))}
            </div>
          </motion.div>

          {/* ── WHAT I DO — with animated icons ── */}
          <motion.div className="rounded-2xl overflow-hidden mb-6" style={{ boxShadow: '0 1px 20px rgba(0,0,0,0.07)' }}
            variants={fadeUp}>
            <div className="bg-white px-6 py-5">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">{t('about.whatIDo')}</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Code2, title: t('about.frontendDev'), desc: t('about.frontendDesc'), color: '#242321' },
                  { icon: Layers, title: t('about.fullStack'), desc: t('about.fullStackDesc'), color: '#6f6b64' },
                  { icon: Globe, title: t('about.webApps'), desc: t('about.webAppsDesc'), color: '#898680' },
                  { icon: Users, title: t('about.collaboration'), desc: t('about.collaborationDesc'), color: '#b5a58e' },
                ].map((item, idx) => (
                    <motion.div key={idx} className="group px-4 py-3.5 rounded-xl"
                      style={{ background: '#fafafa', border: '1px solid #f0f0f0' }}
                      whileHover={{ y: -3, boxShadow: `0 6px 20px ${item.color}15`, borderColor: `${item.color}30` }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                      <div className="flex items-center gap-2 mb-1.5">
                        <motion.div className="w-7 h-7 rounded-lg flex items-center justify-center"
                          style={{ background: item.color + '15' }}
                          whileHover={{ scale: 1.2, rotate: idx % 2 === 0 ? 8 : -8 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 15 }}>
                          <item.icon className="w-3.5 h-3.5" style={{ color: item.color }} />
                        </motion.div>
                        <p className="text-xs font-bold text-gray-900">{item.title}</p>
                      </div>
                      <p className="text-[11px] text-gray-500 leading-snug">{item.desc}</p>
                    </motion.div>
                  ))}
              </div>
            </div>
          </motion.div>

          {/* ── OTHER SKILLS ── */}
          <motion.div className="rounded-2xl overflow-hidden mb-6" style={{ boxShadow: '0 1px 20px rgba(0,0,0,0.07)' }}
            variants={fadeUp}>
            <div className="bg-white px-6 py-5">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">{t('about.otherSkills')}</p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: '📊', title: t('about.excel'), desc: t('about.excelDesc') },
                  { icon: '🚗', title: t('about.driving'), desc: t('about.drivingDesc') },
                  { icon: '🎨', title: t('about.canva'), desc: t('about.canvaDesc') },
                ].map((item, idx) => (
                  <motion.div key={idx} className="px-4 py-3.5 rounded-xl text-center"
                    style={{ background: '#fafafa', border: '1px solid #f0f0f0' }}
                    whileHover={{ y: -3, scale: 1.03 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                    <span className="text-xl block mb-1.5">{item.icon}</span>
                    <p className="text-xs font-bold text-gray-900 mb-0.5">{item.title}</p>
                    <p className="text-[10px] text-gray-400 leading-snug">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── APTITUDES ── */}
          <motion.div className="rounded-2xl overflow-hidden mb-6" style={{ boxShadow: '0 1px 20px rgba(0,0,0,0.07)' }}
            variants={fadeUp}>
            <div className="bg-white px-6 py-5">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">{t('about.aptitudes')}</p>
              <div className="flex flex-wrap gap-2">
                {[
                  t('about.fastLearner'),
                  t('about.teamPlayer'),
                  t('about.problemSolver'),
                  t('about.adaptable'),
                  t('about.detailOriented'),
                  t('about.selfMotivated'),
                  t('about.communication'),
                  t('about.timeManagement'),
                ].map((apt) => (
                  <motion.span key={apt} className="px-3.5 py-1.5 rounded-xl text-xs font-semibold cursor-default"
                    style={{ background: '#242321', color: '#FFFEFC' }}
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
                    {apt}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── SKILLS BAR CHART ── */}
          <motion.div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 1px 20px rgba(0,0,0,0.07)' }}
            variants={fadeUp} ref={skillsRef}>
            <div className="bg-white px-6 py-5">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-5">{t('about.technicalSkills')}</p>
              <div className="flex items-end justify-between gap-2.5" style={{ height: 220 }}>
                {skills.map((skill, idx) => (
                  <div key={skill.name}
                    className="flex-1 flex flex-col items-center gap-2 h-full justify-end cursor-pointer"
                    onMouseEnter={() => setHoveredSkill(idx)}
                    onMouseLeave={() => setHoveredSkill(null)}>
                    <span className="text-[11px] font-black transition-all duration-200"
                      style={{ color: hoveredSkill === idx ? '#111' : '#9ca3af' }}>
                      {skill.level}%
                    </span>
                    <div className="w-full rounded-xl relative overflow-hidden" style={{ background: '#f3f4f6', height: 160 }}>
                      <motion.div
                        className="absolute bottom-0 w-full rounded-xl"
                        initial={{ height: 0 }}
                        animate={skillsInView ? { height: `${(skill.level / 100) * 160}px` } : { height: 0 }}
                        transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.25, 0.8, 0.25, 1] as const }}
                        style={{
                          background: hoveredSkill === idx
                            ? `linear-gradient(to top, ${skill.color}, ${skill.color})`
                            : `linear-gradient(to top, ${skill.color}aa, ${skill.color}66)`,
                          boxShadow: hoveredSkill === idx ? `0 -4px 12px ${skill.color}30` : 'none',
                          transform: hoveredSkill === idx ? 'scaleX(1.08)' : 'scaleX(1)',
                          transition: 'background 0.3s, box-shadow 0.3s, transform 0.3s',
                        }}
                      />
                    </div>
                    <span className="text-[10px] font-semibold text-center leading-tight whitespace-nowrap transition-all duration-200"
                      style={{ color: hoveredSkill === idx ? '#111' : '#6b7280' }}>
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  )
}

export default AboutSection
