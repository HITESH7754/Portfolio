import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import SectionWrapper, { SectionTag, SectionTitle } from '../components/SectionWrapper'

const PROJECTS = [
  {
  title: 'NexLearn Dashboard',
  desc: 'A futuristic student learning dashboard with Supabase integration, staggered animations, and real-time data fetching using Next.js Server Components.',
  tags: ['Next.js', 'Supabase', 'Framer Motion', 'TypeScript'],
  color: '#00D4FF',
  github: 'https://github.com/HITESH7754/learning-dashboard',
  live: 'https://learning-dashboard-psi-five.vercel.app/dashboard',
  featured: true,
},
{
    title: ' DummyPortfolio ',
    desc: "Responsive student portfolio website (HTML/CSS/JS) for a GEMMA Clubs student — showcasing academics, achievements, projects, certificates, and skills, with dark mode and interactive features.",
    tags: ['React', 'Vite', 'Framer Motion', 'Tailwind CSS'],
    color: '#8B5CF6',
    github: 'https://github.com/HITESH7754',
    live: 'https://assignment-portfolio-two.vercel.app/',
    featured: true,
  },
  {
    title: 'Portfolio Website',
    desc: 'This portfolio — built with React + Vite + Framer Motion. Dark mode, particle background, smooth animations, and fully responsive.',
    tags: ['React', 'Vite', 'Framer Motion', 'Tailwind CSS'],
    color: '#8B5CF6',
    github: 'https://github.com/HITESH7754',
    live: 'https://hitesh-resume-mu.vercel.app/',
    featured: true,
  },

]

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, type: 'spring', stiffness: 200, damping: 22 }}
      whileHover={{ scale: 1.02, y: -4, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
      className="relative bg-bg-surface border border-border-subtle rounded-2xl p-6 grain overflow-hidden group"
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        style={{ background: `radial-gradient(ellipse at 20% 80%, ${project.color}10 0%, transparent 60%)` }}
      />
      {/* Border glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 1px ${project.color}33` }}
      />

      {project.featured && (
        <div className="flex items-center gap-2 mb-4">
          <span className="font-mono text-[10px] tracking-widest uppercase px-2 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan">
            Featured
          </span>
        </div>
      )}

      <h3 className="font-display text-xl font-bold text-text-primary mb-3 group-hover:text-white transition-colors">
        {project.title}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed mb-5 relative z-10">{project.desc}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6 relative z-10">
        {project.tags.map((tag) => (
          <span key={tag} className="font-mono text-xs px-3 py-1 rounded-lg bg-bg-elevated border border-border-subtle text-text-muted">
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 relative z-10">
        <a href={project.github} className="flex items-center gap-1.5 text-text-secondary hover:text-text-primary text-sm transition-colors" data-hover>
          <Github className="h-4 w-4" /> Code
        </a>
        <a href={project.live} className="flex items-center gap-1.5 text-sm transition-colors hover:opacity-80" style={{ color: project.color }} data-hover>
          <ExternalLink className="h-4 w-4" /> Live Demo
        </a>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionTag label="Projects" />
      <SectionTitle>Things I&apos;ve <span className="text-gradient">Built</span></SectionTitle>
      <div className="grid md:grid-cols-2 gap-6">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  )
}
