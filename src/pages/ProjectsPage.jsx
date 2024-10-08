import React, { Fragment } from 'react'
// Components
import { Header, Footer, WebProject, MobileProject } from '@/components'
// Icons
import { GithubIcon, LineIcon } from '@/utils/icons.util'
import { SiUpwork } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

export const ProjectsPage = () => {
    const styles = {
        FloatStyle: `absolute left-4 top-0 flex flex-col items-center gap-2`
    }
    return (
        <Fragment>
            <Header />
            <WebProject />
            <MobileProject />
            <Footer />

            {/* Float Slider Icons */}
            <span className={styles.FloatStyle}>
                <LineIcon />
                <Link to='https://github.com/3mohamed-abdelfattah'>
                    <GithubIcon />
                </Link>
                <Link to='https://www.upwork.com/freelancers/~019d1b98220787822b?mp_source=share'>
                    <SiUpwork size={21} />
                </Link>
                <Link to='https://www.linkedin.com/in/3mohamed-abdelfattah/'>
                    <FaLinkedinIn size={21} />
                </Link>
            </span>
        </Fragment>
    )
}