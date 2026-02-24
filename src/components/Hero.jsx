import { motion } from "framer-motion"
import { useState } from "react"
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa"

const Hero = () => {
    const [isHovered, setIsHovered] = useState(false)

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
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    }

    const floatingVariants = {
        initial: { y: 0 },
        animate: {
            y: [-10, 10, -10],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    }

    return (
        <motion.section
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            id="hero"
            className="relative h-[calc(100vh-90px)] flex flex-col justify-center items-center max-w-6xl mx-auto px-6"
        >
            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />

            {/* Main content */}
            <div className="relative z-10 text-center">
                {/* Greeting */}
                <motion.div
                    variants={itemVariants}
                    className="mb-4"
                >
                    <span className="text-[var(--neon)] text-sm font-medium tracking-wider uppercase">
                        Hello, I'm
                    </span>
                </motion.div>

                {/* Name with gradient effect */}
                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-[var(--neon)] via-purple-400 to-[var(--neon)] bg-clip-text text-transparent"
                    style={{
                        backgroundSize: '200% auto',
                        animation: 'gradient 3s ease infinite'
                    }}
                >
                    Abhishek Yadav
                </motion.h1>

                {/* Title with animated underline */}
                <motion.div
                    variants={itemVariants}
                    className="relative inline-block mb-8"
                >
                    <h2 className="text-2xl md:text-3xl text-gray-200 font-light">
                        Frontend Engineer & Gen-AI Developer
                    </h2>
                    <motion.div
                        className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--neon)] to-transparent"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 1.5, duration: 1 }}
                    />
                </motion.div>

                {/* Description */}
                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12"
                >
                    Software Engineer specializing in{" "}
                    <span className="text-[var(--neon)] font-semibold">React</span>,{" "}
                    <span className="text-[var(--neon)] font-semibold">TypeScript</span>, and{" "}
                    <span className="text-[var(--neon)] font-semibold">modern UI frameworks</span>.
                    Hands-on experience in{" "}
                    <span className="text-[var(--neon)] font-semibold">LLM integration</span>,{" "}
                    <span className="text-[var(--neon)] font-semibold">RAG pipelines</span>, and{" "}
                    <span className="text-[var(--neon)] font-semibold">AI-powered features</span>.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-gradient-to-r from-[var(--neon)] to-purple-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-[var(--neon)]/25 transition-all duration-300"
                        onClick={() => {
                            window.location.href = '/ask-ai'
                        }}
                    >
                        Ask AI
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 border border-[var(--neon)] text-[var(--neon)] font-medium rounded-full hover:bg-[var(--neon)] hover:text-black transition-all duration-300"
                        onClick={() => {
                            const element = document.getElementById('contact')
                            if (element) element.scrollIntoView({ behavior: 'smooth' })
                        }}
                    >
                        Contact Me
                    </motion.button>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    variants={itemVariants}
                    className="flex gap-6 justify-center items-center"
                >
                    {[
                        { icon: FaGithub, href: "https://github.com/abhishek-git25", label: "GitHub" },
                        { icon: FaLinkedin, href: "https://www.linkedin.com/in/abhishek-yadav-b364111aa/", label: "LinkedIn" },
                        { icon: FaEnvelope, href: "mailto:yadavabhi050198@gmail.com", label: "Email" }
                    ].map((social, index) => (
                        <motion.a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.8 + index * 0.1 }}
                            whileHover={{
                                scale: 1.2,
                                color: "var(--neon)",
                                textShadow: "0 0 20px var(--neon)"
                            }}
                            className="text-gray-400 hover:text-[var(--neon)] transition-colors duration-300"
                            aria-label={social.label}
                        >
                            <social.icon size={24} />
                        </motion.a>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                variants={floatingVariants}
                initial="initial"
                animate="animate"
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400"
            >
                <FaArrowDown size={20} className="animate-bounce" />
            </motion.div>
        </motion.section>
    )
}

export default Hero
