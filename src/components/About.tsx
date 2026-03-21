import { GraduationCap, Code2, Zap, Award } from 'lucide-react'

const About = () => {
  const skills = [
    { name: 'React', level: 95, color: 'bg-blue-500' },
    { name: 'TypeScript', level: 90, color: 'bg-blue-600' },
    { name: 'JavaScript', level: 95, color: 'bg-yellow-500' },
    { name: 'Node.js', level: 85, color: 'bg-green-600' },
    { name: 'Tailwind CSS', level: 90, color: 'bg-cyan-500' },
    { name: 'Git & GitHub', level: 88, color: 'bg-gray-700' },
  ]

  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'ICT University - Bachelor\'s Degree in ICT',
      subtitle: 'Software Engineering Program',
    },
    {
      icon: Code2,
      title: 'Specialization',
      description: 'Full Stack Development',
      subtitle: 'React, TypeScript & JavaScript Expert',
    },
    {
      icon: Zap,
      title: 'Experience',
      description: 'Professional Internship',
      subtitle: 'Zen Africa - Full Stack Developer',
    },
    {
      icon: Award,
      title: 'Projects',
      description: 'Major Platform Development',
      subtitle: '33 Export, ENEO & More',
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Passionate Full Stack Developer with expertise in modern web technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 font-medium mb-1">
                {item.description}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {item.subtitle}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-700 dark:text-gray-300">
                    {skill.name}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-xl border border-primary-200 dark:border-primary-800">
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              I'm a dedicated Full Stack Developer currently pursuing my Bachelor's Degree in ICT at 
              <span className="font-semibold text-primary-600 dark:text-primary-400"> ICT University</span>, 
              specializing in Software Engineering. With a strong foundation in 
              <span className="font-semibold"> React, TypeScript, and JavaScript</span>, 
              I've gained hands-on experience through my internship at 
              <span className="font-semibold text-primary-600 dark:text-primary-400"> Zen Africa</span>, 
              where I worked on exciting projects including game development for the Africa Cup of Nations 
              and comprehensive platform development for major clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
