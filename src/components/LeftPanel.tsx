import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink } from 'lucide-react'

const LeftPanel = () => {
  return (
    <aside
      className="relative hidden md:flex flex-col w-[320px] lg:w-[360px] xl:w-[400px] flex-shrink-0 h-full overflow-hidden"
      style={{
        backgroundImage: 'url(/img/profil%20back%20ground.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0" style={{ background: 'rgba(10,10,18,0.78)' }} />

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

      <div className="relative z-10 flex flex-col h-full px-7 pt-8 pb-8">

        {/* Avatar section */}
        <div className="mb-8">
          <div className="relative w-fit">
            <div
              className="w-[120px] h-[120px] rounded-full overflow-hidden select-none"
              style={{
                boxShadow: '0 4px 24px rgba(0,0,0,0.5), 0 0 0 3px rgba(255,255,255,0.15)',
              }}
            >
              <img
                src="/img/photo%20de%20profile%20.png"
                alt="Ndefo Paul Auguste"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Online dot */}
            <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2"
              style={{ borderColor: 'rgba(0,0,0,0.5)' }} />
          </div>
        </div>

        {/* Name & title */}
        <div className="mb-6">
          <h1 className="text-[22px] font-black text-white leading-tight tracking-tight mb-1">
            Ndefo Paul<br />Auguste
          </h1>
          <div className="flex items-center gap-2 mt-2">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold"
              style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.12)' }}>
              Full Stack Dev
            </span>
            <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold"
              style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.12)' }}>
              React · TS
            </span>
          </div>
        </div>

        {/* Bio */}
        <p className="text-[13px] leading-[1.7] mb-7"
          style={{ color: 'rgba(255,255,255,0.45)' }}>
          Building scalable web apps for real-world impact. Currently at{' '}
          <span style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 600 }}>ICT University</span>{' '}
          and open to new opportunities.
        </p>

        {/* Contact info */}
        <div className="space-y-3 mb-7">
          {[
            { icon: MapPin, text: 'Yaoundé, Cameroon' },
            { icon: Mail, text: 'sixcomp8@gmail.com', href: 'mailto:sixcomp8@gmail.com' },
            { icon: Phone, text: '+237 695 584 290', href: 'tel:+237695584290' },
          ].map(({ icon: Icon, text, href }) => (
            <div key={text} className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(255,255,255,0.06)' }}>
                <Icon className="w-3.5 h-3.5" style={{ color: 'rgba(255,255,255,0.5)' }} />
              </div>
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
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px mb-7" style={{ background: 'rgba(255,255,255,0.07)' }} />

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 mb-7">
          {[
            { value: '4+', label: 'Projects' },
            { value: '1+', label: 'Yr Exp.' },
            { value: '2+', label: 'Clients' },
          ].map(({ value, label }) => (
            <div key={label} className="rounded-xl py-3 px-2 text-center"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <p className="text-base font-black text-white">{value}</p>
              <p className="text-[10px] mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>{label}</p>
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className="flex gap-2.5 mb-8">
          {[
            { icon: Github, href: 'https://github.com/PAULAUGUSTE25', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:sixcomp8@gmail.com', label: 'Email' },
            { icon: Phone, href: 'tel:+237695584290', label: 'Phone' },
          ].map(({ icon: Icon, href, label }) => (
            <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer" aria-label={label}
              className="flex-1 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
            >
              <Icon className="w-4 h-4" style={{ color: 'rgba(255,255,255,0.6)' }} />
            </a>
          ))}
        </div>

        {/* CTA button */}
        <a
          href="mailto:sixcomp8@gmail.com"
          className="flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-bold transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
          style={{
            background: 'rgba(255,255,255,0.1)',
            color: '#fff',
            border: '1px solid rgba(255,255,255,0.18)',
          }}
        >
          <ExternalLink className="w-4 h-4" />
          Available for hire
        </a>
      </div>
    </aside>
  )
}

export default LeftPanel
