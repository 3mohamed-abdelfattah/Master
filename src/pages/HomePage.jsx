import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
// Components
import { Header, Footer, HeroSection, SkillsSection, ProjectSection, AboutSection, ContactSection } from '@/components'
// Icons
import { SiUpwork } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { GithubIcon, LineIcon } from '@/utils/icons.util'
// motion
import { motion } from "framer-motion"

export const HomePage = () => {
    const styles = {
        FloatStyle: `hidden vsm:flex absolute left-4 -top-24 xl:top-0 flex-col items-center gap-2`,
        HoverStyle: `hover:scale-125`
    }
    return (
        <Fragment>

            {/* Main Component */}
            <Header />
            <HeroSection />
            <ProjectSection />
            <SkillsSection />
            <AboutSection />
            <ContactSection />
            <Footer />

            {/* Float Slider Icons */}
            <span className={styles.FloatStyle}>
                <LineIcon />
                <Link className={styles.HoverStyle} to='https://github.com/3mohamed-abdelfattah'>
                    <motion.div whileHover={{ scale: 1.1 }}>
                        <GithubIcon />
                    </motion.div>
                </Link>
                <Link className={styles.HoverStyle} to='https://www.upwork.com/freelancers/~019d1b98220787822b?mp_source=share'>
                    <motion.div whileHover={{ scale: 1.1 }}>
                        <SiUpwork size={21} />
                    </motion.div>
                </Link>
                <Link className={styles.HoverStyle} to='https://www.linkedin.com/in/3mohamed-abdelfattah/'>
                    <motion.div whileHover={{ scale: 1.1 }}>
                        <FaLinkedinIn size={21} />
                    </motion.div>
                </Link>
            </span>

        </Fragment>
    )
}