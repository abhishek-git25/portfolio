import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import {
  FaArrowLeft,
  FaPaperPlane,
  FaRobot,
  FaUser
} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const AIChatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "Hi! 👋 I'm Abhishek's AI assistant. I can help you learn about his skills, experience, projects, or how to get in touch. What would you like to know?",
      timestamp: new Date()
    }
  ])
  
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)
  const navigate = useNavigate()

  const predefinedResponses = {
    greeting: [
      "Hello! I'm here to help you learn about Abhishek. You can ask me about his skills, experience, projects, or how to contact him.",
      "Hi there! I'm Abhishek's AI assistant. Feel free to ask me anything about his professional background or expertise."
    ],
    skills: [
      "Abhishek is a skilled Software Engineer with expertise in React, TypeScript, Next.js, and Three.js. He has 4+ years of experience in frontend development and specializes in building high-performance, accessible web applications.",
      "His technical skills include React ecosystem, modern UI frameworks, and Gen-AI development with LLM integration and RAG pipelines. He's also experienced in VAPT and security best practices."
    ],
    experience: [
      "Abhishek currently works as a Software Engineer - Frontend at Planet Green Solution in Dubai, UAE. Previously, he worked at Augurs Technologies and Rozgaar India, gaining 4+ years of diverse experience.",
      "His recent highlight project was for the UAE Ministry, where he reduced VAPT vulnerabilities from 40% to 0% and achieved a 50% performance boost through optimization."
    ],
    projects: [
      "Abhishek has worked on 10+ projects including enterprise applications, government systems, and innovative web solutions. His recent work involves creating reusable component libraries that reduced development time by 30%.",
      "He specializes in building scalable React applications with modern architectures, focusing on performance, accessibility, and security."
    ],
    education: [
      "Abhishek holds a Bachelor of Computer Application (BCA) degree from Shri Ramswaroop Memorial University (2018-2021)."
    ],
    contact: [
      "You can reach Abhishek via email at yadavabhi050198@gmail.com, phone at +91 9336559224, or connect with him on LinkedIn. He's currently based in Dubai, UAE.",
      "The best ways to contact Abhishek are through email (yadavabhi050198@gmail.com) or LinkedIn. He's always open to discussing new opportunities and collaborations."
    ],
    default: [
      "That's an interesting question! I can tell you about Abhishek's skills, experience, projects, education, or how to contact him. What specific area would you like to explore?",
      "I'm here to help you learn about Abhishek. Feel free to ask about his technical expertise, professional background, or how to get in touch with him."
    ]
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateResponse = (userInput) => {
    const input = userInput.toLowerCase()
    
    if (input.includes('skill') || input.includes('tech') || input.includes('expertise')) {
      return predefinedResponses.skills[Math.floor(Math.random() * predefinedResponses.skills.length)]
    } else if (input.includes('experience') || input.includes('work') || input.includes('job')) {
      return predefinedResponses.experience[Math.floor(Math.random() * predefinedResponses.experience.length)]
    } else if (input.includes('project') || input.includes('portfolio') || input.includes('work')) {
      return predefinedResponses.projects[Math.floor(Math.random() * predefinedResponses.projects.length)]
    } else if (input.includes('education') || input.includes('degree') || input.includes('university')) {
      return predefinedResponses.education[Math.floor(Math.random() * predefinedResponses.education.length)]
    } else if (input.includes('contact') || input.includes('email') || input.includes('phone') || input.includes('reach')) {
      return predefinedResponses.contact[Math.floor(Math.random() * predefinedResponses.contact.length)]
    } else if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return predefinedResponses.greeting[Math.floor(Math.random() * predefinedResponses.greeting.length)]
    } else {
      return predefinedResponses.default[Math.floor(Math.random() * predefinedResponses.default.length)]
    }
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate bot thinking time
    await new Promise(resolve => setTimeout(resolve, 1500))

    const botResponse = {
      id: Date.now() + 1,
      type: 'bot',
      content: generateResponse(inputValue),
      timestamp: new Date()
    }

    setMessages(prev => [...prev, botResponse])
    setIsTyping(false)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const quickQuestions = [
    "Tell me about your skills",
    "What's your experience?",
    "What projects have you worked on?",
    "How can I contact you?"
  ]

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  }

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="min-h-screen bg-[#0a0a0a] flex flex-col"
    >
      {/* Header */}
      <motion.header 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-gray-900/50 backdrop-blur-md border-b border-gray-800 px-6 py-4"
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate('/')}
              className="p-2 rounded-lg bg-gray-800/50 text-gray-400 hover:text-[var(--neon)] transition-colors duration-300"
            >
              <FaArrowLeft size={20} />
            </motion.button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-[var(--neon)] to-purple-600 rounded-full flex items-center justify-center">
                <FaRobot className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">AI Assistant</h1>
                <p className="text-sm text-gray-400">Ask about Abhishek</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-gray-400">Online</span>
          </div>
        </div>
      </motion.header>

      {/* Chat Messages */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex-1 overflow-y-auto px-6 py-8"
      >
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Quick Questions */}
          {messages.length === 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-8"
            >
              <h3 className="text-gray-400 text-sm font-medium mb-3">Quick Questions:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {quickQuestions.map((question, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setInputValue(question)}
                    className="px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg text-gray-300 hover:border-[var(--neon)]/50 hover:text-[var(--neon)] transition-all duration-300 text-left text-sm"
                  >
                    {question}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {/* Messages */}
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex gap-3 max-w-2xl ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.type === 'user' 
                      ? 'bg-gradient-to-r from-[var(--neon)] to-purple-600' 
                      : 'bg-gray-800'
                  }`}>
                    {message.type === 'user' ? (
                      <FaUser className="text-white text-sm" />
                    ) : (
                      <FaRobot className="text-[var(--neon)] text-sm" />
                    )}
                  </div>
                  <div className={`px-4 py-3 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-[var(--neon)]/20 to-purple-600/20 border border-[var(--neon)]/30'
                      : 'bg-gray-900/50 border border-gray-800'
                  }`}>
                    <p className={`text-sm leading-relaxed ${
                      message.type === 'user' ? 'text-white' : 'text-gray-300'
                    }`}>
                      {message.content}
                    </p>
                    <p className={`text-xs mt-2 ${
                      message.type === 'user' ? 'text-[var(--neon)]/70' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing Indicator */}
          <AnimatePresence>
            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex justify-start"
              >
                <div className="flex gap-3 max-w-2xl">
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                    <FaRobot className="text-[var(--neon)] text-sm" />
                  </div>
                  <div className="px-4 py-3 rounded-2xl bg-gray-900/50 border border-gray-800">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-[var(--neon)] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-[var(--neon)] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-[var(--neon)] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div ref={messagesEndRef} />
        </div>
      </motion.div>

      {/* Input Area */}
      <motion.footer
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-gray-900/50 backdrop-blur-md border-t border-gray-800 px-6 py-4"
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <textarea
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[var(--neon)] focus:ring-2 focus:ring-[var(--neon)]/20 transition-all duration-300 resize-none"
                rows={1}
                style={{ minHeight: '48px', maxHeight: '120px' }}
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="px-6 py-3 bg-gradient-to-r from-[var(--neon)] to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-[var(--neon)]/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              <FaPaperPlane className="text-sm" />
              Send
            </motion.button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Powered by AI • Responses are based on Abhishek's profile information
          </p>
        </div>
      </motion.footer>
    </motion.div>
  )
}

export default AIChatbot
