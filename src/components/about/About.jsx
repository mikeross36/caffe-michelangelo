import React from "react"
import { FaHandPointDown } from "react-icons/fa"
import { HashLink } from "react-router-hash-link"

export default function About(){
    return (
        <section className="about">
            <div className="title">
                <h2 className="about-title">nešto o nama...</h2>
            </div>
            <article className="about-text">
                <p>
                    Restoran italijanske i mediteranske kuhinje Caffe Restaurant Michelangelo 
                    osnovan 2002 godine. Širok spektar ponude od doručka preko
                    užine do večere. Kvalitet hrane je na vrhunskom nivou posetite nas i
                    proverite
                </p>
                <p>
                    Prijatan i miran ambijent, na atraktivnoj lokaciji blizu centra u
                    Braće Ribnikar 53. Pogodan kako za odmor uz piće tako i za poslovne
                    sastanke, ručkove ali i porodične izlaske. Uverite se zašto smo
                    najbolji posetite nas.
                </p>
                <p>
                    Svratite na piće ostanite na ukusnoj italijansko - mediteranskoj kuhinji. 
                    Ako niste u mogucnosti da nas posetite pozovite kućnu dostavu na tel. br. 066 22 33 7
                </p>
            </article>
            <HashLink 
                smooth to="#team" 
                className="section-btn">
                <button className="main-button">
                    <FaHandPointDown />
                </button>
            </HashLink>
        </section>
    )
}