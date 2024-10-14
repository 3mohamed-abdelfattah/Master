import React from 'react'
// Icons
import * as iconsUtil from '@/utils/icons.util'
// Type Animation Library
import { TypeAnimation } from 'react-type-animation';
// AOS Library
import AOS from 'aos';
import 'aos/dist/aos.css';

export const HeroSection = () => {
    AOS.init();
    return (
        <main className='relative flex flex-col items-center'>

            {/* Info Section */}
            <section className='flex items-center justify-center mt-16 vsm:mt-36 px-5 w-full'>
                <span>
                    <p className='font-semibold text-3xl sm:text-5xl max-w-5xl' data-aos="fade-right" data-aos-duration="1000">
                        Mohamed is a <span className='text-secondaryColor'>front-end developer</span> and <span className='text-secondaryColor'>web designer</span>
                    </p>
                    <p className='min-h-24 mt-8 text-lg sm:text-2xl max-w-3xl font-light' data-aos="fade-right" data-aos-duration="1300">
                        <TypeAnimation
                            sequence={[
                                'He crafts responsive websites where technologies meet creativity...',
                                2000,
                                'Delivering unique web experiences with seamless functionality and design.',
                                2000,
                                'Focused on performance, accessibility, and pixel-perfect execution.',
                                2000,
                                'Turning ideas into interactive digital solutions that inspire.',
                                2000,
                                'Your vision, brought to life through clean code and modern design.',
                                2000,
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            speed={60}
                            deletionSpeed={80}
                        />
                    </p>
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

            {/* Float Shapes */}
            <span className='hidden xl:block absolute right-0 top-[100px] scale-x-[-1] -z-10'>
                <iconsUtil.CubeShape />
            </span>
            <span className='hidden xl:block absolute left-0 top-[480px] -z-10'>
                <iconsUtil.BigRectangleIcon />
            </span>
            <span className='hidden lg:block absolute right-0 top-[600px] scale-x-[-1] -z-10'>
                <iconsUtil.RectangleDotsIcon />
            </span>
        </main>
    )
}