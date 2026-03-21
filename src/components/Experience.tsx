import { Briefcase, Building2, Calendar, MapPin } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      company: 'Zen Africa',
      role: 'Full Stack Developer',
      type: 'Internship',
      period: 'Recent',
      location: 'Cameroon',
      description: 'Worked as a Full Stack Developer on multiple high-impact projects, demonstrating expertise in modern web technologies and agile development practices.',
      achievements: [
        'Developed complete features using React, TypeScript, and JavaScript',
        'Collaborated with cross-functional teams on enterprise-level applications',
        'Implemented responsive and user-friendly interfaces',
        'Participated in code reviews and technical discussions',
      ],
      technologies: ['React', 'TypeScript', 'JavaScript', 'Node.js', 'Git'],
      color: 'from-blue-500 to-cyan-500',
    },
  ]

  const projects = [
    {
      name: '33 Export',
      description: 'Game Launch Platform for Africa Cup of Nations',
      role: 'Full Stack Developer',
      details: 'Developed an engaging gaming platform launched during the Africa Cup of Nations period. Created interactive games and managed the complete development lifecycle.',
      technologies: ['React', 'TypeScript', 'Game Development', 'API Integration'],
      icon: '🎮',
      color: 'from-green-500 to-emerald-500',
    },
    {
      name: 'ENEO Platform',
      description: 'Comprehensive Energy Management System',
      role: 'Full Stack Developer',
      details: 'Worked on all aspects of the ENEO platform, contributing to both frontend and backend development. Implemented critical features for energy management and customer service.',
      technologies: ['React', 'TypeScript', 'JavaScript', 'Full Stack'],
      icon: '⚡',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      name: 'Seaport of Douala',
      description: 'Port Management System',
      role: 'Developer',
      details: 'Contributed to the development of digital solutions for the Seaport of Douala, enhancing operational efficiency and management capabilities.',
      technologies: ['Web Development', 'System Integration', 'JavaScript'],
      icon: '🚢',
      color: 'from-blue-600 to-indigo-600',
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional journey and major projects
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-3">
            <Briefcase className="w-7 h-7 text-primary-600" />
            Work Experience
          </h3>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${exp.color} flex items-center justify-center text-white text-xl font-bold`}>
                      ZA
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {exp.role}
                      </h4>
                      <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <Building2 className="w-4 h-4" />
                      {exp.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                {exp.description}
              </p>

              <div className="mb-6">
                <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Key Achievements:
                </h5>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                      <span className="text-primary-600 dark:text-primary-400 mt-1">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white flex items-center gap-3">
            <Building2 className="w-7 h-7 text-primary-600" />
            Major Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                <div className="p-6">
                  <div className="text-4xl mb-4">{project.icon}</div>
                  <h4 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {project.name}
                  </h4>
                  <p className="text-primary-600 dark:text-primary-400 font-semibold mb-3">
                    {project.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                    {project.description}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                    {project.details}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
