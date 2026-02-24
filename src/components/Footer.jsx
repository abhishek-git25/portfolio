import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='sticky  bottom-12 pr-10'>
            <nav className='flex items-center justify-end gap-8'>
                <a
                    href="https://www.linkedin.com/in/abhishek-yadav-b364111aa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-(--neon) transition-colors duration-300"
                >
                    <FaLinkedin size={20} />
                </a>

                <a
                    href="https://github.com/abhishek-git25"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-(--neon) transition-colors duration-300"
                >
                    <FaGithub size={20} />
                </a>

                <a
                    href="https://x.com/Abhishe10857102"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-(--neon) transition-colors duration-300"
                >
                    <FaXTwitter size={20} />
                </a>
            </nav>
        </footer>
    )
}

export default Footer
