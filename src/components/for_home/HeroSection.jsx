import React from 'react'
// Icons
import * as iconsUtil from '@/utils/icons.util'
import { BsWhatsapp } from "react-icons/bs";
// Components
import { ProjectSection } from "./ProjectSection";
import { AboutSection } from './AboutSection';
// motion
import { motion } from "framer-motion"
import AOS from 'aos';
import 'aos/dist/aos.css';

export const HeroSection = () => {
    AOS.init();
    return (
        <main className='relative flex flex-col items-center'>

            {/* Info Section */}
            <section className='flex items-center justify-center mt-36 px-5 w-full'>
                <span>
                    <p className='font-semibold text-3xl sm:text-5xl max-w-5xl' data-aos="fade-right" data-aos-duration="1000">
                        Mohamed is a <span className='text-secondaryColor'>front-end developer</span> and <span className='text-secondaryColor'>web designer</span>
                    </p>
                    <p className='mt-8 text-lg sm:text-2xl max-w-3xl font-light' data-aos="fade-right" data-aos-duration="1300">He crafts responsive websites where technologies meet creativity...</p>
                    <button className='font-medium py-4 px-5 sm:text-lg border-2 border-primaryColor mt-6 hover:bg-primaryColor/90 hover:text-secondaryColor' data-aos="fade-right" data-aos-duration="1700">Contact me!!</button>
                </span>
            </section>

            {/* Wisdom Section */}
            <section
                className='flex flex-col items-end mt-28 px-5' data-aos="fade-right"
                data-aos-offset="100"
                data-aos-duration="2000"
                data-aos-easing="ease-in-sine"
            >
                <p className='relative text-lg sm:text-2xl font-medium border border-primaryColor p-5 sm:p-8'>
                    Every problem has a solution, just code it right
                    <span className='absolute -top-4 left-5 bg-backgroundColor p-1'>
                        <iconsUtil.QuoteIcon />
                    </span>
                </p>
                <p className='relative text-lg sm:text-2xl border border-primaryColor border-t-0 p-4 w-fit'>
                    - Mohamed
                    <span className='absolute -top-4 right-5 bg-backgroundColor p-1'>
                        <iconsUtil.QuoteIcon />
                    </span>
                </p>
            </section>

            <ProjectSection />

            {/* Skills Section */}
            <section className='flex flex-col px-5 mt-24'>

                {/* header */}
                <header className='flex items-center' data-aos="fade-right" data-aos-duration="1000">
                    <p className='font-medium text-3xl'>
                        <span className='text-secondaryColor'>#</span>
                        skills
                    </p>
                    <span className='hidden md:block pl-4'>
                        <iconsUtil.LineHIcon />
                    </span>
                </header>

                {/* main */}
                <main className='flex justify-between mt-12 xl:w-[1150px]'>
                    {/* icons */}
                    <section className='hidden md:flex w-96 relative'>
                        <span className='absolute top-10 left-0 -z-10'>
                            <iconsUtil.SquareDotsIcon />
                        </span>
                        <span className='hidden xl:absolute top-1/3 left-1/2 -z-10'>
                            <iconsUtil.SquareDotsIcon />
                        </span>
                        <span className='absolute bottom-0 left-5 -z-10'>
                            <iconsUtil.CubeShape />
                        </span>
                        <span className='absolute top-0 right-5 -z-10'>
                            <iconsUtil.RectangleIcon />
                        </span>
                        <span className='hidden xl:absolute bottom-10 right-0 -z-10'>
                            <iconsUtil.SmallRectangleIcon />
                        </span>
                    </section>

                    {/* language */}
                    <section className='flex flex-wrap-reverse gap-4'>
                        <article
                            data-aos="zoom-in" data-aos-duration="1000"
                        >
                            <div className='border border-primaryColor sm:w-52'>
                                <p className='font-semibold border-b border-primaryColor p-2'>Languages</p>
                                <p className='p-2 pb-0'>Kotlin</p>
                                <p className='p-2'>JavaScript</p>
                            </div>
                        </article>
                        <article
                            className='flex xl:flex-col gap-4' data-aos="zoom-in" data-aos-duration="1200"
                        >
                            <div className='border border-primaryColor sm:w-52'>
                                <p className='font-semibold border-b border-primaryColor p-2'>Databases</p>
                                <p className='p-2 pb-0'>SQL SQLite</p>
                                <p className='p-2'>MongoDB Firebase</p>
                            </div>
                            <div className='border border-primaryColor sm:w-52'>
                                <p className='font-semibold border-b border-primaryColor p-2'>Other</p>
                                <p className='p-2 pb-0'>HTML CSS Postman</p>
                                <p className='p-2'>Vercel AdobePr REST</p>
                            </div>
                        </article>
                        <article
                            className='flex xl:flex-col gap-4' data-aos="zoom-in" data-aos-duration="1500"
                        >
                            <div className='border border-primaryColor sm:w-52'>
                                <p className='font-semibold border-b border-primaryColor p-2'>Tools</p>
                                <p className='p-2 pb-0'>VSCode AndroidST</p>
                                <p className='p-2 pb-0'>Git IntelliJ Vite</p>
                                <p className='p-2'>Figma Vercel GitHub</p>
                            </div>
                            <div className='border border-primaryColor sm:w-52'>
                                <p className='font-semibold border-b border-primaryColor p-2'>Frameworks</p>
                                <p className='p-2 pb-0'>ReactJS Tailwind</p>
                                <p className='p-2 pb-0'>React Native</p>
                            </div>
                        </article>
                    </section>
                </main>
            </section>

            {/* About Section */}
            <AboutSection />


            {/* Contact Section */}
            <section id='contact' className='flex flex-col p-5 mt-24' >

                {/* header */}
                <header header className='flex items-center' data-aos="fade-right" data-aos-duration="2000">
                    <p className='font-medium text-3xl pl-3 tiny:pl-0'>
                        <span className='text-secondaryColor'>#</span>
                        contacts
                    </p>
                    <span className='hidden md:block pl-4'>
                        <iconsUtil.LineHIcon />
                    </span>
                </header>

                {/* main */}
                <main className='flex flex-col xl:flex-row gap-10 justify-between mt-12 xl:w-[1150px]' >
                    {/* info */}
                    <article article className='flex flex-col gap-7 max-w-[515px] w-full' >
                        <p className='font-medium pl-3 tiny:pl-0' data-aos="fade-right" data-aos-duration="2000">I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
                    </article>

                    {/* contact */}
                    <aside data-aos="zoom-out" data-aos-duration="2000">
                        <div className='border border-primaryColor p-4'>
                            <p className='font-semibold mb-4'>Message me here</p>
                            <a href="mailto:mohamed.devmaster@gmail.com" className='hover:underline flex gap-1 items-center mb-2'><iconsUtil.EmailIcon />mohamed.devmaster@gmail.com</a>
                            <a href="https://wa.me/+201101201745" className='hover:underline flex gap-1 items-center'><BsWhatsapp size={25} className='m-[5px]' />01101201745</a>
                        </div>
                    </aside>
                </main>
                <span className='hidden md:absolute left-0 top-[2550px] -z-10'>
                    <iconsUtil.RectangleDotsIcon />
                </span>
            </section>

        </main>
    )
}