import React from 'react'
import { BottomArrow } from '@/utils/icons.util'

export const Header = () => {
    return (
        <header>
            <main className='flex justify-around pt-8 pb-2'>
                <span className='font-bold'>Logo</span>
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