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
    <main className="flex-1 h-full overflow-y-auto bg-[#f5f5f5] dark:bg-[#111111]"
      style={{ background: '#f7f7f8' }}>
      <div className="md:hidden">
        <MobileHero />
      </div>
      <div className="h-full">
        {activeSection === 'work' && <WorkGrid searchQuery={searchQuery} />}
        {activeSection === 'about' && <AboutSection />}
        {activeSection === 'experience' && <ExperienceSection />}
        {activeSection === 'contact' && <ContactSection />}
      </div>
    </main>
  )
}

export default RightPanel
