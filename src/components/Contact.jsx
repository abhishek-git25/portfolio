import { motion } from "framer-motion"
import { useState } from "react"
import { 
  FaEnvelope, 
  FaLinkedin, 
  FaGithub, 
  FaPaperPlane,
  FaMapMarkerAlt,
  FaPhone
} from "react-icons/fa"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setIsSubmitted(false)
    }, 3000)
  }

  const contactLinks = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'yadavabhi050198@gmail.com',
      href: 'mailto:yadavabhi050198@gmail.com',
      color: 'text-red-400'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Abhishek Yadav',
      href: 'https://www.linkedin.com/in/abhishek-yadav-b364111aa/',
      color: 'text-blue-400'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'abhishek-git25',
      href: 'https://github.com/abhishek-git25',
      color: 'text-gray-400'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: '+91 9336559224',
      href: 'tel:+919336559224',
      color: 'text-green-400'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Lucknow, India',
      href: null,
      color: 'text-purple-400'
    }
  ]

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      id="contact"
      className="min-h-screen py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="text-[var(--neon)]">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[var(--neon)] to-transparent mx-auto" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Let's discuss your next project. I'm always interested in hearing about new opportunities and exciting ideas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[var(--neon)] mb-6">
                Send a Message
              </h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-[var(--neon)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaPaperPlane className="text-[var(--neon)] text-2xl" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                  <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[var(--neon)] focus:ring-2 focus:ring-[var(--neon)]/20 transition-all duration-300"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[var(--neon)] focus:ring-2 focus:ring-[var(--neon)]/20 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[var(--neon)] focus:ring-2 focus:ring-[var(--neon)]/20 transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-[var(--neon)] to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-[var(--neon)]/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <FaPaperPlane className="text-sm" />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[var(--neon)] mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4"
                  >
                    <div className={`w-12 h-12 bg-gray-800/50 rounded-lg flex items-center justify-center ${link.color}`}>
                      <link.icon size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-medium mb-1">{link.label}</h4>
                      {link.href ? (
                        <a
                          href={link.href}
                          target={link.label !== 'Email' && link.label !== 'Phone' ? '_blank' : '_self'}
                          rel="noopener noreferrer"
                          className={`${link.color} hover:underline transition-colors duration-300`}
                        >
                          {link.value}
                        </a>
                      ) : (
                        <span className={`${link.color}`}>{link.value}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-800">
                <h4 className="text-white font-medium mb-4">Let's Connect</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  I'm always open to discussing new opportunities, creative ideas, or potential partnerships. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <motion.div
              variants={itemVariants}
              className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-[var(--neon)] mb-6">
                Quick Links
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.getElementById('about')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white hover:border-[var(--neon)] transition-all duration-300"
                >
                  About Me
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.getElementById('experience')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white hover:border-[var(--neon)] transition-all duration-300"
                >
                  Experience
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.getElementById('hero')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white hover:border-[var(--neon)] transition-all duration-300"
                >
                  Home
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = '/ask-ai'}
                  className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white hover:border-[var(--neon)] transition-all duration-300"
                >
                  Ask AI
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact
