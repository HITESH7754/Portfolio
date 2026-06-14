import { motion } from 'framer-motion'

export default function SectionWrapper({ id, children, className = '' }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      className={`relative z-10 max-w-7xl mx-auto px-6 py-24 ${className}`}
    >
      {children}
    </motion.section>
  )
}

export function SectionTag({ label }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="h-px flex-1 max-w-[40px] bg-accent-cyan/40" />
      <span className="font-mono text-xs tracking-widest text-accent-cyan uppercase">{label}</span>
    </div>
  )
}

export function SectionTitle({ children }) {
  return (
    <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-12">
      {children}
    </h2>
  )
}
