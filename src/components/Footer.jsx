import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='sticky  bottom-12 pr-10'>
            <nav className='flex items-center justify-end gap-8'>
                <Link to={"#"} className="hover:text-[var(--neon)]">
                    <FaLinkedin size={20} />
                </Link>
                <Link to={"#"} className="hover:text-[var(--neon)]">
                    <FaGithub size={20} />
                </Link>
                <Link to={"#"} className="hover:text-[var(--neon)]">
                    <FaXTwitter size={20} />
                </Link>
            </nav>
        </footer>
    )
}

export default Footer
