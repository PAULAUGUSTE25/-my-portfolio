import { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, MapPin, Globe2 } from 'lucide-react'
import { useLang } from '../i18n'
import ProfileLightbox from './ProfileLightbox'
import PhoneContacts from './PhoneContacts'

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.8, 0.25, 1] as const } },
}

const LeftPanel = () => {
  const { t } = useLang()
  const [lightboxOpen, setLightboxOpen] = useState(false)
  return (
    <aside
      className="relative hidden md:flex flex-col w-[320px] lg:w-[360px] xl:w-[400px] flex-shrink-0 h-full overflow-y-auto overflow-x-hidden scrollbar-hide"
      style={{
        backgroundImage: 'url(/img/profil%20back%20ground.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0" style={{ background: 'rgba(36,35,33,0.84)' }} />

      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'rgba(255,255,255,0.12)' }} />

      {/* Background noise texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }}
      />

      <motion.div
        className="relative z-10 flex flex-col h-full px-7 pt-8 pb-8"
        variants={stagger}
        initial="hidden"
        animate="show"
      >

        {/* Avatar section */}
        <motion.div className="mb-8" variants={fadeUp}>
          <div className="relative w-fit">
            <motion.div
              className="w-[120px] h-[120px] rounded-full overflow-hidden select-none cursor-pointer"
              style={{
                boxShadow: '0 4px 24px rgba(0,0,0,0.5), 0 0 0 3px rgba(255,255,255,0.15)',
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 8px 32px rgba(0,0,0,0.6), 0 0 0 3px rgba(255,255,255,0.25)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              onClick={() => setLightboxOpen(true)}
            >
              <img
                src="/img/profile-auguste.png"
                alt="Ndefo Paul Auguste"
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 24%' }}
              />
            </motion.div>
            <ProfileLightbox
              isOpen={lightboxOpen}
              onClose={() => setLightboxOpen(false)}
              src="/img/profile-auguste.png"
              alt="Ndefo Paul Auguste"
            />
            {/* Online dot */}
            <motion.span
              className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2"
              style={{ borderColor: 'rgba(0,0,0,0.5)' }}
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>

        {/* Name & title */}
        <motion.div className="mb-6" variants={fadeUp}>
          <h1 className="text-[22px] font-black text-white leading-tight tracking-tight mb-1">
            Ndefo Paul<br />Auguste
          </h1>
          <div className="flex items-center gap-2 mt-2">
            <motion.span className="px-2.5 py-1 rounded-md text-[11px] font-semibold"
              style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.12)' }}
              whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.14)' }}>
              {t('mobile.fullStack')}
            </motion.span>
            <motion.span className="px-2.5 py-1 rounded-md text-[11px] font-semibold"
              style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.12)' }}
              whileHover={{ scale: 1.05, background: 'rgba(255,255,255,0.14)' }}>
              {t('mobile.softwareEngineer')}
            </motion.span>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.p className="text-[13px] leading-[1.7] mb-7" variants={fadeUp}
          style={{ color: 'rgba(255,255,255,0.45)' }}>
          <span dangerouslySetInnerHTML={{ __html: t('left.bio') }} />
        </motion.p>

        <motion.div className="flex items-center gap-2.5 mb-7 px-3 py-2.5 rounded-xl"
          style={{ background: 'rgba(216,203,184,0.12)', border: '1px solid rgba(216,203,184,0.25)' }}
          variants={fadeUp}>
          <Globe2 className="w-4 h-4 flex-shrink-0" style={{ color: '#D8CBB8' }} />
          <span className="text-xs font-semibold" style={{ color: '#F5F1E9' }}>{t('left.languages')}</span>
        </motion.div>

        {/* Contact info */}
        <motion.div className="space-y-3 mb-7" variants={fadeUp}>
          {[
            { icon: MapPin, text: 'Yaoundé, Cameroon' },
            { icon: Mail, text: 'ndefokuatepaulauguste@gmail.com', href: 'mailto:ndefokuatepaulauguste@gmail.com' },
          ].map(({ icon: Icon, text, href }) => (
            <motion.div key={text} className="flex items-center gap-3"
              whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 400, damping: 25 }}>
              <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'rgba(255,255,255,0.4)' }} />
              {href ? (
                <a href={href} className="text-xs font-medium hover:underline truncate"
                  style={{ color: 'rgba(255,255,255,0.55)' }}>
                  {text}
                </a>
              ) : (
                <span className="text-xs font-medium truncate" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  {text}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="mb-7" variants={fadeUp}>
          <PhoneContacts variant="dark" />
        </motion.div>

        {/* Divider */}
        <motion.div className="h-px mb-7" style={{ background: 'rgba(255,255,255,0.07)' }} variants={fadeUp} />

        {/* Stats row */}
        <motion.div className="grid grid-cols-3 gap-3 mb-7" variants={fadeUp}>
          {[
            { value: '4+', label: t('left.projects') },
            { value: '1+', label: t('left.yrExp') },
            { value: '2+', label: t('left.clients') },
          ].map(({ value, label }) => (
            <motion.div key={label} className="rounded-xl py-3 px-2 text-center"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
              whileHover={{ scale: 1.06, background: 'rgba(255,255,255,0.08)' }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}>
              <p className="text-base font-black text-white">{value}</p>
              <p className="text-[10px] mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>{label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Social links */}
        <motion.div className="flex gap-2.5 mb-8" variants={fadeUp}>
          {[
            { icon: Github, href: 'https://github.com/PAULAUGUSTE25', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/ndefo-paul-auguste', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:ndefokuatepaulauguste@gmail.com', label: 'Email' },
            { icon: Phone, href: 'tel:+237695584290', label: 'Call Orange' },
            { icon: Phone, href: 'tel:+237654773746', label: 'Call MTN' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer" aria-label={label}
              className="flex-1 h-10 rounded-xl flex items-center justify-center"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
              whileHover={{ scale: 1.1, background: 'rgba(255,255,255,0.12)' }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <Icon className="w-4 h-4" style={{ color: 'rgba(255,255,255,0.6)' }} />
            </motion.a>
          ))}
        </motion.div>

      </motion.div>
    </aside>
  )
}

export default LeftPanel
