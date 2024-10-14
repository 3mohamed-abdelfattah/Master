import React from 'react'
// Icons
import * as iconsUtil from '@/utils/icons.util'
import { BsWhatsapp } from "react-icons/bs";
// AOS Library
import 'aos/dist/aos.css';

export const ContactSection = () => {
    return (
        <main className='relative flex flex-col items-center'>
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
                    {/* info text */}
                    <article article className='flex flex-col gap-7 max-w-[515px] w-full' >
                        <p className='font-medium pl-3 tiny:pl-0' data-aos="fade-right" data-aos-duration="2000">I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
                    </article>
                    {/* contact me square */}
                    <aside data-aos="zoom-out" data-aos-duration="2000">
                        <div className='border border-primaryColor p-4'>
                            <p className='font-semibold mb-4'>Message me here</p>
                            <a href="mailto:mohamed.devmaster@gmail.com" className='hover:underline flex gap-1 items-center mb-2'><iconsUtil.EmailIcon />mohamed.devmaster@gmail.com</a>
                            <a href="https://wa.me/+201101201745" className='hover:underline flex gap-1 items-center'><BsWhatsapp size={25} className='m-[5px]' />01101201745</a>
                        </div>
                    </aside>
                </main>
            </section>

            {/* Float Shapes */}
            <span className='hidden md:block absolute left-0 top-[300px] -z-10'>
                <iconsUtil.RectangleDotsIcon />
            </span>
        </main>
    )
}
