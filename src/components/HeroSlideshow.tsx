import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const heroImages = [
  '/img/the%20hero%20banner.png',
  '/img/profil%20back%20ground.jpeg',
  '/img/back%20ground%20image%20for%20eneo.jpeg',
  '/img/port%20autonome%20de%20dla%20back%20ground%20image%20.jpg',
]

const INTERVAL = 5000 // 5 seconds per image
const TRANSITION_DURATION = 1.2

interface HeroSlideshowProps {
  parallaxOffset?: number
}

const HeroSlideshow = ({ parallaxOffset = 0 }: HeroSlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, INTERVAL)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={currentIndex}
          src={heroImages[currentIndex]}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover will-change-transform"
          style={{
            objectPosition: 'center 30%',
            transform: `translateY(${parallaxOffset}px) scale(1.15)`,
          }}
          initial={{ opacity: 0, scale: 1.2 }}
          animate={{ opacity: 1, scale: 1.15 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: TRANSITION_DURATION, ease: 'easeInOut' },
            scale: { duration: INTERVAL / 1000 + TRANSITION_DURATION, ease: 'linear' },
          }}
        />
      </AnimatePresence>

      {/* Subtle Ken Burns zoom on active image */}
      <style>{`
        @keyframes kenBurns {
          0% { transform: scale(1.1) translateY(${parallaxOffset}px); }
          100% { transform: scale(1.2) translateY(${parallaxOffset}px); }
        }
      `}</style>

      {/* Progress dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
        {heroImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className="relative w-2 h-2 rounded-full transition-all duration-300"
            style={{
              background: idx === currentIndex
                ? 'rgba(255,255,255,0.9)'
                : 'rgba(255,255,255,0.3)',
              width: idx === currentIndex ? 20 : 8,
            }}
            aria-label={`Slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroSlideshow
