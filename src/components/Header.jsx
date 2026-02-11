import React, { useState } from 'react'
import { FaBrain } from 'react-icons/fa'
import { HiMenu, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom'

const Header = () => {

    const [open, setOpen] = useState(false);

    return (
        <>
            <header className="bg-transparent fixed top-8 left-0 right-0 pr-12 w-full h-20 flex items-center justify-end z-50">
                <nav className='hidden md:flex items-center gap-10'>
                    <Link className="hover:text-[var(--neon)] 
             hover:underline 
             hover:underline-offset-4 
             hover:decoration-[var(--neon)] 
             transition-all duration-300">
                        Resume
                    </Link>
                    <button
                        className="flex items-center gap-2 px-5 py-2 
             border border-[var(--neon)] 
             text-[var(--neon)] 
             rounded-md
             hover:bg-[var(--neon)] 
             hover:text-black 
             transition-all duration-300"
                    >
                        Ask AI
                        <FaBrain size={22} />
                    </button>
                </nav>

                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-[var(--neon)]"
                >
                    {open ? <HiX size={28} /> : <HiMenu size={28} />}
                </button>
            </header>




            {open && (
                <div className="fixed top-25 right-8 bg-black/90 min-w-[calc(100vw-70px)]
                        border border-[var(--neon)] 
                        rounded-lg p-6 flex flex-col items-center gap-6 
                        md:hidden backdrop-blur-md"
                        >

                    <Link
                        to="/resume"
                        onClick={() => setOpen(false)}
                        className="text-[var(--neon)] hover:underline"
                    >
                        Resume
                    </Link>

                    <button
                        className="flex items-center gap-2 px-4 py-2 
                       border border-[var(--neon)] 
                       text-[var(--neon)] 
                       rounded-md"
                    >
                        Ask AI
                        <FaBrain size={18} />
                    </button>
                </div>
            )}
        </>

    )
}

export default Header
