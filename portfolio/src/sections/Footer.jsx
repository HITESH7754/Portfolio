import { motion } from 'framer-motion'
import { Zap, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center">
            <Zap className="h-3 w-3 text-white" />
          </div>
          <span className="font-display font-bold text-text-primary">Hitesh<span className="text-accent-cyan">.</span></span>
        </div>

        <p className="font-body text-text-muted text-sm flex items-center gap-1.5">
          Built with <Heart className="h-3.5 w-3.5 text-red-400 fill-red-400" /> using React & Framer Motion
        </p>

        <p className="font-mono text-xs text-text-muted">© {new Date().getFullYear()} Hitesh Sharma</p>
      </div>
    </footer>
  )
}
