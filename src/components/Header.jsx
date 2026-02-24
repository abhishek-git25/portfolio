import React, { useState } from 'react'
import { FaBrain } from 'react-icons/fa'
import { HiMenu, HiX } from 'react-icons/hi'

const Header = ({ currentSection, setCurrentSection }) => {
    const [open, setOpen] = useState(false)

    const scrollToSection = (sectionId) => {
        if (sectionId === 'ask-ai') {
            window.location.href = '/ask-ai'
            return
        }
        
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            if (setCurrentSection) setCurrentSection(sectionId)
        }
        setOpen(false)
    }

    const navItems = [
        { id: 'hero', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'resume', label: 'Resume' },
        { id: 'contact', label: 'Contact' },
        { id: 'ask-ai', label: 'Ask AI' }
    ]

    return (
        <>
            <header className="bg-transparent fixed top-0 left-0 right-0 w-full h-20 flex items-center justify-center z-50 backdrop-blur-sm bg-black/20">
                <nav className='hidden md:flex items-center gap-10'>
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`hover:text-[var(--neon)] 
                                hover:underline 
                                hover:underline-offset-4 
                                hover:decoration-[var(--neon)] 
                                transition-all duration-300
                                ${currentSection === item.id ? 'text-[var(--neon)] underline' : 'text-white'}`}
                        >
                            {item.label}
                        </button>
                    ))}
                    <button
                        onClick={() => scrollToSection('chat')}
                        className="flex items-center gap-2 px-5 py-2 
                                border border-[var(--neon)] 
                                text-[var(--neon)] 
                                rounded-md
                                hover:bg-[var(--neon)] 
                                hover:text-black 
                                transition-all duration-300">
                        Ask AI
                        <FaBrain size={22} />
                    </button>
                </nav>

                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-[var(--neon)] absolute right-8"
                >
                    {open ? <HiX size={28} /> : <HiMenu size={28} />}
                </button>
            </header>

            {open && (
                <div className="fixed top-20 right-8 bg-black/90 min-w-[calc(100vw-70px)]
                        border border-[var(--neon)] 
                        rounded-lg p-6 flex flex-col items-center gap-6 
                        md:hidden backdrop-blur-md z-50"
                >
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`text-[var(--neon)] hover:underline
                                ${currentSection === item.id ? 'underline' : ''}`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            )}
        </>
    )
}

export default Header
