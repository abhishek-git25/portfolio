import { useState } from "react"

const commands = {
  about: "4+ years frontend engineer. React, Next.js, Gen-AI.",
  skills: "React, TypeScript, Tailwind v4, LangChain, RAG",
  projects: "AI Resume Bot | RAG System | Web3 UI",
  genai: "Chunk → Embed → Vector Search → LLM",
  contact: "email: abhishek@dev | github: /abhishek"
}

export default function Terminal() {
  const [history, setHistory] = useState([])
  const [input, setInput] = useState("")

  const runCommand = (e) => {
    if (e.key === "Enter") {
      const result = commands[input] || "command not found"
      setHistory([...history, `> ${input}`, result])
      setInput("")
    }
  }

  return (
    <div className="border border-[var(--neon)] p-4 my-10 glow">
      {history.map((line, i) => (
        <p key={i} className="text-[var(--neon)]">
          {line}
        </p>
      ))}

      <div className="flex items-center">
        <span className="text-[var(--neon)] mr-2">{">"}</span>
        <input
          className="bg-transparent outline-none flex-1 text-[var(--neon)]"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={runCommand}
          autoFocus
        />
      </div>
    </div>
  )
}
