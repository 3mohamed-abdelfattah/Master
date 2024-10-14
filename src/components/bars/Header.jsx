import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// Icons
import { CgMenuRight } from "react-icons/cg";
import { BottomArrow } from '@/utils/icons.util'
// Images
import Brand from '@/assets/images/brand.png'

export const Header = () => {

    // Burger Menu in mobile devices
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const styles = {
        liStyle: `cursor-pointer hover:font-bold hover:scale-105`,
        languageStyle: `flex items-center gap-1 font-semibold cursor-pointer`
    }

    return (
        <header>
            <div className='flex justify-between px-10 md:px-32 items-center pt-8 pb-2'>
                <span className='flex font-bold items-center'>
                    <img src={Brand} width={30} alt="Brand Logo" />
                    <p className='text-primaryColor font-bold text-lg'>ohamed</p>
                </span>

                <section className="relative z-50">
                    {/* Burger Icon for mobile */}
                    <div className='block sm:hidden cursor-pointer' onClick={toggleMenu}>
                        <CgMenuRight size={30} />
                    </div>

                    {/* Mobile Menu */}
                    <nav className={`sm:absolute bg-hoverColor/90 rounded-xl top-7 right-0 p-4 ${isMenuOpen ? 'absolute' : 'hidden'} sm:hidden`}>
                        <ul className='flex flex-col gap-4'>
                            <li className={styles.liStyle}>
                                <Link to='/'>
                                    <span className='text-secondaryColor'>#</span>
                                    home
                                </Link>
                            </li>
                            <li className={styles.liStyle}>
                                <Link to='/projects'>
                                    <span className='text-secondaryColor'>#</span>
                                    works
                                </Link>
                            </li>
                            <li className={styles.liStyle}>
                                <a href='#about'>
                                    <span className='text-secondaryColor'>#</span>
                                    about-me
                                </a>
                            </li>
                            <li className={styles.liStyle}>
                                <a href='#contact'>
                                    <span className='text-secondaryColor'>#</span>
                                    contacts
                                </a>
                            </li>
                            <li className={styles.languageStyle}>
                                EN<BottomArrow />
                            </li>
                        </ul>
                    </nav>
                </section>

                {/* Desktop Menu */}
                <nav className='hidden sm:block'>
                    <ul className='flex gap-8'>
                        <li className={styles.liStyle}>
                            <Link to='/'>
                                <span className='text-secondaryColor'>#</span>
                                home
                            </Link>
                        </li>
                        <li className={styles.liStyle}>
                            <Link to='/projects'>
                                <span className='text-secondaryColor'>#</span>
                                works
                            </Link>
                        </li>
                        <li className={styles.liStyle}>
                            <a href='#about'>
                                <span className='text-secondaryColor'>#</span>
                                about-me
                            </a>
                        </li>
                        <li className={styles.liStyle}>
                            <a href='#contact'>
                                <span className='text-secondaryColor'>#</span>
                                contacts
                            </a>
                        </li>
                        <li className={styles.languageStyle}>
                            EN<BottomArrow />
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}