import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } }
}
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 24 } }
}

export default function Home() {
  return (
    <section id="home" className="relative z-10 min-h-screen flex items-center justify-center px-6">
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-accent-cyan/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent-purple/5 blur-3xl pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center max-w-4xl"
      >
        {/* Badge */}
        <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bg-surface border border-border-subtle mb-8">
          <div className="h-2 w-2 rounded-full bg-accent-green animate-pulse" />
          <span className="font-mono text-xs text-text-secondary tracking-wider">Available for work</span>
        </motion.div>

        {/* Greeting */}
        <motion.p variants={item} className="font-mono text-accent-cyan text-sm tracking-widest uppercase mb-4">
          Hi, I&apos;m
        </motion.p>

        {/* Name */}
        <motion.h1 variants={item} className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-text-primary">Hitesh </span>
          <span className="text-gradient"></span>
        </motion.h1>

        {/* Role */}
        <motion.div variants={item} className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-border" />
          <p className="font-body text-xl text-text-secondary">Frontend Developer </p>
          <div className="h-px w-12 bg-border" />
        </motion.div>

        {/* Description */}
        <motion.p variants={item} className="font-body text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed mb-12">
          I build beautiful, performant web experiences with modern technologies.
          Passionate about clean code, stunning animations, and pixel-perfect design.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex items-center justify-center gap-4 flex-wrap mb-16">
          <a
            href="#projects"
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-purple text-white font-semibold hover:opacity-90 transition-opacity glow-cyan"
            data-hover
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-xl border border-border text-text-primary font-semibold hover:border-accent-cyan/50 hover:text-accent-cyan transition-colors"
            data-hover
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={item} className="flex items-center justify-center gap-4">
          {[
            { icon: Github, href: 'https://github.com/HITESH7754', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/hitesh-arora-b66b60346?utm_source=share_via&utm_content=profile&utm_medium=member_android', label: 'LinkedIn' },
            { icon: Mail, href: '#contact', label: 'Email' },
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
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-text-muted">scroll down</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="h-4 w-4 text-text-muted" />
        </motion.div>
      </motion.div>
    </section>
  )
}
