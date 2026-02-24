import React from 'react'
import BreadCrumbs from './BreadCrumbs'
import placeholder from "../assets/images/placeholder.jpg"
import { BsDownload } from 'react-icons/bs'

const Resume = () => {

    const routes = [
        {
            name: "Home",
            path: "#hero"
        },
        {
            name: "Resume",
            path: "#resume"
        }
    ]

    const experience = [
        {
            company: "Planet Green Solution",
            role: "Software Engineer - Frontend",
            duration: "September 2025 - Present",
        },
        {
            company: "Augurs Technologies",
            role: "Software Engineer",
            duration: "June 2022 - August 2025",
        },
        {
            company: "Rozgaar India",
            role: "Junior Programmer",
            duration: "March 2021 - May 2022"
        }
    ]

    const education = [
        {
            institution: "Shri Ramswaroop Memorial University",
            duration: "2018 - 2021",
            course: "Bachelor of Computer Application (BCA)"
        },
        {
            institution: "Sunderlal Inter College",
            duration: "2016 - 2017",
            course: "Intermediate (12th Grade)"
        }
    ]


    return (
        <div id="resume" className="min-h-screen bg-[#0a0a0a] py-20 px-6">
            <BreadCrumbs routes={routes} />
            <section className='h-[calc(100vh-90px)] flex items-center justify-center'>
                <div className='max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <div className='flex justify-center'>
                        <img src={placeholder} alt="profile" className='rounded-full w-64 h-64 object-cover border-4 border-[var(--neon)]' />
                    </div>
                    <div className='flex flex-col justify-center'>
                        <h2 className='text-4xl font-bold text-[var(--neon)] mb-6'>Abhishek Yadav</h2>
                        <p className='text-lg mb-4'>Frontend Engineer & Gen-AI Developer</p>
                        <div className='space-y-2'>
                            <p>
                                <span className="text-[var(--neon)]">Name: </span> <span>Abhishek Yadav</span>
                            </p>
                            <p>
                                <span className="text-[var(--neon)]">Mobile No: </span> <span><a href="tel:+919336559224" className="hover:text-[var(--neon)] hover:underline underline-offset-2 transition-colors duration-300">+91 9336559224</a> </span>
                            </p>
                            <p>
                                <span className="text-[var(--neon)]">Email: </span> <span><a href='mailto:yadavabhi050198@gmail.com' className="hover:text-[var(--neon)] hover:underline underline-offset-2 transition-colors duration-300">yadavabhi050198@gmail.com</a></span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-20'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 justify-center p-4 mx-auto max-w-5xl'>
                    <div >
                        <h4 className='text-[var(--neon)] text-xl'>Experience</h4>
                        <div className='resume-items mt-10 md:mt-24'>
                            {experience.map((item, index) => (
                                <div className='resume-item' key={index} >
                                    <div className='duration'>
                                        {item.duration}
                                    </div>
                                    <h4 className='font-semibold pb-2'>{item.company}</h4>
                                    <p className='text-sm'>{item.role}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div >
                        <h4 className='text-[var(--neon)] text-xl'>Education</h4>
                        <div className='resume-items mt-10 md:mt-24'>
                            {education.map((item, index) => (
                                <div className='resume-item' key={index} >
                                    <div className='duration'>
                                        {item.duration}
                                    </div>
                                    <h4 className='font-semibold pb-2'>{item.institution}</h4>
                                    <p className='text-sm'>{item.course}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Resume
