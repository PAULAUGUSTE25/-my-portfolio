import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Github, Linkedin } from 'lucide-react'
import { useLang } from '../i18n'
import ProfileLightbox from './ProfileLightbox'
import PhoneContacts from './PhoneContacts'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.8, 0.25, 1] as const } },
}

const MobileHero = () => {
  const { t } = useLang()
  const [lightboxOpen, setLightboxOpen] = useState(false)
  return (
    <div className="relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #242321 0%, #3b3833 100%)', minHeight: 300 }}>
      <div className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 20% 30%, rgba(216,203,184,0.16), transparent 60%)'
        }}
      />
      <motion.div className="relative z-10 p-6 flex gap-4 items-center"
        variants={stagger} initial="hidden" animate="show">
        <motion.div className="w-20 h-20 rounded-full flex-shrink-0 overflow-hidden shadow-xl cursor-pointer"
          style={{ border: '2px solid rgba(216,203,184,0.65)' }}
          variants={fadeUp}
          whileTap={{ scale: 0.95 }}
          onClick={() => setLightboxOpen(true)}>
          <img src="/img/profile-auguste.png" alt="Ndefo Paul Auguste" className="w-full h-full object-cover" style={{ objectPosition: 'center 24%' }} />
        </motion.div>
        <ProfileLightbox
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          src="/img/profile-auguste.png"
          alt="Ndefo Paul Auguste"
        />
        <div className="flex-1 pb-2">
          <motion.p className="text-[#D8CBB8] text-[10px] tracking-[0.18em] uppercase mb-1" variants={fadeUp}>{t('nav.portfolio')}</motion.p>
          <motion.h1 className="text-2xl font-black text-white leading-none mb-2" variants={fadeUp}>{t('mobile.title')}</motion.h1>
          <motion.p className="text-white/65 text-[11px] leading-relaxed mb-3" variants={fadeUp}>{t('mobile.subtitle')}</motion.p>
          <motion.div className="flex gap-2" variants={fadeUp}>
            <motion.a href="https://github.com/PAULAUGUSTE25" target="_blank" rel="noopener noreferrer"
              className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center"
              whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
              <Github className="w-3.5 h-3.5 text-white" />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/ndefo-paul-auguste" target="_blank" rel="noopener noreferrer"
              className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center"
              whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}>
              <Linkedin className="w-3.5 h-3.5 text-white" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
      <div className="relative z-10 px-6 pb-5">
        <a
          href="/cv-ndefo-paul-auguste.pdf"
          download="Ndefo-Paul-Auguste-CV.pdf"
          className="mb-3 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition-colors hover:bg-[#e8dfd2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D8CBB8]"
          style={{ background: '#D8CBB8', color: '#242321' }}
        >
          <Download className="h-4 w-4" />
          {t('about.downloadCv')}
        </a>
        <PhoneContacts variant="dark" />
      </div>
    </div>
  )
}

export default MobileHero
