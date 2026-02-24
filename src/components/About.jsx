import { motion } from "framer-motion"
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaPython
} from "react-icons/fa"
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  // SiExpress,
  SiOpenai,
  SiWebpack,
  SiVite,
  SiJest,
  SiCypress,
  SiFigma,
  SiAdobexd,
  SiGithub,
  SiThreedotjs
} from "react-icons/si"

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { icon: FaReact, name: "React", level: 90 },
        { icon: SiNextdotjs, name: "Next.js", level: 70 },
        { icon: SiTypescript, name: "TypeScript", level: 88 },
        { icon: SiJavascript, name: "JavaScript", level: 95 },
        { icon: SiHtml5, name: "HTML5", level: 92 },
        { icon: SiCss3, name: "CSS3", level: 90 },
        { icon: SiTailwindcss, name: "Tailwind CSS", level: 80 },
        { icon: SiThreedotjs, name: "Three.js", level: 50 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { icon: FaNodeJs, name: "Node.js", level: 60 },
        { icon: SiNodedotjs, name: "Express.js", level: 60 },
        { icon: SiMongodb, name: "MongoDB", level: 50 },
        { icon: FaPython, name: "Python", level: 50 }
      ]
    },
    {
      title: "Tools",
      skills: [
        { icon: FaGitAlt, name: "Git", level: 90 },
        { icon: SiWebpack, name: "Webpack", level: 75 },
        { icon: SiVite, name: "Vite", level: 85 },
        { icon: SiOpenai, name: "Open AI", level: 40 },
      ]
    }
  ]

  const SkillCard = ({ skill, index }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{
        scale: 1.05,
        boxShadow: "0 10px 30px rgba(0, 255, 159, 0.3)"
      }}
      className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4 hover:border-[var(--neon)] transition-all duration-300 group"
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="text-[var(--neon)] group-hover:scale-110 transition-transform duration-300">
            <skill.icon size={24} />
          </div>
          <span className="text-gray-200 font-medium">{skill.name}</span>
        </div>
        <span className="text-sm text-gray-400">{skill.level}%</span>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{
            duration: 1,
            delay: index * 0.1,
            ease: "easeOut"
          }}
          className="h-full bg-gradient-to-r from-[var(--neon)] to-purple-500 rounded-full"
        />
      </div>
    </motion.div>
  )

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      id="about"
      className="min-h-screen py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-[var(--neon)]">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[var(--neon)] to-transparent mx-auto" />
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-(--neon) mb-6">
                Software Engineer
              </h3>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  With over <span className="text-(--neon) font-semibold">4 years of experience</span> in frontend development,
                  I specialize in building high-performance, accessible web applications that deliver exceptional user experiences.
                </p>

                <p>
                  My expertise spans from <span className="text-[var(--neon)] font-semibold">React ecosystem</span> to
                  advanced <span className="text-[var(--neon)] font-semibold">Three.js visualizations</span>,
                  always focusing on performance optimization and accessibility best practices.
                </p>

                <p>
                  I have hands-on experience in <span className="text-[var(--neon)] font-semibold">VAPT (Vulnerability Assessment and Penetration Testing)</span>,
                  ensuring that the applications I build are not just beautiful and fast, but also secure.
                </p>

                <p>
                  Passionate about staying at the forefront of web technologies, I continuously explore new frameworks,
                  tools, and techniques to deliver cutting-edge solutions that push the boundaries of what's possible on the web.
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--neon)]">10+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--neon)]">4+</div>
                  <div className="text-sm text-gray-400">Years</div>
                </div>
                {/* <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--neon)]">15+</div>
                  <div className="text-sm text-gray-400">Technologies</div>
                </div> */}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[var(--neon)] mb-6">
                Technical Skills
              </h3>

              <div className="space-y-6">
                {skillCategories.map((category, categoryIndex) => (
                  <div key={category.title}>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-[var(--neon)] rounded-full" />
                      {category.title}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <SkillCard
                          key={skill.name}
                          skill={skill}
                          index={categoryIndex * 10 + skillIndex}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        {/* <motion.div
          variants={itemVariants}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-[var(--neon)] to-purple-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-[var(--neon)]/25 transition-all duration-300"
            onClick={() => {
              const element = document.getElementById('resume')
              if (element) element.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            View My Projects
          </motion.button>
        </motion.div> */}
      </div>
    </motion.section>
  )
}

export default About
