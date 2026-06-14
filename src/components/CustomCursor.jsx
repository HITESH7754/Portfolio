import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    const over = (e) => setHovered(!!e.target.closest('a,button,[data-hover]'))
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-accent-cyan pointer-events-none z-[9999] mix-blend-difference"
        animate={{ x: pos.x - 8, y: pos.y - 8, scale: hovered ? 2 : 1 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent-cyan/40 pointer-events-none z-[9998]"
        animate={{ x: pos.x - 16, y: pos.y - 16, scale: hovered ? 1.5 : 1 }}
        transition={{ type: 'spring', stiffness: 150, damping: 20 }}
      />
    </>
  )
}
