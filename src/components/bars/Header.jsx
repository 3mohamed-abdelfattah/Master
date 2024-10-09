import React from 'react'
import { BottomArrow } from '@/utils/icons.util'
import Brand from '@/assets/images/brand.png'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header>
            <main className='flex justify-around pt-8 pb-2'>
                <span className='flex font-bold items-center'>
                    <img src={Brand} width={30} />
                    <p className='text-primaryColor font-bold text-lg'>ohamed</p>
                </span>
                <nav>
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
    )
}