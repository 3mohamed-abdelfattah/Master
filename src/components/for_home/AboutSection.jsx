import React from 'react'
import * as iconsUtil from '@/utils/icons.util'
// Images
import HeroPhoto from '@/assets/images/for_home/Image.png'

export const AboutSection = () => {
    return (
        <section className='flex flex-col mt-24'>

            {/* header */}
            <header className='flex items-center'>
                <p className='font-medium text-3xl'>
                    <span className='text-secondaryColor'>#</span>
                    about-me
                </p>
                <span className='pl-4'>
                    <iconsUtil.LineHIcon />
                </span>
            </header>

            {/* main */}
            <main className='flex justify-between mt-12 w-[1184px]'>
                {/* info */}
                <article className='flex flex-col gap-7 max-w-[515px]'>
                    <p>Hello, i’m Mohamed!</p>
                    <p>Frontend Developer passionate about creating user-friendly web applications. I focus on writing clean, efficient code and delivering solutions that meet clients' unique needs.</p>
                    <p>With a strong foundation in web technologies, I combine technical skills with an understanding of user experience to craft functional and engaging applications. Let’s collaborate and turn your ideas into reality!</p>
                    <button className='max-w-52 font-medium py-2 px-4 border-2 border-primaryColor mt-6 hover:bg-primaryColor/90 hover:text-secondaryColor'>Read more -&gt;</button>
                </article>

                {/* photo */}
                <aside className='relative'>
                    <span className='absolute left-5'>
                        <iconsUtil.SquareDotsIcon />
                    </span>
                    <img src={HeroPhoto} alt='Personal Photo' className='border-b border-primaryColor' />
                    <span className='absolute right-10 bottom-5'>
                        <iconsUtil.SquareDotsIcon />
                    </span>
                </aside>
            </main>
            <span className='absolute right-0 top-[2100px]'>
                <iconsUtil.RectangleDotsIcon />
            </span>
            <span className='absolute left-0 top-[2100px]'>
                <iconsUtil.BigRectangleIcon />
            </span>
        </section>
    )
}
