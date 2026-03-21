import { useState } from 'react'
import { Search, X, Menu, Mail } from 'lucide-react'
import { ActiveSection } from '../App'

interface TopNavProps {
  activeSection: ActiveSection
  setActiveSection: (s: ActiveSection) => void
  menuOpen: boolean
  setMenuOpen: (v: boolean) => void
  searchQuery: string
  setSearchQuery: (v: string) => void
}

const navLinks: { label: string; key: ActiveSection }[] = [
  { label: 'Work', key: 'work' },
  { label: 'About', key: 'about' },
  { label: 'Experience', key: 'experience' },
  { label: 'Contact', key: 'contact' },
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

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 h-[60px] flex items-center justify-between px-5"
      style={{
        background: 'rgba(17,17,24,0.96)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
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
          My Portfolio
        </span>
      </div>

      {/* Center: nav tabs */}
      <nav className="hidden md:flex items-center p-1 rounded-2xl gap-0.5"
        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
        {navLinks.map((link) => (
          <button
            key={link.key}
            onClick={() => setActiveSection(link.key)}
            className="relative px-4 py-1.5 rounded-xl text-[13px] font-semibold transition-all duration-200"
            style={{
              color: activeSection === link.key ? '#111118' : 'rgba(255,255,255,0.5)',
              background: activeSection === link.key ? '#ffffff' : 'transparent',
            }}
          >
            {link.label}
          </button>
        ))}
      </nav>

      {/* Right: search + hire me */}
      <div className="flex items-center gap-2">
        <div className="flex items-center overflow-hidden rounded-xl transition-all duration-300"
          style={{
            width: searchOpen ? 180 : 36,
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
                placeholder="Search…"
                className="bg-transparent text-white text-xs outline-none w-full py-2"
                style={{ caretColor: '#6366f1' }}
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

        <a
          href="mailto:sixcomp8@gmail.com"
          className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-[13px] font-bold text-white transition-all duration-200 hover:opacity-80"
          style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
        >
          <Mail className="w-3.5 h-3.5" />
          Hire Me
        </a>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div
          className="absolute top-full left-0 right-0 md:hidden py-3 px-4 flex flex-col gap-1"
          style={{
            background: 'rgba(17,17,24,0.98)',
            borderBottom: '1px solid rgba(255,255,255,0.06)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.key}
              onClick={() => { setActiveSection(link.key); setMenuOpen(false) }}
              className="text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all"
              style={{
                color: activeSection === link.key ? '#111118' : 'rgba(255,255,255,0.6)',
                background: activeSection === link.key ? '#ffffff' : 'transparent',
              }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="mailto:sixcomp8@gmail.com"
            className="mt-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-white"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}
          >
            <Mail className="w-4 h-4" /> Hire Me
          </a>
        </div>
      )}
    </header>
  )
}

export default TopNav
