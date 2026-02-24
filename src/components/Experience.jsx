import { motion } from "framer-motion"
import {
  FaBriefcase,
  FaExternalLinkAlt,
  FaCode,
  FaShieldAlt,
  FaRocket,
  FaRecycle
} from "react-icons/fa"

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const timelineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: {
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  }

  const experiences = [
    {
      company: "Planet Green Solution",
      role: "Software Engineer - Frontend",
      duration: "September 2025 - Present",
      location: "Dubai, UAE",
      type: "fulltime",
      highlights: [
        {
          icon: FaShieldAlt,
          title: "UAE Ministry Project",
          description: "Led frontend development for critical government application",
          achievement: "Reduced VAPT vulnerabilities from 40% to 0%"
        },
        {
          icon: FaRocket,
          title: "Performance Optimization",
          description: "Implemented advanced optimization techniques",
          achievement: "Achieved 50% performance boost"
        },
        {
          icon: FaRecycle,
          title: "Component Architecture",
          description: "Built reusable component library",
          achievement: "Reduced development time by 30%"
        }
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"]
    },
    {
      company: "Augurs Technologies",
      role: "Software Engineer",
      duration: "June 2022 - August 2025",
      location: "Noida, India",
      type: "fulltime",
      highlights: [
        {
          icon: FaCode,
          title: "Enterprise Applications",
          description: "Developed scalable web applications for enterprise clients",
          achievement: "Served 10+ major clients"
        },
        {
          icon: FaRocket,
          title: "Performance Focus",
          description: "Optimized application performance and user experience",
          achievement: "Improved load times by 60%"
        }
      ],
      technologies: ["React", "JavaScript", "Node.js", "MongoDB", "Next.js", "Tailwind CSS", "Three.js"]
    },
    {
      company: "Rozgaar India",
      role: "Junior Programmer",
      duration: "March 2021 - May 2022",
      location: "Lucknow, India",
      type: "fulltime",
      highlights: [
        {
          icon: FaCode,
          title: "Web Development",
          description: "Built responsive web applications and maintained existing systems",
          achievement: "Delivered company's mobile application and website"
        }
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React.js", "React Native"]
    }
  ]

  const ExperienceCard = ({ experience, index, isLeft }) => (
    <motion.div
      variants={itemVariants}
      className={`relative flex items-center mb-12 ${isLeft ? 'justify-start' : 'justify-end'
        } lg:justify-center`}
    >
      {/* Timeline dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[var(--neon)] rounded-full z-10 shadow-lg shadow-[var(--neon)]/50" />

      {/* Experience card */}
      <motion.div
        whileHover={{
          scale: 1.02,
          boxShadow: "0 10px 40px rgba(0, 255, 159, 0.2)"
        }}
        className={`relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 w-full lg:w-5/12 ${isLeft ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'
          } hover:border-[var(--neon)]/30 transition-all duration-300`}
      >
        {/* Card header */}
        <div className="mb-4">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">{experience.company}</h3>
              <p className="text-[var(--neon)] font-medium">{experience.role}</p>
            </div>
            <FaBriefcase className="text-gray-400 mt-1" />
          </div>

          <div className="flex flex-wrap gap-2 text-sm text-gray-400">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-[var(--neon)] rounded-full" />
              {experience.duration}
            </span>
            <span>•</span>
            <span>{experience.location}</span>
          </div>
        </div>

        {/* Highlights */}
        <div className="space-y-3 mb-4">
          {experience.highlights.map((highlight, idx) => (
            <div key={idx} className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-[var(--neon)]/10 rounded-lg flex items-center justify-center">
                <highlight.icon className="text-[var(--neon)] text-sm" />
              </div>
              <div className="flex-1">
                <h4 className="text-white font-medium mb-1">{highlight.title}</h4>
                <p className="text-gray-400 text-sm mb-1">{highlight.description}</p>
                <p className="text-[var(--neon)] text-xs font-medium">{highlight.achievement}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-md border border-gray-700/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      id="experience"
      className="min-h-screen py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-[var(--neon)]">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[var(--neon)] to-transparent mx-auto" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-800 top-0 bottom-0">
            <motion.div
              variants={timelineVariants}
              className="w-full bg-gradient-to-b from-[var(--neon)] via-purple-500 to-[var(--neon)]"
            />
          </div>

          {/* Mobile Timeline Line */}
          <div className="lg:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gray-800">
            <motion.div
              variants={timelineVariants}
              className="w-full bg-gradient-to-b from-[var(--neon)] via-purple-500 to-[var(--neon)]"
            />
          </div>

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-[var(--neon)] to-purple-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-[var(--neon)]/25 transition-all duration-300"
            onClick={() => {
              const element = document.getElementById('about')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            View My Skills
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Experience
