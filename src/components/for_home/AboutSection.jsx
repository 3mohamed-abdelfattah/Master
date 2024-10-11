import React from 'react'
import * as iconsUtil from '@/utils/icons.util'
// Images
import HeroPhoto from '@/assets/images/for_home/image.jpg'
// motion
import AOS from 'aos';
import 'aos/dist/aos.css';

export const AboutSection = () => {
    AOS.init();
    return (
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
                {/* info */}
                <article className='flex text-lg flex-col gap-7 w-3/4 xl:max-w-[515px]'>
                    <p data-aos="fade-right" data-aos-duration="1000">Hello, i’m Mohamed!</p>
                    <p data-aos="fade-right" data-aos-duration="1200">Front-end Developer specializing in creating web and native mobile applications with a focus on user-friendly designs and exceptional user experiences. My priority is writing clean, efficient code and delivering customized solutions tailored to meet the specific needs of each client.</p>
                    <p data-aos="fade-right" data-aos-duration="1400">With a strong foundation in web technologies and mobile app development, combined with a deep understanding of user experience, I ensure the delivery of functional and visually engaging applications. I am ready to collaborate with you to bring your ideas to life.</p>
                    <button className='max-w-52 font-medium py-2 px-4 border-2 border-primaryColor mt-6 hover:bg-primaryColor/90 hover:text-secondaryColor' data-aos="fade-right" data-aos-duration="1600">Read more -&gt;</button>
                </article>

                {/* photo */}
                <aside className='relative' data-aos="fade-left" data-aos-duration="2000">
                    <span className='absolute left-5'>
                        <iconsUtil.SquareDotsIcon />
                    </span>
                    <img src={HeroPhoto} width={350} alt='Personal Photo' className='rounded-t-3xl border-b border-primaryColor' />
                    <span className='absolute right-10 bottom-5'>
                        <iconsUtil.SquareDotsIcon />
                    </span>
                </aside>
            </main>
            <span className='absolute right-0 top-[2100px] -z-10'>
                <iconsUtil.RectangleDotsIcon />
            </span>
            <span className='absolute left-0 top-[2100px] -z-10'>
                <iconsUtil.BigRectangleIcon />
            </span>
        </section>
    )
}
