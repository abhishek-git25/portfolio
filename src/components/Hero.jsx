import { motion } from "framer-motion"
import { useState } from "react"

const Hero = () => {
    // const [state, setstate] = useState(initialState)
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-[calc(100vh-90px)] flex flex-col justify-center  items-center max-w-7xl text-center mx-auto"
        >
            {/* <p className="text-[var(--neon)]">{"> booting portfolio..."}</p>
            <p className="text-[var(--neon)]">{"> loading frontend_engine..."}</p>
            <p className="text-[var(--neon)] mb-6">{"> access granted ✔"}</p> */}

            <h1 className="text-4xl md:text-5xl font-bold text-[var(--neon)]">
                Abhishek Yadav
            </h1>
            <p className="mt-3 text-lg">
                Frontend Engineer | Gen-AI Developer
            </p>
            <p className="mt-8 text-lg">
                I am a Software Engineer with expertise in frontend development using <span className="text-[var(--neon)] underline underline-offset-4">React</span>, <span className="text-[var(--neon)] underline underline-offset-4">JavaScript</span>, <span className="text-[var(--neon)] underline underline-offset-4">TypeScript</span>,  and modern UI frameworks, along with hands-on experience in Gen-AI development,
                including <span className="text-[var(--neon)] underline underline-offset-4">LLM integration</span>, <span className="text-[var(--neon)] underline underline-offset-4">embeddings</span>, <span className="text-[var(--neon)] underline underline-offset-4">RAG pipelines</span>, and <span className="text-[var(--neon)] underline underline-offset-4">AI-powered features</span>.
            </p>
        </motion.section>
    )
}

export default Hero
