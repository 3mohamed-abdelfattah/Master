import React from 'react'
import { GithubIcon } from '../../utils/icons.util'
import { SiUpwork } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className='border-t border-primaryColor py-8 mt-24'>
            <section className='flex justify-around'>
                <span>
                    <p className='font-medium'>Mohamed Mohamed</p>
                    <p>Web designer and front-end developer</p>
                </span>
                <span className='mb-12'>
                    <p className='text-center font-medium text-2xl mb-2'>Media</p>
                    <span className='flex items-center gap-4'>
                        <GithubIcon />
                        <SiUpwork size={21} />
                        <FaLinkedinIn size={21} />
                    </span>
                </span>
            </section>
            <p className='text-center'>© Copyright 2024. Code by Mohamed</p>
        </footer>
    )
}