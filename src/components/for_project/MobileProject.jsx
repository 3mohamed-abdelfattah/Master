import React from 'react'
import { Link } from "react-router-dom";
// Icons
import { RectangleDotsIcon, BigRectangleIcon } from '@/utils/icons.util';
// motion
import AOS from 'aos';
import 'aos/dist/aos.css';

export const MobileProject = () => {
    AOS.init();
    return (
        <main className='relative flex flex-col items-center'>

            <section className='flex flex-col mt-16'>
                {/* header */}
                <header className='px-28 w-full' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="450">
                    <p className='mt-10 text-2xl font-medium'>
                        <span className='text-secondaryColor'># </span>
                        Mobile-Projects
                    </p>
                </header>

                {/* main */}
                <main className='flex flex-wrap justify-center gap-4 mt-6'>

                    {/* project 1 */}
                    <article className='max-w-96 border border-primaryColor h-fit' data-aos="fade-right" data-aos-duration="2000" data-aos-offset="600">
                        <p className='px-2 border-b border-primaryColor'>Kotlin UI/UX Jetpack-Compose Ktor</p>
                        <span className='flex flex-col gap-4 p-4'>
                            <p className='font-medium text-2xl'>Little Lemon</p>
                            <p>Full-Scale Local Brand Restaurant App built under the supervision of Meta.</p>
                            <Link to='https://github.com/3mohamed-abdelfattah/Little-Limon'>
                                <button className='font-medium py-2 px-4 border-2 border-primaryColor hover:bg-primaryColor/90 hover:text-secondaryColor'>Code &gt;</button>
                            </Link>
                        </span>
                    </article>

                    {/* project 2 */}
                    <article className='max-w-96 border border-primaryColor h-fit' data-aos="fade-right" data-aos-duration="1500" data-aos-offset="600">
                        <p className='px-2 border-b border-primaryColor'>Kotlin XML</p>
                        <span className='flex flex-col gap-4 p-4'>
                            <p className='font-medium text-2xl'>FitWave</p>
                            <p>Fitness App for tracking workouts, monitoring progress, and staying motivated.</p>
                            <Link to='https://github.com/3mohamed-abdelfattah/FitWave'>
                                <button className='font-medium py-2 px-4 border-2 border-primaryColor hover:bg-primaryColor/90 hover:text-secondaryColor'>Code &gt;</button>
                            </Link>
                        </span>
                    </article>

                    {/* project 3 */}
                    <article className='max-w-96 border border-primaryColor h-fit' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="600">
                        <p className='px-2 border-b border-primaryColor'>Kotlin XML Firebase</p>
                        <span className='flex flex-col gap-4 p-4'>
                            <p className='font-medium text-2xl'>BrandStep</p>
                            <p>eCommerce app for purchasing the latest and most popular branded shoes and clothing.</p>
                            <Link to='https://github.com/3mohamed-abdelfattah/BrandStep'>
                                <button className='font-medium py-2 px-4 border-2 border-primaryColor hover:bg-primaryColor/90 hover:text-secondaryColor'>Code &gt;</button>
                            </Link>
                        </span>
                    </article>

                    {/* project 4 */}
                    <article className='max-w-96 border border-primaryColor h-fit' data-aos="fade-left" data-aos-duration="1000" data-aos-offset="600">
                        <p className='px-2 border-b border-primaryColor'>Kotlin MVVM Compose-Multiplatform</p>
                        <span className='flex flex-col gap-4 p-4'>
                            <p className='font-medium text-2xl'>ToDoWiz</p>
                            <p>Ultimate task management app for tracking tasks, organizing your schedule, and staying productive.</p>
                            <Link to='https://github.com/3mohamed-abdelfattah/ToDoWiz'>
                                <button className='font-medium py-2 px-4 border-2 border-primaryColor hover:bg-primaryColor/90 hover:text-secondaryColor'>Code &gt;</button>
                            </Link>
                        </span>
                    </article>

                    {/* project 5 */}
                    <article className='max-w-96 border border-primaryColor h-fit' data-aos="fade-left" data-aos-duration="1500" data-aos-offset="600">
                        <p className='px-2 border-b border-primaryColor'>Flutter</p>
                        <span className='flex flex-col gap-4 p-4'>
                            <p className='font-medium text-2xl'>Pizza-Slice</p>
                            <p>Simple Restaurant App allow users to browse through a restaurant's menu, view details of dish, place orders.</p>
                            <Link to='https://github.com/3mohamed-abdelfattah/Pizza-Slice'>
                                <button className='font-medium py-2 px-4 border-2 border-primaryColor hover:bg-primaryColor/90 hover:text-secondaryColor'>Code &gt;</button>
                            </Link>
                        </span>
                    </article>

                    {/* Float Shapes */}
                    <span className='absolute left-0 top-[550px] -z-10'>
                        <RectangleDotsIcon />
                    </span>
                    <span className='absolute right-0 top-[150px] scale-x-[-1] -z-10'>
                        <BigRectangleIcon />
                    </span>

                </main>
            </section>
        </main>
    )
}