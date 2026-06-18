import { useState, useEffect } from 'react'

const roles = [
  'Enterprise Architect',
  'CTO / CIO / CISO',
  'DevOps / Cloud Engineer',
  'Security / Compliance',
  'Solution Architect',
  'Product / Strategy',
  'Investor',
  'Other',
]

export default function DemoModal({ open, onClose }) {
  const [form, setForm] = useState({ name: '', email: '', company: '', role: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setTimeout(() => setSubmitted(false), 300)
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate submission — replace with actual endpoint later
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  const isValid = form.name && form.email && form.company && form.role

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-all duration-300 ${
        open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-navy-dark/90 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`relative z-10 w-full max-w-lg bg-navy-card border border-arc-blue/20 rounded-2xl shadow-2xl transition-all duration-300 ${
          open ? 'scale-100 translate-y-0' : 'scale-95 translate-y-4'
        }`}
        style={{ boxShadow: '0 25px 80px rgba(0,0,0,0.5), 0 0 40px rgba(0,194,203,0.05)' }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors p-1"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8">
          {!submitted ? (
            <>
              <div className="mb-6">
                <img src="/arcvara_logo_compact_dark.svg" alt="Arcvara" className="h-7 mb-4" />
                <h2 className="text-xl font-bold text-white mb-1">Register Your Interest</h2>
                <p className="text-white/50 text-sm">
                  Tell us about your organisation and we will be in touch to explore how Arcvara can help — no commitment required.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-white/50 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Jawad Al Marhoon"
                      className="w-full bg-navy border border-arc-blue/20 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-vara-teal/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/50 mb-1.5">Work Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@company.com"
                      className="w-full bg-navy border border-arc-blue/20 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-vara-teal/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-white/50 mb-1.5">Company *</label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    required
                    placeholder="Your organisation"
                    className="w-full bg-navy border border-arc-blue/20 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/25 focus:outline-none focus:border-vara-teal/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-white/50 mb-1.5">Your Role *</label>
                  <select
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    required
                    className="w-full bg-navy border border-arc-blue/20 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-vara-teal/50 transition-colors appearance-none"
                    style={{ colorScheme: 'dark' }}
                  >
                    <option value="" disabled>Select your role</option>
                    {roles.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={!isValid || loading}
                  className={`btn-primary w-full justify-center text-sm py-3 mt-2 ${
                    !isValid || loading ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
                      Request Demo
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>
              </form>

              <p className="text-white/25 text-xs text-center mt-4">
                Or email us directly at{' '}
                <a href="mailto:jawad.a.almarhoon@gmail.com" className="text-arc-blue/60 hover:text-arc-blue transition-colors">
                  jawad.a.almarhoon@gmail.com
                </a>
              </p>
            </>
          ) : (
            <div className="py-8 text-center">
              <div className="w-16 h-16 rounded-full bg-vara-teal/10 border border-vara-teal/30 flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-vara-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Interest Registered</h3>
              <p className="text-white/55 text-sm mb-6">
                Thank you, {form.name.split(' ')[0]}. The Arcvara team will be in touch within one business day.
              </p>
              <button onClick={onClose} className="btn-secondary text-sm px-6 py-2">
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
