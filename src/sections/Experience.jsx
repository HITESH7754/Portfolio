import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Calendar } from 'lucide-react'
import SectionWrapper, { SectionTag, SectionTitle } from '../components/SectionWrapper'

const TIMELINE = [
 
  {
    type: 'education',
    title: 'BSC COMPUTER SCIENCE (HONS)',
    company: ' COLLAGE OF VOCATIONAL STUDIES DU',
    period: '2025 — 2028',
    desc: 'A rigorous 3 undergraduate degree that builds a strong foundation in programming, algorithms, and software development.',
    tags: ['Computer Science', 'Web Dev', 'DSA'],
    color: '#8B5CF6',
  },


]

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionTag label="Experience" />
      <SectionTitle>My <span className="text-gradient">Journey</span></SectionTitle>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent-cyan/50 via-accent-purple/30 to-transparent hidden md:block" />

        <div className="space-y-8">
          {TIMELINE.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: 'spring', stiffness: 200, damping: 22 }}
              className="relative md:pl-20"
            >
              {/* Timeline dot */}
              <div
                className="hidden md:flex absolute left-0 top-6 w-12 h-12 rounded-xl border items-center justify-center"
                style={{ background: `${item.color}15`, borderColor: `${item.color}30` }}
              >
                {item.type === 'work'
                  ? <Briefcase className="h-5 w-5" style={{ color: item.color }} />
                  : <GraduationCap className="h-5 w-5" style={{ color: item.color }} />
                }
              </div>

              <motion.div
                whileHover={{ scale: 1.01, x: 4, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
                className="bg-bg-surface border border-border-subtle rounded-2xl p-6 group"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-display font-bold text-text-primary text-lg">{item.title}</h3>
                    <p className="font-body text-sm" style={{ color: item.color }}>{item.company}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-text-muted">
                    <Calendar className="h-3.5 w-3.5" />
                    <span className="font-mono text-xs">{item.period}</span>
                  </div>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="font-mono text-xs px-3 py-1 rounded-lg bg-bg-elevated border border-border-subtle text-text-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
