import { AnimatePresence, motion } from 'framer-motion'
import { ActiveSection } from '../App'
import WorkGrid from './WorkGrid'
import AboutSection from './AboutSection'
import ExperienceSection from './ExperienceSection'
import ContactSection from './ContactSection'
import MobileHero from './MobileHero'

interface RightPanelProps {
  activeSection: ActiveSection
  searchQuery: string
}

const RightPanel = ({ activeSection, searchQuery }: RightPanelProps) => {
  return (
    <main className="min-w-0 flex-1 h-full overflow-y-auto"
      style={{ background: '#F5F1E9' }}>
      <div className="md:hidden">
        <MobileHero />
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35, ease: [0.25, 0.8, 0.25, 1] }}
          className="h-full"
        >
          {activeSection === 'work' && <WorkGrid searchQuery={searchQuery} />}
          {activeSection === 'about' && <AboutSection />}
          {activeSection === 'experience' && <ExperienceSection />}
          {activeSection === 'contact' && <ContactSection />}
        </motion.div>
      </AnimatePresence>
    </main>
  )
}

export default RightPanel
