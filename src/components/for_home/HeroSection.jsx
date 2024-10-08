import React from 'react'
// Icons
import * as iconsUtil from '@/utils/icons.util'
import { BsWhatsapp } from "react-icons/bs";
// Images
import HeroPhoto from '@/assets/images/for_home/Image.png'
// Components
import { ProjectSection } from "./ProjectSection";
import { AboutSection } from './AboutSection';


export const HeroSection = () => {
    return (
        <main className='relative flex flex-col items-center'>

            {/* Info Section */}
            <section className='flex justify-between items-center mt-20 gap-20'>
                <span>
                    <p className='font-semibold text-3xl max-w-[580px]'>
                        Mohamed is a <span className='text-secondaryColor'>front-end developer</span> and <span className='text-secondaryColor'>web designer</span>
                    </p>
                    <p className='leading-6 mt-8 max-w-[463px]'>He crafts responsive websites where technologies meet creativity</p>
                    <button className='font-medium py-2 px-4 border-2 border-primaryColor mt-6 hover:bg-primaryColor/90 hover:text-secondaryColor'>Contact me!!</button>
                </span>
                <span className='relative'>
                    <span className='absolute -z-10'>
                        <iconsUtil.CubeShape />
                    </span>
                    <img src={HeroPhoto} alt='Hero photo' />
                    <p className='flex items-center p-2 border-2 border-primaryColor font-medium gap-2'>
                        <iconsUtil.RectangleShape />
                        Currently working on
                        <span className='font-semibold'>Portfolio</span>
                    </p>
                </span>
            </section>

            {/* Wisdom Section */}
            <section className='flex flex-col items-end mt-20'>
                <p className='relative text-2xl font-medium border border-primaryColor p-8'>
                    Every problem has a solution, just code it right
                    <span className='absolute -top-4 left-5 bg-backgroundColor p-1'>
                        <iconsUtil.QuoteIcon />
                    </span>
                </p>
                <p className='relative text-2xl border border-primaryColor border-t-0 p-4 w-fit'>
                    - Mohamed
                    <span className='absolute -top-4 right-5 bg-backgroundColor p-1'>
                        <iconsUtil.QuoteIcon />
                    </span>
                </p>
            </section>

            <ProjectSection />

            {/* Skills Section */}
            <section className='flex flex-col mt-24'>

                {/* header */}
                <header className='flex items-center'>
                    <p className='font-medium text-3xl'>
                        <span className='text-secondaryColor'>#</span>
                        skills
                    </p>
                    <span className='pl-4'>
                        <iconsUtil.LineHIcon />
                    </span>
                </header>

                {/* main */}
                <main className='flex justify-between mt-12 w-[1184px]'>
                    {/* icons */}
                    <section className='w-96 relative'>
                        <span className='absolute top-10 left-0'>
                            <iconsUtil.SquareDotsIcon />
                        </span>
                        <span className='absolute top-1/3 left-1/2'>
                            <iconsUtil.SquareDotsIcon />
                        </span>
                        <span className='absolute bottom-0 left-5'>
                            <iconsUtil.CubeShape />
                        </span>
                        <span className='absolute top-0 right-5'>
                            <iconsUtil.RectangleIcon />
                        </span>
                        <span className='absolute bottom-10 right-0'>
                            <iconsUtil.SmallRectangleIcon />
                        </span>
                    </section>

                    {/* language */}
                    <section className='flex gap-4'>
                        <article>
                            <div className='border border-primaryColor w-52'>
                                <p className='font-semibold border-b border-primaryColor p-2'>Languages</p>
                                <p className='p-2 pb-0'>Kotlin</p>
                                <p className='p-2'>JavaScript</p>
                            </div>
                        </article>
                        <article className='flex flex-col gap-4'>
                            <div className='border border-primaryColor w-52'>
                                <p className='font-semibold border-b border-primaryColor p-2'>Databases</p>
                                <p className='p-2 pb-0'>SQL SQLite</p>
                                <p className='p-2'>MongoDB Firebase</p>
                            </div>
                            <div className='border border-primaryColor w-52'>
                                <p className='font-semibold border-b border-primaryColor p-2'>Other</p>
                                <p className='p-2 pb-0'>HTML CSS Postman</p>
                                <p className='p-2'>Vercel AdobePr REST</p>
                            </div>
                        </article>
                        <article className='flex flex-col gap-4'>
                            <div className='border border-primaryColor w-52'>
                                <p className='font-semibold border-b border-primaryColor p-2'>Tools</p>
                                <p className='p-2 pb-0'>VSCode AndroidST</p>
                                <p className='p-2 pb-0'>Git IntelliJ Vite</p>
                                <p className='p-2'>Figma Vercel GitHub</p>
                            </div>
                            <div className='border border-primaryColor w-52'>
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
            <section className='flex flex-col mt-24'>

                {/* header */}
                <header className='flex items-center'>
                    <p className='font-medium text-3xl'>
                        <span className='text-secondaryColor'>#</span>
                        contacts
                    </p>
                    <span className='pl-4'>
                        <iconsUtil.LineHIcon />
                    </span>
                </header>

                {/* main */}
                <main className='flex justify-between mt-12 w-[1184px]'>
                    {/* info */}
                    <article className='flex flex-col gap-7 max-w-[515px]'>
                        <p className='font-medium'>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
                    </article>

                    {/* contact */}
                    <aside>
                        <div className='border border-primaryColor p-4'>
                            <p className='font-semibold mb-4'>Message me here</p>
                            <a href="mailto:mohamed.devmaster@gmail.com" className='hover:underline flex gap-1 items-center mb-2'><iconsUtil.EmailIcon />mohamed.devmaster@gmail.com</a>
                            <a href="https://wa.me/+201101201745" className='hover:underline flex gap-1 items-center'><BsWhatsapp size={25} className='m-[5px]' />01101201745</a>
                        </div>
                    </aside>
                </main>
                <span className='absolute left-0 top-[2550px]'>
                    <iconsUtil.RectangleDotsIcon />
                </span>
            </section>

        </main>
    )
}