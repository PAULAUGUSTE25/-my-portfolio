import { Heart, Code } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <Code className="w-5 h-5 text-primary-600" />
            <span>Built with</span>
            <Heart className="w-5 h-5 text-red-500 animate-pulse" />
            <span>using React & TypeScript</span>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © {currentYear} <span className="font-semibold text-primary-600 dark:text-primary-400">Ndefo Paul Auguste</span>. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
              Full Stack Developer | React Specialist
            </p>
          </div>

          <div className="flex gap-6 text-sm text-gray-500 dark:text-gray-500">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
