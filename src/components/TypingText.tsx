import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TypingTextProps {
  text: string
  speed?: number
  delay?: number
  className?: string
  style?: React.CSSProperties
}

const TypingText = ({ text, speed = 35, delay = 500, className, style }: TypingTextProps) => {
  const [displayed, setDisplayed] = useState('')
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (!started) return
    if (displayed.length >= text.length) return
    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1))
    }, speed)
    return () => clearTimeout(timer)
  }, [started, displayed, text, speed])

  return (
    <span className={className} style={style}>
      {displayed}
      {displayed.length < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
          style={{ color: 'rgba(255,255,255,0.7)' }}
        >
          |
        </motion.span>
      )}
    </span>
  )
}

export default TypingText
