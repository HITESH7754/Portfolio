import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, MapPin, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react'
import SectionWrapper, { SectionTag, SectionTitle } from '../components/SectionWrapper'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // 'sending' | 'success' | 'error'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate form submission — wire up EmailJS here with your keys
    await new Promise((r) => setTimeout(r, 1500))
    setStatus('success')
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setStatus(null), 4000)
  }

  return (
    <SectionWrapper id="contact">
      <SectionTag label="Contact" />
      <SectionTitle>Let&apos;s <span className="text-gradient">Work Together</span></SectionTitle>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Left info */}
        <div>
          <p className="text-text-secondary leading-relaxed mb-10">
            I&apos;m currently looking for new opportunities. Whether you have a project in mind,
            a question, or just want to say hi — my inbox is always open!
          </p>

          <div className="space-y-4 mb-10">
            {[
              { icon: Mail, label: 'Email', value: 'hitesharora7754@gmail.com', href: 'mailto:hitesh@example.com', color: '#00D4FF' },
              { icon: MapPin, label: 'Location', value: 'India 🇮🇳', href: '#', color: '#8B5CF6' },
            ].map(({ icon: Icon, label, value, href, color }) => (
              <a key={label} href={href} className="flex items-center gap-4 p-4 rounded-2xl bg-bg-surface border border-border-subtle hover:border-opacity-50 transition-colors group" data-hover>
                <div className="p-2 rounded-xl" style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                  <Icon className="h-5 w-5" style={{ color }} />
                </div>
                <div>
                  <p className="font-mono text-xs text-text-muted">{label}</p>
                  <p className="font-body text-text-primary">{value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-3">
            {[
              { icon: Github, href: 'https://github.com/HITESH7754', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="p-3 rounded-xl bg-bg-surface border border-border-subtle text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/30 transition-colors"
                aria-label={label}
                data-hover
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Right form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 200, damping: 22 }}
          className="space-y-5"
        >
          {[
            { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Hitesh ' },
            { name: 'email', label: 'Email Address', type: 'email', placeholder: 'hitesharora7754@gmail.com' },
          ].map((field) => (
            <div key={field.name}>
              <label className="font-mono text-xs text-text-muted uppercase tracking-wider block mb-2">{field.label}</label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                value={form[field.name]}
                onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                required
                className="w-full bg-bg-surface border border-border-subtle rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted font-body focus:outline-none focus:border-accent-cyan/50 transition-colors"
              />
            </div>
          ))}

          <div>
            <label className="font-mono text-xs text-text-muted uppercase tracking-wider block mb-2">Message</label>
            <textarea
              placeholder="Tell me about your project..."
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="w-full bg-bg-surface border border-border-subtle rounded-xl px-4 py-3 text-text-primary placeholder:text-text-muted font-body focus:outline-none focus:border-accent-cyan/50 transition-colors resize-none"
            />
          </div>

          <motion.button
            type="submit"
            disabled={status === 'sending'}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-purple text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-60"
          >
            {status === 'sending' ? (
              <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
            ) : (
              <><Send className="h-4 w-4" /> Send Message</>
            )}
          </motion.button>

          {/* Status messages */}
          {status === 'success' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-accent-green text-sm">
              <CheckCircle className="h-4 w-4" /> Message sent! I&apos;ll get back to you soon.
            </motion.div>
          )}
          {status === 'error' && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-red-400 text-sm">
              <AlertCircle className="h-4 w-4" /> Something went wrong. Please try again.
            </motion.div>
          )}
        </motion.form>
      </div>
    </SectionWrapper>
  )
}
