import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, MapPin, Send, Github, Linkedin, MessageSquare, ArrowUpRight } from 'lucide-react'
import { useLang } from '../i18n'
import ContactHeroSlideshow from './ContactHeroSlideshow'
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

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const { t } = useLang()
  const heroRef = useRef<HTMLDivElement>(null)
  const heroInView = useInView(heroRef, { once: true })
  const contentRef = useRef<HTMLDivElement>(null)
  const contentInView = useInView(contentRef, { once: true, margin: '-40px' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailto = `mailto:ndefokuatepaulauguste@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}\n\nFrom: ${form.email}`
    window.location.href = mailto
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <div className="h-full overflow-y-auto" style={{ background: '#F5F1E9' }}>

      {/* ── SECTION HERO with slideshow + floating logos ── */}
      <div className="relative overflow-hidden" style={{ minHeight: 240 }} ref={heroRef}>
        <ContactHeroSlideshow />
        <div className="absolute inset-0 z-[6]" style={{
          background: 'linear-gradient(135deg, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.82) 100%)',
        }} />
        <FloatingLogos />
        <motion.div className="relative z-10 px-8 lg:px-10 pt-10 pb-8"
          initial="hidden" animate={heroInView ? 'visible' : 'hidden'}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } } }}>
          <motion.p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}
            variants={fadeUp}>
            {t('contact.heroLabel')}
          </motion.p>
          <motion.h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-3" variants={fadeUp}>{t('contact.heroTitle')}</motion.h2>
          <motion.div variants={fadeUp}>
            <TypingText
              text={t('contact.heroSub')}
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

          {/* ── CONTACT CARDS with gradient accents ── */}
          <motion.div className="grid grid-cols-2 gap-3 mb-6" variants={fadeUp}>
            {[
              { icon: Mail, label: t('about.email'), value: 'ndefokuatepaulauguste@gmail.com', href: 'mailto:ndefokuatepaulauguste@gmail.com', color: '#D8CBB8', gradient: 'linear-gradient(135deg, #898680, #D8CBB8)' },
              { icon: MapPin, label: t('contact.location'), value: t('contact.yaoundeCameroon'), href: null, color: '#898680', gradient: 'linear-gradient(135deg, #6f6b64, #D8CBB8)' },
            ].map((item) => (
              <motion.div key={item.label} className="rounded-2xl overflow-hidden"
                style={{ boxShadow: '0 1px 16px rgba(0,0,0,0.07)' }}
                whileHover={{ y: -5, boxShadow: `0 12px 30px ${item.color}20` }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                <div className="relative px-4 py-4" style={{ background: '#242321' }}>
                  <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.4), transparent 50%)' }} />
                  <div className="absolute bottom-0 left-0 right-0 h-1" style={{ background: item.gradient }} />
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <motion.div className="w-10 h-10 rounded-xl flex items-center justify-center mb-2"
                      style={{ background: `${item.color}20`, border: `1px solid ${item.color}30` }}
                      whileHover={{ scale: 1.15, rotate: 8 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 15 }}>
                      <item.icon className="w-5 h-5" style={{ color: item.color }} />
                    </motion.div>
                    <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: `${item.color}` }}>{item.label}</p>
                  </div>
                </div>
                <div className="bg-white px-3 py-3 text-center">
                  {item.href ? (
                    <a href={item.href} className="text-[11px] font-bold hover:underline truncate block" style={{ color: '#242321' }}>
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[11px] font-bold truncate" style={{ color: '#242321' }}>{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="mb-6" variants={fadeUp}>
            <PhoneContacts />
          </motion.div>

          {/* ── MESSAGE FORM ── */}
          <motion.div className="rounded-2xl overflow-hidden mb-6" style={{ boxShadow: '0 1px 20px rgba(0,0,0,0.07)' }}
            variants={fadeUp}>
            <div className="relative px-6 py-4" style={{
              background: '#242321',
            }}>
              <div className="relative z-10 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}>
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">{t('contact.sendMessage')}</h3>
                  <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.45)' }}>{t('contact.getBack')}</p>
                </div>
              </div>
            </div>

            <div className="bg-white px-6 py-5">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1.5">{t('contact.name')}</label>
                    <input
                      type="text" required
                      value={form.name}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder={t('contact.yourName')}
                      className="w-full px-4 py-2.5 rounded-xl text-sm text-gray-900 outline-none transition-all duration-200"
                      style={{
                        background: focusedField === 'name' ? '#FFFEFC' : '#F5F1E9',
                        border: focusedField === 'name' ? '2px solid #898680' : '2px solid #D8CBB8',
                        boxShadow: focusedField === 'name' ? '0 0 0 3px rgba(216,203,184,0.3)' : 'none',
                      }}
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1.5">{t('about.email')}</label>
                    <input
                      type="email" required
                      value={form.email}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder={t('contact.yourEmail')}
                      className="w-full px-4 py-2.5 rounded-xl text-sm text-gray-900 outline-none transition-all duration-200"
                      style={{
                        background: focusedField === 'email' ? '#FFFEFC' : '#F5F1E9',
                        border: focusedField === 'email' ? '2px solid #898680' : '2px solid #D8CBB8',
                        boxShadow: focusedField === 'email' ? '0 0 0 3px rgba(216,203,184,0.3)' : 'none',
                      }}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1.5">{t('contact.message')}</label>
                  <textarea
                    rows={4} required
                    value={form.message}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder={t('contact.messagePlaceholder')}
                    className="w-full px-4 py-2.5 rounded-xl text-sm text-gray-900 outline-none transition-all duration-200 resize-none"
                    style={{
                      background: focusedField === 'message' ? '#FFFEFC' : '#F5F1E9',
                      border: focusedField === 'message' ? '2px solid #898680' : '2px solid #D8CBB8',
                      boxShadow: focusedField === 'message' ? '0 0 0 3px rgba(216,203,184,0.3)' : 'none',
                    }}
                  />
                </div>
                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 text-white text-sm font-bold rounded-xl"
                  style={{ background: '#242321', color: '#FFFEFC' }}
                  whileHover={{ scale: 1.02, backgroundColor: '#898680', boxShadow: '0 8px 24px rgba(36,35,33,0.2)' }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  {sent ? t('contact.sent') : <><Send className="w-4 h-4" /> {t('contact.send')}</>}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* ── SOCIAL LINKS ── */}
          <motion.div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 1px 20px rgba(0,0,0,0.07)' }}
            variants={fadeUp}>
            <div className="bg-white px-6 py-5">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">{t('contact.connectWithMe')}</p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: Github, label: 'GitHub', sub: '@PAULAUGUSTE25', href: 'https://github.com/PAULAUGUSTE25', color: '#242321' },
                  { icon: Linkedin, label: 'LinkedIn', sub: 'NDEFO Paul Auguste', href: 'https://www.linkedin.com/in/ndefo-paul-auguste', color: '#898680' },
                  { icon: Mail, label: t('contact.email'), sub: 'ndefokuatepaulauguste@gmail.com', href: 'mailto:ndefokuatepaulauguste@gmail.com', color: '#6f6b64' },
                ].map((s) => (
                  <motion.a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="group flex items-center gap-3 px-3 py-3 rounded-xl"
                    style={{ background: '#fafafa', border: '1px solid #f0f0f0' }}
                    whileHover={{ y: -4, boxShadow: `0 8px 24px ${s.color}15`, borderColor: `${s.color}30` }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
                    <motion.div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: s.color + '15' }}
                      whileHover={{ scale: 1.15, rotate: 8 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 15 }}>
                      <s.icon className="w-4 h-4" style={{ color: s.color }} />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-gray-900">{s.label}</p>
                      <p className="text-[10px] truncate" style={{ color: s.color }}>{s.sub}</p>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-colors flex-shrink-0" style={{ color: `${s.color}60` }} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  )
}

export default ContactSection
