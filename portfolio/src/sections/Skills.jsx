import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import SectionWrapper, { SectionTag, SectionTitle } from '../components/SectionWrapper'

const SKILLS = [
  { name: 'React / Next.js', level: 90, color: '#00D4FF' },
  { name: 'TypeScript', level: 82, color: '#8B5CF6' },
  { name: 'Tailwind CSS', level: 95, color: '#10E5A0' },
  { name: 'Framer Motion', level: 78, color: '#F59E0B' },
  { name: 'Node.js', level: 70, color: '#00D4FF' },
  { name: 'Supabase / PostgreSQL', level: 68, color: '#8B5CF6' },
]

const TOOLS = [
  'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion',
  'Node.js', 'Git', 'Figma', 'Vite', 'Supabase', 'Vercel', 'REST APIs',
  'HTML5', 'CSS3', 'JavaScript', 'Responsive Design',
]

function SkillBar({ name, level, color, index }) {
  const [width, setWidth] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTimeout(() => setWidth(level), index * 80) },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [level, index])

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-body text-sm text-text-primary font-medium">{name}</span>
        <span className="font-mono text-xs" style={{ color }}>{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-bg-elevated overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          animate={{ width: `${width}%` }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: index * 0.08 }}
          style={{ background: `linear-gradient(90deg, ${color}88, ${color})`, boxShadow: `0 0 8px ${color}66` }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionTag label="Skills" />
      <SectionTitle>What I <span className="text-gradient">Work With</span></SectionTitle>

      <div className="grid lg:grid-cols-2 gap-16">
        {/* Skill bars */}
        <div className="space-y-6">
          {SKILLS.map((skill, i) => (
            <SkillBar key={skill.name} {...skill} index={i} />
          ))}
        </div>

        {/* Tech tags */}
        <div>
          <p className="font-mono text-xs tracking-widest text-text-muted uppercase mb-6">Technologies & Tools</p>
          <div className="flex flex-wrap gap-3">
            {TOOLS.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, type: 'spring', stiffness: 300, damping: 20 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="px-4 py-2 rounded-xl bg-bg-surface border border-border-subtle text-text-secondary text-sm font-body hover:text-accent-cyan hover:border-accent-cyan/30 transition-colors cursor-default"
                data-hover
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
