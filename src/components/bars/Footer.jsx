import React from 'react'
import { Link } from 'react-router-dom';
// Icons
import { SiUpwork } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { GithubIcon } from '@/utils/icons.util'
// Image
import Brand from '@/assets/images/brand.png'

export const Footer = () => {
    return (
        <footer className='border-t border-primaryColor py-8 mt-24'>
            <section className='flex justify-around'>
                <span className='flex flex-col gap-5'>
                    <span className='flex font-bold items-center'>
                        <img src={Brand} width={30} />
                        <p className='text-black font-bold text-lg'>ohamed</p>
                    </span>
                    <p>Web designer and front-end developer</p>
                </span>
                <span className='mb-12'>
                    <p className='text-center font-medium text-2xl mb-2'>Media</p>
                    <span className='flex items-center gap-6'>
                        <Link className='hover:scale-125' to='https://github.com/3mohamed-abdelfattah'>
                            <GithubIcon />
                        </Link>
                        <Link className='hover:scale-125' to='https://www.upwork.com/freelancers/~019d1b98220787822b?mp_source=share'>
                            <SiUpwork size={21} />
                        </Link>
                        <Link className='hover:scale-125' to='https://www.linkedin.com/in/3mohamed-abdelfattah/'>
                            <FaLinkedinIn size={21} />
                        </Link>
                    </span>
                </span>
            </section>
            <p className='text-center'>© Copyright 2024. Code by Mohamed</p>
        </footer>
    )
}