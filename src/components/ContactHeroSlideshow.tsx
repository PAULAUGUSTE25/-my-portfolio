import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const contactImages = [
  '/img/the%20hero%20banner.png',
  '/img/profil%20back%20ground.jpeg',
  '/img/back%20ground%20image%20for%20eneo.jpeg',
  '/img/port%20autonome%20de%20dla%20back%20ground%20image%20.jpg',
]

const INTERVAL = 5500
const TRANSITION = 1.2

const ContactHeroSlideshow = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % contactImages.length)
    }, INTERVAL)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence mode="popLayout">
        <motion.img
          key={index}
          src={contactImages[index]}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 40%' }}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1.0 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: TRANSITION, ease: 'easeInOut' },
            scale: { duration: INTERVAL / 1000 + TRANSITION, ease: 'linear' },
          }}
        />
      </AnimatePresence>
    </div>
  )
}

export default ContactHeroSlideshow
