import React from 'react'
// Icons
import * as iconsUtil from '@/utils/icons.util'
// AOS Library
import 'aos/dist/aos.css';

export const SkillsSection = () => {
    return (
        <main className='relative flex flex-col items-center'>
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
                    {/* float icons */}
                    <section className='hidden md:block w-96 relative'>
                        <span className='absolute top-2 left-0 -z-10'>
                            <iconsUtil.SquareDotsIcon />
                        </span>
                        <span className='hidden xl:block absolute top-1/2 left-2/4 -z-10'>
                            <iconsUtil.SquareDotsIcon />
                        </span>
                        <span className='absolute bottom-0 left-5 -z-10'>
                            <iconsUtil.CubeShape />
                        </span>
                        <span className='absolute top-0 right-5 -z-10'>
                            <iconsUtil.RectangleIcon />
                        </span>
                        <span className='hidden xl:block absolute bottom-10 right-0 -z-10'>
                            <iconsUtil.SmallRectangleIcon />
                        </span>
                    </section>

                    {/* language and tools */}
                    <section className='flex flex-wrap-reverse gap-4'>

                        {/* Languages Box */}
                        <article
                            data-aos="zoom-in" data-aos-duration="1000"
                        >
                            <div className='border border-primaryColor sm:w-52'>
                                <p className='font-semibold border-b border-primaryColor p-2'>Languages</p>
                                <p className='p-2 pb-0'>Kotlin</p>
                                <p className='p-2'>JavaScript</p>
                            </div>
                        </article>

                        {/* Databases & Other Box */}
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

                        {/* Tools & Frameworks Box */}
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
        </main>
    )
}
