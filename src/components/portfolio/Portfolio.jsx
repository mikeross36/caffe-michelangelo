import React from "react"
import {portfolio} from "./data"
import { FaHandPointUp } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

export default function Portfolio(){
    return (
        <section className="portfolio" id="portfolio">
            <div className="title">
                <h2 className="portfolio-title">poznati smo po...</h2>
            </div>
            <div className="portfolio-wrapper">
                {portfolio.map(function(data){
                    const {id, image, text} = data;
                    return(
                        <article key={id} className="data">
                            <img src={image} alt="data image" className="img-box" />
                            <div className="image-overlay">
                                <div className="image-text">
                                    <h3>{text}</h3>
                                </div>
                            </div>
                        </article>
                    )
                })}
            </div>
            <HashLink 
                smooth to="#" 
                className="section-btn">
                <button className="main-button">
                    <FaHandPointUp />
                </button>
            </HashLink>
        </section>
    )
}