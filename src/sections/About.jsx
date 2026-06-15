import { motion } from 'framer-motion'
import { Code2, Palette, Rocket, Coffee } from 'lucide-react'
import SectionWrapper, { SectionTag, SectionTitle } from '../components/SectionWrapper'

const STATS = [
  
  { value: '20+', label: 'Projects Built' },
  { value: '∞', label: 'Cups of Coffee' },
]

const CARDS = [
  { icon: Code2, title: 'Clean Code', desc: 'Writing maintainable, well-structured code is my standard.', color: 'text-accent-cyan', bg: 'bg-accent-cyan/10', border: 'border-accent-cyan/20' },
  { icon: Palette, title: 'Great Design', desc: 'Pixel-perfect interfaces with attention to every detail.', color: 'text-accent-purple', bg: 'bg-accent-purple/10', border: 'border-accent-purple/20' },
  { icon: Rocket, title: 'Performance', desc: 'Optimized, fast-loading experiences across all devices.', color: 'text-accent-green', bg: 'bg-accent-green/10', border: 'border-accent-green/20' },
  { icon: Coffee, title: 'Dedication', desc: 'Fully committed to delivering the best results.', color: 'text-accent-amber', bg: 'bg-accent-amber/10', border: 'border-accent-amber/20' },
]

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          <SectionTag label="About Me" />
          <SectionTitle>Crafting Digital<br /><span className="text-gradient">Experiences</span></SectionTitle>
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>
              I&apos;m a passionate frontend developer based in India, with a love for building beautiful and functional web applications. I specialize in React, Next.js, and modern CSS frameworks.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new design trends, contributing to open source, or experimenting with animations and interactive experiences.
            </p>
            <p>
              My goal is to bridge the gap between design and development — creating interfaces that are not only visually stunning but also technically excellent.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mt-10">
            {STATS.map((s) => (
              <motion.div
                key={s.label}
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="bg-bg-surface border border-border-subtle rounded-2xl p-5"
              >
                <p className="font-display text-3xl font-bold text-gradient">{s.value}</p>
                <p className="font-mono text-xs text-text-muted mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right — cards */}
        <div className="grid grid-cols-2 gap-4">
          {CARDS.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: 'spring', stiffness: 200, damping: 20 }}
                whileHover={{ scale: 1.04, y: -4 }}
                className="relative bg-bg-surface border border-border-subtle rounded-2xl p-6 grain overflow-hidden group"
                data-hover
              >
                <div className={`inline-flex p-3 rounded-xl ${card.bg} border ${card.border} mb-4`}>
                  <Icon className={`h-5 w-5 ${card.color}`} />
                </div>
                <h3 className="font-display font-semibold text-text-primary mb-2">{card.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{card.desc}</p>
                <div className={`absolute bottom-0 right-0 w-20 h-20 ${card.bg} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
