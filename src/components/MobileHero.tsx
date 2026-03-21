import { Mail, Github, Linkedin, Phone } from 'lucide-react'

const MobileHero = () => {
  return (
    <div className="relative overflow-hidden"
      style={{ background: '#1a1a1a', minHeight: 320 }}>
      <div className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 20% 30%, rgba(255,255,255,0.04), transparent 60%)'
        }}
      />
      <div className="relative z-10 p-6 flex gap-4 items-end">
        <div className="w-24 h-24 rounded-full flex-shrink-0 overflow-hidden shadow-xl"
          style={{ border: '2px solid rgba(255,255,255,0.15)' }}>
          <img src="/img/photo%20de%20profile%20.png" alt="Ndefo Paul Auguste" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1 pb-2">
          <p className="text-white/40 text-xs tracking-widest uppercase mb-1">Portfolios</p>
          <h1 className="text-3xl font-black text-white leading-none mb-2">Portfolio</h1>
          <p className="text-white/60 text-xs mb-3">Full Stack Developer — React, TS & JS</p>
          <div className="flex gap-2">
            <a href="mailto:sixcomp8@gmail.com"
              className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-black text-xs font-bold rounded-lg">
              <Mail className="w-3 h-3" /> Hire Me
            </a>
            <a href="https://github.com/PAULAUGUSTE25" target="_blank" rel="noopener noreferrer"
              className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center">
              <Github className="w-3.5 h-3.5 text-white" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center">
              <Linkedin className="w-3.5 h-3.5 text-white" />
            </a>
            <a href="tel:+237695584290"
              className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center">
              <Phone className="w-3.5 h-3.5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileHero
