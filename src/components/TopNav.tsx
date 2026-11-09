import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, Menu, Download } from 'lucide-react'
import { ActiveSection } from '../App'
import { useLang } from '../i18n'

interface TopNavProps {
  activeSection: ActiveSection
  setActiveSection: (s: ActiveSection) => void
  menuOpen: boolean
  setMenuOpen: (v: boolean) => void
  searchQuery: string
  setSearchQuery: (v: string) => void
}

const navKeys: { tKey: 'nav.work' | 'nav.about' | 'nav.experience' | 'nav.contact'; key: ActiveSection }[] = [
  { tKey: 'nav.work', key: 'work' },
  { tKey: 'nav.about', key: 'about' },
  { tKey: 'nav.experience', key: 'experience' },
  { tKey: 'nav.contact', key: 'contact' },
]

const TopNav = ({
  activeSection,
  setActiveSection,
  menuOpen,
  setMenuOpen,
  searchQuery,
  setSearchQuery,
}: TopNavProps) => {
  const [searchOpen, setSearchOpen] = useState(false)
  const { lang, setLang, t } = useLang()

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 h-[60px] flex items-center justify-between px-5"
      style={{
        background: 'rgba(36,35,33,0.97)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] as const }}
    >
      {/* Left: hamburger + logo */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
          style={{ background: 'rgba(255,255,255,0.05)' }}
          aria-label="Menu"
        >
          {menuOpen
            ? <X className="w-4 h-4 text-white" />
            : <Menu className="w-4 h-4 text-white" />}
        </button>

        <span className="text-sm font-black text-white tracking-tight select-none">
          {t('nav.portfolio')}
        </span>
      </div>

      {/* Center: nav tabs */}
      <nav className="hidden md:flex items-center p-1 rounded-2xl gap-0.5"
        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
        {navKeys.map((link) => (
          <button
            key={link.key}
            onClick={() => setActiveSection(link.key)}
            className="relative px-2.5 lg:px-4 py-1.5 rounded-xl text-[12px] lg:text-[13px] font-semibold transition-all duration-200"
            style={{
              color: activeSection === link.key ? '#242321' : 'rgba(255,254,252,0.68)',
              background: activeSection === link.key ? '#D8CBB8' : 'transparent',
            }}
          >
            {t(link.tKey)}
          </button>
        ))}
        <a
          href="/cv-ndefo-paul-auguste.pdf"
          download="Ndefo-Paul-Auguste-CV.pdf"
          className="inline-flex items-center gap-1.5 rounded-xl px-2.5 lg:px-3 py-1.5 text-[11px] lg:text-xs font-bold transition-colors hover:bg-[#e8dfd2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D8CBB8]"
          style={{ background: '#D8CBB8', color: '#242321' }}
        >
          <Download className="h-3.5 w-3.5 flex-shrink-0" />
          {t('nav.downloadCv')}
        </a>
      </nav>

      {/* Right: search + language toggle */}
      <div className="flex items-center gap-2">
        {/* Language toggle */}
        <button
          onClick={() => setLang(lang === 'en' ? 'fr' : 'en')}
          className="h-8 px-2.5 rounded-lg text-[11px] font-bold tracking-wide transition-all duration-200 hover:opacity-80 select-none"
          style={{
            background: 'rgba(255,255,255,0.08)',
            color: 'rgba(255,255,255,0.7)',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          {lang === 'en' ? 'FR' : 'EN'}
        </button>

        <div className="flex items-center overflow-hidden rounded-xl transition-all duration-300"
          style={{
            width: searchOpen ? 'min(180px, 38vw)' : 36,
            background: searchOpen ? 'rgba(255,255,255,0.08)' : 'transparent',
            border: searchOpen ? '1px solid rgba(255,255,255,0.12)' : '1px solid transparent',
          }}>
          {searchOpen ? (
            <div className="flex items-center gap-2 px-3 w-full">
              <Search className="w-3.5 h-3.5 flex-shrink-0" style={{ color: 'rgba(255,255,255,0.4)' }} />
              <input
                autoFocus
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('nav.search')}
                className="bg-transparent text-white text-xs outline-none w-full py-2"
                style={{ caretColor: '#D8CBB8' }}
              />
              <button onClick={() => { setSearchOpen(false); setSearchQuery('') }}>
                <X className="w-3 h-3 hover:text-white" style={{ color: 'rgba(255,255,255,0.35)' }} />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setSearchOpen(true)}
              className="w-9 h-9 flex items-center justify-center rounded-xl transition-colors hover:bg-white/10"
            >
              <Search className="w-4 h-4" style={{ color: 'rgba(255,255,255,0.5)' }} />
            </button>
          )}
        </div>

      </div>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 md:hidden py-3 px-4 flex flex-col gap-1"
            style={{
              background: 'rgba(36,35,33,0.99)',
              borderBottom: '1px solid rgba(216,203,184,0.18)',
              backdropFilter: 'blur(20px)',
            }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.25, 0.8, 0.25, 1] as const }}
          >
            {navKeys.map((link, idx) => (
              <motion.button
                key={link.key}
                onClick={() => { setActiveSection(link.key); setMenuOpen(false) }}
                className="text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all"
                style={{
                  color: activeSection === link.key ? '#242321' : 'rgba(255,254,252,0.72)',
                  background: activeSection === link.key ? '#D8CBB8' : 'transparent',
                }}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.25 }}
              >
                {t(link.tKey)}
              </motion.button>
            ))}
            <motion.a
              href="/cv-ndefo-paul-auguste.pdf"
              download="Ndefo-Paul-Auguste-CV.pdf"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-bold"
              style={{ background: '#D8CBB8', color: '#242321' }}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: navKeys.length * 0.05, duration: 0.25 }}
            >
              <Download className="h-4 w-4" />
              {t('nav.downloadCv')}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default TopNav
