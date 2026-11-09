import { useState } from 'react'
import LeftPanel from './components/LeftPanel'
import RightPanel from './components/RightPanel'
import TopNav from './components/TopNav'
import { LangProvider } from './i18n'

export type ActiveSection = 'work' | 'about' | 'experience' | 'contact'

function App() {
  const [activeSection, setActiveSection] = useState<ActiveSection>('work')
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <LangProvider>
      <div className="flex h-screen w-screen overflow-hidden bg-[#F5F1E9]">
        <TopNav
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <div className="flex min-h-0 w-full h-full pt-[60px]">
          <LeftPanel />
          <RightPanel
            activeSection={activeSection}
            searchQuery={searchQuery}
          />
        </div>
      </div>
    </LangProvider>
  )
}

export default App
