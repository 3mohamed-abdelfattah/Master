import React from 'react'
import { BottomArrow } from '@/utils/icons.util'
import Brand from '@/assets/images/brand.png'

export const Header = () => {
    return (
        <header>
            <main className='flex justify-around pt-8 pb-2'>
                <span className='flex font-bold items-center'>
                    <img src={Brand} width={30} />
                    <p className='text-black font-bold text-lg'>ohamed</p>
                </span>
                <nav>
                    <ul className='flex gap-8'>
                        <li className='hover:font-medium cursor-pointer'>
                            <span className='text-secondaryColor'>#</span>
                            home
                        </li>
                        <li className='hover:font-medium cursor-pointer'>
                            <span className='text-secondaryColor'>#</span>
                            works
                        </li>
                        <li className='hover:font-medium cursor-pointer'>
                            <span className='text-secondaryColor'>#</span>
                            about-me
                        </li>
                        <li className='hover:font-medium cursor-pointer'>
                            <span className='text-secondaryColor'>#</span>
                            contacts
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