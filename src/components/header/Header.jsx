import React from "react"
import logo from "../../../public/images/logo2.png"
import {links} from "./data"
import { HashLink } from "react-router-hash-link"
import {FaHandPointDown} from "react-icons/fa"
import { logoVariants, titleVariants, buttonVariants } from "./headerVariants"
import { motion } from "framer-motion"

export default function Header({toggleMobMenu, showMobMenu, closeMobMenu}){
    return (
        <header>
            <nav>
                <motion.img src={logo} alt="logo" className="logo"
                    variants={logoVariants}
                    initial={"initial"}
                    animate={"withMotion"}
                ></motion.img>
                <div className="menu-btn"
                    onClick={toggleMobMenu}>
                    <span className={`burger ${showMobMenu && "open"}`}></span>
                    <span className={`burger ${showMobMenu && "open"}`}></span>
                    <span className={`burger ${showMobMenu && "open"}`}></span>
                </div>
                <ul className="links">
                    {links.map(function(link){
                        const {id, url, text} = link;
                        return (
                            <li key={id} className="nav-item">
                                <HashLink
                                    smooth to={url}>
                                    {text}
                                </HashLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            {/*  */}
            <menu className={`mob-links && ${showMobMenu ? "fade-in" : "fade-out"}`}>
                {links.map(function(link){
                    const {id, url, text} = link;
                    return (
                        <li 
                            key={id} 
                            className="mob-link-item">
                                <HashLink
                                    smooth to={url}
                                    onClick={closeMobMenu}>
                                    {text}
                                </HashLink>
                        </li>
                    )
                })}
            </menu>
            {/*  */}
            <section className="banner">
                <div className={`banner-wrapper ${showMobMenu ? "fade-out" : "fade-in"}`}>
                    <motion.h1 className="banner-title"
                        variants={titleVariants}
                        initial="initial"
                        animate="withMotion"
                    >
                        Caffe NS Michelangelo</motion.h1>
                    <motion.HashLink 
                        smooth to="#tabs" 
                        className="main-button"
                        variants={buttonVariants}
                        initial="initial"
                        animate="withMotion"
                        >
                            <FaHandPointDown/>
                    </motion.HashLink>
                </div>
            </section>
        </header>
    )
}