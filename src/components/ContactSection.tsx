import { useState } from 'react'
import { Mail, MapPin, Phone, Send, Github, Linkedin, MessageSquare, ArrowUpRight } from 'lucide-react'

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailto = `mailto:sixcomp8@gmail.com?subject=Portfolio Contact from ${form.name}&body=${encodeURIComponent(form.message)}\n\nFrom: ${form.email}`
    window.location.href = mailto
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <div className="h-full overflow-y-auto" style={{ background: '#f4f4f6' }}>

      {/* ── SECTION HERO ── */}
      <div className="relative overflow-hidden" style={{ minHeight: 180 }}>
        <div className="absolute inset-0" style={{
          background: '#1a1a1a',
        }} />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse at 70% 40%, rgba(255,255,255,0.03), transparent 60%)',
        }} />
        <div className="relative z-10 px-8 lg:px-10 pt-10 pb-8">
          <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Let's Talk
          </p>
          <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-2">Get In Touch</h2>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.55)', maxWidth: 400 }}>
            Open to new opportunities, collaborations, and interesting projects.
          </p>
        </div>
      </div>

      <div className="px-6 lg:px-10 py-8">
        <div className="max-w-2xl mx-auto">

          {/* ── CONTACT CARDS ── */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { icon: Mail, label: 'Email', value: 'sixcomp8@gmail.com', href: 'mailto:sixcomp8@gmail.com', color: '#374151', gradient: '#111111' },
              { icon: Phone, label: 'Phone', value: '+237 695 584 290', href: 'tel:+237695584290', color: '#374151', gradient: '#111111' },
              { icon: MapPin, label: 'Location', value: 'Yaoundé, Cameroon', href: null, color: '#374151', gradient: '#111111' },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl overflow-hidden transition-all duration-200 hover:-translate-y-1"
                style={{ boxShadow: '0 1px 16px rgba(0,0,0,0.07)' }}>
                <div className="relative px-4 py-4" style={{ background: item.gradient }}>
                  <div className="absolute inset-0 opacity-10"
                    style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(255,255,255,0.4), transparent 50%)' }} />
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-2"
                      style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.15)' }}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-[10px] font-bold uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.5)' }}>{item.label}</p>
                  </div>
                </div>
                <div className="bg-white px-3 py-3 text-center">
                  {item.href ? (
                    <a href={item.href} className="text-[11px] font-bold hover:underline truncate block" style={{ color: item.color }}>
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[11px] font-bold text-gray-800 truncate">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* ── MESSAGE FORM ── */}
          <div className="rounded-2xl overflow-hidden mb-6" style={{ boxShadow: '0 1px 20px rgba(0,0,0,0.07)' }}>
            <div className="relative px-6 py-4" style={{
              background: '#111111',
            }}>
              <div className="relative z-10 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.15)' }}>
                  <MessageSquare className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Send a Message</h3>
                  <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.45)' }}>I'll get back to you soon</p>
                </div>
              </div>
            </div>

            <div className="bg-white px-6 py-5">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1.5">Name</label>
                    <input
                      type="text" required
                      value={form.name}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-2.5 rounded-xl text-sm text-gray-900 outline-none transition-all duration-200"
                      style={{
                        background: focusedField === 'name' ? '#fff' : '#f9fafb',
                        border: focusedField === 'name' ? '2px solid #374151' : '2px solid #e5e7eb',
                        boxShadow: focusedField === 'name' ? '0 0 0 3px rgba(55,65,81,0.12)' : 'none',
                      }}
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1.5">Email</label>
                    <input
                      type="email" required
                      value={form.email}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-2.5 rounded-xl text-sm text-gray-900 outline-none transition-all duration-200"
                      style={{
                        background: focusedField === 'email' ? '#fff' : '#f9fafb',
                        border: focusedField === 'email' ? '2px solid #374151' : '2px solid #e5e7eb',
                        boxShadow: focusedField === 'email' ? '0 0 0 3px rgba(55,65,81,0.12)' : 'none',
                      }}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1.5">Message</label>
                  <textarea
                    rows={4} required
                    value={form.message}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-2.5 rounded-xl text-sm text-gray-900 outline-none transition-all duration-200 resize-none"
                    style={{
                      background: focusedField === 'message' ? '#fff' : '#f9fafb',
                      border: focusedField === 'message' ? '2px solid #374151' : '2px solid #e5e7eb',
                      boxShadow: focusedField === 'message' ? '0 0 0 3px rgba(55,65,81,0.12)' : 'none',
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 text-white text-sm font-bold rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                  style={{ background: '#111111' }}
                >
                  {sent ? '✓ Message Sent!' : <><Send className="w-4 h-4" /> Send Message</>}
                </button>
              </form>
            </div>
          </div>

          {/* ── SOCIAL LINKS ── */}
          <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 1px 20px rgba(0,0,0,0.07)' }}>
            <div className="bg-white px-6 py-5">
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-4">Connect With Me</p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: Github, label: 'GitHub', sub: '@PAULAUGUSTE25', href: 'https://github.com/PAULAUGUSTE25', color: '#1f2937' },
                  { icon: Linkedin, label: 'LinkedIn', sub: 'Connect', href: 'https://linkedin.com', color: '#1f2937' },
                  { icon: Mail, label: 'Email', sub: 'sixcomp8@gmail.com', href: 'mailto:sixcomp8@gmail.com', color: '#1f2937' },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="group flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 hover:-translate-y-1"
                    style={{ background: '#fafafa', border: '1px solid #f0f0f0' }}>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-110"
                      style={{ background: s.color + '12' }}>
                      <s.icon className="w-4 h-4" style={{ color: s.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-gray-900">{s.label}</p>
                      <p className="text-[10px] text-gray-400 truncate">{s.sub}</p>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-gray-500 transition-colors flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ContactSection
