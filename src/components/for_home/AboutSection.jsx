import React from 'react'
// Icons
import * as iconsUtil from '@/utils/icons.util'
// Images
import HeroPhoto from '@/assets/images/for_home/image.jpg'
// AOS Library
import 'aos/dist/aos.css';

export const AboutSection = () => {
    return (
        <main className='relative flex flex-col items-center'>
            <section className='flex flex-col mt-24 px-5' id='about'>

                {/* header */}
                <header className='flex items-center' data-aos="fade-right" data-aos-duration="1000">
                    <p className='font-medium text-3xl'>
                        <span className='text-secondaryColor'>#</span>
                        about-me
                    </p>
                    <span className='hidden md:block pl-4'>
                        <iconsUtil.LineHIcon />
                    </span>
                </header>

                {/* main */}
                <main className='flex flex-col-reverse xl:flex-row items-center gap-5 justify-between mt-12 xl:w-[1150px]'>
                    {/* personal info */}
                    <article className='flex text-lg flex-col gap-7 sm:w-3/4 xl:max-w-[515px]'>
                        <p data-aos="fade-right" data-aos-duration="1000">Hello, i’m Mohamed!</p>
                        <p data-aos="fade-right" data-aos-duration="1200">With <span className='font-bold'>over 25 successful projects</span> completed, I am a dedicated Front-end Developer passionate about crafting responsive and user-friendly web applications. My expertise spans Web Development, Web Design, and creating visually appealing, functional digital experiences. I utilize modern technologies such as React, Tailwind CSS, HTML, and CSS, ensuring that every project is executed with high-quality code and design.</p>
                        <p data-aos="fade-right" data-aos-duration="1400">I am committed to understanding the unique needs of each client and delivering customized solutions that drive growth and success for their businesses.</p>
                        <button className='max-w-52 font-medium py-2 px-4 border-2 border-primaryColor mt-6 hover:bg-primaryColor/90 hover:text-secondaryColor' data-aos="fade-right" data-aos-duration="1600">Read more -&gt;</button>
                    </article>

                    {/* personal photo */}
                    <aside className='relative' data-aos="fade-left" data-aos-duration="2000">
                        <span className='absolute top-5 left-5'>
                            <iconsUtil.SquareDotsIcon />
                        </span>
                        <img src={HeroPhoto} width={350} alt='Personal Photo' className='rounded-t-3xl border-b border-primaryColor' />
                        <span className='absolute right-10 bottom-5'>
                            <iconsUtil.SquareDotsIcon />
                        </span>
                    </aside>
                </main>
            </section>

            {/* Float Shapes */}
            <span className='hidden vsm:block absolute right-0 top-[100px] -z-10'>
                <iconsUtil.RectangleDotsIcon />
            </span>
            <span className='hidden vsm:block absolute left-0 top-[200px] -z-10'>
                <iconsUtil.BigRectangleIcon />
            </span>
        </main>
    )
}
