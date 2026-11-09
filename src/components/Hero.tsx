import { Github, Linkedin, Mail, MapPin, Calendar } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center animate-fade-in">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white text-5xl sm:text-6xl font-bold shadow-2xl">
                NPA
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center">
                <span className="text-white text-xs font-bold">✓</span>
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 animate-slide-up">
            <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              Ndefo Kuate Paul Auguste
            </span>
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Full Stack Developer
          </h2>

          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-4 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Specialist in React, TypeScript & JavaScript
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8 text-gray-600 dark:text-gray-400 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary-600" />
              <span>Yaoundé, Cameroon</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary-600" />
              <span>Born August 28</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a
                href="mailto:ndefokuatepaulauguste@gmail.com"
              className="flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <Mail className="w-5 h-5" />
              <span>Get In Touch</span>
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              View My Work
            </a>
          </div>

          <div className="flex items-center justify-center gap-6 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-all duration-200 transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/ndefo-paul-auguste"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-all duration-200 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
            <a
                href="mailto:ndefokuatepaulauguste@gmail.com"
              className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-all duration-200 transform hover:scale-110"
              aria-label="Email"
            >
              <Mail className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
