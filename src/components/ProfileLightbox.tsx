import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

interface ProfileLightboxProps {
  isOpen: boolean
  onClose: () => void
  src: string
  alt: string
}

const ProfileLightbox = ({ isOpen, onClose, src, alt }: ProfileLightboxProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Close button */}
          <motion.button
            className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={onClose}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.15 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-5 h-5" />
          </motion.button>

          {/* Profile image */}
          <motion.div
            className="relative z-10"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.3, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <div
              className="w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full overflow-hidden"
              style={{
                boxShadow: '0 0 60px rgba(0,0,0,0.5), 0 0 0 4px rgba(255,255,255,0.15)',
              }}
            >
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center 24%' }}
              />
            </div>
            <p className="text-center text-white/70 text-sm font-semibold mt-4">{alt}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProfileLightbox
