import React from 'react'
import { Link } from "react-router-dom";
// Icons
import * as iconsUtil from '@/utils/icons.util'
// Images
import Maiz from '@/assets/images/for_projects/web/maiz.png'
import Clicon from '@/assets/images/for_projects/web/clicon.png'
import Florenza from '@/assets/images/for_projects/web/florenza.png'

export const ProjectSection = () => {
    return (
        <section className='flex flex-col mt-24'>

            {/* header */}
            <header className='flex justify-between'>
                <div className='flex justify-between items-center'>
                    <p className='font-medium text-3xl'>
                        <span className='text-secondaryColor'>#</span>
                        projects
                    </p>
                    <span className='pl-4'>
                        <iconsUtil.LineHIcon />
                    </span>
                </div>
                <Link to='/projects'>
                    <button className='font-medium hover:underline'>View all ~~&gt;</button>
                </Link>
            </header>

            {/* main */}
            <main className='flex gap-4 mt-12'>
                {/* project 1 */}
                <article className='max-w-96 border border-primaryColor'>
                    <img src={Florenza} alt='Project Photo' />
                    <p className='px-2 border-y border-primaryColor'>HTML CSS JavaScript</p>
                    <span className='flex flex-col gap-4 p-4'>
                        <p className='font-medium text-2xl'>Florenza</p>
                        <p>Online Gift Shop for Flowers</p>
                        <span className='flex gap-4'>
                            <Link to='https://3mohamed-abdelfattah.github.io/Florenza/'>
                                <button className='flex items-center gap-1 font-medium py-2 px-4 border-2 border-primaryColor mt-6 hover:bg-primaryColor/90 hover:text-secondaryColor'>Live<iconsUtil.CurlArrowIcon /></button>
                            </Link>
                            <Link to='https://github.com/3mohamed-abdelfattah/Florenza'>
                                <button className='font-medium py-2 px-4 border-2 border-primaryColor mt-6 hover:bg-primaryColor/90 hover:text-secondaryColor'>Code &gt;</button>
                            </Link>
                        </span>
                    </span>
                </article>
                {/* project 2 */}
                <article className='max-w-96 border border-primaryColor'>
                    <img src={Clicon} alt='Project Photo' />
                    <p className='px-2 border-y border-primaryColor'>React Vite Tailwind CSS</p>
                    <span className='flex flex-col gap-4 p-4'>
                        <p className='font-medium text-2xl'>C L I C O N</p>
                        <p>eCommerce platform</p>
                        <span className='flex gap-4'>
                            <Link to='https://clicon-tau.vercel.app/'>
                                <button className='flex items-center gap-1 font-medium py-2 px-4 border-2 border-primaryColor mt-6 hover:bg-primaryColor/90 hover:text-secondaryColor'>Live<iconsUtil.CurlArrowIcon /></button>
                            </Link>
                            <Link to='https://github.com/3mohamed-abdelfattah/CLICON'>
                                <button className='font-medium py-2 px-4 border-2 border-primaryColor mt-6 hover:bg-primaryColor/90 hover:text-secondaryColor'>Code &gt;</button>
                            </Link>
                        </span>
                    </span>
                </article>
                {/* project 3 */}
                <article className='max-w-96 border border-primaryColor'>
                    <img src={Maiz} alt='Project Photo' />
                    <p className='px-2 border-y border-primaryColor'>React Vite Tailwind CSS</p>
                    <span className='flex flex-col gap-4 p-4'>
                        <p className='font-medium text-2xl'>MAIZ</p>
                        <p>Saudi cuisine restaurant</p>
                        <span className='flex gap-4'>
                            <Link to='https://3mohamed-abdelfattah.github.io/MAIZ/'>
                                <button className='flex items-center gap-1 font-medium py-2 px-4 border-2 border-primaryColor mt-6 hover:bg-primaryColor/90 hover:text-secondaryColor'>Live<iconsUtil.CurlArrowIcon /></button>
                            </Link>
                            <Link to='https://github.com/3mohamed-abdelfattah/MAIZ'>
                                <button className='font-medium py-2 px-4 border-2 border-primaryColor mt-6 hover:bg-primaryColor/90 hover:text-secondaryColor'>Code &gt;</button>
                            </Link>
                        </span>
                    </span>
                </article>
            </main>
            <span className='absolute right-0 top-[1100px] scale-x-[-1]'>
                <iconsUtil.BigRectangleIcon />
            </span>
        </section>
    )
}
