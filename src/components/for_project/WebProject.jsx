import React from 'react'
import { Link } from "react-router-dom";
// Icons
import * as iconsUtil from '@/utils/icons.util'
import { RectangleDotsIcon, SquareDotsIcon, BigRectangleIcon } from '@/utils/icons.util';
// Images
import Maiz from '@/assets/images/for_projects/web/maiz.png'
import Clicon from '@/assets/images/for_projects/web/clicon.png'
import Florenza from '@/assets/images/for_projects/web/florenza.png'
import Rivo from '@/assets/images/for_projects/web/rivo.png'
import Movie from '@/assets/images/for_projects/web/movie.png'
import XnO from '@/assets/images/for_projects/web/xno.png'
import ToDo from '@/assets/images/for_projects/web/todo.png'
import Weather from '@/assets/images/for_projects/web/weather.png'
import CloneGPT from '@/assets/images/for_projects/web/gpt.png'
import EgyptID from '@/assets/images/for_projects/web/id.png'
// motion
import AOS from 'aos';
import 'aos/dist/aos.css';

export const WebProject = () => {
    AOS.init();
    return (
        <main className='relative flex flex-col items-center'>

            <section className='flex flex-col mt-16'>
                {/* header */}
                <header className='mx-44'>
                    <p className='font-semibold text-3xl mb-3' data-aos="fade-right" data-aos-duration="1000">
                        <span className='text-secondaryColor pr-1'>/</span>
                        Projects
                    </p>
                    <p data-aos="fade-right" data-aos-duration="1500">List of my projects</p>
                    <p className='mt-10 text-2xl font-medium' data-aos="fade-right" data-aos-duration="2000">
                        <span className='text-secondaryColor'># </span>
                        Web-Projects
                    </p>
                </header>

                {/* main */}
                <main className='flex flex-wrap justify-center gap-5 mt-6'>

                    {/* project 1 */}
                    <article className='max-w-96 border border-primaryColor' data-aos="fade-right" data-aos-duration="2000">
                        <img src={Florenza} alt='Project Photo' />
                        <p className='px-2 border-y border-primaryColor'>HTML CSS JavaScript</p>
                        <span className='flex flex-col gap-4 p-4'>
                            <p className='font-medium text-2xl'>Florenza</p>
                            <p>Florenza, the ultimate destination for all types of flowers and scented candles! We provide a delightful online shopping experience for those looking to send gifts that bloom with love.</p>
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
                    <article className='max-w-96 border border-primaryColor' data-aos="fade-right" data-aos-duration="1500">
                        <img src={Clicon} alt='Project Photo' />
                        <p className='px-2 border-y border-primaryColor'>React Vite Tailwind CSS</p>
                        <span className='flex flex-col gap-4 p-4'>
                            <p className='font-medium text-2xl'>C L I C O N</p>
                            <p>CLICON is an eCommerce platform similar to Amazon, allowing users to browse products, add them to their cart, and manage their orders. The platform includes user authentication.</p>
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
                    <article className='max-w-96 border border-primaryColor' data-aos="fade-right" data-aos-duration="1000">
                        <img src={Maiz} alt='Project Photo' />
                        <p className='px-2 border-y border-primaryColor'>React Vite Tailwind CSS</p>
                        <span className='flex flex-col gap-4 p-4'>
                            <p className='font-medium text-2xl'>MAIZ</p>
                            <p>MAIZ is a modern, fully responsive website designed for a Saudi cuisine restaurant. The site offers users an immersive experience into the authentic flavors and cultural richness of Saudi Arabia.</p>
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

                    {/* project 4 */}
                    <article className='max-w-96 border border-primaryColor' data-aos="fade-left" data-aos-duration="1000" data-aos-offset="250">
                        <img src={Rivo} alt='Project Photo' />
                        <p className='px-2 border-y border-primaryColor'>React Vite Tailwind CSS</p>
                        <span className='flex flex-col gap-4 p-4'>
                            <p className='font-medium text-2xl'>Rivo</p>
                            <p>Discover and Find Your Own Fashion! Explore our curated collection of stylish clothing and accessories tailored to your unique taste.</p>
                            <span className='flex gap-4'>
                                <Link to='https://rivo-one.vercel.app/'>
                                    <button className='flex items-center gap-1 font-medium py-2 px-4 border-2 border-primaryColor mt-6 hover:bg-primaryColor/90 hover:text-secondaryColor'>Live<iconsUtil.CurlArrowIcon /></button>
                                </Link>
                                <Link to='https://github.com/3mohamed-abdelfattah/Rivo'>
                                    <button className='font-medium py-2 px-4 border-2 border-primaryColor mt-6 hover:bg-primaryColor/90 hover:text-secondaryColor'>Code &gt;</button>
                                </Link>
                            </span>
                        </span>
                    </article>

                    {/* project 5 */}
                    <article className='max-w-96 border border-primaryColor' data-aos="fade-left" data-aos-duration="1500" data-aos-offset="250">
                        <img src={XnO} alt='Project Photo' />
                        <p className='px-2 border-y border-primaryColor'>React Vite Tailwind CSS</p>
                        <span className='flex flex-col gap-4 p-4'>
                            <p className='font-medium text-2xl'>XnO</p>
                            <p>Tic-Tac-Toe game. It features dynamic game play with real-time updates, a scoring system, and a winning combination display.</p>
                            <span className='flex gap-4'>
                                <Link to='https://xn-o.vercel.app/'>
                                    <button className='flex items-center gap-1 font-medium py-2 px-4 border-2 border-primaryColor mt-6 hover:bg-primaryColor/90 hover:text-secondaryColor'>Live<iconsUtil.CurlArrowIcon /></button>
                                </Link>
                                <Link to='https://github.com/3mohamed-abdelfattah/XnO'>
                                    <button className='font-medium py-2 px-4 border-2 border-primaryColor mt-6 hover:bg-primaryColor/90 hover:text-secondaryColor'>Code &gt;</button>
                                </Link>
                            </span>
                        </span>
                    </article>

                    {/* project 6 */}
                    <article className='max-w-96 border border-primaryColor' data-aos="fade-left" data-aos-duration="2000" data-aos-offset="250">
                        <img src={Movie} alt='Project Photo' />
                        <p className='px-2 border-y border-primaryColor'>React Vite Tailwind CSS</p>
                        <span className='flex flex-col gap-4 p-4'>
                            <p className='font-medium text-2xl'>NEW Movie</p>
                            <p>Browse popular movies, view detailed information about each film, and stay updated with the latest releases.</p>
                            <span className='flex gap-4'>
                                <Link to='https://iti-movies.vercel.app/'>
                                    <button className='flex items-center gap-1 font-medium py-2 px-4 border-2 border-primaryColor mt-6 hover:bg-primaryColor/90 hover:text-secondaryColor'>Live<iconsUtil.CurlArrowIcon /></button>
                                </Link>
                                <Link to='https://github.com/3mohamed-abdelfattah/ITI-Movies'>
                                    <button className='font-medium py-2 px-4 border-2 border-primaryColor mt-6 hover:bg-primaryColor/90 hover:text-secondaryColor'>Code &gt;</button>
                                </Link>
                            </span>
                        </span>
                    </article>

                    {/* project 7 */}
                    <article className='max-w-96 border border-primaryColor' data-aos="fade-right" data-aos-duration="2000" data-aos-offset="450">
                        <img src={ToDo} alt='Project Photo' />
                        <p className='px-2 border-y border-primaryColor'>React Vite Tailwind CSS</p>
                        <span className='flex flex-col gap-4 p-4'>
                            <p className='font-medium text-2xl'>Done-it</p>
                            <p>Designed to help you manage your tasks effectively this app allows you to create tasks, mark them as done, and delete them.</p>
                            <span className='flex gap-4'>
                                <Link to='https://todo-one-gold.vercel.app/'>
                                    <button className='flex items-center gap-1 font-medium py-2 px-4 border-2 border-primaryColor mt-6 hover:bg-primaryColor/90 hover:text-secondaryColor'>Live<iconsUtil.CurlArrowIcon /></button>
                                </Link>
                                <Link to='https://github.com/3mohamed-abdelfattah/Done-it'>
                                    <button className='font-medium py-2 px-4 border-2 border-primaryColor mt-6 hover:bg-primaryColor/90 hover:text-secondaryColor'>Code &gt;</button>
                                </Link>
                            </span>
                        </span>
                    </article>

                    {/* project 8 */}
                    <article className='max-w-96 border border-primaryColor' data-aos="fade-right" data-aos-duration="1500" data-aos-offset="450">
                        <img src={Weather} alt='Project Photo' />
                        <p className='px-2 border-y border-primaryColor'>HTML CSS JavaScript</p>
                        <span className='flex flex-col gap-4 p-4'>
                            <p className='font-medium text-2xl'>Weather Wise</p>
                            <p>Weather forecasting that displays hourly weather updates, current location, temperature, and weather conditions.</p>
                            <span className='flex gap-4'>
                                <Link to='https://3mohamed-abdelfattah.github.io/WeatherWise/'>
                                    <button className='flex items-center gap-1 font-medium py-2 px-4 border-2 border-primaryColor mt-6 hover:bg-primaryColor/90 hover:text-secondaryColor'>Live<iconsUtil.CurlArrowIcon /></button>
                                </Link>
                                <Link to='https://github.com/3mohamed-abdelfattah/WeatherWise'>
                                    <button className='font-medium py-2 px-4 border-2 border-primaryColor mt-6 hover:bg-primaryColor/90 hover:text-secondaryColor'>Code &gt;</button>
                                </Link>
                            </span>
                        </span>
                    </article>

                    {/* project 9 */}
                    <article className='max-w-96 border border-primaryColor' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="450">
                        <img src={CloneGPT} alt='Project Photo' />
                        <p className='px-2 border-y border-primaryColor'>React Vite Tailwind CSS</p>
                        <span className='flex flex-col gap-4 p-4'>
                            <p className='font-medium text-2xl'>CloneGPT</p>
                            <p>This repository contains a clone of the user interface for ChatGPT, built using React, Vite, and Tailwind CSS.</p>
                            <span className='flex gap-4'>
                                <Link to='https://3mohamed-abdelfattah.github.io/CloneGPT/'>
                                    <button className='flex items-center gap-1 font-medium py-2 px-4 border-2 border-primaryColor mt-6 hover:bg-primaryColor/90 hover:text-secondaryColor'>Live<iconsUtil.CurlArrowIcon /></button>
                                </Link>
                                <Link to='https://github.com/3mohamed-abdelfattah/CloneGPT'>
                                    <button className='font-medium py-2 px-4 border-2 border-primaryColor mt-6 hover:bg-primaryColor/90 hover:text-secondaryColor'>Code &gt;</button>
                                </Link>
                            </span>
                        </span>
                    </article>

                    {/* project 10 */}
                    <article className='max-w-96 border border-primaryColor' data-aos="fade-left" data-aos-duration="1000" data-aos-offset="450">
                        <img src={EgyptID} alt='Project Photo' />
                        <p className='px-2 border-y border-primaryColor'>React Vite Tailwind CSS</p>
                        <span className='flex flex-col gap-4 p-4'>
                            <p className='font-medium text-2xl'>Egypt ID</p>
                            <p>Allows users to input their Egyptian national ID number and extract information such as their city, date of birth, and gender.</p>
                            <span className='flex gap-4'>
                                <Link to='https://3mohamed-abdelfattah.github.io/Egypt-ID/'>
                                    <button className='flex items-center gap-1 font-medium py-2 px-4 border-2 border-primaryColor mt-6 hover:bg-primaryColor/90 hover:text-secondaryColor'>Live<iconsUtil.CurlArrowIcon /></button>
                                </Link>
                                <Link to='https://github.com/3mohamed-abdelfattah/Egypt-ID'>
                                    <button className='font-medium py-2 px-4 border-2 border-primaryColor mt-6 hover:bg-primaryColor/90 hover:text-secondaryColor'>Code &gt;</button>
                                </Link>
                            </span>
                        </span>
                    </article>

                    {/* Float Shapes */}
                    <span className='absolute left-0 top-[350px]'>
                        <RectangleDotsIcon />
                    </span>
                    <span className='absolute right-0 top-[1250px]'>
                        <SquareDotsIcon />
                    </span>
                    <span className='absolute right-0 top-[150px] scale-x-[-1]'>
                        <BigRectangleIcon />
                    </span>
                    <span className='absolute left-0 top-[1500px]'>
                        <BigRectangleIcon />
                    </span>

                </main>
            </section>
        </main>
    )
}