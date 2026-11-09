import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

export type Lang = 'en' | 'fr'

const translations = {
  // ── NAV ──
  'nav.work': { en: 'Work', fr: 'Projets' },
  'nav.about': { en: 'About', fr: 'À propos' },
  'nav.experience': { en: 'Experience', fr: 'Expérience' },
  'nav.contact': { en: 'Contact', fr: 'Contact' },
  'nav.hireMe': { en: 'Hire Me', fr: 'Contactez-moi' },
  'nav.search': { en: 'Search…', fr: 'Rechercher…' },
  'nav.portfolio': { en: 'My Portfolio', fr: 'Mon Portfolio' },
  'nav.downloadCv': { en: 'Download my CV', fr: 'Télécharger mon CV' },

  // ── LEFT PANEL ──
  'left.bio': {
    en: 'I am <b>Ndefo Kuate Paul Auguste</b>, a Full Stack Developer specializing in React, TypeScript, and JavaScript, with strong experience building digital products.',
    fr: 'Je suis <b>Ndefo Kuate Paul Auguste</b>, développeur Full Stack spécialisé en React, TypeScript et JavaScript, avec une forte expérience dans le développement de produits numériques.',
  },
  'left.languages': { en: 'Bilingual · English & French', fr: 'Bilingue · anglais et français' },
  'left.available': { en: 'Available for hire', fr: 'Disponible' },
  'left.projects': { en: 'Projects', fr: 'Projets' },
  'left.yrExp': { en: 'Yr Exp.', fr: 'An Exp.' },
  'left.clients': { en: 'Clients', fr: 'Clients' },

  // ── MOBILE HERO ──
  'mobile.title': { en: 'Portfolio', fr: 'Portfolio' },
  'mobile.subtitle': { en: 'Software Engineering Graduate · Full Stack Developer', fr: 'Diplômé en génie logiciel · Développeur Full Stack' },
  'mobile.fullStack': { en: 'Full Stack Dev', fr: 'Développeur Full Stack' },
  'mobile.softwareEngineer': { en: 'Software Engineer', fr: 'Génie logiciel' },

  // ── WORK / HERO BANNER ──
  'work.location': { en: 'Software Engineering Graduate · Yaoundé, Cameroon', fr: 'Diplômé en génie logiciel · Yaoundé, Cameroun' },
  'work.headline': { en: 'Building Apps\nThat Matter.', fr: 'Créer des Apps\nQui Comptent.' },
  'work.subtitle': { en: 'React & TypeScript specialist. Crafting scalable web experiences for real-world impact.', fr: 'Spécialiste React & TypeScript. Créer des expériences web évolutives à impact réel.' },
  'work.github': { en: 'GitHub ↗', fr: 'GitHub ↗' },
  'work.viewLive': { en: 'View live project →', fr: 'Voir le projet →' },
  'work.viewCase': { en: 'View case study →', fr: 'Voir l\'étude de cas →' },
  'work.hireMeBtn': { en: 'Hire Me', fr: 'Contactez-moi' },
  'work.selectedWorks': { en: 'Portfolio', fr: 'Portfolio' },
  'work.myProjects': { en: 'My Projects', fr: 'Mes Projets' },
  'work.noProjectsFound': { en: 'No projects found', fr: 'Aucun projet trouvé' },
  'work.tryDifferent': { en: 'Try a different search term.', fr: 'Essayez un autre terme de recherche.' },
  'work.noResults': { en: 'No projects match your search.', fr: 'Aucun projet ne correspond à votre recherche.' },

  // ── PROJECT DETAILS ──
  'proj1.category': { en: 'Game Platform · AFCON Edition', fr: 'Plateforme de jeu · Édition CAN' },
  'proj1.description': { en: 'Interactive football memory card game launched during the Africa Cup of Nations. Match cards, beat the clock, and climb the leaderboard.', fr: 'Jeu de mémoire interactif sur le football lancé lors de la Coupe d\'Afrique des Nations. Associez les cartes, battez le chrono et grimpez au classement.' },
  'proj2.category': { en: 'Energy Management · Cameroon', fr: 'Gestion d\'énergie · Cameroun' },
  'proj2.description': { en: 'Performed rigorous functional testing on the My ENEO customer portal, reporting and tracking platform issues.', fr: 'Réalisation de tests fonctionnels rigoureux sur le portail client My ENEO, avec signalement et suivi des anomalies.' },
  'proj3.category': { en: 'Port Operations System', fr: 'Système d\'opérations portuaires' },
  'proj3.description': { en: 'Digital platform for the Port Authority of Douala streamlining logistics, vessel tracking and administrative operations.', fr: 'Plateforme numérique pour le Port Autonome de Douala optimisant la logistique, le suivi des navires et les opérations administratives.' },
  'proj4.category': { en: 'Agricultural Marketplace · Cameroon', fr: 'Marketplace agricole · Cameroun' },
  'proj4.description': { en: 'A marketplace connecting farmers, livestock producers and buyers across Cameroon, helping them trade directly at fair market prices.', fr: 'Une marketplace qui met en relation agriculteurs, éleveurs et acheteurs au Cameroun pour faciliter les échanges directs au juste prix.' },
  'proj5.category': { en: 'Personal Mobile Game Project', fr: 'Projet personnel de jeu mobile' },
  'proj5.description': { en: 'A mobile game developed independently as part of the Mboa Phone Games project.', fr: 'Un jeu mobile développé en autonomie dans le cadre du projet Mboa Phone Games.' },

  // ── ABOUT ──
  'about.heroLabel': { en: 'Who I Am', fr: 'Qui je suis' },
  'about.heroTitle': { en: 'About Me', fr: 'À propos' },
  'about.heroSub': { en: 'Passionate developer turning ideas into scalable, real-world applications.', fr: 'Développeur passionné transformant les idées en applications concrètes et évolutives.' },
  'about.bio1': {
    en: 'I\'m <b>Ndefo Kuate Paul Auguste</b>, a Full Stack Developer born on <b>August 28, 2000</b> in Yaoundé, Cameroon. I specialize in React, TypeScript, and JavaScript and hold a Software Engineering degree from ICT University.',
    fr: 'Je suis <b>Ndefo Kuate Paul Auguste</b>, développeur Full Stack né le <b>28 août 2000</b> à Yaoundé, au Cameroun. Je suis spécialisé en React, TypeScript et JavaScript et titulaire d\'une licence en génie logiciel de ICT University.',
  },
  'about.bio2': {
    en: 'During my internship at <b>Zen Africa</b> (2025—2026), I contributed to ministry research-event data collection, performed functional testing and bug tracking for <b>My ENEO</b>, and built the <b>33 Export Memory Foot</b> game for AFCON Morocco.',
    fr: 'Lors de mon stage chez <b>Zen Africa</b> (2025—2026), j\'ai participé à la collecte de données lors d\'un événement du ministère de la Recherche, réalisé des tests fonctionnels et suivi les anomalies de <b>My ENEO</b>, puis créé le jeu <b>33 Export Memory Foot</b> pour la CAN au Maroc.',
  },
  'about.education': { en: 'Education', fr: 'Formation' },
  'about.location': { en: 'Location', fr: 'Localisation' },
  'about.email': { en: 'Email', fr: 'Email' },
  'about.birthDateLabel': { en: 'Date of birth', fr: 'Date de naissance' },
  'about.birthDateSub': { en: 'Born in Yaoundé', fr: 'Né à Yaoundé' },
  'about.downloadCv': { en: 'Download my CV (PDF)', fr: 'Télécharger mon CV (PDF)' },
  'about.phone': { en: 'Phone', fr: 'Téléphone' },
  'contact.phoneWhatsApp': { en: 'Call or message on WhatsApp', fr: 'Appelez ou écrivez sur WhatsApp' },
  'contact.call': { en: 'Call', fr: 'Appeler' },
  'contact.whatsapp': { en: 'WhatsApp', fr: 'WhatsApp' },
  'about.languages': { en: 'Languages', fr: 'Langues' },
  'about.english': { en: 'English · Fluent', fr: 'Anglais · Courant' },
  'about.french': { en: 'French · Fluent', fr: 'Français · Courant' },
  'about.bilingual': { en: 'Fluent in speaking and writing', fr: 'À l’oral comme à l’écrit' },
  'about.availableWork': { en: 'Available for work', fr: 'Disponible' },
  'about.whatsapp': { en: 'WhatsApp OK', fr: 'WhatsApp OK' },
  'about.whatIDo': { en: 'What I Do', fr: 'Ce que je fais' },
  'about.frontendDev': { en: 'Frontend Dev', fr: 'Dév. Frontend' },
  'about.frontendDesc': { en: 'React, TypeScript, modern UI', fr: 'React, TypeScript, UI moderne' },
  'about.fullStack': { en: 'Full Stack', fr: 'Full Stack' },
  'about.fullStackDesc': { en: 'Node.js, REST APIs, databases', fr: 'Node.js, APIs REST, bases de données' },
  'about.webApps': { en: 'Web Apps', fr: 'Apps Web' },
  'about.webAppsDesc': { en: 'Responsive, scalable platforms', fr: 'Plateformes responsives et évolutives' },
  'about.collaboration': { en: 'Collaboration', fr: 'Collaboration' },
  'about.collaborationDesc': { en: 'Agile teams, code reviews', fr: 'Équipes agiles, revues de code' },
  'about.otherSkills': { en: 'Other Skills', fr: 'Autres compétences' },
  'about.excel': { en: 'Databases', fr: 'Bases de donnees' },
  'about.excelDesc': { en: 'Database proficiency', fr: 'Maîtrise des bases de données' },
  'about.driving': { en: 'Driving', fr: 'Conduite automobile' },
  'about.drivingDesc': { en: 'Highly proficient car driver', fr: 'Très apte à la conduite de voiture' },
  'about.canva': { en: 'Tools & Testing', fr: 'Outils et tests' },
  'about.canvaDesc': { en: 'Functional testing and quality tracking', fr: 'Tests fonctionnels et suivi qualité' },
  'about.aptitudes': { en: 'Aptitudes', fr: 'Aptitudes' },
  'about.fastLearner': { en: 'Fast Learner', fr: 'Apprentissage rapide' },
  'about.teamPlayer': { en: 'Team Player', fr: 'Esprit d\'équipe' },
  'about.problemSolver': { en: 'Problem Solver', fr: 'Résolution de problèmes' },
  'about.adaptable': { en: 'Adaptable', fr: 'Adaptable' },
  'about.detailOriented': { en: 'Detail-Oriented', fr: 'Souci du détail' },
  'about.selfMotivated': { en: 'Self-Motivated', fr: 'Autonome' },
  'about.communication': { en: 'Communication', fr: 'Communication' },
  'about.timeManagement': { en: 'Time Management', fr: 'Gestion du temps' },
  'about.technicalSkills': { en: 'Technical Skills', fr: 'Compétences techniques' },
  'about.university': { en: 'ICT University', fr: 'ICT University' },
  'about.degree': { en: 'Software Engineering degree · GCE Advanced Level', fr: 'Licence en génie logiciel · GCE Advanced Level' },
  'about.city': { en: 'Yaoundé', fr: 'Yaoundé' },
  'about.country': { en: 'Cameroon', fr: 'Cameroun' },

  // ── EXPERIENCE ──
  'exp.heroLabel': { en: 'My Journey', fr: 'Mon parcours' },
  'exp.heroTitle': { en: 'Experience', fr: 'Expérience' },
  'exp.heroSub': { en: 'From internship to production — building real-world applications at scale.', fr: 'Du stage à la production — créer des applications réelles à grande échelle.' },
  'exp.workExp': { en: 'Work Experience', fr: 'Expérience professionnelle' },
  'exp.workExpSub': { en: 'Professional roles & contributions', fr: 'Rôles et contributions professionnels' },
  'exp.internship': { en: 'Internship', fr: 'Stage' },
  'exp.projectsDelivered': { en: 'Projects Delivered', fr: 'Projets réalisés' },
  'exp.highlights': { en: 'Highlights', fr: 'Points forts' },
  'exp.components': { en: 'Research data collection', fr: 'Collecte de données de recherche' },
  'exp.componentsDesc': { en: 'Contributed to data collection during a Ministry of Research event', fr: 'Participation à la collecte lors d’un événement du Ministère de la Recherche' },
  'exp.teamwork': { en: 'Teamwork', fr: 'Travail d\'équipe' },
  'exp.teamworkDesc': { en: 'Agile workflow & code reviews', fr: 'Workflow agile et revues de code' },
  'exp.deployment': { en: 'Bug tracking', fr: 'Suivi des anomalies' },
  'exp.deploymentDesc': { en: 'Reported and tracked platform issues through resolution', fr: 'Signalement et suivi des anomalies jusqu’à leur résolution' },
  'exp.uiux': { en: 'UI/UX', fr: 'UI/UX' },
  'exp.uiuxDesc': { en: 'Responsive, modern interfaces', fr: 'Interfaces modernes et responsives' },
  'exp.educationLabel': { en: 'Education', fr: 'Formation' },
  'exp.educationSub': { en: 'Academic background', fr: 'Parcours académique' },
  'exp.inProgress': { en: 'In Progress', fr: 'En cours' },
  'exp.graduated': { en: 'Graduated', fr: 'Diplômé' },
  'exp.keyCourses': { en: 'Key Courses', fr: 'Cours principaux' },

  // ── CONTACT ──
  'contact.heroLabel': { en: 'Let\'s Talk', fr: 'Parlons-en' },
  'contact.heroTitle': { en: 'Get In Touch', fr: 'Me contacter' },
  'contact.heroSub': { en: 'Open to new opportunities, collaborations, and interesting projects.', fr: 'Ouvert aux nouvelles opportunités, collaborations et projets intéressants.' },
  'contact.sendMessage': { en: 'Send a Message', fr: 'Envoyer un message' },
  'contact.getBack': { en: 'I\'ll get back to you soon', fr: 'Je vous répondrai rapidement' },
  'contact.name': { en: 'Name', fr: 'Nom' },
  'contact.yourName': { en: 'Your name', fr: 'Votre nom' },
  'contact.yourEmail': { en: 'your@email.com', fr: 'votre@email.com' },
  'contact.message': { en: 'Message', fr: 'Message' },
  'contact.messagePlaceholder': { en: 'Tell me about your project...', fr: 'Parlez-moi de votre projet...' },
  'contact.send': { en: 'Send Message', fr: 'Envoyer' },
  'contact.sent': { en: '✓ Message Sent!', fr: '✓ Message envoyé !' },
  'contact.connectWithMe': { en: 'Connect With Me', fr: 'Me retrouver' },
  'contact.location': { en: 'Location', fr: 'Localisation' },
  'contact.yaoundeCameroon': { en: 'Yaoundé, Cameroon', fr: 'Yaoundé, Cameroun' },
  'contact.email': { en: 'Email', fr: 'Email' },
  'contact.connect': { en: 'Connect', fr: 'Se connecter' },

  // ── EXPERIENCE EXTRA ──
  'exp.fullStackDev': { en: 'Full Stack Developer', fr: 'Développeur Full Stack' },
  'exp.zenAfrica': { en: 'Zen Africa', fr: 'Zen Africa' },
  'exp.visitZenAfrica': { en: 'Visit Zen Africa website', fr: 'Visiter le site de Zen Africa' },
  'exp.cameroon': { en: 'Cameroon', fr: 'Cameroun' },
  'exp.liveProject': { en: 'Live Project ↗', fr: 'Projet en ligne ↗' },
  'exp.softwareEngProgram': { en: 'Software Engineering', fr: 'Génie logiciel' },
  'exp.bachelorICT': { en: "Bachelor's Degree", fr: 'Licence' },
  'exp.ictUniversity': { en: 'ICT University', fr: 'ICT University' },
  'exp.gceAdvancedLevel': { en: 'GCE Advanced Level', fr: 'GCE Advanced Level' },

  // ── EXPERIENCE PROJECT DESCRIPTIONS ──
  'exp.proj1.name': { en: '33 Export — Memory Foot', fr: '33 Export — Memory Foot' },
  'exp.proj1.desc': { en: 'Built from scratch for AFCON Morocco', fr: 'Création complète pour la CAN au Maroc' },
  'exp.proj2.name': { en: 'My ENEO', fr: 'My ENEO' },
  'exp.proj2.desc': { en: 'Functional testing, bug reporting and tracking', fr: 'Tests fonctionnels, signalement et suivi des anomalies' },
  'exp.proj3.name': { en: 'Port Authority of Douala', fr: 'Port Autonome de Douala' },
  'exp.proj3.desc': { en: 'Digital platform for port logistics and vessel tracking', fr: 'Plateforme numérique pour la logistique portuaire et le suivi des navires' },

  // ── EXPERIENCE COURSES ──
  'exp.course.softEng': { en: 'Software Engineering', fr: 'Génie Logiciel' },
  'exp.course.webDev': { en: 'Web Development', fr: 'Développement Web' },
  'exp.course.db': { en: 'Database Systems', fr: 'Systèmes de bases de données' },
  'exp.course.algo': { en: 'Algorithms & Data Structures', fr: 'Algorithmes & Structures de données' },
  'exp.course.pm': { en: 'Project Management', fr: 'Gestion de projet' },
  'exp.course.security': { en: 'Network Security', fr: 'Sécurité réseau' },

  // ── PROJECT TITLES ──
  'proj1.title': { en: '33 Export — Memory Foot', fr: '33 Export — Memory Foot' },
  'proj2.title': { en: 'My ENEO', fr: 'My ENEO' },
  'proj3.title': { en: 'Port Authority of Douala', fr: 'Port Autonome de Douala' },
  'proj4.title': { en: 'MBOA Market', fr: 'MBOA Market' },

  // ── WORK EXTRA ──
  'work.projects': { en: 'Projects', fr: 'Projets' },
} as const

type TranslationKey = keyof typeof translations

interface LangContextType {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: TranslationKey) => string
}

const LangContext = createContext<LangContextType>({
  lang: 'en',
  setLang: () => {},
  t: (key) => translations[key]?.en ?? key,
})

export const LangProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>('en')
  const t = (key: TranslationKey) => translations[key]?.[lang] ?? key
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
