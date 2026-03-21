import { useState } from 'react'
import { GraduationCap, MapPin, Mail, Phone, Code2, Layers, Globe, Users } from 'lucide-react'

const skills = [
  { name: 'React', level: 95, color: '#6366f1' },
  { name: 'TypeScript', level: 90, color: '#3b82f6' },
  { name: 'JavaScript', level: 95, color: '#f59e0b' },
  { name: 'Node.js', level: 85, color: '#10b981' },
  { name: 'Tailwind CSS', level: 90, color: '#06b6d4' },
  { name: 'Git & GitHub', level: 88, color: '#8b5cf6' },
]

const AboutSection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null)

  return (
    <div className="h-full overflow-y-auto" style={{ background: '#f4f4f6' }}>

      {/* ── SECTION HERO ── */}
      <div className="relative overflow-hidden" style={{ minHeight: 180 }}>
        <div className="absolute inset-0" style={{
          background: '#1a1a1a',
        }} />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 30% 50%, rgba(255,255,255,0.03), transparent 60%)',
        }} />
        <div className="relative z-10 px-8 lg:px-10 pt-10 pb-8">
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Who I Am
          </p>
          <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-2">About Me</h2>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: 420 }}>
            Passionate developer turning ideas into scalable, real-world applications.
          </p>
        </div>
      </div>

      <div className="px-6 lg:px-10 py-8">
        <div className="max-w-2xl mx-auto">

          {/* ── BIO CARD ── */}
          <div className="rounded-2xl overflow-hidden mb-6" style={{ boxShadow: '0 1px 20px rgba(0,0,0,0.07)' }}>
            <div className="relative px-6 py-5" style={{
              background: '#111111',
            }}>
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0"
                  style={{ border: '2px solid rgba(255,255,255,0.1)', boxShadow: '0 4px 16px rgba(0,0,0,0.3)' }}>
                  <img src="/img/photo%20de%20profile%20.png" alt="Ndefo Paul Auguste" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-white leading-tight">Ndefo Paul Auguste</h3>
                  <p className="text-sm font-semibold" style={{ color: 'rgba(255,255,255,0.5)' }}>Full Stack Developer</p>
                  <p className="text-[11px] mt-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>Yaoundé, Cameroon</p>
                </div>
              </div>
            </div>
            <div className="bg-white px-6 py-5">
              <p className="text-sm text-gray-600 leading-relaxed">
                I'm a passionate Full Stack Developer born on <span className="font-semibold text-gray-900">August 28</span> in Yaoundé, Cameroon.
                Currently pursuing a <span className="font-semibold text-gray-900">Bachelor's Degree in ICT</span> at ICT University
                under the Software Engineering program since 2021.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mt-3">
                My internship at <span className="font-semibold text-gray-900">Zen Africa</span> allowed me to work on
                enterprise-level projects for major organizations including <span className="font-semibold text-gray-900">ENEO</span>,
                <span className="font-semibold text-gray-900"> 33 Export</span>, and the <span className="font-semibold text-gray-900">Port Authority of Douala</span>.
              </p>
            </div>
          </div>

          {/* ── INFO GRID ── */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {[
              { icon: GraduationCap, label: 'Education', value: 'ICT University', sub: 'B.Sc. Software Engineering · Since 2021', color: '#374151' },
              { icon: MapPin, label: 'Location', value: 'Yaoundé', sub: 'Cameroon', color: '#374151' },
              { icon: Mail, label: 'Email', value: 'sixcomp8@gmail.com', sub: 'Available for work', color: '#374151' },
              { icon: Phone, label: 'Phone', value: '+237 695 584 290', sub: 'WhatsApp OK', color: '#374151' },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 1px 12px rgba(0,0,0,0.05)' }}>
                <div className="h-1" style={{ background: item.color }} />
                <div className="bg-white px-4 py-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: item.color + '12' }}>
                      <item.icon className="w-4 h-4" style={{ color: item.color }} />
                    </div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{item.label}</p>
                  </div>
                  <p className="text-sm font-bold text-gray-900 truncate">{item.value}</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── WHAT I DO ── */}
          <div className="rounded-2xl overflow-hidden mb-6" style={{ boxShadow: '0 1px 20px rgba(0,0,0,0.07)' }}>
            <div className="bg-white px-6 py-5">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">What I Do</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Code2, title: 'Frontend Dev', desc: 'React, TypeScript, modern UI', color: '#1f2937' },
                  { icon: Layers, title: 'Full Stack', desc: 'Node.js, REST APIs, databases', color: '#1f2937' },
                  { icon: Globe, title: 'Web Apps', desc: 'Responsive, scalable platforms', color: '#1f2937' },
                  { icon: Users, title: 'Collaboration', desc: 'Agile teams, code reviews', color: '#1f2937' },
                ].map((item, idx) => (
                  <div key={idx} className="px-4 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: '#fafafa', border: '1px solid #f0f0f0' }}>
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="w-7 h-7 rounded-lg flex items-center justify-center"
                        style={{ background: item.color + '12' }}>
                        <item.icon className="w-3.5 h-3.5" style={{ color: item.color }} />
                      </div>
                      <p className="text-xs font-bold text-gray-900">{item.title}</p>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── OTHER SKILLS ── */}
          <div className="rounded-2xl overflow-hidden mb-6" style={{ boxShadow: '0 1px 20px rgba(0,0,0,0.07)' }}>
            <div className="bg-white px-6 py-5">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">Other Skills</p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: '📊', title: 'Microsoft Excel', desc: 'Data analysis, pivot tables, formulas' },
                  { icon: '🚗', title: 'Driving License', desc: 'Excellent driver, category B' },
                  { icon: '🎨', title: 'Canva', desc: 'Graphic design, social media visuals' },
                ].map((item, idx) => (
                  <div key={idx} className="px-4 py-3.5 rounded-xl text-center transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: '#fafafa', border: '1px solid #f0f0f0' }}>
                    <span className="text-xl block mb-1.5">{item.icon}</span>
                    <p className="text-xs font-bold text-gray-900 mb-0.5">{item.title}</p>
                    <p className="text-[10px] text-gray-400 leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── APTITUDES ── */}
          <div className="rounded-2xl overflow-hidden mb-6" style={{ boxShadow: '0 1px 20px rgba(0,0,0,0.07)' }}>
            <div className="bg-white px-6 py-5">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">Aptitudes</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Fast Learner',
                  'Team Player',
                  'Problem Solver',
                  'Adaptable',
                  'Detail-Oriented',
                  'Self-Motivated',
                  'Communication',
                  'Time Management',
                ].map((apt) => (
                  <span key={apt} className="px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5 cursor-default"
                    style={{ background: '#111111', color: '#ffffff' }}>
                    {apt}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── SKILLS BAR CHART ── */}
          <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 1px 20px rgba(0,0,0,0.07)' }}>
            <div className="bg-white px-6 py-5">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-5">Technical Skills</p>
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
                      <div
                        className="absolute bottom-0 w-full rounded-xl transition-all duration-500 ease-out"
                        style={{
                          height: `${(skill.level / 100) * 160}px`,
                          background: hoveredSkill === idx
                            ? `linear-gradient(to top, ${skill.color}, ${skill.color})`
                            : `linear-gradient(to top, ${skill.color}aa, ${skill.color}66)`,
                          boxShadow: hoveredSkill === idx ? `0 -4px 12px ${skill.color}30` : 'none',
                          transform: hoveredSkill === idx ? 'scaleX(1.08)' : 'scaleX(1)',
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
          </div>

        </div>
      </div>
    </div>
  )
}

export default AboutSection
