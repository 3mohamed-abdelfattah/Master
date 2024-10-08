import { SiUpwork } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import React, { Fragment } from 'react'
import { Header } from '../components/bars/Header'
import { HeroSection } from '../components/for_home/HeroSection'
import { GithubIcon, LineIcon } from '@/utils/icons.util'
import { RectangleDotsIcon, SquareIcon } from "../utils/icons.util";
import { Footer } from "../components/bars/Footer";

export const HomePage = () => {

    const styles = {
    }

    return (
        <Fragment>

            {/*Left Icons*/}
            <span className='absolute left-4 top-0 flex flex-col items-center gap-2'>
                <LineIcon />
                <GithubIcon />
                <SiUpwork size={21} />
                <FaLinkedinIn size={21} />
            </span>

            <span className='absolute right-0 bottom-0'>
                <SquareIcon />
            </span>



            <Header />
            <HeroSection />
            <Footer />
        </Fragment>
    )
}