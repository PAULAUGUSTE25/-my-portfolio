import { ExternalLink, Github, Code } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: '33 Export - Gaming Platform',
      description: 'Interactive gaming platform developed for the Africa Cup of Nations. Features multiple games, real-time scoring, and engaging user experiences.',
      image: '🎮',
      technologies: ['React', 'TypeScript', 'Game Logic', 'API Integration', 'Responsive Design'],
      category: 'Full Stack',
      highlights: [
        'Developed during Africa Cup of Nations',
        'Multiple interactive games',
        'Real-time user engagement',
        'Optimized performance',
      ],
      gradient: 'from-green-400 to-emerald-600',
    },
    {
      title: 'ENEO Platform',
      description: 'Comprehensive energy management system for ENEO. Worked on all aspects including customer management, billing, and service delivery.',
      image: '⚡',
      technologies: ['React', 'TypeScript', 'JavaScript', 'Node.js', 'Database Management'],
      category: 'Full Stack',
      highlights: [
        'Complete platform development',
        'Customer management system',
        'Billing integration',
        'Service optimization',
      ],
      gradient: 'from-yellow-400 to-orange-600',
    },
    {
      title: 'Seaport of Douala System',
      description: 'Digital solution for port management operations, enhancing efficiency and streamlining processes at the Seaport of Douala.',
      image: '🚢',
      technologies: ['JavaScript', 'Web Development', 'System Integration', 'Data Management'],
      category: 'Web Development',
      highlights: [
        'Port operations management',
        'Digital transformation',
        'Process optimization',
        'System integration',
      ],
      gradient: 'from-blue-400 to-indigo-600',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing major platforms and applications I've contributed to
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-8xl relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300" />
                <span className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-semibold">
                    {project.category}
                  </span>
                  <Code className="w-5 h-5 text-gray-400" />
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-xs text-gray-600 dark:text-gray-400 flex items-start gap-2">
                        <span className="text-primary-600 dark:text-primary-400 mt-0.5">▹</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors duration-200 text-sm font-medium">
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </button>
                  <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200">
                    <Github className="w-4 h-4 text-gray-700 dark:text-gray-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 rounded-lg transition-all duration-200 transform hover:scale-105 font-medium"
          >
            <Github className="w-5 h-5" />
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
