import { CgMenuRight } from "react-icons/cg";
import React, { useState } from 'react'
import { BottomArrow } from '@/utils/icons.util'
import Brand from '@/assets/images/brand.png'
import { Link } from 'react-router-dom'

export const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    return (
        <header>
            <main className='flex justify-between px-10 md:px-32 items-center pt-8 pb-2'>
                <span className='flex font-bold items-center'>
                    <img src={Brand} width={30} alt="Brand Logo" />
                    <p className='text-primaryColor font-bold text-lg'>ohamed</p>
                </span>

                {/* Burger Icon for mobile */}
                <section className="relative z-50">
                    <div className='block sm:hidden cursor-pointer' onClick={toggleMenu}>
                        <CgMenuRight size={30} />
                    </div>

                    <nav className={`sm:absolute bg-hoverColor/90 rounded-xl top-7 right-0 p-4 ${isMenuOpen ? 'absolute' : 'hidden'} sm:hidden`}>
                        <ul className='flex flex-col gap-4'>
                            <li className='cursor-pointer hover:font-bold hover:scale-105'>
                                <Link to='/'>
                                    <span className='text-secondaryColor'>#</span>
                                    home
                                </Link>
                            </li>
                            <li className='hover:font-bold cursor-pointer hover:scale-105'>
                                <Link to='/projects'>
                                    <span className='text-secondaryColor'>#</span>
                                    works
                                </Link>
                            </li>
                            <li className='hover:font-bold cursor-pointer hover:scale-105'>
                                <a href='#about'>
                                    <span className='text-secondaryColor'>#</span>
                                    about-me
                                </a>
                            </li>
                            <li className='hover:font-bold cursor-pointer hover:scale-105'>
                                <a href='#contact'>
                                    <span className='text-secondaryColor'>#</span>
                                    contacts
                                </a>
                            </li>
                            <li className='flex items-center gap-1 font-semibold cursor-pointer'>
                                EN<BottomArrow />
                            </li>
                        </ul>
                    </nav>
                </section>

                {/* Desktop Menu */}
                <nav className='hidden sm:block'>
                    <ul className='flex gap-8'>
                        <li className='cursor-pointer hover:font-bold hover:scale-105'>
                            <Link to='/'>
                                <span className='text-secondaryColor'>#</span>
                                home
                            </Link>
                        </li>
                        <li className='hover:font-bold cursor-pointer hover:scale-105'>
                            <Link to='/projects'>
                                <span className='text-secondaryColor'>#</span>
                                works
                            </Link>
                        </li>
                        <li className='hover:font-bold cursor-pointer hover:scale-105'>
                            <a href='#about'>
                                <span className='text-secondaryColor'>#</span>
                                about-me
                            </a>
                        </li>
                        <li className='hover:font-bold cursor-pointer hover:scale-105'>
                            <a href='#contact'>
                                <span className='text-secondaryColor'>#</span>
                                contacts
                            </a>
                        </li>
                        <li className='flex items-center gap-1 font-semibold cursor-pointer'>
                            EN<BottomArrow />
                        </li>
                    </ul>
                </nav>
            </main>
        </header>
    );
}