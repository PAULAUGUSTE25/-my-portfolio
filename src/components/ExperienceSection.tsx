import { useState } from 'react'
import { Briefcase, GraduationCap, MapPin, Calendar, ChevronRight, ExternalLink, Sparkles } from 'lucide-react'

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
    desc: 'Full customer portal — billing, meter readings, outage reports',
    img: '/img/eneo logo.png',
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
    bg: '/img/poer autonome de doula back ground.jpg',
    color: '#1e3a8a',
    gradient: 'linear-gradient(135deg, #0c1445, #1e3a8a)',
    url: 'https://www.pad.cm/',
    tags: ['JavaScript', 'Integration'],
  },
]

const ExperienceSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  return (
    <div className="h-full overflow-y-auto" style={{ background: '#f4f4f6' }}>

      {/* ── SECTION HERO ── */}
      <div className="relative overflow-hidden" style={{ minHeight: 160 }}>
        <div className="absolute inset-0" style={{
          background: '#1a1a1a',
        }} />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 70% 50%, rgba(255,255,255,0.03), transparent 60%)',
        }} />
        <div className="relative z-10 px-8 lg:px-10 pt-10 pb-8">
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
            My Journey
          </p>
          <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-2">Experience</h2>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: 400 }}>
            From internship to production — building real-world applications at scale.
          </p>
        </div>
      </div>

      <div className="px-6 lg:px-10 py-8">
        <div className="max-w-2xl mx-auto">

          {/* ── WORK EXPERIENCE ── */}
          <div className="relative mb-10">
            {/* Section label */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.06)' }}>
                <Briefcase className="w-4 h-4" style={{ color: '#374151' }} />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">Work Experience</p>
                <p className="text-[10px] text-gray-400">Professional roles & contributions</p>
              </div>
            </div>

            {/* Experience Card */}
            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 1px 20px rgba(0,0,0,0.07)' }}>
              {/* Hero header */}
              <div className="relative px-6 py-5" style={{
                background: '#111111',
              }}>
                <div className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05), transparent 50%)' }} />
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white/10 flex items-center justify-center flex-shrink-0"
                    style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                    <img src="/img/zen%20africa%20log.png" alt="Zen Africa" className="w-12 h-12 object-contain" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-black text-white leading-tight">Full Stack Developer</h3>
                    </div>
                    <p className="text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.5)' }}>Zen Africa</p>
                    <div className="flex flex-wrap items-center gap-3 mt-1.5">
                      <span className="flex items-center gap-1 text-[11px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
                        <Calendar className="w-3 h-3" /> 2025 — 2026
                      </span>
                      <span className="flex items-center gap-1 text-[11px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
                        <MapPin className="w-3 h-3" /> Cameroon
                      </span>
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold"
                        style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.15)' }}>
                        Internship
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
                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">Projects Delivered</p>
                  </div>

                  <div className="grid gap-3 mb-5">
                    {deliveredProjects.map((proj, idx) => (
                      <div key={idx}
                        onMouseEnter={() => setHoveredProject(idx)}
                        onMouseLeave={() => setHoveredProject(null)}
                        onClick={() => setExpandedProject(expandedProject === idx ? null : idx)}
                        className="rounded-xl overflow-hidden cursor-pointer transition-all duration-300"
                        style={{
                          border: `1px solid ${hoveredProject === idx ? proj.color + '30' : 'rgba(0,0,0,0.06)'}`,
                          boxShadow: hoveredProject === idx ? `0 4px 20px ${proj.color}15` : '0 1px 4px rgba(0,0,0,0.04)',
                          transform: hoveredProject === idx ? 'translateY(-2px)' : 'none',
                        }}
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
                                background: hoveredProject === idx ? proj.color : '#f3f4f6',
                                color: hoveredProject === idx ? '#fff' : '#9ca3af',
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
                                <span className="text-[11px] font-bold text-white/80">Live Project ↗</span>
                              </div>
                            </div>
                            <div className="flex gap-1.5">
                              {proj.tags.map((t) => (
                                <span key={t} className="px-2 py-0.5 rounded text-[10px] font-semibold"
                                  style={{ background: proj.color + '10', color: proj.color, border: `1px solid ${proj.color}20` }}>
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlights + Tech */}
                <div className="px-6 pb-5 border-t border-gray-50 pt-4">
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {[
                      { icon: '⚡', label: 'Components', text: 'Built reusable React + TS components' },
                      { icon: '🤝', label: 'Teamwork', text: 'Agile workflow & code reviews' },
                      { icon: '🚀', label: 'Deployment', text: 'Production-ready applications' },
                      { icon: '🎨', label: 'UI/UX', text: 'Responsive, modern interfaces' },
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
                    {['React', 'TypeScript', 'JavaScript', 'Node.js', 'Tailwind CSS', 'Git'].map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-lg text-[11px] font-semibold"
                        style={{ background: 'rgba(0,0,0,0.04)', color: '#374151', border: '1px solid rgba(0,0,0,0.08)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── EDUCATION ── */}
          <div className="relative">
            {/* Section label */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.06)' }}>
                <GraduationCap className="w-4 h-4" style={{ color: '#374151' }} />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900">Education</p>
                <p className="text-[10px] text-gray-400">Academic background</p>
              </div>
            </div>

            {/* Education Card */}
            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 1px 20px rgba(0,0,0,0.07)' }}>
              {/* Header */}
              <div className="relative px-6 py-5" style={{
                background: '#111111',
              }}>
                <div className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.05), transparent 50%)' }} />
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white/10 flex items-center justify-center flex-shrink-0"
                    style={{ border: '1px solid rgba(255,255,255,0.1)' }}>
                    <img src="/img/ictu%20logo.png" alt="ICT University" className="w-12 h-12 object-contain" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-white leading-tight">Bachelor's in ICT</h3>
                    <p className="text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.5)' }}>ICT University</p>
                    <div className="flex items-center gap-3 mt-1.5">
                      <span className="text-[11px]" style={{ color: 'rgba(255,255,255,0.45)' }}>
                        Software Engineering Program
                      </span>
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-bold"
                        style={{ background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.15)' }}>
                        In Progress
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="bg-white px-6 py-4">
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-3">Key Courses</p>
                <div className="flex flex-wrap gap-1.5">
                  {['Software Engineering', 'Web Development', 'Database Systems', 'Algorithms & Data Structures', 'Project Management', 'Network Security'].map((course) => (
                    <span key={course} className="px-2.5 py-1 rounded-lg text-[11px] font-semibold"
                      style={{ background: 'rgba(0,0,0,0.04)', color: '#374151', border: '1px solid rgba(0,0,0,0.08)' }}>
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ExperienceSection
