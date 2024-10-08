import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
// Components
import { Header, Footer, HeroSection } from '@/components'
// Icons
import { SiUpwork } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { GithubIcon, LineIcon } from '@/utils/icons.util'

export const HomePage = () => {
    const styles = {
        FloatStyle: `absolute left-4 top-0 flex flex-col items-center gap-2`
    }
    return (
        <Fragment>

            <Header />
            <HeroSection />
            <Footer />

            {/* Float Slider Icons */}
            <span className={styles.FloatStyle}>
                <LineIcon />
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
        </Fragment>
    )
}